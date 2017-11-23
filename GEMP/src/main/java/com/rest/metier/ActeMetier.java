/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Acte;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface ActeMetier {
    public List<Acte> getListActesbyPatient(int num_patient);
    
}
