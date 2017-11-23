/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Rdv;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface RdvMetier {
    public Rdv FindRdv(int num_rdv);
    public List<Rdv> getRdvbyPatient(int num_patient);
    
}
