/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Compte;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface CompteMetier {
    public Compte saveCompte(Compte c);
    public Compte getCompte(String code);
    public List<Compte> listCompte();
    
}
