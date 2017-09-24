/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Medicament;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import com.csys.gcm.model.Dci;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author ASUS
 */
public class MedicamentDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Medicament> GetListMedic(){
        Query query =em.createNamedQuery("Medicament.findAll",Medicament.class);
        return query.getResultList();
    }
    
    
    public List<Dci> GetListDci(){
        Query query =em.createNamedQuery("Dci.findAll",Dci.class);
        return query.getResultList();
    }
    
    
    public String AjMedic(String desg,String prix , String generique, String catg,int codDci) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Medicament(desg_medic,prix,generique,catg_cnam,DCI) values(?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,desg);
                 pstmt.setString(2,prix);
                 pstmt.setString(3,generique);
                 pstmt.setString(4,catg);
                 pstmt.setInt(5,codDci);
                 
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
    
     public boolean SuppMedic  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Medicament where num_medic='"+id+"'";
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
     
     public String UpdateMedic(int num_medic ,String desg,String prix , String generique, String catg,int codDci) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Medicament set desg_medic=? ,prix=?,generique=? ,catg_cnam=?,DCI=? where num_medic=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,desg);
                 pstmt.setString(2,prix);
                 pstmt.setString(3,generique);
                 pstmt.setString(4,catg);
                 pstmt.setInt(5,codDci);
                 pstmt.setInt(6,num_medic);
                 
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
