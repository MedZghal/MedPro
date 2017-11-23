/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Patient;
import com.rest.metier.FichPatientMetier;
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
public class FichPatientRestService {
    
    @Autowired
    private FichPatientMetier fichPatientMetier;

    @RequestMapping(value = "/GetPatientByCodMed", method = RequestMethod.GET)
    public List<Patient> getPatientByCodMed(@RequestParam int codeMedTrit) {
        return fichPatientMetier.getPatientByCodMed(codeMedTrit);
    }

    @RequestMapping(value = "/GetPatientPartagByCodMed", method = RequestMethod.GET)
    public List<Patient> getPatientPartagByCodMed(@RequestParam int codeMedTrit) {
        return fichPatientMetier.getPatientPartagByCodMed(codeMedTrit);
    }
    
}
