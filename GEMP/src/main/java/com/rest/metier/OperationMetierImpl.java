/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.CompteRepository;
import com.rest.dao.OperationRepository;
import com.rest.entities.Compte;
import com.rest.entities.Operation;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ASUS
 */
@Service
public class OperationMetierImpl implements OperationMetier{

    @Autowired
    private OperationRepository operationRepository;
    @Autowired
    private CompteRepository compteRepository;
    @Override
    @Transactional
    public boolean verser(String code, double solde) {
        Compte cp =compteRepository.findOne(code);
        Operation o = new Operation();
        o.setDateopr(new Date());
        o.setMnt(solde);
        o.setCompte(cp);
        operationRepository.save(o);
        cp.setSolde(cp.getSolde()+solde);
        return true;
    }

    @Override
    @Transactional
    public boolean retirer(String code, double solde) {
        Compte cp =compteRepository.findOne(code);
        if(cp.getSolde()<solde)throw new RuntimeException("Solde Insuffisant");
        Operation o = new Operation();
        o.setDateopr(new Date());
        o.setMnt(solde);
        o.setCompte(cp);
        operationRepository.save(o);
        cp.setSolde(cp.getSolde()-solde);
        return true;
    }

    @Override
    @Transactional
    public boolean virement(String cp1, String cp2, double solde) {
        retirer(cp1, solde);
        verser(cp2, solde);
        return true;
    }

    @Override
    @Transactional
    public PageOperation getOprs(String code, int page, int size) {
        Page<Operation> ops=operationRepository.getOprs(code,new PageRequest(page, size));
        PageOperation pop=new PageOperation();
        pop.setOperations(ops.getContent());
        pop.setNbOpr(ops.getNumberOfElements());
        pop.setPage(ops.getNumber());
        pop.setTotalPag(ops.getTotalPages());
        pop.setTotalOpr((int)ops.getTotalElements());
        return pop;
    }
    
}
