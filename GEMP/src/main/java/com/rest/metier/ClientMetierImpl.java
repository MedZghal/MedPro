/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.dao.ClientRepository;
import com.rest.entities.Client;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class ClientMetierImpl implements ClientMetier{

    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client saveClient(Client c) {
        return clientRepository.save(c);
    }

    @Override
    public List<Client> listClient() {
        return  clientRepository.findAll();
    }
    
}
