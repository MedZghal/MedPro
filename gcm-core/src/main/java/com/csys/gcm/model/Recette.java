/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

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
    @NamedQuery(name = "Recette.findByMedecin", query = "SELECT r FROM Recette r where r.codeMedTrait = :codeMedTrait"),
    @NamedQuery(name = "Recette.findByMedecinDte", query = "SELECT r FROM Recette r where r.codeMedTrait = :codeMedTrait and r.dateTrans >= :d1  and r.dateTrans <=:d2 ORDER BY r.numTrans DESC"),
    //@NamedQuery(name = "Recette.findByMedecinCnamDte", query = "SELECT r FROM Recette r where r.codeMedTrait = :codeMedTrait and r.numPatient.assurCnam != null and r.dateTrans >= :d1  and r.dateTrans <=:d2 ORDER BY r.numTrans DESC"),
    @NamedQuery(name = "Recette.findByNumTrans", query = "SELECT r FROM Recette r WHERE r.numTrans = :numTrans"),
    @NamedQuery(name = "Recette.findByTotal", query = "SELECT r FROM Recette r WHERE r.total = :total"),
    @NamedQuery(name = "Recette.findByDateTrans", query = "SELECT r FROM Recette r WHERE r.dateTrans = :dateTrans"),
    @NamedQuery(name = "Recette.findByLibelle", query = "SELECT r FROM Recette r WHERE r.libelle = :libelle"),
    @NamedQuery(name = "Recette.findByType", query = "SELECT r FROM Recette r WHERE r.type = :type"),
    @NamedQuery(name = "Recette.findByTiers", query = "SELECT r FROM Recette r WHERE r.tiers = :tiers"),
    @NamedQuery(name = "Recette.findByCodeActe", query = "SELECT r FROM Recette r WHERE r.codeActe = :codeActe"),
    @NamedQuery(name = "Recette.findByTiketMod\u00e9rateur", query = "SELECT r FROM Recette r WHERE r.tiketMod\u00e9rateur = :tiketMod\u00e9rateur"),
    @NamedQuery(name = "Recette.findByCnam", query = "SELECT r FROM Recette r WHERE r.cnam = :cnam")})
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
    @Column(name = "codeActe")
    private String codeActe;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tiketMod\u00e9rateur")
    private String tiketModérateur;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "cnam")
    private String cnam;
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

    public Recette(Integer numTrans, String total, String libelle, String type, String tiers, String codeActe, String tiketModérateur, String cnam) {
        this.numTrans = numTrans;
        this.total = total;
        this.libelle = libelle;
        this.type = type;
        this.tiers = tiers;
        this.codeActe = codeActe;
        this.tiketModérateur = tiketModérateur;
        this.cnam = cnam;
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

    public String getCnam() {
        return cnam;
    }

    public void setCnam(String cnam) {
        this.cnam = cnam;
    }

    public Consultation getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Consultation numConsult) {
        this.numConsult = numConsult;
    }

    public Patient getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(Patient numPatient) {
        this.numPatient = numPatient;
    }

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
        return "com.csys.gcm.model.Recette[ numTrans=" + numTrans + " ]";
    }
    
}
