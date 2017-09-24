/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import com.csys.gcm.model.BianBioGly;
import com.csys.gcm.model.BilanAAutre;
import com.csys.gcm.model.BilanAECBU;
import com.csys.gcm.model.BilanAECG;
import com.csys.gcm.model.BilanBioHemostase;
import com.csys.gcm.model.BilanBioHepatique;
import com.csys.gcm.model.BilanBioNFS;
import com.csys.gcm.model.BilanBioRenal;
import com.csys.gcm.model.BilanBioinflam;
import com.csys.gcm.model.BilanBiolipidique;
import com.csys.gcm.model.Consultation;
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
public class BilanDao {
  EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<BianBioGly> GetListBianBioGly(){
        Query query =em.createNamedQuery("BianBioGly.findAll",BianBioGly.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
    public List<BilanBioHemostase> GetListBilanBioHemostase(){
        Query query =em.createNamedQuery("BilanBioHemostase.findAll",BilanBioHemostase.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
    public BilanBioHemostase GetBilanBioHemostaseByNumConsult(int num_consult){
        Consultation  c=em.find(Consultation.class, num_consult);
        Query query =em.createNamedQuery("BilanBioHemostase.findByNumConsult",BilanBioHemostase.class).setParameter("numConuslt", c);
        List<BilanBioHemostase> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? null : elementList.get(0);
    }
    
    public List<BilanBioHepatique> GetListBilanBioHepatique(){
        Query query =em.createNamedQuery("BilanBioHepatique.findAll",BilanBioHepatique.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
    public List<BilanBiolipidique> GetListBilanBiolipidique(){
        Query query =em.createNamedQuery("BilanBiolipidique.findAll",BilanBiolipidique.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
     public List<BilanBioRenal> GetListBilanBioRenal(){
        Query query =em.createNamedQuery("BilanBioRenal.findAll",BilanBioRenal.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
     
     public List<BilanBioNFS> GetListBilanBioNFS(){
        Query query =em.createNamedQuery("BilanBioNFS.findAll",BilanBioNFS.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
     
      public List<BilanBioinflam> GetListBilanBioinflam(){
        Query query =em.createNamedQuery("BilanBioinflam.findAll",BilanBioinflam.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
      
      public List<BilanAECBU> GetListBilanAECBU(){
        Query query =em.createNamedQuery("BilanAECBU.findAll",BilanAECBU.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
      
      public List<BilanAAutre> GetListBilanAAutre(){
        Query query =em.createNamedQuery("BilanAAutre.findAll",BilanAAutre.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
      
      public List<BilanAECG> GetListBilanAECG(){
        Query query =em.createNamedQuery("BilanAECG.findAll",BilanAECG.class);
        return query.setFirstResult(0).setMaxResults(50).getResultList();
    }
    
    
    
    
    public String AjBianBioGly(int  num_consult ,String taux, String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BianBioGly(num_consult,taux,typSts) values(?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,taux);
                 pstmt.setString(3,typSts);
                 
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
    
    public String AjBilanBioHemostase(int  num_consult, String typSts,String TP,String INH,String TCA,String Fibrinéme) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBioHemostase(num_conuslt,typSts,TP,INH,TCA,Fibrinéme) values(?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,TP);
                 pstmt.setString(4,INH);
                 pstmt.setString(5,TCA);
                 pstmt.setString(6,Fibrinéme);
                 
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
    
    public String AjBilanBioHepatique(int  num_consult, String typSts,String Bilirubine_total,String Bilirubine_Conjugue,String SGOT_SGPT,String gammaGT,String Ph_Alcalines) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBioHepatique(num_consult,typSts,Bilirubine_total,Bilirubine_Conjugue,SGOT_SGPT,gammaGT,Ph_Alcalines) values(?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,Bilirubine_total);
                 pstmt.setString(4,Bilirubine_Conjugue);
                 pstmt.setString(5,SGOT_SGPT);
                 pstmt.setString(6,gammaGT);
                 pstmt.setString(7,Ph_Alcalines);
                 
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
    
    public String AjBilanBiolipidique(int  num_consult,String cholesterol,String triglycerides,String HDL,String LDL,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBiolipidique(num_consult,cholesterol,triglycerides,HDL,LDL,typSts) values(?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,cholesterol);
                 pstmt.setString(3,triglycerides);
                 pstmt.setString(4,HDL);
                 pstmt.setString(5,LDL);
                 pstmt.setString(6,typSts);
                 
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
    
    public String AjBilanBioRenal(int  num_consult,String Creatinemie,String Uree,String Poids,String Clairance_Creatinine,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBioRenal(num_consult,Creatinemie,Uree,Poids,Clairance_Creatinine,typSts) values(?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,Creatinemie);
                 pstmt.setString(3,Uree);
                 pstmt.setString(4,Poids);
                 pstmt.setString(5,Clairance_Creatinine);
                 pstmt.setString(6,typSts);
                 
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
    
    
     public String AjBilanBioNFS(int  num_consult,String typSts,String Hémoglobine,String Globunes_Blancs,String plaquettes) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBioNFS(num_consult,typSts,Hémoglobine,Globunes_Blancs,plaquettes) values(?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,Hémoglobine);
                 pstmt.setString(4,Globunes_Blancs);
                 pstmt.setString(5,plaquettes);
                 
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
     
        public String AjBilanBioinflam(int  num_consult,String VS,String CRP,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanBioinflam(num_consult,VS,CRP,typSts) values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,VS);
                 pstmt.setString(3,CRP);
                 pstmt.setString(4,typSts);
                 
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
        
        public String AjBilanAECBU(int  num_consult,String bacteriurie,String leucocyturie,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanAECBU(num_consult,bacteriurie,leucocyturie,typSts) values(?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,bacteriurie);
                 pstmt.setString(3,leucocyturie);
                 pstmt.setString(4,typSts);
                 
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
        
         public String AjBilanAAutre(int  num_consult,String nom,String descp) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanAAutre(num_consult,nom,descp) values(?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,nom);
                 pstmt.setString(3,descp);
                 
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
         
         public String AjBilanAECG(int  num_consult,String descp) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "insert into BilanAECG(num_consult,descp) values(?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,descp);
                 
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
         
     public boolean SuppBianBioGly  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BianBioGly where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanBioHemostase (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBioHemostase where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanBioHepatique (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBioHepatique where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanBiolipidique (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBiolipidique where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanBioRenal (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBioRenal where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanBioNFS (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBioNFS where numBilan='"+id+"'";
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
     
     public boolean SuppBilanBioinflam (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanBioinflam   where num_bilan='"+id+"'";
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
     
     public boolean SuppBilanAECBU (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanAECBU   where num_bilan='"+id+"'";
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
     
      public boolean SuppBilanAAutre (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanAAutre   where num_bilan='"+id+"'";
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
      
      public boolean SuppBilanAECG (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from BilanAECG   where num_bilan='"+id+"'";
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
      
     public String UpdateBianBioGly(int num_bilan ,int  num_consult ,String taux, String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BianBioGly set num_consult=? ,taux=?,typSts=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,taux);
                 pstmt.setString(3,typSts);
                 pstmt.setInt(4,num_bilan);
                 
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
     
     public String UpdateBilanBioHemostase(int num_bilan ,int  num_consult, String typSts,String TP,String INH,String TCA,String Fibrinéme) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBioHemostase set num_conuslt=?,typSts=?,TP=?,INH=?,TCA=?,Fibrinéme=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,TP);
                 pstmt.setString(4,INH);
                 pstmt.setString(5,TCA);
                 pstmt.setString(6,Fibrinéme);
                 pstmt.setInt(7,num_bilan);
                 
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
     
         public String UpdateBilanBioHepatique(int num_bilan ,int  num_consult, String typSts,String Bilirubine_total,String Bilirubine_Conjugue,String SGOT_SGPT,String gammaGT,String Ph_Alcalines) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBioHepatique set num_consult=?,typSts=?,Bilirubine_total=?,Bilirubine_Conjugue=?,SGOT_SGPT=?,gammaGT=?,Ph_Alcalines=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,Bilirubine_total);
                 pstmt.setString(4,Bilirubine_Conjugue);
                 pstmt.setString(5,SGOT_SGPT);
                 pstmt.setString(6,gammaGT);
                 pstmt.setString(7,Ph_Alcalines);
                 pstmt.setInt(8,num_bilan);
                 
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
     
          public String UpdateBilanBiolipidique(int num_bilan ,int  num_consult,String cholesterol,String triglycerides,String HDL,String LDL,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBiolipidique set num_consult=?,cholesterol=?,triglycerides=?,HDL=?,LDL=?,typSts=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,cholesterol);
                 pstmt.setString(3,triglycerides);
                 pstmt.setString(4,HDL);
                 pstmt.setString(5,LDL);
                 pstmt.setString(6,typSts);
                 pstmt.setInt(7,num_bilan);
                 
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
          
           public String UpdateBilanBioRenal(int num_bilan ,int  num_consult,String Creatinemie,String Uree,String Poids,String Clairance_Creatinine,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBioRenal set num_consult=?,Creatinemie=?,Uree=?,Poids=?,Clairance_Creatinine=?,typSts=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,Creatinemie);
                 pstmt.setString(3,Uree);
                 pstmt.setString(4,Poids);
                 pstmt.setString(5,Clairance_Creatinine);
                 pstmt.setString(6,typSts);
                 pstmt.setInt(7,num_bilan);
                 
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
           
           public String UpdateBilanBioNFS(int num_bilan ,int  num_consult,String typSts,String Hémoglobine,String Globunes_Blancs,String plaquettes) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBioRenal set num_consult=?,typSts=?,Hémoglobine=?,Globunes_Blancs=?,plaquettes=? where numBilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,typSts);
                 pstmt.setString(3,Hémoglobine);
                 pstmt.setString(4,Globunes_Blancs);
                 pstmt.setString(5,plaquettes);
                 pstmt.setInt(6,num_bilan);
                 
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
           
           public String UpdateBilanBioinflam(int num_bilan ,int  num_consult,String VS,String CRP,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanBioRenal set num_consult=?,VS=?,CRP=?,typSts=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,VS);
                 pstmt.setString(3,CRP);
                 pstmt.setString(4,typSts);
                 pstmt.setInt(5,num_bilan);
                 
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
           
           public String UpdateBilanAECBU(int num_bilan ,int  num_consult,String bacteriurie,String leucocyturie,String typSts) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanAECBU set num_consult=?,bacteriurie=?,leucocyturie=?,typSts=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,bacteriurie);
                 pstmt.setString(3,leucocyturie);
                 pstmt.setString(4,typSts);
                 pstmt.setInt(5,num_bilan);
                 
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
           
           public String UpdateBilanAAutre(int num_bilan ,int  num_consult,String nom,String descp) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanAECBU set num_consult=?,nom=?,descp=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,nom);
                 pstmt.setString(3,descp);
                 pstmt.setInt(4,num_bilan);
                 
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
           
           public String UpdateBilanAECG(int num_bilan ,int  num_consult,String descp) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update BilanAECG set num_consult=?,descp=? where num_bilan=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setInt(1,num_consult);
                 pstmt.setString(2,descp);
                 pstmt.setInt(3,num_bilan);
                 
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
