/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.Utilisateur;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
@Repository
public interface UtilisateurRepository extends  JpaRepository<Utilisateur, String>{
    @Query("SELECT u FROM Utilisateur u WHERE u.username = :username and u.pass =:pass and u.type IN ('Administrateur','Medecin')")
    public Utilisateur LoginUser(@Param("username") String username,@Param("pass") String pass);

}
