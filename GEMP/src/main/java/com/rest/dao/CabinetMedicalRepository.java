/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.CabinetMedical;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface CabinetMedicalRepository extends CrudRepository<CabinetMedical, Integer>{
    @Query("SELECT c FROM CabinetMedical c WHERE c.codeMedTrit.codeMedTrit = :codeMedTrit")
    public CabinetMedical findByCodeMed(@Param("codeMedTrit")int codeMed);
}
