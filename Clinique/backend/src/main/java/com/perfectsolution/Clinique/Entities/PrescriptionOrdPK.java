/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

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
public class PrescriptionOrdPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "num_medc")
    private int numMedc;
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_ord")
    private int numOrd;

    public PrescriptionOrdPK() {
    }

    public PrescriptionOrdPK(int numMedc, int numOrd) {
        this.numMedc = numMedc;
        this.numOrd = numOrd;
    }

    public int getNumMedc() {
        return numMedc;
    }

    public void setNumMedc(int numMedc) {
        this.numMedc = numMedc;
    }

    public int getNumOrd() {
        return numOrd;
    }

    public void setNumOrd(int numOrd) {
        this.numOrd = numOrd;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) numMedc;
        hash += (int) numOrd;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PrescriptionOrdPK)) {
            return false;
        }
        PrescriptionOrdPK other = (PrescriptionOrdPK) object;
        if (this.numMedc != other.numMedc) {
            return false;
        }
        if (this.numOrd != other.numOrd) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.PrescriptionOrdPK[ numMedc=" + numMedc + ", numOrd=" + numOrd + " ]";
    }
    
}
