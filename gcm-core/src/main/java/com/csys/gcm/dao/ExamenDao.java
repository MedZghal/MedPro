/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Examen;
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
public class ExamenDao {
 EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Examen> GetExamen(){
        Query query =em.createNamedQuery("Examen.findAll",Examen.class);
        return query.getResultList();
    }
    
    public List<Examen> GetExamenByNumExamen(int NumExamen){
        Query query =em.createNamedQuery("Examen.findByNumExamen",Examen.class).setParameter("numExamen",NumExamen);
        return query.getResultList();
    }
    
    public String AjExamen(String TA,String pouls, String temp,String exam_phy,String etat_general,String auscu_cardi,String auscu_pleuro,String examen_ORL,String aires_gangl,String examen_abdominal,int num_examen) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Examen(TA,pouls,temp,exam_phy,etat_general,auscu_cardi,auscu_pleuro,examen_ORL,aires_gangl,examen_abdominal,num_examen) values(?,?,?,?,?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,TA);
                 pstmt.setString(2,pouls);
                 pstmt.setString(3,temp);
                 pstmt.setString(4,exam_phy);
                 pstmt.setString(5,etat_general);
                 pstmt.setString(6,auscu_cardi);
                 pstmt.setString(7,auscu_pleuro);
                 pstmt.setString(8,examen_ORL);
                 pstmt.setString(9,aires_gangl);
                 pstmt.setString(10,examen_abdominal);
                 pstmt.setInt(11,num_examen);
                 
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
    
     public boolean SuppExamen  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Examen where num_examen='"+id+"'";
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
     
     public String UpdateExamen(String TA,String pouls, String temp,String exam_phy,String etat_general,String auscu_cardi,String auscu_pleuro,String examen_ORL,String aires_gangl,String examen_abdominal,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Examen set TA=? ,pouls=?,temp=?,exam_phy=?,etat_general=?,auscu_cardi=?,auscu_pleuro=?,examen_ORL=?,aires_gangl=?,examen_abdominal=? where num_examen=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,TA);
                 pstmt.setString(2,pouls);
                 pstmt.setString(3,temp);
                 pstmt.setString(4,exam_phy);
                 pstmt.setString(5,etat_general);
                 pstmt.setString(6,auscu_cardi);
                 pstmt.setString(7,auscu_pleuro);
                 pstmt.setString(8,examen_ORL);
                 pstmt.setString(9,aires_gangl);
                 pstmt.setString(10,examen_abdominal);
                 pstmt.setInt(11,num_consult);
                 
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

