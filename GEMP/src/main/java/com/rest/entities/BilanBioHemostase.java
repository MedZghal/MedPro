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
@Table(name = "BilanBioHemostase")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanBioHemostase.findAll", query = "SELECT b FROM BilanBioHemostase b"),
    @NamedQuery(name = "BilanBioHemostase.findByNumBilan", query = "SELECT b FROM BilanBioHemostase b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanBioHemostase.findByTypSts", query = "SELECT b FROM BilanBioHemostase b WHERE b.typSts = :typSts"),
    @NamedQuery(name = "BilanBioHemostase.findByTp", query = "SELECT b FROM BilanBioHemostase b WHERE b.tp = :tp"),
    @NamedQuery(name = "BilanBioHemostase.findByInh", query = "SELECT b FROM BilanBioHemostase b WHERE b.inh = :inh"),
    @NamedQuery(name = "BilanBioHemostase.findByTca", query = "SELECT b FROM BilanBioHemostase b WHERE b.tca = :tca"),
    @NamedQuery(name = "BilanBioHemostase.findByFibrin\u00e9me", query = "SELECT b FROM BilanBioHemostase b WHERE b.fibrin\u00e9me = :fibrin\u00e9me")})
public class BilanBioHemostase implements Serializable {

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
    @Column(name = "TP")
    private String tp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "INH")
    private String inh;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "TCA")
    private String tca;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Fibrin\u00e9me")
    private String fibrinéme;
    @JoinColumn(name = "num_conuslt", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConuslt;

    public BilanBioHemostase() {
    }

    public BilanBioHemostase(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanBioHemostase(Integer numBilan, String typSts, String tp, String inh, String tca, String fibrinéme) {
        this.numBilan = numBilan;
        this.typSts = typSts;
        this.tp = tp;
        this.inh = inh;
        this.tca = tca;
        this.fibrinéme = fibrinéme;
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

    public String getTp() {
        return tp;
    }

    public void setTp(String tp) {
        this.tp = tp;
    }

    public String getInh() {
        return inh;
    }

    public void setInh(String inh) {
        this.inh = inh;
    }

    public String getTca() {
        return tca;
    }

    public void setTca(String tca) {
        this.tca = tca;
    }

    public String getFibrinéme() {
        return fibrinéme;
    }

    public void setFibrinéme(String fibrinéme) {
        this.fibrinéme = fibrinéme;
    }

    public Consultation getNumConuslt() {
        return numConuslt;
    }

    public void setNumConuslt(Consultation numConuslt) {
        this.numConuslt = numConuslt;
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
        if (!(object instanceof BilanBioHemostase)) {
            return false;
        }
        BilanBioHemostase other = (BilanBioHemostase) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanBioHemostase[ numBilan=" + numBilan + " ]";
    }
    
}
