/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

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
@Table(name = "Param")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Param.findAll", query = "SELECT p FROM Param p"),
    @NamedQuery(name = "Param.findByCode", query = "SELECT p.valeur FROM Param p WHERE p.code = :code"),
    @NamedQuery(name = "Param.findByValeur", query = "SELECT p FROM Param p WHERE p.valeur = :valeur"),
    @NamedQuery(name = "Param.findByDescription", query = "SELECT p FROM Param p WHERE p.description = :description")})
public class Param implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "code")
    private String code;
    @Basic(optional = false)
    @NotNull
    @Column(name = "valeur")
    private int valeur;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "description")
    private String description;

    public Param() {
    }

    public Param(String code) {
        this.code = code;
    }

    public Param(String code, int valeur, String description) {
        this.code = code;
        this.valeur = valeur;
        this.description = description;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getValeur() {
        return valeur;
    }

    public void setValeur(int valeur) {
        this.valeur = valeur;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (code != null ? code.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Param)) {
            return false;
        }
        Param other = (Param) object;
        if ((this.code == null && other.code != null) || (this.code != null && !this.code.equals(other.code))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Param[ code=" + code + " ]";
    }
    
}
