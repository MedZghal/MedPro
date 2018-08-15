/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Actemedicaux")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ActeMedicaux.findAll", query = "SELECT a FROM ActeMedicaux a"),
    @NamedQuery(name = "ActeMedicaux.findByNumActe", query = "SELECT a FROM ActeMedicaux a WHERE a.acteMedicauxPK.numActe = :numActe"),
    @NamedQuery(name = "ActeMedicaux.findByNumConsult", query = "SELECT a FROM ActeMedicaux a WHERE a.acteMedicauxPK.numConsult = :numConsult"),
    @NamedQuery(name = "ActeMedicaux.findByNumPatient", query = "SELECT a.acte FROM ActeMedicaux a WHERE a.consultation.numPatient.numFichPatient = :numPatient"),
    @NamedQuery(name = "ActeMedicaux.findByDate", query = "SELECT a FROM ActeMedicaux a WHERE a.date = :date"),
    @NamedQuery(name = "ActeMedicaux.findByNbPrChg", query = "SELECT a FROM ActeMedicaux a WHERE a.nbPrChg = :nbPrChg")})
public class ActeMedicaux implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected ActeMedicauxPK acteMedicauxPK;
    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;
    @Basic(optional = false)
    @NotNull
    @Column(name = "nb_pr_chg")
    private int nbPrChg;
    @JoinColumn(name = "num_acte", referencedColumnName = "num_acte", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Acte acte;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Consultation consultation;

    public ActeMedicaux() {
    }

    public ActeMedicaux(ActeMedicauxPK acteMedicauxPK) {
        this.acteMedicauxPK = acteMedicauxPK;
    }

    public ActeMedicaux(ActeMedicauxPK acteMedicauxPK, int nbPrChg) {
        this.acteMedicauxPK = acteMedicauxPK;
        this.nbPrChg = nbPrChg;
    }

    public ActeMedicaux(int numActe, int numConsult) {
        this.acteMedicauxPK = new ActeMedicauxPK(numActe, numConsult);
    }

    @JsonIgnore
    public ActeMedicauxPK getActeMedicauxPK() {
        return acteMedicauxPK;
    }

    public void setActeMedicauxPK(ActeMedicauxPK acteMedicauxPK) {
        this.acteMedicauxPK = acteMedicauxPK;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getNbPrChg() {
        return nbPrChg;
    }

    public void setNbPrChg(int nbPrChg) {
        this.nbPrChg = nbPrChg;
    }

    
    public Acte getActe() {
        return acte;
    }

    public void setActe(Acte acte) {
        this.acte = acte;
    }

    @JsonIgnore
    public Consultation getConsultation() {
        return consultation;
    }

    public void setConsultation(Consultation consultation) {
        this.consultation = consultation;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (acteMedicauxPK != null ? acteMedicauxPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ActeMedicaux)) {
            return false;
        }
        ActeMedicaux other = (ActeMedicaux) object;
        if ((this.acteMedicauxPK == null && other.acteMedicauxPK != null) || (this.acteMedicauxPK != null && !this.acteMedicauxPK.equals(other.acteMedicauxPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.ActeMedicaux[ acteMedicauxPK=" + acteMedicauxPK + " ]";
    }
    
}
