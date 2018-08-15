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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "Medicament")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Medicament.findAll", query = "SELECT m FROM Medicament m"),
    @NamedQuery(name = "Medicament.findByNumMedic", query = "SELECT m FROM Medicament m WHERE m.numMedic = :numMedic"),
    @NamedQuery(name = "Medicament.findByDesgMedic", query = "SELECT m FROM Medicament m WHERE m.desgMedic = :desgMedic"),
    @NamedQuery(name = "Medicament.findByPrix", query = "SELECT m FROM Medicament m WHERE m.prix = :prix"),
    @NamedQuery(name = "Medicament.findByGenerique", query = "SELECT m FROM Medicament m WHERE m.generique = :generique"),
    @NamedQuery(name = "Medicament.findByCatgCnam", query = "SELECT m FROM Medicament m WHERE m.catgCnam = :catgCnam")})
public class Medicament implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_medic")
    private Integer numMedic;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "desg_medic")
    private String desgMedic;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "prix")
    private String prix;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "generique")
    private String generique;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "catg_cnam")
    private String catgCnam;
    @JoinTable(name = "Medci_Posologie", joinColumns = {
        @JoinColumn(name = "num_Medci", referencedColumnName = "num_medic")}, inverseJoinColumns = {
        @JoinColumn(name = "num_pso", referencedColumnName = "num_posologie")})
    @ManyToMany
    private Collection<Posologie> posologieCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "medicament")
    private Collection<TraitementAPCI> traitementAPCICollection;
    @JoinColumn(name = "DCI", referencedColumnName = "num_dci")
    @ManyToOne(optional = false)
    private Dci dci;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "medicament")
    private Collection<PrescriptionOrd> prescriptionOrdCollection;

    public Medicament() {
    }

    public Medicament(Integer numMedic) {
        this.numMedic = numMedic;
    }

    public Medicament(Integer numMedic, String desgMedic, String prix, String generique, String catgCnam) {
        this.numMedic = numMedic;
        this.desgMedic = desgMedic;
        this.prix = prix;
        this.generique = generique;
        this.catgCnam = catgCnam;
    }

    public Integer getNumMedic() {
        return numMedic;
    }

    public void setNumMedic(Integer numMedic) {
        this.numMedic = numMedic;
    }

    public String getDesgMedic() {
        return desgMedic;
    }

    public void setDesgMedic(String desgMedic) {
        this.desgMedic = desgMedic;
    }

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getGenerique() {
        return generique;
    }

    public void setGenerique(String generique) {
        this.generique = generique;
    }

    public String getCatgCnam() {
        return catgCnam;
    }

    public void setCatgCnam(String catgCnam) {
        this.catgCnam = catgCnam;
    }

    @XmlTransient
    public Collection<Posologie> getPosologieCollection() {
        return posologieCollection;
    }

    public void setPosologieCollection(Collection<Posologie> posologieCollection) {
        this.posologieCollection = posologieCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<TraitementAPCI> getTraitementAPCICollection() {
        return traitementAPCICollection;
    }

    public void setTraitementAPCICollection(Collection<TraitementAPCI> traitementAPCICollection) {
        this.traitementAPCICollection = traitementAPCICollection;
    }

    public Dci getDci() {
        return dci;
    }

    public void setDci(Dci dci) {
        this.dci = dci;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<PrescriptionOrd> getPrescriptionOrdCollection() {
        return prescriptionOrdCollection;
    }

    public void setPrescriptionOrdCollection(Collection<PrescriptionOrd> prescriptionOrdCollection) {
        this.prescriptionOrdCollection = prescriptionOrdCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numMedic != null ? numMedic.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Medicament)) {
            return false;
        }
        Medicament other = (Medicament) object;
        if ((this.numMedic == null && other.numMedic != null) || (this.numMedic != null && !this.numMedic.equals(other.numMedic))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Medicament[ numMedic=" + numMedic + " ]";
    }
    
}
