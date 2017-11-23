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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Salle_Attente")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "SalleAttente.findAll", query = "SELECT s FROM SalleAttente s"),
    @NamedQuery(name = "SalleAttente.findByNumligneAttend", query = "SELECT s FROM SalleAttente s WHERE s.numMedcTrait.codeMedTrit = :codeMedTrit"),
    @NamedQuery(name = "SalleAttente.findByNote", query = "SELECT s FROM SalleAttente s WHERE s.note = :note")})
public class SalleAttente implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_ligneattend")
    private Integer numligneAttend;
    @Size(max = 350)
    @Column(name = "note")
    private String note;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient")
    @OneToOne
    private Patient numPatient;
    @JoinColumn(name = "num_rdv", referencedColumnName = "numRDV")
    @ManyToOne(optional = false)
    private Rdv numRdv;
    @JoinColumn(name = "num_medc_trait", referencedColumnName = "code_Med_Trit")
    @ManyToOne
    private Utilisateur numMedcTrait;

    public SalleAttente() {
    }

    public SalleAttente(Integer numligneAttend) {
        this.numligneAttend = numligneAttend;
    }

    public Integer getNumligneAttend() {
        return numligneAttend;
    }

    public void setNumligneAttend(Integer numligneAttend) {
        this.numligneAttend = numligneAttend;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Patient getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(Patient numPatient) {
        this.numPatient = numPatient;
    }

    public Rdv getNumRdv() {
        return numRdv;
    }

    public void setNumRdv(Rdv numRdv) {
        this.numRdv = numRdv;
    }

    public Utilisateur getNumMedcTrait() {
        return numMedcTrait;
    }

    public void setNumMedcTrait(Utilisateur numMedcTrait) {
        this.numMedcTrait = numMedcTrait;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numligneAttend != null ? numligneAttend.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SalleAttente)) {
            return false;
        }
        SalleAttente other = (SalleAttente) object;
        if ((this.numligneAttend == null && other.numligneAttend != null) || (this.numligneAttend != null && !this.numligneAttend.equals(other.numligneAttend))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.SalleAttente[ numligneAttend=" + numligneAttend + " ]";
    }
    
}
