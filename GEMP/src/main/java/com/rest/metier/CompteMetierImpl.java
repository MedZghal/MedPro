/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.CompteRepository;
import com.rest.entities.Compte;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class CompteMetierImpl implements CompteMetier{

    @Autowired
    private CompteRepository compteRepository;
    @Override
    public Compte saveCompte(Compte c) {
        c.setDatecreation(new Date());
        return compteRepository.save(c);
    }

    @Override
    public Compte getCompte(String code) {
        return compteRepository.findOne(code);
    }

    @Override
    public List<Compte> listCompte() {
        return compteRepository.findAll();
    }
    
}
