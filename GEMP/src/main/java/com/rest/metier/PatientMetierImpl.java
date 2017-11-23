/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.PatientRepository;
import com.rest.entities.Patient;
import java.util.List;
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
    public Patient GetPatientById(int num_patient) {
        return patientRepository.findOne(num_patient);
    }

    @Override
    public List<Patient> listPatients() {
        return (List<Patient>) patientRepository.findAll();
    }
    
}
