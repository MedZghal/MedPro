/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.CabinetMedicalRepository;
import com.rest.entities.CabinetMedical;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class CabinetMedicalMetierImpl implements CabinetMedicalMetier{

    @Autowired
    private CabinetMedicalRepository cabinetMedicalRepository;
    
    @Override
    public CabinetMedical findByCodeMed(int codeMed) {
        CabinetMedical cab = cabinetMedicalRepository.findByCodeMed(codeMed);
        return  cab== null ? null:cab;
    }
    
}
