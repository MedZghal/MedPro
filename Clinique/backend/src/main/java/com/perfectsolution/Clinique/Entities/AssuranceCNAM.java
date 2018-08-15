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
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "AssuranceCNAM")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "AssuranceCNAM.findAll", query = "SELECT a FROM AssuranceCNAM a"),
    @NamedQuery(name = "AssuranceCNAM.findByNumAssur", query = "SELECT a FROM AssuranceCNAM a WHERE a.numAssur = :numAssur"),
    @NamedQuery(name = "AssuranceCNAM.findByRegimeAffi", query = "SELECT a FROM AssuranceCNAM a WHERE a.regimeAffi = :regimeAffi"),
    @NamedQuery(name = "AssuranceCNAM.findByQualite", query = "SELECT a FROM AssuranceCNAM a WHERE a.qualite = :qualite"),
    @NamedQuery(name = "AssuranceCNAM.findByIdentUnique", query = "SELECT a FROM AssuranceCNAM a WHERE a.identUnique = :identUnique"),
    @NamedQuery(name = "AssuranceCNAM.findByRangAssur", query = "SELECT a FROM AssuranceCNAM a WHERE a.rangAssur = :rangAssur"),
    @NamedQuery(name = "AssuranceCNAM.findByDateValid", query = "SELECT a FROM AssuranceCNAM a WHERE a.dateValid = :dateValid"),
    @NamedQuery(name = "AssuranceCNAM.findByType", query = "SELECT a FROM AssuranceCNAM a WHERE a.type = :type"),
    @NamedQuery(name = "AssuranceCNAM.findByNomMedc", query = "SELECT a FROM AssuranceCNAM a WHERE a.nomMedc = :nomMedc"),
    @NamedQuery(name = "AssuranceCNAM.findByCodCnam", query = "SELECT a FROM AssuranceCNAM a WHERE a.codCnam = :codCnam")})
public class AssuranceCNAM implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_assur")
    private Integer numAssur;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "regime_affi")
    private String regimeAffi;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "qualite")
    private String qualite;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 12)
    @Column(name = "ident_unique")
    private String identUnique;
    @Basic(optional = false)
    @NotNull
    @Column(name = "rang_assur")
    private int rangAssur;
    @Column(name = "date_valid")
    @Temporal(TemporalType.DATE)
    private Date dateValid;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type")
    private String type;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nom_medc")
    private String nomMedc;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "cod_cnam")
    private String codCnam;
    @OneToMany(mappedBy = "assurCnam")
    private Collection<Patient> patientCollection;

    public AssuranceCNAM() {
    }

    public AssuranceCNAM(Integer numAssur) {
        this.numAssur = numAssur;
    }

    public AssuranceCNAM(Integer numAssur, String regimeAffi, String qualite, String identUnique, int rangAssur, String type, String nomMedc, String codCnam) {
        this.numAssur = numAssur;
        this.regimeAffi = regimeAffi;
        this.qualite = qualite;
        this.identUnique = identUnique;
        this.rangAssur = rangAssur;
        this.type = type;
        this.nomMedc = nomMedc;
        this.codCnam = codCnam;
    }

    public Integer getNumAssur() {
        return numAssur;
    }

    public void setNumAssur(Integer numAssur) {
        this.numAssur = numAssur;
    }

    public String getRegimeAffi() {
        return regimeAffi;
    }

    public void setRegimeAffi(String regimeAffi) {
        this.regimeAffi = regimeAffi;
    }

    public String getQualite() {
        return qualite;
    }

    public void setQualite(String qualite) {
        this.qualite = qualite;
    }

    public String getIdentUnique() {
        return identUnique;
    }

    public void setIdentUnique(String identUnique) {
        this.identUnique = identUnique;
    }

    public int getRangAssur() {
        return rangAssur;
    }

    public void setRangAssur(int rangAssur) {
        this.rangAssur = rangAssur;
    }

    public Date getDateValid() {
        return dateValid;
    }

    public void setDateValid(Date dateValid) {
        this.dateValid = dateValid;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNomMedc() {
        return nomMedc;
    }

    public void setNomMedc(String nomMedc) {
        this.nomMedc = nomMedc;
    }

    public String getCodCnam() {
        return codCnam;
    }

    public void setCodCnam(String codCnam) {
        this.codCnam = codCnam;
    }

    @XmlTransient
    @JsonIgnore
    public Collection<Patient> getPatientCollection() {
        return patientCollection;
    }

    public void setPatientCollection(Collection<Patient> patientCollection) {
        this.patientCollection = patientCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numAssur != null ? numAssur.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AssuranceCNAM)) {
            return false;
        }
        AssuranceCNAM other = (AssuranceCNAM) object;
        if ((this.numAssur == null && other.numAssur != null) || (this.numAssur != null && !this.numAssur.equals(other.numAssur))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.AssuranceCNAM[ numAssur=" + numAssur + " ]";
    }

    
}
