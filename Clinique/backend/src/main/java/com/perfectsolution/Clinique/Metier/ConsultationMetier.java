/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Entities.Consultation;
import java.util.List;
import java.util.Optional;
/**
 *
 * @author ASUS
 */
public interface ConsultationMetier {
    public List<Consultation> getListConsultationsbyPatient(int num_patient);
    public Optional<Consultation> FindConsult(int num_consult);
}
