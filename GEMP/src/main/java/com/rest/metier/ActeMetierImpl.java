/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.ActeRepository;
import com.rest.entities.Acte;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class ActeMetierImpl implements ActeMetier{

    @Autowired
    private ActeRepository acteRepository;

    @Override
    public List<Acte> getListActesbyPatient(int num_patient) {
        return acteRepository.getListActesbyPatient(num_patient);
    }
    
   
    
}
