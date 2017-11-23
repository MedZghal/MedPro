/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Consultation;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface ConsultationMetier {
    public Consultation FindConsult(int num_consult );
    public List<Consultation> getListConsultationsbyPatient(int num_patient);
    
}
