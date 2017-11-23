/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.Patient;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author ASUS
 */
public interface PatientRepository extends CrudRepository<Patient,Integer>{
    
}
