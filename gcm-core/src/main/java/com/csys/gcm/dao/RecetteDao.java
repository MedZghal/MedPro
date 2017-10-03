/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Recette;
import com.csys.gcm.model.Utilisateur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.apache.commons.collections.CollectionUtils;

/**
 *
 * @author ASUS
 */
public class RecetteDao {
    EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Recette> GetRecette(){
        Query query =em.createNamedQuery("Recette.findAll",Recette.class);
        return query.getResultList();
    }
    
    public List<Recette> GetRecettebyMedecin( int code_med_trait){
        Utilisateur u = GetUtilisateurbyCodeMedTrit(code_med_trait);
        Query query =em.createNamedQuery("Recette.findByMedecin",Recette.class).setParameter("codeMedTrait", u);
        return query.getResultList();
    }
    
    public List<Recette> GetRecettebyMedecinDate( int code_med_trait,Date d1 ,Date d2){
        em.getTransaction().begin();
        Utilisateur u = GetUtilisateurbyCodeMedTrit(code_med_trait);
        Query query =em.createNamedQuery("Recette.findByMedecinDte",Recette.class).setParameter("codeMedTrait", u).setParameter("d1",d1).setParameter("d2",d2);
        em.getTransaction().commit();
        return query.getResultList();
    }
    
    public List<Recette> GetRecetteCnambyMedecinDate( int code_med_trait,Date d1 ,Date d2){
        //Utilisateur u = GetUtilisateurbyCodeMedTrit(code_med_trait);
        em.getTransaction().begin();
        Format formatter = new SimpleDateFormat("yyyy/MM/dd");
        String datestart = formatter.format(d1);
        String dateend= formatter.format(d2);
        //Query query =em.createNamedQuery("Recette.findByMedecinDte",Recette.class).setParameter("codeMedTrait", u).setParameter("d1",d1).setParameter("d2",d2);
        Query query =em.createNativeQuery("select r.* from recette r join Patient p on r.num_patient=p.num_fich_patient where r.type IN ('CS','AT')and r.code_med_trait= ?1 and p.AssurCnam IS NOT NULL and r.date_trans between ?2 and ?3 ",Recette.class).setParameter(1,code_med_trait).setParameter(2,datestart).setParameter(3,dateend);
        em.getTransaction().commit();
        return query.getResultList();
    }
    
    public Utilisateur GetUtilisateurbyCodeMedTrit(int codeMedTrit){
        Query query =em.createNamedQuery("Utilisateur.findByCodeMedTrit",Utilisateur.class).setParameter("codeMedTrit",codeMedTrit);
        List<Utilisateur> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    public String AjRecette(String total,Date date_trans, String libelle,String type,int num_consult,int num_patient,int code_Med_trait,String tiers,String codeActe,String tiketModérateur,String cnam) {
        
         Connection conn=myconn.getConnection();
         String Err="true",requete;
         int n = 0;
         try{
             if(num_patient==0 && num_consult==0)
                 requete = "insert into Recette(total,date_trans,libelle,type,code_med_trait,tiers,codeActe,tiketModérateur,cnam) values(?,?,?,?,?,?,?,?,?)";
             else
                 requete = "insert into Recette(total,date_trans,libelle,type,code_med_trait,tiers,codeActe,tiketModérateur,cnam,num_consult,num_patient) values(?,?,?,?,?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,total);
                 pstmt.setDate(2,new java.sql.Date(date_trans.getTime()));
                 pstmt.setString(3,libelle);
                 pstmt.setString(4,type);
                 
                 pstmt.setInt(5,code_Med_trait);
                 pstmt.setString(6,tiers);
                 pstmt.setString(7,codeActe);
                 pstmt.setString(8,tiketModérateur);
                 pstmt.setString(9,cnam);
                if(num_patient!=0 && num_consult!=0){
                 pstmt.setInt(10,num_consult);
                 pstmt.setInt(11,num_patient);
                }
                 n=pstmt.executeUpdate();
                 pstmt.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
             Err=EX.getMessage()+"";
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return Err ;
    
    }
    
     public boolean SuppRecette  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Recette where num_trans='"+id+"'";
                 n=stm.executeUpdate(query);
                 stm.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return n>0 ;
    
    }
     
     public boolean SuppRecettebyNUmConsultation  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Recette where num_consult='"+id+"'";
                 n=stm.executeUpdate(query);
                 stm.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return n>0 ;
    
    }
     
    
    public boolean SuppRecettebyNUmActe  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Recette where codeActe='"+id+"'";
                 n=stm.executeUpdate(query);
                 stm.close();
             }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return n>0 ;
    
    }
    
     public String UpdateRecette(int num_trans,String montant,Date date_trans, String libelle,String type,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Recette set montant=? ,date_trans=?,libelle=?,type=?,num_consult=? where num_trans=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,montant);
                 pstmt.setDate(2,new java.sql.Date(date_trans.getTime()));
                 pstmt.setString(3,libelle);
                 pstmt.setString(4,type);
                 pstmt.setInt(5,num_consult);
                 pstmt.setInt(6,num_trans);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                         }
             
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
             Err=EX.getMessage()+"";
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                 }
             }
         }
    
         return Err ;
    
    }
}
