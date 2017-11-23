/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Rdv;
import com.rest.metier.RdvMetier;
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
public class RdvRestService {
    
    @Autowired
    private RdvMetier rdvMetier;

    @RequestMapping(value = "/RdvPatient",method = RequestMethod.GET)
    public List<Rdv> getRdvbyPatient(@RequestParam int num_patient) {
        return rdvMetier.getRdvbyPatient(num_patient);
    }

    @RequestMapping(value = "/Rdv",method = RequestMethod.GET)
    public Rdv FindRdv(@RequestParam int num_rdv) {
        return rdvMetier.FindRdv(num_rdv);
    }
    
    
    
}
