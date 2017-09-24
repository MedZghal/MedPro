/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Diagnostic")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Diagnostic.findAll", query = "SELECT d FROM Diagnostic d"),
    @NamedQuery(name = "Diagnostic.findByNumDiag", query = "SELECT d FROM Diagnostic d WHERE d.numDiag = :numDiag"),
    @NamedQuery(name = "Diagnostic.findByLibelle", query = "SELECT d FROM Diagnostic d WHERE d.libelle = :libelle")})
public class Diagnostic implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_diag")
    private Integer numDiag;
    @Size(max = 50)
    @Column(name = "libelle")
    private String libelle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "diagconsult")
    private Collection<Consultation> consultationCollection;

    public Diagnostic() {
    }

    public Diagnostic(Integer numDiag) {
        this.numDiag = numDiag;
    }

    public Integer getNumDiag() {
        return numDiag;
    }

    public void setNumDiag(Integer numDiag) {
        this.numDiag = numDiag;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    @XmlTransient
    public Collection<Consultation> getConsultationCollection() {
        return consultationCollection;
    }

    public void setConsultationCollection(Collection<Consultation> consultationCollection) {
        this.consultationCollection = consultationCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numDiag != null ? numDiag.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Diagnostic)) {
            return false;
        }
        Diagnostic other = (Diagnostic) object;
        if ((this.numDiag == null && other.numDiag != null) || (this.numDiag != null && !this.numDiag.equals(other.numDiag))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Diagnostic[ numDiag=" + numDiag + " ]";
    }
    
}
