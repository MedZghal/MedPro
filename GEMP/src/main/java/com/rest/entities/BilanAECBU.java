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
@Table(name = "BilanAECBU")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanAECBU.findAll", query = "SELECT b FROM BilanAECBU b"),
    @NamedQuery(name = "BilanAECBU.findByNumBilan", query = "SELECT b FROM BilanAECBU b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanAECBU.findByBacteriurie", query = "SELECT b FROM BilanAECBU b WHERE b.bacteriurie = :bacteriurie"),
    @NamedQuery(name = "BilanAECBU.findByLeucocyturie", query = "SELECT b FROM BilanAECBU b WHERE b.leucocyturie = :leucocyturie"),
    @NamedQuery(name = "BilanAECBU.findByTypSts", query = "SELECT b FROM BilanAECBU b WHERE b.typSts = :typSts")})
public class BilanAECBU implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "bacteriurie")
    private String bacteriurie;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "leucocyturie")
    private String leucocyturie;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typSts")
    private String typSts;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanAECBU() {
    }

    public BilanAECBU(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanAECBU(Integer numBilan, String bacteriurie, String leucocyturie, String typSts) {
        this.numBilan = numBilan;
        this.bacteriurie = bacteriurie;
        this.leucocyturie = leucocyturie;
        this.typSts = typSts;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getBacteriurie() {
        return bacteriurie;
    }

    public void setBacteriurie(String bacteriurie) {
        this.bacteriurie = bacteriurie;
    }

    public String getLeucocyturie() {
        return leucocyturie;
    }

    public void setLeucocyturie(String leucocyturie) {
        this.leucocyturie = leucocyturie;
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
        if (!(object instanceof BilanAECBU)) {
            return false;
        }
        BilanAECBU other = (BilanAECBU) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BilanAECBU[ numBilan=" + numBilan + " ]";
    }
    
}
