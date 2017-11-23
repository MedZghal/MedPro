/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Patient;
import com.rest.metier.PatientMetier;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(value = "/Patient", method = RequestMethod.GET)
    public Patient GetPatientById(@RequestParam int num_patient) {
        return patientMetier.GetPatientById(num_patient);
    }

    @RequestMapping(value = "/Patients", method = RequestMethod.GET)
    public List<Patient> listPatients() {
        return patientMetier.listPatients();
    }
    
    
    
}
