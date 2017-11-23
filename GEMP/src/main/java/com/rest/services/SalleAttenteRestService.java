/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.SalleAttente;
import com.rest.metier.SalleAttenteMetier;
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
public class SalleAttenteRestService {
    
    @Autowired
    private SalleAttenteMetier salleAttenteMetier;

    @RequestMapping(value = "/SalleAttenteByMedcin",method = RequestMethod.GET)
    public List<SalleAttente> getSalleAttentebyMedecin(@RequestParam int codMed) {
        return salleAttenteMetier.getSalleAttentebyMedecin(codMed);
    }
    
    
    
}
