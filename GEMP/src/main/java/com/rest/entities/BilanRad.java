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
@Table(name = "BilanRad")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanRad.findAll", query = "SELECT b FROM BilanRad b"),
    @NamedQuery(name = "BilanRad.findByNumBilan", query = "SELECT b FROM BilanRad b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanRad.findByNom", query = "SELECT b FROM BilanRad b WHERE b.nom = :nom"),
    @NamedQuery(name = "BilanRad.findByDescrp", query = "SELECT b FROM BilanRad b WHERE b.descrp = :descrp"),
    @NamedQuery(name = "BilanRad.findByTypebilan", query = "SELECT b FROM BilanRad b WHERE b.typebilan = :typebilan")})
public class BilanRad implements Serializable {

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
    @Column(name = "descrp")
    private String descrp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typebilan")
    private String typebilan;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanRad() {
    }

    public BilanRad(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanRad(Integer numBilan, String nom, String descrp, String typebilan) {
        this.numBilan = numBilan;
        this.nom = nom;
        this.descrp = descrp;
        this.typebilan = typebilan;
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

    public String getDescrp() {
        return descrp;
    }

    public void setDescrp(String descrp) {
        this.descrp = descrp;
    }

    public String getTypebilan() {
        return typebilan;
    }

    public void setTypebilan(String typebilan) {
        this.typebilan = typebilan;
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
        if (!(object instanceof BilanRad)) {
            return false;
        }
        BilanRad other = (BilanRad) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanRad[ numBilan=" + numBilan + " ]";
    }
    
}
