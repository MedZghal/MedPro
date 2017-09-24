/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
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
@Table(name = "Ville")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Ville.findAll", query = "SELECT v FROM Ville v"),
    @NamedQuery(name = "Ville.findAllDistinct", query = "SELECT distinct v.ville FROM Ville v"),
    @NamedQuery(name = "Ville.findByCodeVille", query = "SELECT v FROM Ville v WHERE v.codeVille = :codeVille"),
    @NamedQuery(name = "Ville.findByGouvernorat", query = "SELECT v FROM Ville v WHERE v.gouvernorat = :gouvernorat"),
    @NamedQuery(name = "Ville.findByVille", query = "SELECT v FROM Ville v WHERE v.ville = :ville"),
    @NamedQuery(name = "Ville.findByCodPostale", query = "SELECT v FROM Ville v WHERE v.codPostale = :codPostale"),
    @NamedQuery(name = "Ville.findByPays", query = "SELECT v FROM Ville v WHERE v.pays = :pays")})
public class Ville implements Serializable {

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ville")
    private Collection<Patient> patientCollection;

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "codeVille")
    private String codeVille;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "gouvernorat")
    private String gouvernorat;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "ville")
    private String ville;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 4)
    @Column(name = "cod_postale")
    private String codPostale;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "pays")
    private String pays;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ville")
    private Collection<CabinetMedical> cabinetMedicalCollection;

    public Ville() {
    }

    public Ville(String codeVille) {
        this.codeVille = codeVille;
    }

    public Ville(String codeVille, String gouvernorat, String ville, String codPostale, String pays) {
        this.codeVille = codeVille;
        this.gouvernorat = gouvernorat;
        this.ville = ville;
        this.codPostale = codPostale;
        this.pays = pays;
    }

    public String getCodeVille() {
        return codeVille;
    }

    public void setCodeVille(String codeVille) {
        this.codeVille = codeVille;
    }

    public String getGouvernorat() {
        return gouvernorat;
    }

    public void setGouvernorat(String gouvernorat) {
        this.gouvernorat = gouvernorat;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getCodPostale() {
        return codPostale;
    }

    public void setCodPostale(String codPostale) {
        this.codPostale = codPostale;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    @XmlTransient
    public Collection<CabinetMedical> getCabinetMedicalCollection() {
        return cabinetMedicalCollection;
    }

    public void setCabinetMedicalCollection(Collection<CabinetMedical> cabinetMedicalCollection) {
        this.cabinetMedicalCollection = cabinetMedicalCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codeVille != null ? codeVille.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Ville)) {
            return false;
        }
        Ville other = (Ville) object;
        if ((this.codeVille == null && other.codeVille != null) || (this.codeVille != null && !this.codeVille.equals(other.codeVille))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Ville[ codeVille=" + codeVille + " ]";
    }

    @XmlTransient
    public Collection<Patient> getPatientCollection() {
        return patientCollection;
    }

    public void setPatientCollection(Collection<Patient> patientCollection) {
        this.patientCollection = patientCollection;
    }
    
}
