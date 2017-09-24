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
@Table(name = "Patient")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Patient.findAll", query = "SELECT p FROM Patient p"),
    @NamedQuery(name = "Patient.findAllOp", query = "SELECT p.adresse,p.assurCnam,p.autreAssur,p.codeApci,p.dateValid,p.datenaiss,p.fichpapier,p.fixe,p.gsm,p.numFichPatient,p.poids,p.prenom,p.profession,p.sexe,p.sutFam,p.typeApci,p.ville.ville FROM Patient p"),
    @NamedQuery(name = "Patient.findByNumFichPatient", query = "SELECT p FROM Patient p WHERE p.numFichPatient = :numFichPatient"),
    @NamedQuery(name = "Patient.findByNom", query = "SELECT p FROM Patient p WHERE p.nom = :nom"),
    @NamedQuery(name = "Patient.findByPrenom", query = "SELECT p FROM Patient p WHERE p.prenom = :prenom"),
    @NamedQuery(name = "Patient.findBySexe", query = "SELECT p FROM Patient p WHERE p.sexe = :sexe"),
    @NamedQuery(name = "Patient.findByDatenaiss", query = "SELECT p FROM Patient p WHERE p.datenaiss = :datenaiss"),
    @NamedQuery(name = "Patient.findBySutFam", query = "SELECT p FROM Patient p WHERE p.sutFam = :sutFam"),
    @NamedQuery(name = "Patient.findByProfession", query = "SELECT p FROM Patient p WHERE p.profession = :profession"),
    @NamedQuery(name = "Patient.findByAdresse", query = "SELECT p FROM Patient p WHERE p.adresse = :adresse"),
    @NamedQuery(name = "Patient.findByFixe", query = "SELECT p FROM Patient p WHERE p.fixe = :fixe"),
    @NamedQuery(name = "Patient.findByGsm", query = "SELECT p FROM Patient p WHERE p.gsm = :gsm"),
    @NamedQuery(name = "Patient.findByPoids", query = "SELECT p FROM Patient p WHERE p.poids = :poids"),
    @NamedQuery(name = "Patient.findByFichpapier", query = "SELECT p FROM Patient p WHERE p.fichpapier = :fichpapier"),
    @NamedQuery(name = "Patient.findByAutreAssur", query = "SELECT p FROM Patient p WHERE p.autreAssur = :autreAssur"),
    @NamedQuery(name = "Patient.findByCodeApci", query = "SELECT p FROM Patient p WHERE p.codeApci = :codeApci"),
    @NamedQuery(name = "Patient.findByTypeApci", query = "SELECT p FROM Patient p WHERE p.typeApci = :typeApci"),
    @NamedQuery(name = "Patient.findByDateValid", query = "SELECT p FROM Patient p WHERE p.dateValid = :dateValid")})
public class Patient implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_fich_patient")
    private Integer numFichPatient;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nom")
    private String nom;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "prenom")
    private String prenom;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "sexe")
    private String sexe;
    @Column(name = "datenaiss")
    @Temporal(TemporalType.DATE)
    private Date datenaiss;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "sut_fam")
    private String sutFam;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "profession")
    private String profession;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "adresse")
    private String adresse;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 8)
    @Column(name = "fixe")
    private String fixe;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 8)
    @Column(name = "gsm")
    private String gsm;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "poids")
    private String poids;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "fichpapier")
    private String fichpapier;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "AutreAssur")
    private String autreAssur;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 4)
    @Column(name = "code_apci")
    private String codeApci;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type_apci")
    private String typeApci;
    @Column(name = "date_valid")
    @Temporal(TemporalType.DATE)
    private Date dateValid;
    @JoinColumn(name = "AssurCnam", referencedColumnName = "num_Assur")
    @ManyToOne
    private AssuranceCNAM assurCnam;
    @JoinColumn(name = "ville", referencedColumnName = "codeVille")
    @ManyToOne(optional = false)
    private Ville ville;

    public Patient() {
    }

    public Patient(Integer numFichPatient) {
        this.numFichPatient = numFichPatient;
    }

    public Patient(Integer numFichPatient, String nom, String prenom, String sexe, String sutFam, String profession, String adresse, String fixe, String gsm, String poids, String fichpapier, String autreAssur, String codeApci, String typeApci) {
        this.numFichPatient = numFichPatient;
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.sutFam = sutFam;
        this.profession = profession;
        this.adresse = adresse;
        this.fixe = fixe;
        this.gsm = gsm;
        this.poids = poids;
        this.fichpapier = fichpapier;
        this.autreAssur = autreAssur;
        this.codeApci = codeApci;
        this.typeApci = typeApci;
    }

    public Integer getNumFichPatient() {
        return numFichPatient;
    }

    public void setNumFichPatient(Integer numFichPatient) {
        this.numFichPatient = numFichPatient;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public Date getDatenaiss() {
        return datenaiss;
    }

    public void setDatenaiss(Date datenaiss) {
        this.datenaiss = datenaiss;
    }

    public String getSutFam() {
        return sutFam;
    }

    public void setSutFam(String sutFam) {
        this.sutFam = sutFam;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getFixe() {
        return fixe;
    }

    public void setFixe(String fixe) {
        this.fixe = fixe;
    }

    public String getGsm() {
        return gsm;
    }

    public void setGsm(String gsm) {
        this.gsm = gsm;
    }

    public String getPoids() {
        return poids;
    }

    public void setPoids(String poids) {
        this.poids = poids;
    }

    public String getFichpapier() {
        return fichpapier;
    }

    public void setFichpapier(String fichpapier) {
        this.fichpapier = fichpapier;
    }

    public String getAutreAssur() {
        return autreAssur;
    }

    public void setAutreAssur(String autreAssur) {
        this.autreAssur = autreAssur;
    }

    public String getCodeApci() {
        return codeApci;
    }

    public void setCodeApci(String codeApci) {
        this.codeApci = codeApci;
    }

    public String getTypeApci() {
        return typeApci;
    }

    public void setTypeApci(String typeApci) {
        this.typeApci = typeApci;
    }

    public Date getDateValid() {
        return dateValid;
    }

    public void setDateValid(Date dateValid) {
        this.dateValid = dateValid;
    }

    public AssuranceCNAM getAssurCnam() {
        return assurCnam;
    }

    public void setAssurCnam(AssuranceCNAM assurCnam) {
        this.assurCnam = assurCnam;
    }

    public Ville getVille() {
        return ville;
    }

    public void setVille(Ville ville) {
        this.ville = ville;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (numFichPatient != null ? numFichPatient.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Patient)) {
            return false;
        }
        Patient other = (Patient) object;
        if ((this.numFichPatient == null && other.numFichPatient != null) || (this.numFichPatient != null && !this.numFichPatient.equals(other.numFichPatient))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.Patient[ numFichPatient=" + numFichPatient + " ]";
    }
    
}
