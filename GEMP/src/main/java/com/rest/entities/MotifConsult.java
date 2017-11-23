/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
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
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Motif_Consult")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "MotifConsult.findAll", query = "SELECT m FROM MotifConsult m"),
    @NamedQuery(name = "MotifConsult.findByNumMotif", query = "SELECT m FROM MotifConsult m WHERE m.motifConsultPK.numMotif = :numMotif"),
    @NamedQuery(name = "MotifConsult.findByNumConsult", query = "SELECT m FROM MotifConsult m WHERE m.motifConsultPK.numConsult = :numConsult"),
    @NamedQuery(name = "MotifConsult.findByDate", query = "SELECT m FROM MotifConsult m WHERE m.date = :date")})
public class MotifConsult implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected MotifConsultPK motifConsultPK;
    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Consultation consultation;
    @JoinColumn(name = "num_Motif", referencedColumnName = "num_motif", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Motif motif;

    public MotifConsult() {
    }

    public MotifConsult(MotifConsultPK motifConsultPK) {
        this.motifConsultPK = motifConsultPK;
    }

    public MotifConsult(int numMotif, int numConsult) {
        this.motifConsultPK = new MotifConsultPK(numMotif, numConsult);
    }

    @JsonIgnore
    public MotifConsultPK getMotifConsultPK() {
        return motifConsultPK;
    }

    public void setMotifConsultPK(MotifConsultPK motifConsultPK) {
        this.motifConsultPK = motifConsultPK;
    }

    @JsonIgnore
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @JsonIgnore
    public Consultation getConsultation() {
        return consultation;
    }

    public void setConsultation(Consultation consultation) {
        this.consultation = consultation;
    }

    public Motif getMotif() {
        return motif;
    }

    public void setMotif(Motif motif) {
        this.motif = motif;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (motifConsultPK != null ? motifConsultPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MotifConsult)) {
            return false;
        }
        MotifConsult other = (MotifConsult) object;
        if ((this.motifConsultPK == null && other.motifConsultPK != null) || (this.motifConsultPK != null && !this.motifConsultPK.equals(other.motifConsultPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.MotifConsult[ motifConsultPK=" + motifConsultPK + " ]";
    }
    
}
