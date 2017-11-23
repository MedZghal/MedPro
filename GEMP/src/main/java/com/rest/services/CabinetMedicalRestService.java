/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.CabinetMedical;
import com.rest.metier.CabinetMedicalMetier;
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
public class CabinetMedicalRestService {
    @Autowired
    private CabinetMedicalMetier cabinetMedicalMetier;

    @RequestMapping(value = "/CabinetMedical", method = RequestMethod.GET)
    public CabinetMedical findByCodeMed(@RequestParam int codeMed) {
        return cabinetMedicalMetier.findByCodeMed(codeMed);
    }
    
    
    
}
