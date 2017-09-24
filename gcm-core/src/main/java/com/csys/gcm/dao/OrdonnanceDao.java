/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;
import com.csys.gcm.model.Ordonnance;
import com.csys.gcm.model.PrescriptionOrd;
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
public class OrdonnanceDao {
 EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Ordonnance> GetListOrdonnance(){
        Query query =em.createNamedQuery("Ordonnance.findAll",Ordonnance.class);
        return query.getResultList();
    }
    
    
     public Ordonnance GetOrdonnanceByNum(int num_Ord){
        Query query =em.createNamedQuery("Ordonnance.findByNumOrd",Ordonnance.class).setParameter("numOrd",num_Ord);
        List<Ordonnance> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
     
    public List<PrescriptionOrd> GetListPrescriptionOrd(){
        Query query =em.createNamedQuery("PrescriptionOrd.findAll",PrescriptionOrd.class);
        return query.getResultList();
    }
    
    public List<PrescriptionOrd> GetListPrescriptionOrdByNumOrd(int Num_Ord){
        Query query =em.createNamedQuery("PrescriptionOrd.findByNumOrd",PrescriptionOrd.class).setParameter("numOrd",Num_Ord);
        return query.getResultList();
    }
    
    public String AjOrdonnance(Date date ,int num_ord) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "INSERT INTO Ordonnance(date,num_ord) values(?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date.getTime()));
                 pstmt.setInt(2,num_ord);
                 
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
    
    public String AjPrescriptionOrd(int num_medc,int num_ord,String dure,String qunt_med,String nb_fois_util) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "INSERT INTO PrescriptionOrd(num_medc,num_ord,dure,qunt_med,nb_fois_util) values(?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_medc);
                 pstmt.setInt(2,num_ord);
                 pstmt.setString(3,dure);
                 pstmt.setString(4,qunt_med);
                 pstmt.setString(5,nb_fois_util);
                 
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
    
     public boolean SuppOrdonnance  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Ordonnance where num_ord='"+id+"'";
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
     
      public boolean SuppPrescriptionOrdByNum_Ord (int num_ord) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from PrescriptionOrd where num_ord="+num_ord;
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
     
      public boolean SuppPrescriptionOrd (String num_medc ,String num_ord) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from PrescriptionOrd where num_medc='"+num_medc+"' and num_ord='"+num_ord+"'";
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
     
     public String UpdateOrdonnance(int num_ord ,Date date ,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Ordonnance set date=? ,num_consult=? where num_ord=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setDate(1,new java.sql.Date(date.getTime()));
                 pstmt.setInt(2,num_consult);
                 pstmt.setInt(3,num_ord);
                 
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
     
     public String UpdatePrescriptionOrd(int num_medc,int num_ord,String dure,String qunt_med,String nb_fois_util) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update PrescriptionOrd set dure=? ,qunt_med=?,nb_fois_util=? where num_ord=? and num_medc=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,dure);
                 pstmt.setString(2,qunt_med);
                 pstmt.setString(3,nb_fois_util);
                 pstmt.setInt(4,num_ord);
                 pstmt.setInt(5,num_medc);
                 
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
