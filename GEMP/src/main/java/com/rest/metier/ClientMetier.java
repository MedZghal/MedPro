/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.metier;

import com.rest.entities.Client;
import java.util.List;

/**
 *
 * @author ASUS
 */
public interface ClientMetier {
    public Client saveClient(Client c) ;
    public List<Client> listClient();
    
}
