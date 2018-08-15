/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;


import com.perfectsolution.Clinique.Entities.Utilisateur;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author ASUS
 */
public interface UtilisateurMetier {
    public Optional<Utilisateur> findByUsername(String username);
    public Utilisateur LoginUser(String username,String pass);
    public List<Utilisateur> findAll();
    
}
