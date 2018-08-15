/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.FichPatientRepository;
import com.perfectsolution.Clinique.Entities.Patient;
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
    public FichPatientRepository fichPatientRepository;

    @Override
    public List<Patient> getPatientByCodMed(int codeMedTrit) {
        return fichPatientRepository.getPatientByCodMed(codeMedTrit);
    }

    @Override
    public List<Patient> getPatientPartagByCodMed(int codeMedTrit) {
        return fichPatientRepository.getPatientPartagByCodMed(codeMedTrit);
    }
    
}
