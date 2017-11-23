/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.SalleAttenteRepository;
import com.rest.entities.SalleAttente;
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
    private SalleAttenteRepository salleAttenteRepository;
    
    @Override
    public List<SalleAttente> getSalleAttentebyMedecin(int codMed) {
        return salleAttenteRepository.getSalleAttentebyMedecin(codMed);
    }
    
}
