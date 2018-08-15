/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Patient;
import com.perfectsolution.Clinique.Metier.PatientMetier;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@RestController
public class PatientRestService {
    
    @Autowired
    private PatientMetier patientMetier;

    @GetMapping("/Patient")
    public Optional<Patient> GetPatientById(@RequestParam int num_patient) {
        return patientMetier.GetPatientById(num_patient);
    }

    @GetMapping("/ListPatients")
    public List<Patient> listPatients() {
        return patientMetier.listPatients();
    }
    
    
    
}
