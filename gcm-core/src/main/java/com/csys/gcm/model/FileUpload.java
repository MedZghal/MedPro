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
@Table(name = "FileUpload")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "FileUpload.findAll", query = "SELECT f FROM FileUpload f"),
    @NamedQuery(name = "FileUpload.findByPatient", query = "SELECT f FROM FileUpload f WHERE f.numPatient.numFichPatient = :Patient"),
    @NamedQuery(name = "FileUpload.findByImg", query = "SELECT f FROM FileUpload f WHERE f.img = :img"),
    @NamedQuery(name = "FileUpload.findByDateUplode", query = "SELECT f FROM FileUpload f WHERE f.dateUplode = :dateUplode"),
    @NamedQuery(name = "FileUpload.findById", query = "SELECT f FROM FileUpload f WHERE f.id = :id")})
public class FileUpload implements Serializable {

    private static final long serialVersionUID = 1L;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2147483647)
    @Column(name = "img")
    private String img;
    @Column(name = "DateUplode")
    @Temporal(TemporalType.DATE)
    private Date dateUplode;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id")
    private Integer id;
    @JoinColumn(name = "num_patient", referencedColumnName = "num_fich_patient")
    @ManyToOne(optional = false)
    private Patient numPatient;

    public FileUpload() {
    }

    public FileUpload(Integer id) {
        this.id = id;
    }

    public FileUpload(Integer id, String img) {
        this.id = id;
        this.img = img;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Date getDateUplode() {
        return dateUplode;
    }

    public void setDateUplode(Date dateUplode) {
        this.dateUplode = dateUplode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Patient getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(Patient numPatient) {
        this.numPatient = numPatient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof FileUpload)) {
            return false;
        }
        FileUpload other = (FileUpload) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.FileUpload[ id=" + id + " ]";
    }
    
}
