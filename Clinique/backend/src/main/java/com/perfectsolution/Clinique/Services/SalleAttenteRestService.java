/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.SalleAttente;
import com.perfectsolution.Clinique.Metier.SalleAttenteMetier;
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
public class SalleAttenteRestService {
    
    @Autowired
    private SalleAttenteMetier attenteMetier;
    
    @GetMapping("/ListAttentes")
    public List<SalleAttente> getSalleAttentebyMedecin(@RequestParam int codMed) {
        return attenteMetier.getSalleAttentebyMedecin(codMed);
    }
    
}
