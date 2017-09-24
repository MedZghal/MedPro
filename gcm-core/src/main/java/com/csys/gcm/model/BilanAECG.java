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
@Table(name = "BilanAECG")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BilanAECG.findAll", query = "SELECT b FROM BilanAECG b"),
    @NamedQuery(name = "BilanAECG.findByNumBilan", query = "SELECT b FROM BilanAECG b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BilanAECG.findByDescrp", query = "SELECT b FROM BilanAECG b WHERE b.descrp = :descrp")})
public class BilanAECG implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "descrp")
    private String descrp;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BilanAECG() {
    }

    public BilanAECG(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BilanAECG(Integer numBilan, String descrp) {
        this.numBilan = numBilan;
        this.descrp = descrp;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getDescrp() {
        return descrp;
    }

    public void setDescrp(String descrp) {
        this.descrp = descrp;
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
        if (!(object instanceof BilanAECG)) {
            return false;
        }
        BilanAECG other = (BilanAECG) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.BilanAECG[ numBilan=" + numBilan + " ]";
    }
    
}
