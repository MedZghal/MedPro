/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.RdvRepository;
import com.perfectsolution.Clinique.Entities.Rdv;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class RdvMetierImpl implements RdvMetier{
    
    @Autowired
    public RdvRepository rdvRepository;

    @Override
    public List<Rdv> getRdvbyPatient(int num_patient) {
        return rdvRepository.getRdvbyPatient(num_patient);
    }

    @Override
    public Optional<Rdv> FindRdv(int num_rdv) {
        return rdvRepository.findById(num_rdv);
    }

    @Override
    public List<Rdv> getRdvbyMed(int num_med) {
        return  rdvRepository.getRdvbyMed(num_med);
    }
    
    @Override
    public List<Rdv> getRdvbyMedDate(int num_med, java.util.Date datestart, java.util.Date datefin) {
        return  rdvRepository.getRdvbyMedDate(num_med, datestart, datefin);
    }
    
    
}
