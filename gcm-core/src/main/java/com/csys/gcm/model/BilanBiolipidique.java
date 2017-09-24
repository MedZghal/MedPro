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
@Table(name = "BilanBiolipidique")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBiolipidique.findAll", query = "SELECT b FROM BilanBiolipidique b"),
    @NamedQuery(name = "BilanBiolipidique.findByNumBilan", query = "SELECT b FROM BilanBiolipidique b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBiolipidique.findByCholesterol", query = "SELECT b FROM BilanBiolipidique b WHERE b.cholesterol = :cholesterol"),
    @NamedQuery(name = "BilanBiolipidique.findByTriglycerides", query = "SELECT b FROM BilanBiolipidique b WHERE b.triglycerides = :triglycerides"),
    @NamedQuery(name = "BilanBiolipidique.findByHdl", query = "SELECT b FROM BilanBiolipidique b WHERE b.hdl = :hdl"),
    @NamedQuery(name = "BilanBiolipidique.findByLdl", query = "SELECT b FROM BilanBiolipidique b WHERE b.ldl = :ldl"),
    @NamedQuery(name = "BilanBiolipidique.findByTypSts", query = "SELECT b FROM BilanBiolipidique b WHERE b.typSts = :typSts")})
public class BilanBiolipidique implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "cholesterol")
    private String cholesterol;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "triglycerides")
    private String triglycerides;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "HDL")
    private String hdl;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "LDL")
    private String ldl;
    @Size(max = 50)
    @Column(name = "typSts")
    private String typSts;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanBiolipidique() {
    }

    public BilanBiolipidique(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBiolipidique(Integer numBilan, String cholesterol, String triglycerides, String hdl, String ldl) {
        this.numBilan = numBilan;
        this.cholesterol = cholesterol;
        this.triglycerides = triglycerides;
        this.hdl = hdl;
        this.ldl = ldl;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getCholesterol() {
        return cholesterol;
    }

    public void setCholesterol(String cholesterol) {
        this.cholesterol = cholesterol;
    }

    public String getTriglycerides() {
        return triglycerides;
    }

    public void setTriglycerides(String triglycerides) {
        this.triglycerides = triglycerides;
    }

    public String getHdl() {
        return hdl;
    }

    public void setHdl(String hdl) {
        this.hdl = hdl;
    }

    public String getLdl() {
        return ldl;
    }

    public void setLdl(String ldl) {
        this.ldl = ldl;
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
        if (!(object instanceof BilanBiolipidique)) {
            return false;
        }
        BilanBiolipidique other = (BilanBiolipidique) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.BilanBiolipidique[ numBilan=" + numBilan + " ]";
    }
    
}
