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
@Table(name = "BilanBioinflam")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBioinflam.findAll", query = "SELECT b FROM BilanBioinflam b"),
    @NamedQuery(name = "BilanBioinflam.findByNumBilan", query = "SELECT b FROM BilanBioinflam b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBioinflam.findByVs", query = "SELECT b FROM BilanBioinflam b WHERE b.vs = :vs"),
    @NamedQuery(name = "BilanBioinflam.findByCrp", query = "SELECT b FROM BilanBioinflam b WHERE b.crp = :crp"),
    @NamedQuery(name = "BilanBioinflam.findByTypSts", query = "SELECT b FROM BilanBioinflam b WHERE b.typSts = :typSts")})
public class BilanBioinflam implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "VS")
    private String vs;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "CRP")
    private String crp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typSts")
    private String typSts;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanBioinflam() {
    }

    public BilanBioinflam(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBioinflam(Integer numBilan, String vs, String crp, String typSts) {
        this.numBilan = numBilan;
        this.vs = vs;
        this.crp = crp;
        this.typSts = typSts;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getVs() {
        return vs;
    }

    public void setVs(String vs) {
        this.vs = vs;
    }

    public String getCrp() {
        return crp;
    }

    public void setCrp(String crp) {
        this.crp = crp;
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
        if (!(object instanceof BilanBioinflam)) {
            return false;
        }
        BilanBioinflam other = (BilanBioinflam) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanBioinflam[ numBilan=" + numBilan + " ]";
    }
    
}
