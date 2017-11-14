/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.generic;
//import com.rest.GempApplication;
import java.net.URL;
import java.net.MalformedURLException;
import service.*;


/**
 *
 * @author ASUS
 */
public class WS {

    /**
     *
     */
    public static GcmEventWS PortCltWS;
//    public static  GempApplication gempApplication;
    /**
     *
     * @return
     */
  /*  public String getWSDLPort() {
         MyConnection myconn = new MyConnection();
         Connection conn=myconn.getConnection();
         String WSDPort="";
         try{
             Statement stm=conn.createStatement();
             String query ="select top(1) Port from PortClients";
             ResultSet rs=stm.executeQuery(query);
             while(rs.next()){
                 WSDPort=rs.getString("Port");
             }
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
             WSDPort= EX.getMessage();
         }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                     
                 }
             }
         }
         return WSDPort;
     }*/
        
    /**
     *
     * @return
     * @throws MalformedURLException
     */
//     public GempApplication GempApplication() {
//         gempApplication= new GempApplication();
//         return gempApplication;
//     }
    public GcmEventWS GcmEventWS() throws MalformedURLException{
         /*Authenticator muAth= new Authenticator() {
             @Override
             protected PasswordAuthentication getPasswordAuthentication(){
                 MyConnection myconn = new MyConnection();
                 Connection conn=myconn.getConnection();
                 String user="";
                 String psw="";
                 try{
                     Statement stm=conn.createStatement();
                     String query="select top(1)user_name,role_name from user_roles";
                      ResultSet rs=stm.executeQuery(query);
             while(rs.next()){
                    user=rs.getString("user_name");
                    psw=rs.getString("role_name");
             }
         }catch(SQLException EX){
             System.err.printf(EX.getMessage());
         }finally{
             if(conn!=null){
                 try{
                     conn.close();
                 }catch(SQLException EX){
                     
                 }
                 conn=null;
             }
                 }
                 return new PasswordAuthentication(user,psw.toCharArray());
             }
};
         
         Authenticator.setDefault(muAth);*/
             GcmEventWS_Service service;
             
             service = new GcmEventWS_Service(new URL("http://127.0.0.1/GCM/GcmEventWS?wsdl"));
             PortCltWS = service.getGcmEventWSPort();
             return PortCltWS;
         
     }
}
