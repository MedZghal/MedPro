/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.model;

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
public class FichPatientPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "num_patient")
    private int numPatient;
    @Basic(optional = false)
    @NotNull
    @Column(name = "code_Med_Trit")
    private int codeMedTrit;

    public FichPatientPK() {
    }

    public FichPatientPK(int numPatient, int codeMedTrit) {
        this.numPatient = numPatient;
        this.codeMedTrit = codeMedTrit;
    }

    public int getNumPatient() {
        return numPatient;
    }

    public void setNumPatient(int numPatient) {
        this.numPatient = numPatient;
    }

    public int getCodeMedTrit() {
        return codeMedTrit;
    }

    public void setCodeMedTrit(int codeMedTrit) {
        this.codeMedTrit = codeMedTrit;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) numPatient;
        hash += (int) codeMedTrit;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof FichPatientPK)) {
            return false;
        }
        FichPatientPK other = (FichPatientPK) object;
        if (this.numPatient != other.numPatient) {
            return false;
        }
        if (this.codeMedTrit != other.codeMedTrit) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.csys.gcm.model.FichPatientPK[ numPatient=" + numPatient + ", codeMedTrit=" + codeMedTrit + " ]";
    }
    
}
