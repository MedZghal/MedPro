/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
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
@Table(name = "Traitementapci")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TraitementAPCI.findAll", query = "SELECT t FROM TraitementAPCI t"),
    @NamedQuery(name = "TraitementAPCI.findByNumPatient", query = "SELECT t FROM TraitementAPCI t WHERE t.traitementAPCIPK.numPatient = :numPatient"),
    @NamedQuery(name = "TraitementAPCI.findByNumMedic", query = "SELECT t FROM TraitementAPCI t WHERE t.traitementAPCIPK.numMedic = :numMedic"),
    @NamedQuery(name = "TraitementAPCI.findByDescription", query = "SELECT t FROM TraitementAPCI t WHERE t.description = :description")})
public class TraitementAPCI implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected TraitementAPCIPK traitementAPCIPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "description")
    private String description;
    @JoinColumn(name = "num_medic", referencedColumnName = "num_medic", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Medicament medicament;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Patient patient;

    public TraitementAPCI() {
    }

    public TraitementAPCI(TraitementAPCIPK traitementAPCIPK) {
        this.traitementAPCIPK = traitementAPCIPK;
    }

    public TraitementAPCI(TraitementAPCIPK traitementAPCIPK, String description) {
        this.traitementAPCIPK = traitementAPCIPK;
        this.description = description;
    }

    public TraitementAPCI(int numPatient, int numMedic) {
        this.traitementAPCIPK = new TraitementAPCIPK(numPatient, numMedic);
    }

    public TraitementAPCIPK getTraitementAPCIPK() {
        return traitementAPCIPK;
    }

    public void setTraitementAPCIPK(TraitementAPCIPK traitementAPCIPK) {
        this.traitementAPCIPK = traitementAPCIPK;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Medicament getMedicament() {
        return medicament;
    }

    public void setMedicament(Medicament medicament) {
        this.medicament = medicament;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (traitementAPCIPK != null ? traitementAPCIPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TraitementAPCI)) {
            return false;
        }
        TraitementAPCI other = (TraitementAPCI) object;
        if ((this.traitementAPCIPK == null && other.traitementAPCIPK != null) || (this.traitementAPCIPK != null && !this.traitementAPCIPK.equals(other.traitementAPCIPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.TraitementAPCI[ traitementAPCIPK=" + traitementAPCIPK + " ]";
    }
    
}
