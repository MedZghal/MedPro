/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.FichPatient;
import com.perfectsolution.Clinique.Entities.FichPatientPK;
import com.perfectsolution.Clinique.Entities.Patient;
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
public interface FichPatientRepository extends JpaRepository<FichPatient,FichPatientPK>{
    @Query("SELECT f.patient FROM FichPatient f WHERE f.fichPatientPK.codeMedTrit = :codeMedTrit and LOCATE('partagé',f.partage)=0")
    public List<Patient> getPatientByCodMed(@Param("codeMedTrit")int codeMedTrit);
    
    @Query("SELECT f.patient FROM FichPatient f WHERE f.fichPatientPK.codeMedTrit = :codeMedTrit and LOCATE('partagé',f.partage)!=0")
    public List<Patient> getPatientPartagByCodMed(@Param("codeMedTrit")int codeMedTrit);
}
