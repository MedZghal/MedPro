/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 *
 * @author ASUS
 */
public class MyConnection {
    private DataSource datasource;
    
    /**
     *
     */
    public MyConnection() {
        try{
            InitialContext context = new InitialContext();
            datasource =(DataSource) context.lookup("java:/comp/env/jdbc/gcm");
        }catch(NamingException ex){
            Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE,null,ex);
        }
    }
    
    /**
     *
     * @return
     */
    public  Connection getConnection(){
        Connection  conn=null;
        try{
            conn= datasource.getConnection();
        }catch(SQLException ex){
            Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE,null,ex);     
        }
        return conn;
    }
}
