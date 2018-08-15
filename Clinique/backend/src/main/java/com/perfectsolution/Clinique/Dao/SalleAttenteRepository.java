/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.SalleAttente;
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
public interface SalleAttenteRepository extends JpaRepository<SalleAttente,Integer> {
    @Query("SELECT s FROM SalleAttente s WHERE s.numMedcTrait.codeMedTrit = :codeMedTrit")
    public List<SalleAttente> getSalleAttentebyMedecin(@Param("codeMedTrit") int codMed);
    
}
