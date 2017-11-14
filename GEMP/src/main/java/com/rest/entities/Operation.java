/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author ASUS
 */
@Entity
public class Operation implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroOper;
    private Date dateopr;
    private double mnt;
    @ManyToOne
    @JoinColumn(name = "CODE_CPTE")
    private Compte compte;

    public Long getNumeroOper() {
        return numeroOper;
    }

    public void setNumeroOper(Long numeroOper) {
        this.numeroOper = numeroOper;
    }

    public Date getDateopr() {
        return dateopr;
    }

    public void setDateopr(Date dateopr) {
        this.dateopr = dateopr;
    }

    public double getMnt() {
        return mnt;
    }

    public void setMnt(double mnt) {
        this.mnt = mnt;
    }

    public Compte getCompte() {
        return compte;
    }

    public void setCompte(Compte compte) {
        this.compte = compte;
    }

    public Operation() {
    }

    public Operation(Long numeroOper, Date dateopr, double mnt) {
        this.numeroOper = numeroOper;
        this.dateopr = dateopr;
        this.mnt = mnt;
    }
    
    
    
}
