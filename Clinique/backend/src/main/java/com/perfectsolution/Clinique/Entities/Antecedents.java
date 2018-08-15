/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "Antecedents")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Antecedents.findAll", query = "SELECT a FROM Antecedents a"),
    @NamedQuery(name = "Antecedents.findByNumAntced", query = "SELECT a FROM Antecedents a WHERE a.numAntced = :numAntced"),
    @NamedQuery(name = "Antecedents.findByTypeAntced", query = "SELECT a FROM Antecedents a WHERE a.typeAntced = :typeAntced"),
    @NamedQuery(name = "Antecedents.findByDescripAntced", query = "SELECT a FROM Antecedents a WHERE a.descripAntced = :descripAntced")})
public class Antecedents implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "numantced")
    private Integer numAntced;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "typeantced")
    private String typeAntced;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "descrip_antced")
    private String descripAntced;
    @JoinColumn(name = "patient", referencedColumnName = "num_fich_patient")
    @ManyToOne(optional = false)
    private Patient patient;

    public Antecedents() {
    }

    public Antecedents(Integer numAntced) {
        this.numAntced = numAntced;
    }

    public Antecedents(Integer numAntced, String typeAntced, String descripAntced) {
        this.numAntced = numAntced;
        this.typeAntced = typeAntced;
        this.descripAntced = descripAntced;
    }

    public Integer getNumAntced() {
        return numAntced;
    }

    public void setNumAntced(Integer numAntced) {
        this.numAntced = numAntced;
    }

    public String getTypeAntced() {
        return typeAntced;
    }

    public void setTypeAntced(String typeAntced) {
        this.typeAntced = typeAntced;
    }

    public String getDescripAntced() {
        return descripAntced;
    }

    public void setDescripAntced(String descripAntced) {
        this.descripAntced = descripAntced;
    }
    @JsonIgnore
    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numAntced != null ? numAntced.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Antecedents)) {
            return false;
        }
        Antecedents other = (Antecedents) object;
        if ((this.numAntced == null && other.numAntced != null) || (this.numAntced != null && !this.numAntced.equals(other.numAntced))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Antecedents[ numAntced=" + numAntced + " ]";
    }
    
}
