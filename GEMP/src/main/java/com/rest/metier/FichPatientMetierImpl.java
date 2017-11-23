/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.FichPatientRepository;
import com.rest.entities.Patient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class FichPatientMetierImpl implements FichPatientMetier{
    
    @Autowired
    private FichPatientRepository fichPatientRepository;

    @Override
    public List<Patient> getPatientByCodMed(int CodMed) {
      return fichPatientRepository.getPatientByCodMed(CodMed);
    }

    @Override
    public List<Patient> getPatientPartagByCodMed(int codeMedTrit) {
      return fichPatientRepository.getPatientPartagByCodMed(codeMedTrit);
    }
    
}
