/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.Acte;
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
public interface ActeRepository extends JpaRepository<Acte,Integer>{
    @Query("SELECT distinct a.acte FROM ActeMedicaux a WHERE a.consultation.numPatient.numFichPatient = :numPatient")
    public List<Acte> getListActesbyPatient(@Param("numPatient") int num_patient);
}
