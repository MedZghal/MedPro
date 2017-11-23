/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.RdvRepository;
import com.rest.entities.Rdv;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class RdvMetierImpl implements RdvMetier{
    
    @Autowired
    private RdvRepository rdvRepository;

    @Override
    public List<Rdv> getRdvbyPatient(int num_patient) {
        return rdvRepository.getRdvbyPatient(num_patient);
    }

    @Override
    public Rdv FindRdv(int num_rdv) {
        return rdvRepository.findOne(num_rdv);
    }
    
}
