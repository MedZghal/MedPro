/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "Acte")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Acte.findAll", query = "SELECT a FROM Acte a where a.typ='CNAM'"),
    @NamedQuery(name = "Acte.findMax", query = "SELECT MAX(a.numActe) FROM Acte a"),
    @NamedQuery(name = "Acte.findAllNonRemb", query = "SELECT a FROM Acte a where a.typ!='CNAM'"),
    @NamedQuery(name = "Acte.findByNumActe", query = "SELECT a FROM Acte a WHERE a.numActe = :numActe"),
    @NamedQuery(name = "Acte.findByLibelle", query = "SELECT a FROM Acte a WHERE a.libelle = :libelle"),
    @NamedQuery(name = "Acte.findByAccord", query = "SELECT a FROM Acte a WHERE a.accord = :accord"),
    @NamedQuery(name = "Acte.findByTiketModer", query = "SELECT a FROM Acte a WHERE a.tiketModer = :tiketModer"),
    @NamedQuery(name = "Acte.findByMontant", query = "SELECT a FROM Acte a WHERE a.montant = :montant"),
    @NamedQuery(name = "Acte.findByDescription", query = "SELECT a FROM Acte a WHERE a.description = :description"),
    @NamedQuery(name = "Acte.findByCotation", query = "SELECT a FROM Acte a WHERE a.cotation = :cotation"),
    @NamedQuery(name = "Acte.findByTyp", query = "SELECT a FROM Acte a WHERE a.typ = :typ")})
public class Acte implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_acte")
    private Integer numActe;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "libelle")
    private String libelle;
    @Basic(optional = false)
    @NotNull
    @Column(name = "accord")
    private int accord;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tiket_moder")
    private String tiketModer;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "montant")
    private String montant;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Description")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "cotation")
    private String cotation;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Typ")
    private String typ;

    public Acte() {
    }

    public Acte(Integer numActe) {
        this.numActe = numActe;
    }

    public Acte(Integer numActe, String libelle, int accord, String tiketModer, String montant, String description, String cotation, String typ) {
        this.numActe = numActe;
        this.libelle = libelle;
        this.accord = accord;
        this.tiketModer = tiketModer;
        this.montant = montant;
        this.description = description;
        this.cotation = cotation;
        this.typ = typ;
    }

    public Integer getNumActe() {
        return numActe;
    }

    public void setNumActe(Integer numActe) {
        this.numActe = numActe;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public int getAccord() {
        return accord;
    }

    public void setAccord(int accord) {
        this.accord = accord;
    }

    public String getTiketModer() {
        return tiketModer;
    }

    public void setTiketModer(String tiketModer) {
        this.tiketModer = tiketModer;
    }

    public String getMontant() {
        return montant;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCotation() {
        return cotation;
    }

    public void setCotation(String cotation) {
        this.cotation = cotation;
    }

    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numActe != null ? numActe.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Acte)) {
            return false;
        }
        Acte other = (Acte) object;
        if ((this.numActe == null && other.numActe != null) || (this.numActe != null && !this.numActe.equals(other.numActe))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Acte[ numActe=" + numActe + " ]";
    }
    
}
