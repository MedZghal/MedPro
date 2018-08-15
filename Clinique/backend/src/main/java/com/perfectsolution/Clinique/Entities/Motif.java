/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

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
@Table(name = "Motif")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Motif.findAll", query = "SELECT m FROM Motif m"),
    @NamedQuery(name = "Motif.findByNumMotif", query = "SELECT m FROM Motif m WHERE m.numMotif = :numMotif"),
    @NamedQuery(name = "Motif.findByLibelle", query = "SELECT m FROM Motif m WHERE m.libelle = :libelle")})
public class Motif implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_motif")
    private Integer numMotif;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "libelle")
    private String libelle;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "motif")
    private Collection<MotifConsult> motifConsultCollection;

    public Motif() {
    }

    public Motif(Integer numMotif) {
        this.numMotif = numMotif;
    }

    public Motif(Integer numMotif, String libelle) {
        this.numMotif = numMotif;
        this.libelle = libelle;
    }

    public Integer getNumMotif() {
        return numMotif;
    }

    public void setNumMotif(Integer numMotif) {
        this.numMotif = numMotif;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<MotifConsult> getMotifConsultCollection() {
        return motifConsultCollection;
    }

    public void setMotifConsultCollection(Collection<MotifConsult> motifConsultCollection) {
        this.motifConsultCollection = motifConsultCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numMotif != null ? numMotif.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Motif)) {
            return false;
        }
        Motif other = (Motif) object;
        if ((this.numMotif == null && other.numMotif != null) || (this.numMotif != null && !this.numMotif.equals(other.numMotif))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Motif[ numMotif=" + numMotif + " ]";
    }
    
}
