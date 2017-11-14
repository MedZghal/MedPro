/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.services;

import com.rest.metier.OperationMetier;
import com.rest.metier.PageOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ASUS
 */
@RestController
public class OperationRestService {
    @Autowired
    private OperationMetier operationMetier;

    @RequestMapping(value = "/operartions",method = RequestMethod.GET)
    public PageOperation getOpr(@RequestParam String code,@RequestParam int page,@RequestParam int size) {
        return operationMetier.getOprs(code, page, size);
    }

    
    @RequestMapping(value = "/versement",method = RequestMethod.PUT)
    public boolean verser(@RequestParam String code,@RequestParam double solde) {
        return operationMetier.verser(code, solde);
    }

    @RequestMapping(value = "/retrait",method = RequestMethod.PUT)
    public boolean retirer(@RequestParam String code,@RequestParam double solde) {
        return operationMetier.retirer(code, solde);
    }

    @RequestMapping(value = "/virement",method = RequestMethod.PUT)
    public boolean virement(@RequestParam String cp1,@RequestParam String cp2,@RequestParam double solde) {
        return operationMetier.virement(cp1, cp2, solde);
    }
    
    
    
}
