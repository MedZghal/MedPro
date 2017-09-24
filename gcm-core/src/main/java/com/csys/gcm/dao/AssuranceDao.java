/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.AssuranceCNAM;
import com.csys.gcm.model.Patient;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author ASUS
 */
public class AssuranceDao {
 EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<AssuranceCNAM> GetListAssuranceCNAM(){
        Query query =em.createNamedQuery("AssuranceCNAM.findAll",AssuranceCNAM.class);
        return query.getResultList();
    }
    
    /**
     *
     * @param NumFichPatient
     * @return
     */
    public AssuranceCNAM GetAssuranceCNAMByPatient( int NumFichPatient){
        Patient p =em.find(Patient.class,NumFichPatient);
        return p.getAssurCnam();
    }
   
    
    public String AjAssuranceCNAM(String regime_affi,String qualite,String ident_unique,int rang_Assur,Date date_valid,String type,String nom_med,String codecnam) throws SQLException{
        
         Connection conn=null;
         String Err="true";
         int n = 0;
         try{
             conn=myconn.getConnection();
             conn.setAutoCommit(false);
             String requete="insert into AssuranceCNAM(num_Assur,regime_affi,qualite,ident_unique,rang_Assur,date_valid,type,nom_medc,cod_cnam) values(?,?,?,?,?,?,?,?,?)";
            
             
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,new CabinetMedicalDao().GetCptParamByCode("CptAssurCnam"));
                 pstmt.setString(2,regime_affi);
                 pstmt.setString(3,qualite);
                 pstmt.setString(4,ident_unique);
                 pstmt.setInt(5,rang_Assur);
                 pstmt.setDate(6,new java.sql.Date(date_valid.getTime()));
                 pstmt.setString(7,type);
                 pstmt.setString(8,nom_med);
                 pstmt.setString(9,codecnam);
                
                 n=pstmt.executeUpdate();
                 pstmt.close();
                 conn.commit();
                 new CabinetMedicalDao().CptIncParamByCode("CptAssurCnam");
             }
             
         }catch(SQLException EXp){
             Err=EXp.getMessage()+"";
                 conn.rollback();
            }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EXp){
                 }
             }
         }
        
    
         return Err ;
    
    }
    
     
     
     public boolean SuppAssuranceCNAM  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from AssuranceCNAM where num_Assur='"+id+"'";
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
     
   
     
     public String UpdateAssuranceCNAM(int num_Assur ,String regime_affi,String qualite,String ident_unique,int rang_Assur,Date date_valid,String type,String nom_med,String codecnam) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update AssuranceCNAM set regime_affi=? ,qualite=?,ident_unique=?,rang_Assur=?,date_valid=?,type=?,nom_medc=?,cod_cnam=? where num_Assur=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,regime_affi);
                 pstmt.setString(2,qualite);
                 pstmt.setString(3,ident_unique);
                 pstmt.setInt(4,rang_Assur);
                 pstmt.setDate(5,new java.sql.Date(date_valid.getTime()));
                 pstmt.setString(6,type);
                 pstmt.setString(7,nom_med);
                 pstmt.setString(8,codecnam);
                 pstmt.setInt(9,num_Assur);
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
