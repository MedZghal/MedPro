/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.Consultation;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS
 */
@Repository
public interface ConsultationRepository extends JpaRepository<Consultation,Integer>{
     @Query("SELECT c FROM Consultation c WHERE c.numPatient.numFichPatient = :numPatient")
    public List<Consultation> getListConsultationsbyPatient(@Param("numPatient") int num_patient);
}
