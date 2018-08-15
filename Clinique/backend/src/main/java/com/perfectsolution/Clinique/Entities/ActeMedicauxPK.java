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
public class ActeMedicauxPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "num_acte")
    private int numActe;
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_consult")
    private int numConsult;

    public ActeMedicauxPK() {
    }

    public ActeMedicauxPK(int numActe, int numConsult) {
        this.numActe = numActe;
        this.numConsult = numConsult;
    }

    public int getNumActe() {
        return numActe;
    }

    public void setNumActe(int numActe) {
        this.numActe = numActe;
    }

    public int getNumConsult() {
        return numConsult;
    }

    public void setNumConsult(int numConsult) {
        this.numConsult = numConsult;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) numActe;
        hash += (int) numConsult;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ActeMedicauxPK)) {
            return false;
        }
        ActeMedicauxPK other = (ActeMedicauxPK) object;
        if (this.numActe != other.numActe) {
            return false;
        }
        if (this.numConsult != other.numConsult) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.ActeMedicauxPK[ numActe=" + numActe + ", numConsult=" + numConsult + " ]";
    }
    
}
