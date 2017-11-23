/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author ASUS
 */
@Embeddable
public class TraitementAPCIPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "num_patient")
    private int numPatient;
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_medic")
    private int numMedic;

    public TraitementAPCIPK() {
    }

    public TraitementAPCIPK(int numPatient, int numMedic) {
        this.numPatient = numPatient;
        this.numMedic = numMedic;
    }

    public int getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(int numPatient) {
        this.numPatient = numPatient;
    }

    public int getNumMedic() {
        return numMedic;
    }

    public void setNumMedic(int numMedic) {
        this.numMedic = numMedic;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) numPatient;
        hash += (int) numMedic;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TraitementAPCIPK)) {
            return false;
        }
        TraitementAPCIPK other = (TraitementAPCIPK) object;
        if (this.numPatient != other.numPatient) {
            return false;
        }
        if (this.numMedic != other.numMedic) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.TraitementAPCIPK[ numPatient=" + numPatient + ", numMedic=" + numMedic + " ]";
    }
    
}
