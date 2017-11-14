/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.UtilisateurRepository;
import com.rest.entities.Utilisateur;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class UtilisateurMetierImpl implements UtilisateurMetier{

    @Autowired
    private UtilisateurRepository UtilisateurRepository;

    @Override
    public Utilisateur findByUsername(String username) {
        return  UtilisateurRepository.findOne(username);
    }

    @Override
    public List<Utilisateur> findAll() {
        return UtilisateurRepository.findAll();
    }
   
    
    
}
