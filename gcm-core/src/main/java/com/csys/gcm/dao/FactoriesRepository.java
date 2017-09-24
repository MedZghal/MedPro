/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author ASUS
 */
public class FactoriesRepository {

    private final static String GCMPU="gcmPu";
    
    /**
     *
     * @return
     */
    public static String GetDmiPU(){
        return GCMPU;
    }

    /**
     *
     */
    public  FactoriesRepository(){}
        static EntityManager em=null; 
        static EntityManagerFactory factorygcm=null;

    /**
     *
     * @param Pu
     * @return
     */
    public  static EntityManager GetEntityManager(String Pu)  {
            if(Pu.equalsIgnoreCase(GetDmiPU())){
                if(factorygcm==null)
                {
                    factorygcm= Persistence.createEntityManagerFactory(Pu);
                }
            em=factorygcm.createEntityManager();
            }
            return em;
        }
    
    
}
