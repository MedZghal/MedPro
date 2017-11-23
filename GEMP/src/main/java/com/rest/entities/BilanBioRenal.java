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
@Table(name = "BilanBioRenal")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBioRenal.findAll", query = "SELECT b FROM BilanBioRenal b"),
    @NamedQuery(name = "BilanBioRenal.findByNumBilan", query = "SELECT b FROM BilanBioRenal b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBioRenal.findByCreatinemie", query = "SELECT b FROM BilanBioRenal b WHERE b.creatinemie = :creatinemie"),
    @NamedQuery(name = "BilanBioRenal.findByUree", query = "SELECT b FROM BilanBioRenal b WHERE b.uree = :uree"),
    @NamedQuery(name = "BilanBioRenal.findByPoids", query = "SELECT b FROM BilanBioRenal b WHERE b.poids = :poids"),
    @NamedQuery(name = "BilanBioRenal.findByClairanceCreatinine", query = "SELECT b FROM BilanBioRenal b WHERE b.clairanceCreatinine = :clairanceCreatinine"),
    @NamedQuery(name = "BilanBioRenal.findByTypSts", query = "SELECT b FROM BilanBioRenal b WHERE b.typSts = :typSts")})
public class BilanBioRenal implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Creatinemie")
    private String creatinemie;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Uree")
    private String uree;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Poids")
    private String poids;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Clairance_Creatinine")
    private String clairanceCreatinine;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typSts")
    private String typSts;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanBioRenal() {
    }

    public BilanBioRenal(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBioRenal(Integer numBilan, String creatinemie, String uree, String poids, String clairanceCreatinine, String typSts) {
        this.numBilan = numBilan;
        this.creatinemie = creatinemie;
        this.uree = uree;
        this.poids = poids;
        this.clairanceCreatinine = clairanceCreatinine;
        this.typSts = typSts;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getCreatinemie() {
        return creatinemie;
    }

    public void setCreatinemie(String creatinemie) {
        this.creatinemie = creatinemie;
    }

    public String getUree() {
        return uree;
    }

    public void setUree(String uree) {
        this.uree = uree;
    }

    public String getPoids() {
        return poids;
    }

    public void setPoids(String poids) {
        this.poids = poids;
    }

    public String getClairanceCreatinine() {
        return clairanceCreatinine;
    }

    public void setClairanceCreatinine(String clairanceCreatinine) {
        this.clairanceCreatinine = clairanceCreatinine;
    }

    public String getTypSts() {
        return typSts;
    }

    public void setTypSts(String typSts) {
        this.typSts = typSts;
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
        if (!(object instanceof BilanBioRenal)) {
            return false;
        }
        BilanBioRenal other = (BilanBioRenal) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanBioRenal[ numBilan=" + numBilan + " ]";
    }
    
}
