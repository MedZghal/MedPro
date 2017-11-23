/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
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
@Table(name = "Posologie")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Posologie.findAll", query = "SELECT p FROM Posologie p"),
    @NamedQuery(name = "Posologie.findByNumPosologie", query = "SELECT p FROM Posologie p WHERE p.numPosologie = :numPosologie"),
    @NamedQuery(name = "Posologie.findByDescripPosol", query = "SELECT p FROM Posologie p WHERE p.descripPosol = :descripPosol")})
public class Posologie implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_posologie")
    private Integer numPosologie;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "descrip_posol")
    private String descripPosol;
    @ManyToMany(mappedBy = "posologieCollection")
    private Collection<Medicament> medicamentCollection;

    public Posologie() {
    }

    public Posologie(Integer numPosologie) {
        this.numPosologie = numPosologie;
    }

    public Posologie(Integer numPosologie, String descripPosol) {
        this.numPosologie = numPosologie;
        this.descripPosol = descripPosol;
    }

    public Integer getNumPosologie() {
        return numPosologie;
    }

    public void setNumPosologie(Integer numPosologie) {
        this.numPosologie = numPosologie;
    }

    public String getDescripPosol() {
        return descripPosol;
    }

    public void setDescripPosol(String descripPosol) {
        this.descripPosol = descripPosol;
    }

    @XmlTransient
    public Collection<Medicament> getMedicamentCollection() {
        return medicamentCollection;
    }

    public void setMedicamentCollection(Collection<Medicament> medicamentCollection) {
        this.medicamentCollection = medicamentCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numPosologie != null ? numPosologie.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Posologie)) {
            return false;
        }
        Posologie other = (Posologie) object;
        if ((this.numPosologie == null && other.numPosologie != null) || (this.numPosologie != null && !this.numPosologie.equals(other.numPosologie))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Posologie[ numPosologie=" + numPosologie + " ]";
    }
    
}
