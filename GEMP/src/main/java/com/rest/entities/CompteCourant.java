/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import java.util.Date;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

/**
 *
 * @author ASUS
 */
@Entity
@DiscriminatorValue("CC")
public class CompteCourant extends Compte{
    private double decouvert;

    public void setDecouvert(double decouvert) {
        this.decouvert = decouvert;
    }

    public double getDecouvert() {
        return decouvert;
    }
    
    public CompteCourant(){
        super();
    }

    public CompteCourant(double decouvert, String codeCompte, Date datecreation, double solde, Client c1) {
        super(codeCompte, datecreation, solde,c1);
        this.decouvert = decouvert;
    }

    @Override
    public String toString() {
        return "CompteCourant{" + "decouvert=" + decouvert + '}';
    }

    
    
    
}

