/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Consultation;
import com.perfectsolution.Clinique.Metier.ConsultationMetier;
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
public class ConsultationRestService {
    
    @Autowired
    public ConsultationMetier consultationMetier;
    
    @GetMapping("/ListConsultationsbyPatient")
    public List<Consultation> getListConsultationsbyPatient(@RequestParam int num_patient) {
        return consultationMetier.getListConsultationsbyPatient(num_patient);
    }

    @GetMapping("/ConsultationbyId")
    public Optional<Consultation> FindConsult(@RequestParam int num_consult) {
        return consultationMetier.FindConsult(num_consult);
    }
    
    
}
