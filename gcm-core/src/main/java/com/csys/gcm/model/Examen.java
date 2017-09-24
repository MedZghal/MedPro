/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "Examen")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Examen.findAll", query = "SELECT e FROM Examen e"),
    @NamedQuery(name = "Examen.findByNumExamen", query = "SELECT e FROM Examen e WHERE e.numExamen = :numExamen"),
    @NamedQuery(name = "Examen.findByTa", query = "SELECT e FROM Examen e WHERE e.ta = :ta"),
    @NamedQuery(name = "Examen.findByPouls", query = "SELECT e FROM Examen e WHERE e.pouls = :pouls"),
    @NamedQuery(name = "Examen.findByTemp", query = "SELECT e FROM Examen e WHERE e.temp = :temp"),
    @NamedQuery(name = "Examen.findByExamPhy", query = "SELECT e FROM Examen e WHERE e.examPhy = :examPhy"),
    @NamedQuery(name = "Examen.findByEtatGeneral", query = "SELECT e FROM Examen e WHERE e.etatGeneral = :etatGeneral"),
    @NamedQuery(name = "Examen.findByAuscuCardi", query = "SELECT e FROM Examen e WHERE e.auscuCardi = :auscuCardi"),
    @NamedQuery(name = "Examen.findByAuscuPleuro", query = "SELECT e FROM Examen e WHERE e.auscuPleuro = :auscuPleuro"),
    @NamedQuery(name = "Examen.findByExamenORL", query = "SELECT e FROM Examen e WHERE e.examenORL = :examenORL"),
    @NamedQuery(name = "Examen.findByAiresGangl", query = "SELECT e FROM Examen e WHERE e.airesGangl = :airesGangl"),
    @NamedQuery(name = "Examen.findByExamenAbdominal", query = "SELECT e FROM Examen e WHERE e.examenAbdominal = :examenAbdominal")})
public class Examen implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_examen")
    private Integer numExamen;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "TA")
    private String ta;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "pouls")
    private String pouls;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "temp")
    private String temp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "exam_phy")
    private String examPhy;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "etat_general")
    private String etatGeneral;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "auscu_cardi")
    private String auscuCardi;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "auscu_pleuro")
    private String auscuPleuro;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "examen_ORL")
    private String examenORL;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "aires_gangl")
    private String airesGangl;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "examen_abdominal")
    private String examenAbdominal;
    @OneToMany(mappedBy = "numExamen")
    private Collection<Consultation> consultationCollection;

    public Examen() {
    }

    public Examen(Integer numExamen) {
        this.numExamen = numExamen;
    }

    public Examen(Integer numExamen, String ta, String pouls, String temp, String examPhy, String etatGeneral, String auscuCardi, String auscuPleuro, String examenORL, String airesGangl, String examenAbdominal) {
        this.numExamen = numExamen;
        this.ta = ta;
        this.pouls = pouls;
        this.temp = temp;
        this.examPhy = examPhy;
        this.etatGeneral = etatGeneral;
        this.auscuCardi = auscuCardi;
        this.auscuPleuro = auscuPleuro;
        this.examenORL = examenORL;
        this.airesGangl = airesGangl;
        this.examenAbdominal = examenAbdominal;
    }

    public Integer getNumExamen() {
        return numExamen;
    }

    public void setNumExamen(Integer numExamen) {
        this.numExamen = numExamen;
    }

    public String getTa() {
        return ta;
    }

    public void setTa(String ta) {
        this.ta = ta;
    }

    public String getPouls() {
        return pouls;
    }

    public void setPouls(String pouls) {
        this.pouls = pouls;
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String temp) {
        this.temp = temp;
    }

    public String getExamPhy() {
        return examPhy;
    }

    public void setExamPhy(String examPhy) {
        this.examPhy = examPhy;
    }

    public String getEtatGeneral() {
        return etatGeneral;
    }

    public void setEtatGeneral(String etatGeneral) {
        this.etatGeneral = etatGeneral;
    }

    public String getAuscuCardi() {
        return auscuCardi;
    }

    public void setAuscuCardi(String auscuCardi) {
        this.auscuCardi = auscuCardi;
    }

    public String getAuscuPleuro() {
        return auscuPleuro;
    }

    public void setAuscuPleuro(String auscuPleuro) {
        this.auscuPleuro = auscuPleuro;
    }

    public String getExamenORL() {
        return examenORL;
    }

    public void setExamenORL(String examenORL) {
        this.examenORL = examenORL;
    }

    public String getAiresGangl() {
        return airesGangl;
    }

    public void setAiresGangl(String airesGangl) {
        this.airesGangl = airesGangl;
    }

    public String getExamenAbdominal() {
        return examenAbdominal;
    }

    public void setExamenAbdominal(String examenAbdominal) {
        this.examenAbdominal = examenAbdominal;
    }

    @XmlTransient
    public Collection<Consultation> getConsultationCollection() {
        return consultationCollection;
    }

    public void setConsultationCollection(Collection<Consultation> consultationCollection) {
        this.consultationCollection = consultationCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numExamen != null ? numExamen.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Examen)) {
            return false;
        }
        Examen other = (Examen) object;
        if ((this.numExamen == null && other.numExamen != null) || (this.numExamen != null && !this.numExamen.equals(other.numExamen))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Examen[ numExamen=" + numExamen + " ]";
    }
    
}
