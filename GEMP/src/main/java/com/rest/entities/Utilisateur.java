/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "utilisateur")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Utilisateur.findAll", query = "SELECT u FROM Utilisateur u"),
    @NamedQuery(name = "Utilisateur.findByUsername", query = "SELECT u FROM Utilisateur u WHERE u.username = :username"),
    @NamedQuery(name = "Utilisateur.findByPass", query = "SELECT u FROM Utilisateur u WHERE u.pass = :pass"),
    @NamedQuery(name = "Utilisateur.findByType", query = "SELECT u FROM Utilisateur u WHERE u.type = :type"),
    @NamedQuery(name = "Utilisateur.findByCodeMedTrit", query = "SELECT u FROM Utilisateur u WHERE u.codeMedTrit = :codeMedTrit"),
    @NamedQuery(name = "Utilisateur.findBySecretaire", query = "SELECT u FROM Utilisateur u WHERE u.secretaire = :secretaire")})
public class Utilisateur implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "username")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "pass")
    private String pass;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type")
    private String type;
    @Basic(optional = false)
    @NotNull
    @Column(name = "code_Med_Trit")
    private int codeMedTrit;
    @Size(max = 50)
    @Column(name = "secretaire")
    private String secretaire;

    
    public Utilisateur() {
    }

    public Utilisateur(String username) {
        this.username = username;
    }

    public Utilisateur(String username, String pass, String type, int codeMedTrit) {
        this.username = username;
        this.pass = pass;
        this.type = type;
        this.codeMedTrit = codeMedTrit;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCodeMedTrit() {
        return codeMedTrit;
    }

    public void setCodeMedTrit(int codeMedTrit) {
        this.codeMedTrit = codeMedTrit;
    }

    public String getSecretaire() {
        return secretaire;
    }

    public void setSecretaire(String secretaire) {
        this.secretaire = secretaire;
    }

    
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (username != null ? username.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Utilisateur)) {
            return false;
        }
        Utilisateur other = (Utilisateur) object;
        if ((this.username == null && other.username != null) || (this.username != null && !this.username.equals(other.username))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Utilisateur[ username=" + username + " ]";
    }
    
}
