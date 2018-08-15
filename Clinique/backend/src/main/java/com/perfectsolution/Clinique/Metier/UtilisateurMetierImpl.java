/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.UtilisateurRepository;
import com.perfectsolution.Clinique.Entities.Utilisateur;
import java.util.List;
import java.util.Optional;
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
    public List<Utilisateur> findAll() {
        return (List<Utilisateur>) UtilisateurRepository.findAll();
    }

    @Override
    public Utilisateur LoginUser(String username, String pass) {
            return UtilisateurRepository.LoginUser(username, pass);
    }

    @Override
    public Optional<Utilisateur> findByUsername(String username) {
        return UtilisateurRepository.findById(username);
    }
   
    
    
}
