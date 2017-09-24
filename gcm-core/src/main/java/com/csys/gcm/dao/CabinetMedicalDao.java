/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.CabinetMedical;
import com.csys.gcm.model.Param;
import com.csys.gcm.model.SalleAttente;
import com.csys.gcm.model.Utilisateur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
public class CabinetMedicalDao {
 EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
  
    public List<CabinetMedical> GetParemetre(int codeMedTrit){
        Utilisateur u = GetUtilisateurbyCodeMedTrit(codeMedTrit);
        Query query =em.createNamedQuery("CabinetMedical.findAll",CabinetMedical.class).setParameter("codeMedTrit",u);
        return query.getResultList();
    }
    
     public CabinetMedical GetParemetrebyCodeMedTrit(int codeMedTrit){
         Utilisateur u = GetUtilisateurbyCodeMedTrit(codeMedTrit);
        Query query =em.createNamedQuery("CabinetMedical.findByCode_Med_Trit",CabinetMedical.class).setParameter("codeMedTrit",u);
        List<CabinetMedical> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
     
     public List<SalleAttente> GetListSallebyCodeMedTrit(int codeMedTrit){
        Utilisateur u = GetUtilisateurbyCodeMedTrit(codeMedTrit);
        Query query =em.createNamedQuery("SalleAttente.findByNumMedecin",SalleAttente.class).setParameter("numMedcTrait",u);
        return query.getResultList();
    }
    
     public Utilisateur GetUtilisateurbyCodeMedTrit(int codeMedTrit){
        Query query =em.createNamedQuery("Utilisateur.findByCodeMedTrit",Utilisateur.class).setParameter("codeMedTrit",codeMedTrit);
        List<Utilisateur> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
     
    public Utilisateur GetUtilisateurbyUsername(String username){
        Query query =em.createNamedQuery("Utilisateur.findByUsername",Utilisateur.class).setParameter("username",username);
        List<Utilisateur> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
     public List<Utilisateur> GetListUtilisateur(){
        Query query =em.createNamedQuery("Utilisateur.findAll",Utilisateur.class);
        return query.getResultList();
    }
     
    public List<Utilisateur> GetListUtilisateurByMedecin(String secretaire_medecin){
        Query query =em.createNamedQuery("Utilisateur.findBySecretaire",Utilisateur.class).setParameter("secretaire", secretaire_medecin);
        return query.getResultList();
    }
    
      public List<Param> GetCptParam(){
        Query query =em.createNamedQuery("Param.findAll",Param.class);
        return query.getResultList();
    }
      
      public int GetCptParamByCode(String code){
        Query query =em.createNamedQuery("Param.findByCode",Param.class).setParameter("code",code);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
      
      public int GetMaxUtilisateur(){
        Query query =em.createNamedQuery("Utilisateur.findMax",Utilisateur.class);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
      
      public int GetMinUtilisateur(){
        Query query =em.createNamedQuery("Utilisateur.findMin",Utilisateur.class);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    public String AjParametre(String nom_medecin ,String prenom_medecin,Date date_naiss,String salutation,String num_inscp_ord_med,String adresse ,String ville,String Fixe,String GSM ,String email, String titre, String specialite, String gouvernorat,String code_convent , double tiket_moder,double tva_consult,double montant_consult, String type_consult,String mnt_consultSansConv,int code_Med_Trit ) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Cabinet_Medical(nom_medecin,prenom_medecin,date_naiss,salutation,num_inscp_ord_med,adresse,ville,Fixe,GSM,email,titre,specialite,gouvernorat,code_convent,tiket_moder,tva_consult,montant_consult,type_consult,mnt_consultSansConv,code_Med_Trit) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,nom_medecin);
                 pstmt.setString(2,prenom_medecin);
                 pstmt.setDate(3,new java.sql.Date(date_naiss.getTime()));
                 pstmt.setString(4,salutation);
                 pstmt.setString(5,num_inscp_ord_med);
                 pstmt.setString(6,adresse);
                 pstmt.setString(7,ville);
                 pstmt.setString(8,Fixe);
                 pstmt.setString(9,GSM);
                 pstmt.setString(10,email);
                 pstmt.setString(11,titre);
                 pstmt.setString(12,specialite);
                 pstmt.setString(13,gouvernorat);
                 pstmt.setString(14,code_convent);
                 pstmt.setDouble(15,tiket_moder);
                 pstmt.setDouble(16,tva_consult);
                 pstmt.setDouble(17,montant_consult);
                 pstmt.setString(18,type_consult);
                 pstmt.setString(19,mnt_consultSansConv);
                 pstmt.setInt(20,code_Med_Trit);
                 
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
    
    public String CptIncParamByCode(String Code) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Param set valeur=? where code=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,(GetCptParamByCode(Code)+1));
                 pstmt.setString(2,Code);
                 
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
    
     public String GetDateServeur() {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         try{
             String requete = "select CONVERT(nvarchar(10), GETDATE(),103)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 ResultSet rlt=pstmt.executeQuery();
                 while(rlt.next()){
                     Err= rlt.getString(1);
                 }
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
     public String AjUtilisateur(String username,String pass,String type,int code_Med_Trit,String secretaire) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Utilisateur(username,pass,type,code_Med_Trit,secretaire) values(?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,username);
                 pstmt.setString(2,pass);
                 pstmt.setString(3,type);
                 pstmt.setInt(4,code_Med_Trit);
                 pstmt.setString(5,secretaire);
                 
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
     
     public String AjSalle_Attente(int num_patient,int num_rdv,String note,int num_medc_trait) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Salle_Attente(num_patient,num_rdv,note,num_medc_trait) values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_patient);
                 pstmt.setInt(2,num_rdv);
                 pstmt.setString(3,note);
                 pstmt.setInt(4,num_medc_trait);
                 
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
    
     public boolean SuppParametre  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Cabinet_Medical where num_cab='"+id+"'";
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
     
     public boolean SuppParametreBycode_Med_Trit(String code_Med_Trit ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Cabinet_Medical where code_Med_Trit='"+code_Med_Trit+"'";
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
     
      public boolean SuppSalleAttente  (int num_ligneAttend ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Salle_Attente where num_ligneAttend="+num_ligneAttend;
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
     
       public boolean SuppAllSalleAttente  ( int num_medc_trait) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Salle_Attente where num_medc_trait="+num_medc_trait;
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
       
      public boolean SuppUtilisateur  (String pseudo) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Utilisateur where username='"+pseudo+"'";
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
     
      public boolean SuppUtilisateurBySec  (String secretaire) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Utilisateur where secretaire='"+secretaire+"'";
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
      
     public String UpdateParametre(int num_cab ,String nom_medecin ,String prenom_medecin,Date date_naiss,String salutation,String num_inscp_ord_med,String adresse ,String ville,String Fixe,String GSM ,String email, String titre, String specialite, String gouvernorat,String code_convent , double tiket_moder,double tva_consult,double montant_consult, String type_consult,String mnt_consultSansConv ) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Cabinet_Medical set nom_medecin=? ,prenom_medecin=?,date_naiss=? ,salutation=?,num_inscp_ord_med=?,adresse=?,ville=?,Fixe=?,GSM=?,email=?,titre=?,specialite=?,gouvernorat=?,code_convent=?,tiket_moder=?,tva_consult=?,montant_consult=?,type_consult=?,mnt_consultSansConv=? where num_cab=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,nom_medecin);
                 pstmt.setString(2,prenom_medecin);
                 pstmt.setDate(3,new java.sql.Date(date_naiss.getTime()));
                 pstmt.setString(4,salutation);
                 pstmt.setString(5,num_inscp_ord_med);
                 pstmt.setString(6,adresse);
                 pstmt.setString(7,ville);
                 pstmt.setString(8,Fixe);
                 pstmt.setString(9,GSM);
                 pstmt.setString(10,email);
                 pstmt.setString(11,titre);
                 pstmt.setString(12,specialite);
                 pstmt.setString(13,gouvernorat);
                 pstmt.setString(14,code_convent);
                 pstmt.setDouble(15,tiket_moder);
                 pstmt.setDouble(16,tva_consult);
                 pstmt.setDouble(17,montant_consult);
                 pstmt.setString(18,type_consult);
                 pstmt.setString(19,mnt_consultSansConv);
                 pstmt.setInt(20,num_cab);
                 
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
     
      public String UpdateUtilisateur(String username,String pass,String type) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Utilisateur set pass=? ,type=? where username=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,pass);
                 pstmt.setString(2,type);
                 pstmt.setString(3,username);
                 
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
