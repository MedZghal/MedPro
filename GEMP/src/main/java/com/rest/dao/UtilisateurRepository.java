/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.dao;

import com.rest.entities.Utilisateur;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface UtilisateurRepository extends  CrudRepository<Utilisateur, String>{
    @Query("SELECT u FROM Utilisateur u WHERE u.username = :username and u.pass =:pass and u.type IN ('Administrateur','Medecin')")
    public Utilisateur LoginUser(@Param("username") String username,@Param("pass") String pass);
}
