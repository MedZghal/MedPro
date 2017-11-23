/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Consultation;
import com.rest.metier.ConsultationMetier;
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
public class ConsultationRestService {
    
    @Autowired
    private ConsultationMetier consultationMetier;

    @RequestMapping(value = "/ListConsultationsbyPatient",method = RequestMethod.GET)
    public List<Consultation> getListConsultationsbyPatient(@RequestParam int num_patient) {
        return consultationMetier.getListConsultationsbyPatient(num_patient);
    }

    @RequestMapping(value = "/Consultation",method = RequestMethod.GET)
    public Consultation FindConsult(@RequestParam int num_consult) {
        return consultationMetier.FindConsult(num_consult);
    }
    
    
    
}
