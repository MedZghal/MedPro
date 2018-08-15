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
@Table(name = "BilanBioNFS")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBioNFS.findAll", query = "SELECT b FROM BilanBioNFS b"),
    @NamedQuery(name = "BilanBioNFS.findByNumBilan", query = "SELECT b FROM BilanBioNFS b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBioNFS.findByTypSts", query = "SELECT b FROM BilanBioNFS b WHERE b.typSts = :typSts"),
    @NamedQuery(name = "BilanBioNFS.findByH\u00e9moglobine", query = "SELECT b FROM BilanBioNFS b WHERE b.h\u00e9moglobine = :h\u00e9moglobine"),
    @NamedQuery(name = "BilanBioNFS.findByGlobunesBlancs", query = "SELECT b FROM BilanBioNFS b WHERE b.globunesBlancs = :globunesBlancs"),
    @NamedQuery(name = "BilanBioNFS.findByPlaquettes", query = "SELECT b FROM BilanBioNFS b WHERE b.plaquettes = :plaquettes")})
public class BilanBioNFS implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "numBilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typSts")
    private String typSts;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "H\u00e9moglobine")
    private String hémoglobine;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Globunes_Blancs")
    private String globunesBlancs;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "plaquettes")
    private String plaquettes;
    @JoinColumn(name = "num_Consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanBioNFS() {
    }

    public BilanBioNFS(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBioNFS(Integer numBilan, String typSts, String hémoglobine, String globunesBlancs, String plaquettes) {
        this.numBilan = numBilan;
        this.typSts = typSts;
        this.hémoglobine = hémoglobine;
        this.globunesBlancs = globunesBlancs;
        this.plaquettes = plaquettes;
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

    public String getHémoglobine() {
        return hémoglobine;
    }

    public void setHémoglobine(String hémoglobine) {
        this.hémoglobine = hémoglobine;
    }

    public String getGlobunesBlancs() {
        return globunesBlancs;
    }

    public void setGlobunesBlancs(String globunesBlancs) {
        this.globunesBlancs = globunesBlancs;
    }

    public String getPlaquettes() {
        return plaquettes;
    }

    public void setPlaquettes(String plaquettes) {
        this.plaquettes = plaquettes;
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
        if (!(object instanceof BilanBioNFS)) {
            return false;
        }
        BilanBioNFS other = (BilanBioNFS) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanBioNFS[ numBilan=" + numBilan + " ]";
    }
    
}
