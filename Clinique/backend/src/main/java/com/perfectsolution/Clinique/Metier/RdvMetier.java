/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Entities.Rdv;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author ASUS
 */
public interface RdvMetier {
    public List<Rdv> getRdvbyPatient(int num_patient);
    public List<Rdv> getRdvbyMed( int num_med);
    public List<Rdv> getRdvbyMedDate(int num_med, java.util.Date datestart, java.util.Date datefin);
    public Optional<Rdv> FindRdv(int num_rdv);
}
