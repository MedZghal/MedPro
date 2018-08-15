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
import javax.persistence.JoinColumns;
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
@Table(name = "RDV")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Rdv.findAll", query = "SELECT r FROM Rdv r"),
    @NamedQuery(name = "Rdv.findByNumRDV", query = "SELECT r FROM Rdv r WHERE r.fichPatient.patient.numFichPatient = :numFichPatient"),
    @NamedQuery(name = "Rdv.findByStartDate", query = "SELECT r FROM Rdv r WHERE r.startDate = :startDate"),
    @NamedQuery(name = "Rdv.findByTypeRDV", query = "SELECT r FROM Rdv r WHERE r.typeRDV = :typeRDV"),
    @NamedQuery(name = "Rdv.findByDescpRDV", query = "SELECT r FROM Rdv r WHERE r.descpRDV = :descpRDV"),
    @NamedQuery(name = "Rdv.findByPresence", query = "SELECT r FROM Rdv r WHERE r.presence = :presence"),
    @NamedQuery(name = "Rdv.findByEndDate", query = "SELECT r FROM Rdv r WHERE r.endDate = :endDate"),
    @NamedQuery(name = "Rdv.findByEMed", query = "SELECT r FROM Rdv r WHERE r.fichPatient.utilisateur.codeMedTrit = :med and r.startDate BETWEEN :startDate and :endDate ")})
public class Rdv implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "numrdv")
    private Integer numRDV;
    @Column(name = "start_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typerdv")
    private String typeRDV;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "descprdv")
    private String descpRDV;
    @Basic(optional = false)
    @NotNull
    @Column(name = "presence")
    private int presence;
    @Column(name = "end_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "numRdv")
    private Collection<SalleAttente> salleAttenteCollection;
    @JoinColumns({
        @JoinColumn(name = "num_patient", referencedColumnName = "num_patient"),
        @JoinColumn(name = "num_medecin_trait", referencedColumnName = "code_Med_Trit")})
    @ManyToOne(optional = false)
    private FichPatient fichPatient;

    public Rdv() {
    }

    public Rdv(Integer numRDV) {
        this.numRDV = numRDV;
    }

    public Rdv(Integer numRDV, String typeRDV, String descpRDV, int presence) {
        this.numRDV = numRDV;
        this.typeRDV = typeRDV;
        this.descpRDV = descpRDV;
        this.presence = presence;
    }

    public Integer getNumRDV() {
        return numRDV;
    }

    public void setNumRDV(Integer numRDV) {
        this.numRDV = numRDV;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getTypeRDV() {
        return typeRDV;
    }

    public void setTypeRDV(String typeRDV) {
        this.typeRDV = typeRDV;
    }

    public String getDescpRDV() {
        return descpRDV;
    }

    public void setDescpRDV(String descpRDV) {
        this.descpRDV = descpRDV;
    }

    public int getPresence() {
        return presence;
    }

    public void setPresence(int presence) {
        this.presence = presence;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<SalleAttente> getSalleAttenteCollection() {
        return salleAttenteCollection;
    }

    public void setSalleAttenteCollection(Collection<SalleAttente> salleAttenteCollection) {
        this.salleAttenteCollection = salleAttenteCollection;
    }

    @JsonIgnore
    public FichPatient getFichPatient() {
        return fichPatient;
    }

    public void setFichPatient(FichPatient fichPatient) {
        this.fichPatient = fichPatient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numRDV != null ? numRDV.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Rdv)) {
            return false;
        }
        Rdv other = (Rdv) object;
        if ((this.numRDV == null && other.numRDV != null) || (this.numRDV != null && !this.numRDV.equals(other.numRDV))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Rdv[ numRDV=" + numRDV + " ]";
    }
    
}
