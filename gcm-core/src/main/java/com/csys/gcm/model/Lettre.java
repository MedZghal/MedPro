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
@Table(name = "Lettre")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Lettre.findAll", query = "SELECT l FROM Lettre l"),
    @NamedQuery(name = "Lettre.findByNumLettre", query = "SELECT l FROM Lettre l WHERE l.numLettre = :numLettre"),
    @NamedQuery(name = "Lettre.findByDateCreation", query = "SELECT l FROM Lettre l WHERE l.dateCreation = :dateCreation"),
    @NamedQuery(name = "Lettre.findByContenu", query = "SELECT l FROM Lettre l WHERE l.contenu = :contenu"),
    @NamedQuery(name = "Lettre.findByType", query = "SELECT l FROM Lettre l WHERE l.type = :type")})
public class Lettre implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_lettre")
    private Integer numLettre;
    @Column(name = "date_Creation")
    @Temporal(TemporalType.DATE)
    private Date dateCreation;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "contenu")
    private String contenu;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type")
    private String type;
    @JoinColumn(name = "num_consult", referencedColumnName = "num_consult")
    @ManyToOne(optional = false)
    private Consultation numConsult;

    public Lettre() {
    }

    public Lettre(Integer numLettre) {
        this.numLettre = numLettre;
    }

    public Lettre(Integer numLettre, String contenu, String type) {
        this.numLettre = numLettre;
        this.contenu = contenu;
        this.type = type;
    }

    public Integer getNumLettre() {
        return numLettre;
    }

    public void setNumLettre(Integer numLettre) {
        this.numLettre = numLettre;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Consultation getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(Consultation numConsult) {
        this.numConsult = numConsult;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numLettre != null ? numLettre.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lettre)) {
            return false;
        }
        Lettre other = (Lettre) object;
        if ((this.numLettre == null && other.numLettre != null) || (this.numLettre != null && !this.numLettre.equals(other.numLettre))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Lettre[ numLettre=" + numLettre + " ]";
    }
    
}
