/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

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
@Table(name = "PrescriptionOrd")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "PrescriptionOrd.findAll", query = "SELECT p FROM PrescriptionOrd p"),
    @NamedQuery(name = "PrescriptionOrd.findByNumMedc", query = "SELECT p FROM PrescriptionOrd p WHERE p.prescriptionOrdPK.numMedc = :numMedc"),
    @NamedQuery(name = "PrescriptionOrd.findByNumOrd", query = "SELECT p FROM PrescriptionOrd p WHERE p.prescriptionOrdPK.numOrd = :numOrd"),
    @NamedQuery(name = "PrescriptionOrd.findByDure", query = "SELECT p FROM PrescriptionOrd p WHERE p.dure = :dure"),
    @NamedQuery(name = "PrescriptionOrd.findByQuntMed", query = "SELECT p FROM PrescriptionOrd p WHERE p.quntMed = :quntMed"),
    @NamedQuery(name = "PrescriptionOrd.findByNbFoisUtil", query = "SELECT p FROM PrescriptionOrd p WHERE p.nbFoisUtil = :nbFoisUtil")})
public class PrescriptionOrd implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected PrescriptionOrdPK prescriptionOrdPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "dure")
    private String dure;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "qunt_med")
    private String quntMed;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nb_fois_util")
    private String nbFoisUtil;
    @JoinColumn(name = "num_medc", referencedColumnName = "num_medic", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Medicament medicament;
    @JoinColumn(name = "num_ord", referencedColumnName = "num_ord", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Ordonnance ordonnance;

    public PrescriptionOrd() {
    }

    public PrescriptionOrd(PrescriptionOrdPK prescriptionOrdPK) {
        this.prescriptionOrdPK = prescriptionOrdPK;
    }

    public PrescriptionOrd(PrescriptionOrdPK prescriptionOrdPK, String dure, String quntMed, String nbFoisUtil) {
        this.prescriptionOrdPK = prescriptionOrdPK;
        this.dure = dure;
        this.quntMed = quntMed;
        this.nbFoisUtil = nbFoisUtil;
    }

    public PrescriptionOrd(int numMedc, int numOrd) {
        this.prescriptionOrdPK = new PrescriptionOrdPK(numMedc, numOrd);
    }

    public PrescriptionOrdPK getPrescriptionOrdPK() {
        return prescriptionOrdPK;
    }

    public void setPrescriptionOrdPK(PrescriptionOrdPK prescriptionOrdPK) {
        this.prescriptionOrdPK = prescriptionOrdPK;
    }

    public String getDure() {
        return dure;
    }

    public void setDure(String dure) {
        this.dure = dure;
    }

    public String getQuntMed() {
        return quntMed;
    }

    public void setQuntMed(String quntMed) {
        this.quntMed = quntMed;
    }

    public String getNbFoisUtil() {
        return nbFoisUtil;
    }

    public void setNbFoisUtil(String nbFoisUtil) {
        this.nbFoisUtil = nbFoisUtil;
    }

    public Medicament getMedicament() {
        return medicament;
    }

    public void setMedicament(Medicament medicament) {
        this.medicament = medicament;
    }

    public Ordonnance getOrdonnance() {
        return ordonnance;
    }

    public void setOrdonnance(Ordonnance ordonnance) {
        this.ordonnance = ordonnance;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (prescriptionOrdPK != null ? prescriptionOrdPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PrescriptionOrd)) {
            return false;
        }
        PrescriptionOrd other = (PrescriptionOrd) object;
        if ((this.prescriptionOrdPK == null && other.prescriptionOrdPK != null) || (this.prescriptionOrdPK != null && !this.prescriptionOrdPK.equals(other.prescriptionOrdPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.PrescriptionOrd[ prescriptionOrdPK=" + prescriptionOrdPK + " ]";
    }
    
}
