/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Consultation;
import com.csys.gcm.model.Diagnostic;
import com.csys.gcm.model.FileUpload;
import com.csys.gcm.model.Patient;
import com.csys.gcm.model.Utilisateur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.apache.commons.collections.CollectionUtils;

/**
 *
 * @author ASUS
 */
public class ConsultationDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Consultation> GetListConsultation(){
        Query query =em.createNamedQuery("Consultation.findAll",Consultation.class);
        return query.getResultList();
    }
    
    public List<FileUpload> GetListFile(int Patient){
//          Query query =em.createNativeQuery("SELECT CAST('' AS XML).value('xs:base64Binary(sql:column(\"img\"))','VARCHAR(MAX)') AS img FROM FileUpload");
        Query query =em.createNamedQuery("FileUpload.findByPatient",FileUpload.class).setParameter("Patient", Patient);
        return query.getResultList();
    }
    
    public String AjFile(int num_patient,String img) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         String requete;
         int n = 0;
         try{
                requete = "insert into FileUpload(num_patient,img,DateUplode) values(?,?,?)";
             
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                 String DateUplode = new CabinetMedicalDao().GetDateServeur();
                 pstmt.setInt(1,num_patient);
                 pstmt.setString(2,img);
                    try {
                        pstmt.setDate(3,new java.sql.Date(sdf.parse(DateUplode).getTime()));
                    } catch (ParseException ex) {
                        Logger.getLogger(ConsultationDao.class.getName()).log(Level.SEVERE, null, ex);
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
    
     public boolean SuppFile(String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from FileUpload where id='"+id+"'";
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
    
     public List<Diagnostic> GetListDiagnostic(){
        Query query =em.createNamedQuery("Diagnostic.findAll",Diagnostic.class);
        return query.getResultList();
    }
     
    public Consultation GetConsultationByNum(int num_Consult){
        Query query =em.createNamedQuery("Consultation.findByNumConsult",Consultation.class).setParameter("numConsult",num_Consult);
        List<Consultation> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
     
    public List<Consultation> GetListConsultationByPatient(int numPatient){
        Patient p = em.find(Patient.class, numPatient);
        Query query =em.createNamedQuery("Consultation.findByPatient",Consultation.class).setParameter("numPatient", p);
        return query.getResultList();
    }
     
    public List<Consultation> GetListConsultationByMedecin(int codeMedTrit){
        Utilisateur u = GetUtilisateurbyCodeMedTrit(codeMedTrit);
        Query query =em.createNamedQuery("Consultation.findByNumMedecin",Consultation.class).setParameter("codeMedTrit", u);
        return query.getResultList();
    }
    
    public Utilisateur GetUtilisateurbyCodeMedTrit(int codeMedTrit){
        Query query =em.createNamedQuery("Utilisateur.findByCodeMedTrit",Utilisateur.class).setParameter("codeMedTrit",codeMedTrit);
        List<Utilisateur> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    public int GetConsultStats(int codeMedTrit ,int month,int year){
        Query query =em.createNativeQuery("select COUNT(c.num_consult) from Consultation c where c.code_Med_Trit= ?1 and MONTH(c.date_consult)= ?2 and YEAR(c.date_consult)= ?3").setParameter(1,codeMedTrit).setParameter(2,month).setParameter(3,year);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? 0 : elementList.get(0);
    }
    
    public int GetConsultAPCIStats(int codeMedTrit ,int month,int year){
        Query query =em.createNativeQuery("select COUNT(c.num_consult) from Consultation c where c.code_Med_Trit= ?1 and MONTH(c.date_consult)= ?2 and YEAR(c.date_consult)= ?3 and c.type_consult ='Consultation APCI'").setParameter(1,codeMedTrit).setParameter(2,month).setParameter(3,year);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? 0 : elementList.get(0);
    }
    
    public String AjConsultation(Date date_consult,int num_patient,int Diag_consult, String type_consult,int code_Med_Trit, int num_examen, int num_ord) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         String requete;
         int n = 0;
         try{
             if(num_ord!=0)
                requete = "insert into Consultation(date_consult,num_patient,Diag_consult,type_consult,num_consult,code_Med_Trit,num_examen,num_ord) values(?,?,?,?,?,?,?,?)";
             else
                 requete = "insert into Consultation(date_consult,num_patient,Diag_consult,type_consult,num_consult,code_Med_Trit,num_examen) values(?,?,?,?,?,?,?)";
             
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 int num =new CabinetMedicalDao().GetCptParamByCode("CptConsult");
                 pstmt.setDate(1,new java.sql.Date(date_consult.getTime()));
                 pstmt.setInt(2,num_patient);
                 pstmt.setInt(3,Diag_consult);
                 pstmt.setString(4,type_consult);
                 pstmt.setInt(5,num);
                 pstmt.setInt(6,code_Med_Trit);
                 pstmt.setInt(7,num);
                 
                 if(num_ord!=0)
                 pstmt.setInt(8,num);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                 new CabinetMedicalDao().CptIncParamByCode("CptConsult");
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
    
     public boolean SuppConsultation  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Consultation where num_consult='"+id+"'";
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
     
     public String UpdateConsultation(int num_consult ,Date date_consult,int num_patient,int Diag_consult, String type_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Consultation set date_consult=? ,num_patient=?,Diag_consult=? ,type_consult=? where num_consult=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date_consult.getTime()));
                 pstmt.setInt(2,num_patient);
                 pstmt.setInt(3,Diag_consult);
                 pstmt.setString(4,type_consult);
                 pstmt.setInt(5, num_consult);
                 
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
     
     public String UpdateConsultationOrd(int num_consult, int num_ord) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Consultation set num_Ord=? where num_consult=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_ord);
                 pstmt.setInt(2, num_consult);
                 
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
