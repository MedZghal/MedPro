/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.Consultation;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface ConsultationRepository extends CrudRepository<Consultation,Integer>{
    @Query("SELECT c FROM Consultation c WHERE c.numPatient.numFichPatient = :numPatient")
    public List<Consultation> getListConsultationsbyPatient(@Param("numPatient") int num_patient);
    
}