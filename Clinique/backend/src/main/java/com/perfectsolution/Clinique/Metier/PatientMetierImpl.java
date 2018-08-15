/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.PatientRepository;
import com.perfectsolution.Clinique.Entities.Patient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class PatientMetierImpl implements PatientMetier{
    
    @Autowired
    private PatientRepository patientRepository;

   
    @Override
    public List<Patient> listPatients() {
        return (List<Patient>) patientRepository.findAll();
    }

    @Override
    public Optional<Patient> GetPatientById(int num_patient) {
         return patientRepository.findById(num_patient);
    }
    
}
