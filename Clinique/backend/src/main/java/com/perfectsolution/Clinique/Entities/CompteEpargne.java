/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import java.util.Date;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

/**
 *
 * @author ASUS
 */
@Entity
@DiscriminatorValue("CE")
public class CompteEpargne extends Compte{
    private double taux;

    public void setTaux(double taux) {
        this.taux = taux;
    }

    public double getTaux() {
        return taux;
    }

    public CompteEpargne() {
    }

    public CompteEpargne(double taux, String codeCompte, Date datecreation, double solde) {
        super(codeCompte, datecreation, solde);
        this.taux = taux;
    }
    
    
    
}
