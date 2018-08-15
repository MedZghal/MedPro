/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

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
@Table(name = "Cabinet_Medical")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "CabinetMedical.findAll", query = "SELECT c FROM CabinetMedical c"),
    @NamedQuery(name = "CabinetMedical.findByNumCab", query = "SELECT c FROM CabinetMedical c WHERE c.numCab = :numCab"),
    @NamedQuery(name = "CabinetMedical.findByNomMedecin", query = "SELECT c FROM CabinetMedical c WHERE c.nomMedecin = :nomMedecin"),
    @NamedQuery(name = "CabinetMedical.findByPrenomMedecin", query = "SELECT c FROM CabinetMedical c WHERE c.prenomMedecin = :prenomMedecin"),
    @NamedQuery(name = "CabinetMedical.findByDateNaiss", query = "SELECT c FROM CabinetMedical c WHERE c.dateNaiss = :dateNaiss"),
    @NamedQuery(name = "CabinetMedical.findBySalutation", query = "SELECT c FROM CabinetMedical c WHERE c.salutation = :salutation"),
    @NamedQuery(name = "CabinetMedical.findByNumInscpOrdMed", query = "SELECT c FROM CabinetMedical c WHERE c.numInscpOrdMed = :numInscpOrdMed"),
    @NamedQuery(name = "CabinetMedical.findByAdresse", query = "SELECT c FROM CabinetMedical c WHERE c.adresse = :adresse"),
    @NamedQuery(name = "CabinetMedical.findByFixe", query = "SELECT c FROM CabinetMedical c WHERE c.fixe = :fixe"),
    @NamedQuery(name = "CabinetMedical.findByGsm", query = "SELECT c FROM CabinetMedical c WHERE c.gsm = :gsm"),
    @NamedQuery(name = "CabinetMedical.findByEmail", query = "SELECT c FROM CabinetMedical c WHERE c.email = :email"),
    @NamedQuery(name = "CabinetMedical.findByTitre", query = "SELECT c FROM CabinetMedical c WHERE c.titre = :titre"),
    @NamedQuery(name = "CabinetMedical.findBySpecialite", query = "SELECT c FROM CabinetMedical c WHERE c.specialite = :specialite"),
    @NamedQuery(name = "CabinetMedical.findByGouvernorat", query = "SELECT c FROM CabinetMedical c WHERE c.gouvernorat = :gouvernorat"),
    @NamedQuery(name = "CabinetMedical.findByCodeConvent", query = "SELECT c FROM CabinetMedical c WHERE c.codeConvent = :codeConvent"),
    @NamedQuery(name = "CabinetMedical.findByTiketModer", query = "SELECT c FROM CabinetMedical c WHERE c.tiketModer = :tiketModer"),
    @NamedQuery(name = "CabinetMedical.findByTvaConsult", query = "SELECT c FROM CabinetMedical c WHERE c.tvaConsult = :tvaConsult"),
    @NamedQuery(name = "CabinetMedical.findByMontantConsult", query = "SELECT c FROM CabinetMedical c WHERE c.montantConsult = :montantConsult"),
    @NamedQuery(name = "CabinetMedical.findByTypeConsult", query = "SELECT c FROM CabinetMedical c WHERE c.typeConsult = :typeConsult"),
    @NamedQuery(name = "CabinetMedical.findByMntconsultSansConv", query = "SELECT c FROM CabinetMedical c WHERE c.mntconsultSansConv = :mntconsultSansConv")})
public class CabinetMedical implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_cab")
    private Integer numCab;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nom_medecin")
    private String nomMedecin;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "prenom_medecin")
    private String prenomMedecin;
    @Column(name = "date_naiss")
    @Temporal(TemporalType.DATE)
    private Date dateNaiss;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "salutation")
    private String salutation;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "num_inscp_ord_med")
    private String numInscpOrdMed;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "adresse")
    private String adresse;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 8)
    @Column(name = "Fixe")
    private String fixe;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 8)
    @Column(name = "GSM")
    private String gsm;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 350)
    @Column(name = "titre")
    private String titre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "specialite")
    private String specialite;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "gouvernorat")
    private String gouvernorat;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 12)
    @Column(name = "code_convent")
    private String codeConvent;
    @Basic(optional = false)
    @NotNull
    @Column(name = "tiket_moder")
    private double tiketModer;
    @Basic(optional = false)
    @NotNull
    @Column(name = "tva_consult")
    private double tvaConsult;
    @Basic(optional = false)
    @NotNull
    @Column(name = "montant_consult")
    private double montantConsult;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "type_consult")
    private String typeConsult;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "mnt_consultsansconv")
    private String mntconsultSansConv;
    @JoinColumn(name = "code_Med_Trit", referencedColumnName = "code_Med_Trit")
    @ManyToOne(optional = false)
    private Utilisateur codeMedTrit;
    @JoinColumn(name = "ville", referencedColumnName = "codeville")
    @ManyToOne(optional = false)
    private Ville ville;

    public CabinetMedical() {
    }

    public CabinetMedical(Integer numCab) {
        this.numCab = numCab;
    }

    public CabinetMedical(Integer numCab, String nomMedecin, String prenomMedecin, String salutation, String numInscpOrdMed, String adresse, String fixe, String gsm, String email, String titre, String specialite, String gouvernorat, String codeConvent, double tiketModer, double tvaConsult, double montantConsult, String typeConsult, String mntconsultSansConv) {
        this.numCab = numCab;
        this.nomMedecin = nomMedecin;
        this.prenomMedecin = prenomMedecin;
        this.salutation = salutation;
        this.numInscpOrdMed = numInscpOrdMed;
        this.adresse = adresse;
        this.fixe = fixe;
        this.gsm = gsm;
        this.email = email;
        this.titre = titre;
        this.specialite = specialite;
        this.gouvernorat = gouvernorat;
        this.codeConvent = codeConvent;
        this.tiketModer = tiketModer;
        this.tvaConsult = tvaConsult;
        this.montantConsult = montantConsult;
        this.typeConsult = typeConsult;
        this.mntconsultSansConv = mntconsultSansConv;
    }

    public Integer getNumCab() {
        return numCab;
    }

    public void setNumCab(Integer numCab) {
        this.numCab = numCab;
    }

    public String getNomMedecin() {
        return nomMedecin;
    }

    public void setNomMedecin(String nomMedecin) {
        this.nomMedecin = nomMedecin;
    }

    public String getPrenomMedecin() {
        return prenomMedecin;
    }

    public void setPrenomMedecin(String prenomMedecin) {
        this.prenomMedecin = prenomMedecin;
    }

    public Date getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(Date dateNaiss) {
        this.dateNaiss = dateNaiss;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }

    public String getNumInscpOrdMed() {
        return numInscpOrdMed;
    }

    public void setNumInscpOrdMed(String numInscpOrdMed) {
        this.numInscpOrdMed = numInscpOrdMed;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

    public String getGouvernorat() {
        return gouvernorat;
    }

    public void setGouvernorat(String gouvernorat) {
        this.gouvernorat = gouvernorat;
    }

    public String getCodeConvent() {
        return codeConvent;
    }

    public void setCodeConvent(String codeConvent) {
        this.codeConvent = codeConvent;
    }

    public double getTiketModer() {
        return tiketModer;
    }

    public void setTiketModer(double tiketModer) {
        this.tiketModer = tiketModer;
    }

    public double getTvaConsult() {
        return tvaConsult;
    }

    public void setTvaConsult(double tvaConsult) {
        this.tvaConsult = tvaConsult;
    }

    public double getMontantConsult() {
        return montantConsult;
    }

    public void setMontantConsult(double montantConsult) {
        this.montantConsult = montantConsult;
    }

    public String getTypeConsult() {
        return typeConsult;
    }

    public void setTypeConsult(String typeConsult) {
        this.typeConsult = typeConsult;
    }

    public String getMntconsultSansConv() {
        return mntconsultSansConv;
    }

    public void setMntconsultSansConv(String mntconsultSansConv) {
        this.mntconsultSansConv = mntconsultSansConv;
    }
    @JsonIgnore
    public Utilisateur getCodeMedTrit() {
        return codeMedTrit;
    }

    public void setCodeMedTrit(Utilisateur codeMedTrit) {
        this.codeMedTrit = codeMedTrit;
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
        hash += (numCab != null ? numCab.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CabinetMedical)) {
            return false;
        }
        CabinetMedical other = (CabinetMedical) object;
        if ((this.numCab == null && other.numCab != null) || (this.numCab != null && !this.numCab.equals(other.numCab))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.CabinetMedical[ numCab=" + numCab + " ]";
    }
    
}
