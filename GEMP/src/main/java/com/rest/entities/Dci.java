/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "DCI")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Dci.findAll", query = "SELECT d FROM Dci d"),
    @NamedQuery(name = "Dci.findByNumDci", query = "SELECT d FROM Dci d WHERE d.numDci = :numDci"),
    @NamedQuery(name = "Dci.findByLibelle", query = "SELECT d FROM Dci d WHERE d.libelle = :libelle")})
public class Dci implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_dci")
    private Integer numDci;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "libelle")
    private String libelle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dci")
    private Collection<Medicament> medicamentCollection;

    public Dci() {
    }

    public Dci(Integer numDci) {
        this.numDci = numDci;
    }

    public Dci(Integer numDci, String libelle) {
        this.numDci = numDci;
        this.libelle = libelle;
    }

    public Integer getNumDci() {
        return numDci;
    }

    public void setNumDci(Integer numDci) {
        this.numDci = numDci;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<Medicament> getMedicamentCollection() {
        return medicamentCollection;
    }

    public void setMedicamentCollection(Collection<Medicament> medicamentCollection) {
        this.medicamentCollection = medicamentCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numDci != null ? numDci.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Dci)) {
            return false;
        }
        Dci other = (Dci) object;
        if ((this.numDci == null && other.numDci != null) || (this.numDci != null && !this.numDci.equals(other.numDci))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Dci[ numDci=" + numDci + " ]";
    }
    
}
