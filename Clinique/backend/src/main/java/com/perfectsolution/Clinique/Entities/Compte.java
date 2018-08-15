/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 *
 * @author ASUS
 */
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE_CPTE",discriminatorType = DiscriminatorType.STRING,length = 2)

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME,include = JsonTypeInfo.As.PROPERTY,property = "type")
@JsonSubTypes({
    @JsonSubTypes.Type(name = "CC",value = CompteCourant.class),
    @JsonSubTypes.Type(name = "CE",value = CompteEpargne.class)
})
public  abstract class Compte implements Serializable{
    @Id
    private String codeCompte;
    private Date datecreation;
    private double solde;
    @ManyToOne
    @JoinColumn(name = "CODE_CLI")
    private Client client;

    @OneToMany(mappedBy = "compte")
    private Collection<Operation> operations;

    @JsonIgnore
    public Collection<Operation> getOperations() {
        return operations;
    }

    @JsonSetter
    public void setOperations(Collection<Operation> operations) {
        this.operations = operations;
    }
    
    public Compte(String codeCompte, Date datecreation, double solde, Client client) {
        this.codeCompte = codeCompte;
        this.datecreation = datecreation;
        this.solde = solde;
        this.client = client;
    }
    public Compte(String codeCompte, Date datecreation, double solde) {
        super();
        this.codeCompte = codeCompte;
        this.datecreation = datecreation;
        this.solde = solde;
    }

    public String getCodeCompte() {
        return codeCompte;
    }

    public Date getDatecreation() {
        return datecreation;
    }

    public double getSolde() {
        return solde;
    }

    public Client getClient() {
        return client;
    }

    public void setCodeCompte(String codeCompte) {
        this.codeCompte = codeCompte;
    }

    public void setDatecreation(Date datecreation) {
        this.datecreation = datecreation;
    }

    public void setSolde(double solde) {
        this.solde = solde;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Compte() {
        super();
    }

    @Override
    public String toString() {
        return "Compte{" + "codeCompte=" + codeCompte + ", datecreation=" + datecreation + ", solde=" + solde + '}';
    }
    
}
