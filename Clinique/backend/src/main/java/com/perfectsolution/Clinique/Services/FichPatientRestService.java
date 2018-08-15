/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Patient;
import com.perfectsolution.Clinique.Metier.FichPatientMetier;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@RestController
public class FichPatientRestService {
    
    @Autowired
    public FichPatientMetier fichPatientMetier;
    
    @GetMapping("/PatientByCodMed")
    public List<Patient> getPatientByCodMed(@RequestParam int codeMedTrit) {
        return fichPatientMetier.getPatientByCodMed(codeMedTrit);
    }

    @GetMapping("/PatientPartagByCodMed")
    public List<Patient> getPatientPartagByCodMed(@RequestParam int codeMedTrit) {
        return fichPatientMetier.getPatientPartagByCodMed(codeMedTrit);
    }
}
