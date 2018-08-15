/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "BilanAAutre")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanAAutre.findAll", query = "SELECT b FROM BilanAAutre b"),
    @NamedQuery(name = "BilanAAutre.findByNumBilan", query = "SELECT b FROM BilanAAutre b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanAAutre.findByNom", query = "SELECT b FROM BilanAAutre b WHERE b.nom = :nom"),
    @NamedQuery(name = "BilanAAutre.findByDescp", query = "SELECT b FROM BilanAAutre b WHERE b.descp = :descp")})
public class BilanAAutre implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nom")
    private String nom;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "descp")
    private String descp;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanAAutre() {
    }

    public BilanAAutre(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanAAutre(Integer numBilan, String nom, String descp) {
        this.numBilan = numBilan;
        this.nom = nom;
        this.descp = descp;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescp() {
        return descp;
    }

    public void setDescp(String descp) {
        this.descp = descp;
    }

    public Consultation getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Consultation numConsult) {
        this.numConsult = numConsult;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numBilan != null ? numBilan.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof BilanAAutre)) {
            return false;
        }
        BilanAAutre other = (BilanAAutre) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanAAutre[ numBilan=" + numBilan + " ]";
    }
    
}
