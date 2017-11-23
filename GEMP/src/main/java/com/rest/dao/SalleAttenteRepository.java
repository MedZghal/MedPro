/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.SalleAttente;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface SalleAttenteRepository extends CrudRepository<SalleAttente,Integer>{
    @Query("SELECT s FROM SalleAttente s WHERE s.numMedcTrait.codeMedTrit = :codeMedTrit")
    public List<SalleAttente> getSalleAttentebyMedecin(@Param("codeMedTrit") int codMed);
    
    
}
