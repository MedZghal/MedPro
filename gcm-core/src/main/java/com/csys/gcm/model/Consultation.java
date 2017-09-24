/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
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
    @NamedQuery(name = "Consultation.findByNumConsult", query = "SELECT c FROM Consultation c WHERE c.numConsult = :numConsult"),
    @NamedQuery(name = "Consultation.findByNumMedecin", query = "SELECT c FROM Consultation c WHERE c.codeMedTrit = :codeMedTrit"),
    @NamedQuery(name = "Consultation.findByDateConsult", query = "SELECT c FROM Consultation c WHERE c.dateConsult = :dateConsult"),
    @NamedQuery(name = "Consultation.findByPatient", query = "SELECT c FROM Consultation c WHERE c.numPatient = :numPatient"),
    @NamedQuery(name = "Consultation.findByTypeConsult", query = "SELECT c FROM Consultation c WHERE c.typeConsult = :typeConsult")})
public class Consultation implements Serializable {

    @OneToMany(mappedBy = "numConsult")
    private Collection<Recette> recetteCollection;

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

    public Utilisateur getCodeMedTrit() {
        return codeMedTrit;
    }

    public void setCodeMedTrit(Utilisateur codeMedTrit) {
        this.codeMedTrit = codeMedTrit;
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
        return "com.csys.gcm.model.Consultation[ numConsult=" + numConsult + " ]";
    }

    @XmlTransient
    public Collection<Recette> getRecetteCollection() {
        return recetteCollection;
    }

    public void setRecetteCollection(Collection<Recette> recetteCollection) {
        this.recetteCollection = recetteCollection;
    }
    
}
