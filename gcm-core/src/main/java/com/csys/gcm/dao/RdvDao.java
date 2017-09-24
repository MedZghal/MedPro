/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;
import com.csys.gcm.model.Rdv;
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
public class RdvDao {
   EntityManager em=FactoriesRepository.GetEntityManager(FactoriesRepository.GetDmiPU());
    MyConnection myconn = new MyConnection();
    
    /**
     *
     * @return
     */
    public List<Rdv> GetListRdv(){
        Query query =em.createNamedQuery("Rdv.findAll",Rdv.class);
        return query.getResultList();
    }
    
    public List<Rdv> GetListRdvByNumMedecin(int numMedecinTrait){
        Query query =em.createNamedQuery("Rdv.findByNumMedecin",Rdv.class).setParameter("codeMedTrit", numMedecinTrait);
        return query.getResultList();
    }
    
    public List<Rdv> GetListRdvByADate(int numMedecinTrait){
        //Query query =em.createNamedQuery("Rdv.findByADate",Rdv.class).setParameter("codeMedTrit", numMedecinTrait);
        Query query =em.createNativeQuery("select  * from RDV R where CONVERT (date, R.start_date)=CONVERT (date, SYSDATETIME()) and r.num_medecin_trait=? ORDER BY R.start_date",Rdv.class).setParameter(1, numMedecinTrait);
        return query.getResultList();
    }
    
    public int GetRdvStats(int codeMedTrit ,int month,int year){
        Query query =em.createNativeQuery("select COUNT(c.numRDV) from RDV c where c.num_medecin_trait= ?1 and MONTH(c.start_date)= ?2 and YEAR(c.start_date)= ?3").setParameter(1,codeMedTrit).setParameter(2,month).setParameter(3,year);
        List<Integer> elementList = query.getResultList();
        return CollectionUtils.isEmpty(elementList ) ? 0 : elementList.get(0);
    }
    
    public String AjRdv(Date start_date ,String typ , String descpRDV,int pres,int Codpat,int CodMed,Date end_date) {
        
         Connection conn=myconn.getConnection();
         String Err="true",requete;
         int n = 0;
         try{
             if(Codpat==0)
                 requete = "insert into Rdv(start_date,typeRDV,descpRDV,presence,num_medecin_trait,end_date,numRDV) values(?,?,?,?,?,?,?)";
             else
                 requete = "insert into Rdv(start_date,typeRDV,descpRDV,presence,num_medecin_trait,end_date,numRDV,num_patient) values(?,?,?,?,?,?,?,?)";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setTimestamp(1,new java.sql.Timestamp(start_date.getTime()));
                 pstmt.setString(2,typ);
                 pstmt.setString(3,descpRDV);
                 pstmt.setInt(4,pres);
                 pstmt.setInt(5,CodMed);
                 pstmt.setTimestamp(6,new java.sql.Timestamp(end_date.getTime()));
                 pstmt.setInt(7,new CabinetMedicalDao().GetCptParamByCode("CptRdv"));
                 
                 if(Codpat!=0)
                 pstmt.setInt(8,Codpat);
                 
                 n=pstmt.executeUpdate();
                 pstmt.close();
                 new CabinetMedicalDao().CptIncParamByCode("CptRdv");
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
    
     public boolean SuppRdv  (String id ) {
         Connection conn=myconn.getConnection();
         int n = 0;
         try{
             try (Statement stm = conn.createStatement()) { 
                 String query ="delete from Rdv where numRDV="+id;
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
     
     public String UpdateRdv(int num_rdv,Date start_date ,String typ , String descpRDV,int pres,int Codpat,Date end_date) {
        
         Connection conn=myconn.getConnection();
         String Err="true";
         int n = 0;
         try{
             String requete = "update Rdv set start_date=?,typeRdv=?,descpRDV=?,presence=?,num_patient=?,end_date=? where numRdv=?";
             try (PreparedStatement pstmt = conn.prepareStatement(requete)) {
                 
                 pstmt.setTimestamp(1,new java.sql.Timestamp(start_date.getTime()));
                 pstmt.setString(2,typ);
                 pstmt.setString(3,descpRDV);
                 pstmt.setInt(4,pres);
                 pstmt.setInt(5,Codpat);
                 pstmt.setTimestamp(6,new java.sql.Timestamp(end_date.getTime()));
                 pstmt.setInt(7,num_rdv);
                 
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
