/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Rdv;
import com.perfectsolution.Clinique.Metier.RdvMetier;
import java.sql.Date;
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
public class RdvRestService {
    
    @Autowired
    public RdvMetier rdvMetier;
    
    @GetMapping("/RdvbyPatient")
    public List<Rdv> getRdvbyPatient(@RequestParam int num_patient) {
        return rdvMetier.getRdvbyPatient(num_patient);
    }

    @GetMapping("/RdvbyId")
    public Optional<Rdv> FindRdv(@RequestParam int num_rdv) {
        return rdvMetier.FindRdv(num_rdv);
    }
    
    @GetMapping("/GetRdvbyMed")
    public List<Rdv> getRdvbyMed(int num_med) {
        return  rdvMetier.getRdvbyMed(num_med);
    }
    
    @GetMapping("/GetRdvbyMedDate")
    public List<Rdv> getRdvbyMedDate(int num_med, java.util.Date datestart, java.util.Date datefin) {
        return  rdvMetier.getRdvbyMedDate(num_med, datestart, datefin);
    }
}
