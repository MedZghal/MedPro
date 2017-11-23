/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.ConsultationRepository;
import com.rest.entities.Consultation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class ConsultationMetierImpl implements ConsultationMetier{

    @Autowired
    private ConsultationRepository consultationRepository;

    @Override
    public List<Consultation> getListConsultationsbyPatient(int num_patient) {
        return consultationRepository.getListConsultationsbyPatient(num_patient);
    }

    @Override
    public Consultation FindConsult(int num_consult) {
        return consultationRepository.findOne(num_consult);
    }
    
}
