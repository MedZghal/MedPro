/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Entities.Patient;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface FichPatientMetier {
    public List<Patient> getPatientByCodMed(int codeMedTrit);
    public List<Patient> getPatientPartagByCodMed(int codeMedTrit);
}
