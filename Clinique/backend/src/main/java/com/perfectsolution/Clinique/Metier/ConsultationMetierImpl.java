/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.ConsultationRepository;
import com.perfectsolution.Clinique.Entities.Consultation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class ConsultationMetierImpl implements ConsultationMetier{

    @Autowired
    public ConsultationRepository consultationRepository;
    
    @Override
    public List<Consultation> getListConsultationsbyPatient(int num_patient) {
        return consultationRepository.getListConsultationsbyPatient(num_patient);
    }

    @Override
    public Optional<Consultation> FindConsult(int num_consult) {
        return consultationRepository.findById(num_consult);
    }
    
}
