/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Utilisateur;
import com.perfectsolution.Clinique.Metier.UtilisateurMetier;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@RestController
public class UtilisateurService {
    @Autowired
    private UtilisateurMetier metier;

    @GetMapping("/Utilisateur")
    public Optional<Utilisateur> findByUsername(@RequestParam String username) {
        return metier.findByUsername(username);
    }
    
    @GetMapping("/Utilisateurs")
    public List<Utilisateur> findAll() {
        return metier.findAll();
    }
    
    @GetMapping("/LoginUser")
    public List<Utilisateur> LoginUser(@RequestParam String username,@RequestParam String pass) {
        List<Utilisateur> rep = new ArrayList<>();
          rep.add(metier.LoginUser(username, pass));
        return rep;
    }
    
    
}
