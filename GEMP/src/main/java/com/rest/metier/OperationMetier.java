/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

/**
 *
 * @author ASUS
 */
public interface OperationMetier {
    public boolean verser(String code, double solde);
    public boolean retirer(String code, double solde);
    public boolean virement(String cp1,String cp2, double solde);
    public PageOperation getOprs(String code,int page ,int size);
}
