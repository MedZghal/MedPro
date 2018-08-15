/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Consultation")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Consultation.findAll", query = "SELECT c FROM Consultation c"),
    @NamedQuery(name = "Consultation.findByNumConsult", query = "SELECT c FROM Consultation c WHERE c.numPatient.numFichPatient = :numPatient"),
    @NamedQuery(name = "Consultation.findByDateConsult", query = "SELECT c FROM Consultation c WHERE c.dateConsult = :dateConsult"),
    @NamedQuery(name = "Consultation.findByTypeConsult", query = "SELECT c FROM Consultation c WHERE c.typeConsult = :typeConsult")})
public class Consultation implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_consult")
    private Integer numConsult;
    @Column(name = "date_consult")
    @Temporal(TemporalType.DATE)
    private Date dateConsult;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type_consult")
    private String typeConsult;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanAECBU> bilanAECBUCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanAECG> bilanAECGCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanBioNFS> bilanBioNFSCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "consultation")
    private Collection<ActeMedicaux> acteMedicauxCollection;
    @JoinColumn(name = "Diag_consult", referencedColumnName = "num_diag")
    @ManyToOne
    private Diagnostic diagconsult;
    @JoinColumn(name = "num_examen", referencedColumnName = "num_examen")
    @ManyToOne
    private Examen numExamen;
    @JoinColumn(name = "num_Ord", referencedColumnName = "num_ord")
    @ManyToOne
    private Ordonnance numOrd;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient")
    @ManyToOne
    private Patient numPatient;
    @JoinColumn(name = "code_Med_Trit", referencedColumnName = "code_Med_Trit")
    @ManyToOne
    private Utilisateur codeMedTrit;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BianBioGly> bianBioGlyCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanBiolipidique> bilanBiolipidiqueCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanBioRenal> bilanBioRenalCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanBioHepatique> bilanBioHepatiqueCollection;
    @OneToMany(mappedBy = "numConsult")
    private Collection<Recette> recetteCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanAAutre> bilanAAutreCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "consultation")
    private Collection<MotifConsult> motifConsultCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanRad> bilanRadCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConuslt")
    private Collection<BilanBioHemostase> bilanBioHemostaseCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<Lettre> lettreCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numConsult")
    private Collection<BilanBioinflam> bilanBioinflamCollection;

    public Consultation() {
    }

    public Consultation(Integer numConsult) {
        this.numConsult = numConsult;
    }

    public Consultation(Integer numConsult, String typeConsult) {
        this.numConsult = numConsult;
        this.typeConsult = typeConsult;
    }

    public Integer getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Integer numConsult) {
        this.numConsult = numConsult;
    }

    public Date getDateConsult() {
        return dateConsult;
    }

    public void setDateConsult(Date dateConsult) {
        this.dateConsult = dateConsult;
    }

    public String getTypeConsult() {
        return typeConsult;
    }

    public void setTypeConsult(String typeConsult) {
        this.typeConsult = typeConsult;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanAECBU> getBilanAECBUCollection() {
        return bilanAECBUCollection;
    }

    public void setBilanAECBUCollection(Collection<BilanAECBU> bilanAECBUCollection) {
        this.bilanAECBUCollection = bilanAECBUCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanAECG> getBilanAECGCollection() {
        return bilanAECGCollection;
    }

    public void setBilanAECGCollection(Collection<BilanAECG> bilanAECGCollection) {
        this.bilanAECGCollection = bilanAECGCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBioNFS> getBilanBioNFSCollection() {
        return bilanBioNFSCollection;
    }

    public void setBilanBioNFSCollection(Collection<BilanBioNFS> bilanBioNFSCollection) {
        this.bilanBioNFSCollection = bilanBioNFSCollection;
    }

    @XmlTransient
    public Collection<ActeMedicaux> getActeMedicauxCollection() {
        return acteMedicauxCollection;
    }

    public void setActeMedicauxCollection(Collection<ActeMedicaux> acteMedicauxCollection) {
        this.acteMedicauxCollection = acteMedicauxCollection;
    }

    public Diagnostic getDiagconsult() {
        return diagconsult;
    }

    public void setDiagconsult(Diagnostic diagconsult) {
        this.diagconsult = diagconsult;
    }

    public Examen getNumExamen() {
        return numExamen;
    }

    public void setNumExamen(Examen numExamen) {
        this.numExamen = numExamen;
    }

    public Ordonnance getNumOrd() {
        return numOrd;
    }

    public void setNumOrd(Ordonnance numOrd) {
        this.numOrd = numOrd;
    }

    public Patient getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(Patient numPatient) {
        this.numPatient = numPatient;
    }

    @JsonIgnore
    public Utilisateur getCodeMedTrit() {
        return codeMedTrit;
    }

    public void setCodeMedTrit(Utilisateur codeMedTrit) {
        this.codeMedTrit = codeMedTrit;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BianBioGly> getBianBioGlyCollection() {
        return bianBioGlyCollection;
    }

    public void setBianBioGlyCollection(Collection<BianBioGly> bianBioGlyCollection) {
        this.bianBioGlyCollection = bianBioGlyCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBiolipidique> getBilanBiolipidiqueCollection() {
        return bilanBiolipidiqueCollection;
    }

    public void setBilanBiolipidiqueCollection(Collection<BilanBiolipidique> bilanBiolipidiqueCollection) {
        this.bilanBiolipidiqueCollection = bilanBiolipidiqueCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBioRenal> getBilanBioRenalCollection() {
        return bilanBioRenalCollection;
    }

    public void setBilanBioRenalCollection(Collection<BilanBioRenal> bilanBioRenalCollection) {
        this.bilanBioRenalCollection = bilanBioRenalCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBioHepatique> getBilanBioHepatiqueCollection() {
        return bilanBioHepatiqueCollection;
    }

    public void setBilanBioHepatiqueCollection(Collection<BilanBioHepatique> bilanBioHepatiqueCollection) {
        this.bilanBioHepatiqueCollection = bilanBioHepatiqueCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<Recette> getRecetteCollection() {
        return recetteCollection;
    }

    public void setRecetteCollection(Collection<Recette> recetteCollection) {
        this.recetteCollection = recetteCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanAAutre> getBilanAAutreCollection() {
        return bilanAAutreCollection;
    }

    public void setBilanAAutreCollection(Collection<BilanAAutre> bilanAAutreCollection) {
        this.bilanAAutreCollection = bilanAAutreCollection;
    }

    @XmlTransient
    public Collection<MotifConsult> getMotifConsultCollection() {
        return motifConsultCollection;
    }

    public void setMotifConsultCollection(Collection<MotifConsult> motifConsultCollection) {
        this.motifConsultCollection = motifConsultCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanRad> getBilanRadCollection() {
        return bilanRadCollection;
    }

    public void setBilanRadCollection(Collection<BilanRad> bilanRadCollection) {
        this.bilanRadCollection = bilanRadCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBioHemostase> getBilanBioHemostaseCollection() {
        return bilanBioHemostaseCollection;
    }

    public void setBilanBioHemostaseCollection(Collection<BilanBioHemostase> bilanBioHemostaseCollection) {
        this.bilanBioHemostaseCollection = bilanBioHemostaseCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<Lettre> getLettreCollection() {
        return lettreCollection;
    }

    public void setLettreCollection(Collection<Lettre> lettreCollection) {
        this.lettreCollection = lettreCollection;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<BilanBioinflam> getBilanBioinflamCollection() {
        return bilanBioinflamCollection;
    }

    public void setBilanBioinflamCollection(Collection<BilanBioinflam> bilanBioinflamCollection) {
        this.bilanBioinflamCollection = bilanBioinflamCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numConsult != null ? numConsult.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Consultation)) {
            return false;
        }
        Consultation other = (Consultation) object;
        if ((this.numConsult == null && other.numConsult != null) || (this.numConsult != null && !this.numConsult.equals(other.numConsult))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Consultation[ numConsult=" + numConsult + " ]";
    }
    
}
