/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.Rdv;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface RdvRepository extends CrudRepository<Rdv,Integer>{
    @Query("SELECT r FROM Rdv r WHERE r.fichPatient.patient.numFichPatient = :numFichPatient")
    public List<Rdv> getRdvbyPatient(@Param("numFichPatient") int num_patient);
    
}
