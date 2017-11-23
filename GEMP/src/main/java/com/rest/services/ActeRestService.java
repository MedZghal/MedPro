/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Acte;
import com.rest.metier.ActeMetier;
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
public class ActeRestService {
    
    @Autowired
    private ActeMetier acteMetier;

    @RequestMapping(value = "/ActePatient",method = RequestMethod.GET)
    public List<Acte> getListActesbyPatient(@RequestParam int num_patient) {
        return acteMetier.getListActesbyPatient(num_patient);
    }
    
    
    
}
