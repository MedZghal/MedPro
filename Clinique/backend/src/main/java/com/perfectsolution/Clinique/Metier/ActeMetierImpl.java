/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.ActeRepository;
import com.perfectsolution.Clinique.Entities.Acte;
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
    public ActeRepository acteRepository;
    
    @Override
    public List<Acte> getListActesbyPatient(int num_patient) {
        return acteRepository.getListActesbyPatient(num_patient);
    }
    
}
