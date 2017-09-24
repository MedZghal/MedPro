/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.FichPatient;
import com.csys.gcm.model.FichPatientPK;
import com.csys.gcm.model.Patient;
import com.csys.gcm.model.Utilisateur;
import com.csys.gcm.model.Ville;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Savepoint;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
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
public class PatientDao {
    EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Patient> GetListPatient(){
        Query query =em.createNamedQuery("Patient.findAll",Patient.class);
        return query.getResultList();
    }
    
    public Patient GetPatientByNumFichPatient(int NumFichPatient){
        Patient p =em.find(Patient.class,NumFichPatient);
        return p;
    }
    
    public List<Patient> GetListAllPatientByMedecin(int code_Med_Trit){
        Query query =em.createNamedQuery("FichPatient.findAllByCodeMedTrit",FichPatient.class).setParameter("codeMedTrit",code_Med_Trit);
        return query.getResultList();
    }
    
    public List<Patient> GetListPatientByMedecin(int code_Med_Trit){
        Query query =em.createNamedQuery("FichPatient.findByCodeMedTrit",FichPatient.class).setParameter("codeMedTrit",code_Med_Trit);
        return query.getResultList();
    }
    
    public List<Patient> GetListDossierParByMedecin(int code_Med_Trit){
        Query query =em.createNamedQuery("FichPatient.findDPByCodeMedTrit",FichPatient.class).setParameter("codeMedTrit",code_Med_Trit);
        return query.getResultList();
    }
    
    public List<String[]> GetListPatientByMedecinOpt(int code_Med_Trit){
        Query query =em.createNativeQuery("select *,CONVERT(nvarchar, p.datenaiss, 103)DatenaissConv,(select v.ville from Ville v where v.codeVille=p.ville) as villelib from Patient p join Fich_Patient f on f.num_patient=p.num_fich_patient where f.code_Med_Trit= ?1").setParameter(1,code_Med_Trit);
        return query.getResultList();
    }
    
    public String GetListPatientByFichPatient(int code_Med_Trit,int numPatient){
        Query query =em.createNativeQuery("select f.partage from Fich_Patient f where f.code_Med_Trit= ?1 and f.num_patient= ?2").setParameter(1,code_Med_Trit).setParameter(2,numPatient);
        List<String> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    /**
     *
     * @return
     */
    public List<Ville> GetListVille(){
        Query query =em.createNamedQuery("Ville.findAll",Ville.class);
        return query.getResultList();
    }
    
    public List<Ville> GetListGouvernorat(String ville){
        Query query =em.createNamedQuery("Ville.findByVille",Ville.class);
        return query.setParameter("ville",ville).getResultList();
    }
    
    public List<String> GetListVilleDistinct(){
        Query query =em.createNamedQuery("Ville.findAllDistinct",Ville.class);
        return query.getResultList();
    }
    
    
    public String AjPatient(String nom ,String pr , String sexe,java.util.Date d,String sut_fam,String prof,String adr,String fixe,String tel,String poid ,String codVill,String fichpapier,String AutreAssur,String code_apci,String type_apci ,Date date_valid, int AssurCnam) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         String  requete;
         Savepoint savepoint2 = null;
         int n = 0;
         try{
             conn.setAutoCommit(false);
             
             if(AssurCnam != 0)
                requete="insert into patient(num_fich_patient,nom,prenom,sexe,datenaiss,sut_fam,profession,adresse,fixe,gsm,ville,poids,fichpapier,AutreAssur,code_apci,type_apci,date_valid,AssurCnam) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
             else
                 requete="insert into patient(num_fich_patient,nom,prenom,sexe,datenaiss,sut_fam,profession,adresse,fixe,gsm,ville,poids,fichpapier,AutreAssur,code_apci,type_apci,date_valid) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
                 
              
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 //set a Savepoint
                 savepoint2 = conn.setSavepoint("Savepoint1");
                 
                 int cpt =new CabinetMedicalDao().GetCptParamByCode("CptFich");
                 pstmt.setInt(1,cpt);
                 pstmt.setString(2,nom);
                 pstmt.setString(3,pr);
                 pstmt.setString(4,sexe);
                 pstmt.setDate(5,new java.sql.Date(d.getTime()));
                 pstmt.setString(6,sut_fam);
                 pstmt.setString(7,prof);
                 pstmt.setString(8,adr);
                 pstmt.setString(9,fixe);
                 pstmt.setString(10,tel);
                 pstmt.setString(11,codVill);
                 pstmt.setString(12,poid);
                 
                 if(fichpapier.equals(""))
                     pstmt.setString(13,cpt+"");
                 else
                     pstmt.setString(13,fichpapier);
                 pstmt.setString(14,AutreAssur);
                 pstmt.setString(15,code_apci);
                 pstmt.setString(16,type_apci);
                 
                 if(date_valid != null)
                     pstmt.setDate(17,new java.sql.Date(date_valid.getTime()));
                 else
                     pstmt.setDate(17,null);
                
                 if(AssurCnam != 0)
                 pstmt.setInt(18,AssurCnam);     
                
                 n=pstmt.executeUpdate();
                 pstmt.close();
                 conn.commit();
                 new CabinetMedicalDao().CptIncParamByCode("CptFich");
             }catch(SQLException e){
                 conn.rollback(savepoint2);    
             }
             
         }catch(SQLException EX){
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
    
    public String AjPatientByMedecin(int code_Med_Trit, int num_patient, String partage) throws ParseException {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Fich_Patient values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_patient);
                 pstmt.setInt(2,code_Med_Trit);
                 DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
                 String cunvertCurrentDate=new CabinetMedicalDao().GetDateServeur();
                 Date date = df.parse(cunvertCurrentDate);
                 pstmt.setDate(3,new java.sql.Date(date.getTime()));
                 pstmt.setString(4,partage);
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
    
    /**
     *
     * @param id
     * @return
     */
    public boolean SuppPatient  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from patient where num_fich_patient='"+id+"'";
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
    
    
    public String UpdatePatient(int num_fich_patient ,String nom ,String pr , String sexe,java.util.Date d,String sut_fam,String prof,String adr,String fixe,String tel,String poid ,String codVill,String fichpapier,String AutreAssur,String code_apci,String type_apci,Date date_valid,int AssurCnam) {
         Connection conn=null;
         String requete;
         int n = 0;
         try{
             
              conn=myconn.getConnection();
              if(AssurCnam!=0)
                requete = "update patient set nom=?,prenom=?,sexe=?,datenaiss=?,sut_fam=?,profession=?,adresse=?,fixe=?,gsm=?,ville=?,poids=?,fichpapier=?,AutreAssur=?,code_apci=?,type_apci=?,date_valid=?,AssurCnam=? where num_fich_patient=?";
              else
                  requete = "update patient set nom=?,prenom=?,sexe=?,datenaiss=?,sut_fam=?,profession=?,adresse=?,fixe=?,gsm=?,ville=?,poids=?,fichpapier=?,AutreAssur=?,code_apci=?,type_apci=?,date_valid=? where num_fich_patient=?";
                  
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,nom);
                 pstmt.setString(2,pr);
                 pstmt.setString(3,sexe);
                 pstmt.setDate(4,new java.sql.Date(d.getTime()));
                 pstmt.setString(5,sut_fam);
                 pstmt.setString(6,prof);
                 pstmt.setString(7,adr);
                 pstmt.setString(8,fixe);
                 pstmt.setString(9,tel);
                 pstmt.setString(10,codVill);
                 pstmt.setString(11,poid);
                 pstmt.setString(12,fichpapier);
                 pstmt.setString(13,AutreAssur);
                 pstmt.setString(14,code_apci);
                 pstmt.setString(15,type_apci);
                 
                 if(date_valid != null)
                     pstmt.setDate(16,new java.sql.Date(date_valid.getTime()));
                 else
                     pstmt.setDate(16,null);
                 
                 
                 if(AssurCnam != 0){
                 pstmt.setInt(17,AssurCnam);
                 pstmt.setInt(18,num_fich_patient);
                 }else
                     pstmt.setInt(17,num_fich_patient);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
             }
             
         }catch(SQLException e){
              return e.getMessage();
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                     
                 }
             }
         }
    
         return "true" ;
    
    }
    
    public String UpdatePatientAPCI(int num_fich_patient,String code_apci,String type_apci,Date date_valid ) {
         Connection conn=null;
         String requete;
         int n = 0;
         try{
             
              conn=myconn.getConnection();
                requete = "update patient set code_apci=?,type_apci=?,date_valid=? where num_fich_patient=?";
              
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,code_apci);
                 pstmt.setString(2,type_apci);
                 if(date_valid != null)
                     pstmt.setDate(3,new java.sql.Date(date_valid.getTime()));
                 else
                     pstmt.setDate(3,null);
                 pstmt.setInt(4,num_fich_patient);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
             }
             
         }catch(SQLException e){
              return e.getMessage();
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                     
                 }
             }
         }
    
         return "true" ;
    
    }
    
    
      public String UpdateMedecinPartage(int code_Med_Trit, int num_patient, String partage) {
         Connection conn=null;
         String requete;
         int n = 0;
         try{
             
              conn=myconn.getConnection();
                requete = "update Fich_Patient set partage=? where num_patient=? and code_Med_Trit=?";
              
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,partage);
                 pstmt.setInt(2,num_patient);
                 pstmt.setInt(3,code_Med_Trit);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
             }
             
         }catch(SQLException e){
              return e.getMessage();
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                     
                 }
             }
         }
    
         return "true" ;
    
    }
      
       public boolean SuppPartage(int code_Med_Trit, int num_patient) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             String requete ="delete from Fich_Patient where num_patient=? and code_Med_Trit=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) { 
                 
                 pstmt.setInt(1,num_patient);
                 pstmt.setInt(2,code_Med_Trit);
                 n=pstmt.executeUpdate();
                 pstmt.close();
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
}
