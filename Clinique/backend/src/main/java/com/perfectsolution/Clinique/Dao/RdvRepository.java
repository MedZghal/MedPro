/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.Rdv;
import java.util.Date;
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
public interface RdvRepository extends JpaRepository<Rdv,Integer>{
    @Query("SELECT r FROM Rdv r WHERE r.fichPatient.patient.numFichPatient = :numFichPatient")
    public List<Rdv> getRdvbyPatient(@Param("numFichPatient") int num_patient);
    
    @Query("SELECT r FROM Rdv r WHERE r.fichPatient.utilisateur.codeMedTrit = :med")
    public List<Rdv> getRdvbyMed(@Param("med") int num_med);
    
    @Query("SELECT r FROM Rdv r WHERE r.fichPatient.utilisateur.codeMedTrit = :med and r.startDate BETWEEN :startDate and :endDate")
    public List<Rdv> getRdvbyMedDate(@Param("med") int num_med,@Param("startDate") Date datestart,@Param("endDate") Date datefin);

}
