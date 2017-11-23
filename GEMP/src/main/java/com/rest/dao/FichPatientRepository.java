/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.FichPatient;
import com.rest.entities.FichPatientPK;
import com.rest.entities.Patient;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface FichPatientRepository extends CrudRepository<FichPatient,FichPatientPK>{
    @Query("SELECT f.patient FROM FichPatient f WHERE f.fichPatientPK.codeMedTrit = :codeMedTrit and LOCATE('partagé',f.partage)=0")
    public List<Patient> getPatientByCodMed(@Param("codeMedTrit")int codeMedTrit);
    
    @Query("SELECT f.patient FROM FichPatient f WHERE f.fichPatientPK.codeMedTrit = :codeMedTrit and LOCATE('partagé',f.partage)!=0")
    public List<Patient> getPatientPartagByCodMed(@Param("codeMedTrit")int codeMedTrit);
    
}
