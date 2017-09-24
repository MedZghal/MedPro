/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Antecedents;
import com.csys.gcm.model.Patient;
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
public class AntecedentsDao {
    EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Antecedents> GetListAntecedents(){
        Query query =em.createNamedQuery("Antecedents.findAll",Antecedents.class);
        return query.getResultList();
    }
    
    public List<Antecedents> GetListAntecedentsByPatient(int patient){
        Patient p =em.find(Patient.class,patient);
        Query query =em.createNamedQuery("Antecedents.findByPtient",Antecedents.class).setParameter("patient", p);
        return query.getResultList();
    }
    
    
    public String AjAntecedent(String typ ,String descp , int codpas) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Antecedents(typeAntced,descrip_Antced,patient) values(?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,typ);
                 pstmt.setString(2,descp);
                 pstmt.setInt(3,codpas);
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
    
     public boolean SuppAntecedent  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Antecedents where numAntced='"+id+"'";
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
     
     public boolean SuppAntecedentByPatient  (int patient ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Antecedents where patient="+patient;
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
     
     public String UpdateAntecedent(String numAnt ,String typ ,String descp , int codpas) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Antecedents set typeAntced=? ,descrip_Antced=?,patient=? where numAntced=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,typ);
                 pstmt.setString(2,descp);
                 pstmt.setInt(3,codpas);
                 pstmt.setString(4,numAnt);
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
