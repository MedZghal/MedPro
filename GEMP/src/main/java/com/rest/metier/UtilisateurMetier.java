/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;


import com.rest.entities.Utilisateur;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface UtilisateurMetier {
    public Utilisateur findByUsername(String username);
    public Utilisateur LoginUser(String username,String pass);
    public List<Utilisateur> findAll();
    
}
