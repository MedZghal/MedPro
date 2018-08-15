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
public class MotifConsultPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "num_Motif")
    private int numMotif;
    @Basic(optional = false)
    @NotNull
    @Column(name = "num_consult")
    private int numConsult;

    public MotifConsultPK() {
    }

    public MotifConsultPK(int numMotif, int numConsult) {
        this.numMotif = numMotif;
        this.numConsult = numConsult;
    }

    public int getNumMotif() {
        return numMotif;
    }

    public void setNumMotif(int numMotif) {
        this.numMotif = numMotif;
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
        hash += (int) numMotif;
        hash += (int) numConsult;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MotifConsultPK)) {
            return false;
        }
        MotifConsultPK other = (MotifConsultPK) object;
        if (this.numMotif != other.numMotif) {
            return false;
        }
        if (this.numConsult != other.numConsult) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.rest.entities.MotifConsultPK[ numMotif=" + numMotif + ", numConsult=" + numConsult + " ]";
    }
    
}
