/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.TraitementAPCI;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author ASUS
 */
public class TraitementAPCIDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<TraitementAPCI> GetListTraitementAPCI(){
        Query query =em.createNamedQuery("TraitementAPCI.findAll",TraitementAPCI.class);
        return query.getResultList();
    }
    
    public List<TraitementAPCI> GetTraitementAPCIByNumPatient(int NumFichPatient){
        Query query =em.createNamedQuery("TraitementAPCI.findByNumPatient",TraitementAPCI.class).setParameter("numPatient",NumFichPatient);
        return query.getResultList();
    }
    
    
    public String AjTraitementAPCI(int num_patient,int num_medic, String posologie) throws SQLException  {
        
         Connection conn =null;
         String Err="true";
         int n = 0;
         try{
             conn=myconn.getConnection();
             conn.setAutoCommit(false);
             String requete="insert into TraitementAPCI values(?,?,?);";
                
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 pstmt.setInt(1,num_patient);
                 pstmt.setInt(2,num_medic);
                 pstmt.setString(3,posologie);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                 conn.commit();
             }
             
         }catch(SQLException EX){
             conn.rollback();
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
    
     public boolean SuppTraitementAPCI (int num_patient,int num_medic ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from TraitementAPCI where num_patient="+num_patient+" and num_medic="+num_medic+"";
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
     
      public boolean SuppTraitementAPCIByPatient (int num_patient) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from TraitementAPCI where num_patient="+num_patient;
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
     
     
}

