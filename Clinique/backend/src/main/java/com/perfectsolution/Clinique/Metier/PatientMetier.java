/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Entities.Patient;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author ASUS
 */
public interface PatientMetier {
    public Optional<Patient> GetPatientById(int num_patient) ;
    public List<Patient> listPatients();
    
}
