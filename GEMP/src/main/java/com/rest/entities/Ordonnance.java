/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Ordonnance")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Ordonnance.findAll", query = "SELECT o FROM Ordonnance o"),
    @NamedQuery(name = "Ordonnance.findByNumOrd", query = "SELECT o FROM Ordonnance o WHERE o.numOrd = :numOrd"),
    @NamedQuery(name = "Ordonnance.findByDate", query = "SELECT o FROM Ordonnance o WHERE o.date = :date")})
public class Ordonnance implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_ord")
    private Integer numOrd;
    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;
    @OneToMany(mappedBy = "numOrd")
    private Collection<Consultation> consultationCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ordonnance")
    private Collection<PrescriptionOrd> prescriptionOrdCollection;

    public Ordonnance() {
    }

    public Ordonnance(Integer numOrd) {
        this.numOrd = numOrd;
    }

    public Integer getNumOrd() {
        return numOrd;
    }

    public void setNumOrd(Integer numOrd) {
        this.numOrd = numOrd;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<Consultation> getConsultationCollection() {
        return consultationCollection;
    }

    public void setConsultationCollection(Collection<Consultation> consultationCollection) {
        this.consultationCollection = consultationCollection;
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
        hash += (numOrd != null ? numOrd.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Ordonnance)) {
            return false;
        }
        Ordonnance other = (Ordonnance) object;
        if ((this.numOrd == null && other.numOrd != null) || (this.numOrd != null && !this.numOrd.equals(other.numOrd))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Ordonnance[ numOrd=" + numOrd + " ]";
    }
    
}
