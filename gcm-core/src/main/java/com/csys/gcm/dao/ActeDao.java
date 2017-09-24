/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Acte;
import com.csys.gcm.model.ActeMedicaux;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.apache.commons.collections.CollectionUtils;

/**
 *
 * @author ASUS
 */
public class ActeDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Acte> GetListActe(){
        Query query =em.createNamedQuery("Acte.findAll",Acte.class);
        return query.getResultList();
    }
    
    public int GetMaxActe(){
        Query query =em.createNamedQuery("Acte.findMax",Acte.class);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
     public List<Acte> GetListActeNonRemborsable(){
        Query query =em.createNamedQuery("Acte.findAllNonRemb",Acte.class);
        return query.getResultList();
    }
    
    public Acte GetActeNonRemborsablebyLibelle(String libelle){
        Query query =em.createNamedQuery("Acte.findByLibelle",Acte.class).setParameter("libelle",libelle);
         List<Acte> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    public List<ActeMedicaux> GetListActeMedicaux(){
        Query query =em.createNamedQuery("ActeMedicaux.findAll",ActeMedicaux.class);
        return query.getResultList();
    }
    
     public List<ActeMedicaux> GetListActeMedicauxAllByNumConsult(int NumConsult){
        Query query =em.createNamedQuery("ActeMedicaux.findByNumConsult",ActeMedicaux.class).setParameter("numConsult",NumConsult);
        return query.getResultList();
    }
     
    public List<ActeMedicaux> GetListActeMedicauxByNumConsult(int NumConsult){
        Query query =em.createNamedQuery("ActeMedicaux.findRembByNumConsult",ActeMedicaux.class).setParameter("numConsult",NumConsult);
        return query.getResultList();
    }
    
    
    public List<ActeMedicaux> GetListActeMedicauxNonRembByNumConsult(int NumConsult){
        Query query =em.createNamedQuery("ActeMedicaux.findNonRembByNumConsult",ActeMedicaux.class).setParameter("numConsult",NumConsult);
        return query.getResultList();
    }
    
    public String AjActe(String lib ,int acord , String tiket_moder, String Mnt,String Descp,String Cot,String typ) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Acte(libelle,accord,tiket_moder,montant,Description,cotation,Typ) values(?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,lib);
                 pstmt.setInt(2,acord);
                 pstmt.setString(3,tiket_moder);
                 pstmt.setString(4,Mnt);
                 pstmt.setString(5,Descp);
                 pstmt.setString(6,Cot);
                 pstmt.setString(7,typ);
                 
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
    
    public String AjActeMedicaux(int num_acte,int num_consult, Date date,int nb_pr_chg) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into ActeMedicaux(num_acte,num_consult,date,nb_pr_chg) values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_acte);
                 pstmt.setInt(2,num_consult);
                 pstmt.setDate(3,new java.sql.Date(date.getTime()));
                 pstmt.setInt(4,nb_pr_chg);
                 
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
    
     public boolean SuppActe  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Acte where num_acte='"+id+"'";
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
     
      public boolean SuppActeMedicaux  (String Acte ,String consult ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from ActeMedicaux where num_acte='"+Acte+"' and num_consult='"+consult+"'";
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
     
       public boolean SuppActeMedicauxbyNum_Consult  (int num_consult ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from ActeMedicaux where num_consult="+num_consult;
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
       
     public String UpdateActe(String num_acte ,String lib ,int acord , String tiket_moder, String Mnt,String Descp,String Cot,String Typ ) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             if(Typ.equals("CNAM")){
             String requete = "update Acte set libelle=? ,accord=?,tiket_moder=? ,montant=?,cotation=? where num_acte=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,lib);
                 pstmt.setInt(2,acord);
                 pstmt.setString(3,tiket_moder);
                 pstmt.setString(4,Mnt);
                 pstmt.setString(5,Cot);
                 pstmt.setString(6,num_acte);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                         }
             
             }else
             {
                String requete = "update Acte set libelle=? ,Description=? ,montant=? where num_acte=?";
                try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,lib);
                 pstmt.setString(2,Descp);
                 pstmt.setString(3,Mnt);
                 pstmt.setString(4,num_acte);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                         }
             
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
     
     public String UpdateActeMedicaux(int num_acte,int num_consult, Date date,int nb_pr_chg) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update ActeMedicaux set date=? ,nb_pr_chg=? where num_acte=? and num_consult=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                
                 pstmt.setDate(1,new java.sql.Date(date.getTime()));
                 pstmt.setInt(2,nb_pr_chg);
                 pstmt.setInt(3,num_acte);
                 pstmt.setInt(4,num_consult);
                 
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
     
      public String UpdateActeMedicauxbyNum_Consult(int num_consult_old,int num_consult_New) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update ActeMedicaux set num_consult=? where  num_consult=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                
                 pstmt.setInt(1,num_consult_New);
                 pstmt.setInt(2,num_consult_old);
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
