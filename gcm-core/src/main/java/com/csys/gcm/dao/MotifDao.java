/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.Motif;
import com.csys.gcm.model.MotifConsult;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.apache.commons.collections.CollectionUtils;

/**
 *
 * @author ASUS
 */
public class MotifDao {
EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Motif> GetListMotif(){
        Query query =em.createNamedQuery("Motif.findAll",Motif.class);
        return query.getResultList();
    }
    
    public List<MotifConsult> GetListMotifConsult(){
        Query query =em.createNamedQuery("MotifConsult.findAll",MotifConsult.class);
        return query.getResultList();
    }
    
     public int GetSuivMotifId(){
        Query query =em.createNativeQuery("select MAX(m.num_motif)+1 from dbo.Motif m");
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? 0 : elementList.get(0);
    }
     
    public List<MotifConsult> GetListMotifConsultByNumConsult(int NumConsult){
        Query query =em.createNamedQuery("MotifConsult.findByNumConsult",MotifConsult.class).setParameter("numConsult", NumConsult);
        return query.getResultList();
    }
    
    
    public String AjMotif(int num_motif ,String lib ) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Motif(num_motif,libelle) values(?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_motif);
                 pstmt.setString(2,lib);
                 
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
    
    public String AjMotifConsult(int num_Motif, int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into Motif_Consult(num_Motif,num_consult) values(?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_Motif);
                 pstmt.setInt(2,num_consult);
                 
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
    
    public boolean SuppMotif (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Motif where num_motif='"+id+"'";
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
    
    public boolean SuppMotifConsult (String num_Motif, String num_consult) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Motif_Consult where num_Motif='"+num_Motif+"' and num_consult='"+num_consult+"'";
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
    
    public boolean SuppMotifConsultbyNum_Consult (int num_consult) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Motif_Consult where num_consult="+num_consult;
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
      
     public String UpdateMotif(int num_motif ,String lib) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Motif set libelle=?  where num_motif=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setString(1,lib);
                 pstmt.setInt(2,num_motif);
                 
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
     
     
      public String UpdateMotifConsult(int num_motif ,int num_consult) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Motif set num_Motif=?  where num_consult=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_motif);
                 pstmt.setInt(2,num_consult);
                 
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
