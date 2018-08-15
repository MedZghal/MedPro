/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.SalleAttenteRepository;
import com.perfectsolution.Clinique.Entities.SalleAttente;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class SalleAttenteMetierImpl implements SalleAttenteMetier{
    
    @Autowired
    private SalleAttenteRepository attenteRepository;

    @Override
    public List<SalleAttente> getSalleAttentebyMedecin(int codMed) {
         return attenteRepository.getSalleAttentebyMedecin(codMed);
    }
    
}
