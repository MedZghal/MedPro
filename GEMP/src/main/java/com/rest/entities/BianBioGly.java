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
@Table(name = "BianBioGly")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "BianBioGly.findAll", query = "SELECT b FROM BianBioGly b"),
    @NamedQuery(name = "BianBioGly.findByNumBilan", query = "SELECT b FROM BianBioGly b WHERE b.numBilan = :numBilan"),
    @NamedQuery(name = "BianBioGly.findByTaux", query = "SELECT b FROM BianBioGly b WHERE b.taux = :taux"),
    @NamedQuery(name = "BianBioGly.findByTypSts", query = "SELECT b FROM BianBioGly b WHERE b.typSts = :typSts")})
public class BianBioGly implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_bilan")
    private Integer numBilan;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "taux")
    private String taux;
    @Size(max = 50)
    @Column(name = "typSts")
    private String typSts;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public BianBioGly() {
    }

    public BianBioGly(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public BianBioGly(Integer numBilan, String taux) {
        this.numBilan = numBilan;
        this.taux = taux;
    }

    public Integer getNumBilan() {
        return numBilan;
    }

    public void setNumBilan(Integer numBilan) {
        this.numBilan = numBilan;
    }

    public String getTaux() {
        return taux;
    }

    public void setTaux(String taux) {
        this.taux = taux;
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
        if (!(object instanceof BianBioGly)) {
            return false;
        }
        BianBioGly other = (BianBioGly) object;
        if ((this.numBilan == null && other.numBilan != null) || (this.numBilan != null && !this.numBilan.equals(other.numBilan))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.BianBioGly[ numBilan=" + numBilan + " ]";
    }
    
}
