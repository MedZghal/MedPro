/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author ASUS
 */
public interface UtilisateurRepository extends  JpaRepository<Utilisateur, String>{
 public Utilisateur findByUsername(String username); 
}
