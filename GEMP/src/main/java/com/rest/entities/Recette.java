/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Recette")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Recette.findAll", query = "SELECT r FROM Recette r"),
    @NamedQuery(name = "Recette.findByNumTrans", query = "SELECT r FROM Recette r WHERE r.numTrans = :numTrans"),
    @NamedQuery(name = "Recette.findByTotal", query = "SELECT r FROM Recette r WHERE r.total = :total"),
    @NamedQuery(name = "Recette.findByDateTrans", query = "SELECT r FROM Recette r WHERE r.dateTrans = :dateTrans"),
    @NamedQuery(name = "Recette.findByLibelle", query = "SELECT r FROM Recette r WHERE r.libelle = :libelle"),
    @NamedQuery(name = "Recette.findByType", query = "SELECT r FROM Recette r WHERE r.type = :type"),
    @NamedQuery(name = "Recette.findByTiers", query = "SELECT r FROM Recette r WHERE r.tiers = :tiers"),
    @NamedQuery(name = "Recette.findByCodeActe", query = "SELECT r FROM Recette r WHERE r.codeActe = :codeActe"),
    @NamedQuery(name = "Recette.findByTiketMod\u00e9rateur", query = "SELECT r FROM Recette r WHERE r.tiketMod\u00e9rateur = :tiketMod\u00e9rateur"),
    @NamedQuery(name = "Recette.findByCnam", query = "SELECT r FROM Recette r WHERE r.cnam = :cnam"),
    @NamedQuery(name = "Recette.findByDebit", query = "SELECT r FROM Recette r WHERE r.debit = :debit"),
    @NamedQuery(name = "Recette.findByCredit", query = "SELECT r FROM Recette r WHERE r.credit = :credit")})
public class Recette implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_trans")
    private Integer numTrans;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "total")
    private String total;
    @Column(name = "date_trans")
    @Temporal(TemporalType.DATE)
    private Date dateTrans;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 250)
    @Column(name = "libelle")
    private String libelle;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type")
    private String type;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tiers")
    private String tiers;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "codeacte")
    private String codeActe;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tiketmod\u00e9rateur")
    private String tiketModérateur;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "cnam")
    private String cnam;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "debit")
    private String debit;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "credit")
    private String credit;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne
    private Consultation numConsult;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient")
    @ManyToOne
    private Patient numPatient;
    @JoinColumn(name = "code_med_trait", referencedColumnName = "code_Med_Trit")
    @ManyToOne
    private Utilisateur codeMedTrait;

    public Recette() {
    }

    public Recette(Integer numTrans) {
        this.numTrans = numTrans;
    }

    public Recette(Integer numTrans, String total, String libelle, String type, String tiers, String codeActe, String tiketModérateur, String cnam, String debit, String credit) {
        this.numTrans = numTrans;
        this.total = total;
        this.libelle = libelle;
        this.type = type;
        this.tiers = tiers;
        this.codeActe = codeActe;
        this.tiketModérateur = tiketModérateur;
        this.cnam = cnam;
        this.debit = debit;
        this.credit = credit;
    }

    public Integer getNumTrans() {
        return numTrans;
    }

    public void setNumTrans(Integer numTrans) {
        this.numTrans = numTrans;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public Date getDateTrans() {
        return dateTrans;
    }

    public void setDateTrans(Date dateTrans) {
        this.dateTrans = dateTrans;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTiers() {
        return tiers;
    }

    public void setTiers(String tiers) {
        this.tiers = tiers;
    }

    @JsonIgnore
    public String getCodeActe() {
        return codeActe;
    }

    public void setCodeActe(String codeActe) {
        this.codeActe = codeActe;
    }

    public String getTiketModérateur() {
        return tiketModérateur;
    }

    public void setTiketModérateur(String tiketModérateur) {
        this.tiketModérateur = tiketModérateur;
    }

    @JsonIgnore
    public String getCnam() {
        return cnam;
    }

    public void setCnam(String cnam) {
        this.cnam = cnam;
    }

    public String getDebit() {
        return debit;
    }

    public void setDebit(String debit) {
        this.debit = debit;
    }

    public String getCredit() {
        return credit;
    }

    public void setCredit(String credit) {
        this.credit = credit;
    }

    @JsonIgnore
    public Consultation getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Consultation numConsult) {
        this.numConsult = numConsult;
    }

    @JsonIgnore
    public Patient getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(Patient numPatient) {
        this.numPatient = numPatient;
    }

    @JsonIgnore
    public Utilisateur getCodeMedTrait() {
        return codeMedTrait;
    }

    public void setCodeMedTrait(Utilisateur codeMedTrait) {
        this.codeMedTrait = codeMedTrait;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numTrans != null ? numTrans.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Recette)) {
            return false;
        }
        Recette other = (Recette) object;
        if ((this.numTrans == null && other.numTrans != null) || (this.numTrans != null && !this.numTrans.equals(other.numTrans))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.Recette[ numTrans=" + numTrans + " ]";
    }
    
}
