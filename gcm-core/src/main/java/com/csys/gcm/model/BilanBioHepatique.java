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
@Table(name = "BilanBioHepatique")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBioHepatique.findAll", query = "SELECT b FROM BilanBioHepatique b"),
    @NamedQuery(name = "BilanBioHepatique.findByNumBilan", query = "SELECT b FROM BilanBioHepatique b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBioHepatique.findByTypSts", query = "SELECT b FROM BilanBioHepatique b WHERE b.typSts = :typSts"),
    @NamedQuery(name = "BilanBioHepatique.findByBilirubinetotal", query = "SELECT b FROM BilanBioHepatique b WHERE b.bilirubinetotal = :bilirubinetotal"),
    @NamedQuery(name = "BilanBioHepatique.findByBilirubineConjugue", query = "SELECT b FROM BilanBioHepatique b WHERE b.bilirubineConjugue = :bilirubineConjugue"),
    @NamedQuery(name = "BilanBioHepatique.findBySgotSgpt", query = "SELECT b FROM BilanBioHepatique b WHERE b.sgotSgpt = :sgotSgpt"),
    @NamedQuery(name = "BilanBioHepatique.findByGammaGT", query = "SELECT b FROM BilanBioHepatique b WHERE b.gammaGT = :gammaGT"),
    @NamedQuery(name = "BilanBioHepatique.findByPhAlcalines", query = "SELECT b FROM BilanBioHepatique b WHERE b.phAlcalines = :phAlcalines")})
public class BilanBioHepatique implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typSts")
    private String typSts;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Bilirubine_total")
    private String bilirubinetotal;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Bilirubine_Conjugue")
    private String bilirubineConjugue;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "SGOT_SGPT")
    private String sgotSgpt;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "gammaGT")
    private String gammaGT;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Ph_Alcalines")
    private String phAlcalines;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanBioHepatique() {
    }

    public BilanBioHepatique(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBioHepatique(Integer numBilan, String typSts, String bilirubinetotal, String bilirubineConjugue, String sgotSgpt, String gammaGT, String phAlcalines) {
        this.numBilan = numBilan;
        this.typSts = typSts;
        this.bilirubinetotal = bilirubinetotal;
        this.bilirubineConjugue = bilirubineConjugue;
        this.sgotSgpt = sgotSgpt;
        this.gammaGT = gammaGT;
        this.phAlcalines = phAlcalines;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getTypSts() {
        return typSts;
    }

    public void setTypSts(String typSts) {
        this.typSts = typSts;
    }

    public String getBilirubinetotal() {
        return bilirubinetotal;
    }

    public void setBilirubinetotal(String bilirubinetotal) {
        this.bilirubinetotal = bilirubinetotal;
    }

    public String getBilirubineConjugue() {
        return bilirubineConjugue;
    }

    public void setBilirubineConjugue(String bilirubineConjugue) {
        this.bilirubineConjugue = bilirubineConjugue;
    }

    public String getSgotSgpt() {
        return sgotSgpt;
    }

    public void setSgotSgpt(String sgotSgpt) {
        this.sgotSgpt = sgotSgpt;
    }

    public String getGammaGT() {
        return gammaGT;
    }

    public void setGammaGT(String gammaGT) {
        this.gammaGT = gammaGT;
    }

    public String getPhAlcalines() {
        return phAlcalines;
    }

    public void setPhAlcalines(String phAlcalines) {
        this.phAlcalines = phAlcalines;
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
        if (!(object instanceof BilanBioHepatique)) {
            return false;
        }
        BilanBioHepatique other = (BilanBioHepatique) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.BilanBioHepatique[ numBilan=" + numBilan + " ]";
    }
    
}
