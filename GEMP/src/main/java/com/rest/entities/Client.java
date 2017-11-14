/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Client")
public class Client implements Serializable{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long codeclient;
private String nomclient;
@OneToMany(mappedBy = "client",fetch = FetchType.EAGER)
private Collection<Compte> compte ;

    public Client() {
        super();
    }


    public void setCodeclient(long codeclient) {
        this.codeclient = codeclient;
    }

    public void setNomclient(String nomclient) {
        this.nomclient = nomclient;
    }

    public void setCompte(Collection<Compte> compte) {
        this.compte = compte;
    }

    public long getCodeclient() {
        return codeclient;
    }

    public String getNomclient() {
        return nomclient;
    }

    @JsonIgnore
    public Collection<Compte> getCompte() {
        return compte;
    }

    public Client(String nomclient) {
        this.nomclient = nomclient;
    }

}
