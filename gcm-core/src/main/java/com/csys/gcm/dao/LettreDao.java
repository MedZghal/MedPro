/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Lettre;
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
public class LettreDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Lettre> GetListLettre(){
        Query query =em.createNamedQuery("Lettre.findAll",Lettre.class);
        return query.getResultList();
    }
    
    
    public String AjLettre(Date date_Creation ,String contenu , String type,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Lettre(date_Creation,contenu,type,num_consult) values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date_Creation.getTime()));
                 pstmt.setString(2,contenu);
                 pstmt.setString(3,type);
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
    
     public boolean SuppLettre  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Lettre where num_lettre='"+id+"'";
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
     
     public String UpdateLettre(int num_lettre ,Date date_Creation ,String contenu , String type,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Lettre set date_Creation=? ,contenu=?,type=? ,num_consult=?,cotation=?,date_Acte=? where num_lettre=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date_Creation.getTime()));
                 pstmt.setString(2,contenu);
                 pstmt.setString(3,type);
                 pstmt.setInt(4,num_consult);
                 pstmt.setInt(5,num_lettre);
                 
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
