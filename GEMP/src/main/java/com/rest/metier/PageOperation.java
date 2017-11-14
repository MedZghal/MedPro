/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Operation;
import java.io.Serializable;
import java.util.List;

/**
 *
 * @author ASUS
 */
public class PageOperation implements Serializable{
    private List<Operation> operations;
    private int page;
    private int nbOpr;
    private int totalOpr;
    private int totalPag;

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getNbOpr() {
        return nbOpr;
    }

    public void setNbOpr(int nbOpr) {
        this.nbOpr = nbOpr;
    }

    public int getTotalOpr() {
        return totalOpr;
    }

    public void setTotalOpr(int totalOpr) {
        this.totalOpr = totalOpr;
    }

    public int getTotalPag() {
        return totalPag;
    }

    public void setTotalPag(int totalPag) {
        this.totalPag = totalPag;
    }
    
    
    
    
}
