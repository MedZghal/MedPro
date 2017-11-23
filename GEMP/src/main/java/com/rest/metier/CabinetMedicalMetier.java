/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.CabinetMedical;

/**
 *
 * @author ASUS
 */
public interface CabinetMedicalMetier {
    public CabinetMedical findByCodeMed(int codeMed);
    
}
