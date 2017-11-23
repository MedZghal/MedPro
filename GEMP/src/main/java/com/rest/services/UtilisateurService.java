/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.entities.Utilisateur;
import com.rest.metier.UtilisateurMetier;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(value = "/Utilisateur", method = RequestMethod.GET)
    public Utilisateur findByUsername(@RequestParam String username) {
        return metier.findByUsername(username);
    }
    
    @RequestMapping(value = "/Utilisateurs", method = RequestMethod.GET)
    public List<Utilisateur> findAll() {
        return metier.findAll();
    }
    
    @RequestMapping(value = "/LoginUser", method = RequestMethod.GET)
    public List<Utilisateur> LoginUser(@RequestParam String username,@RequestParam String pass) {
        List<Utilisateur> rep = new ArrayList<>();
          rep.add(metier.LoginUser(username, pass));
        return rep;
    }
    
    
}
