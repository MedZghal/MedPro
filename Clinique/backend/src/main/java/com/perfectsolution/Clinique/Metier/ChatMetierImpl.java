/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.ChatRepository;
import com.perfectsolution.Clinique.Entities.Messanger;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class ChatMetierImpl implements ChatMetier{

    @Autowired
    public ChatRepository chatRepository;
    
    @Override
    public List<Messanger> getChatList() {
        return chatRepository.findAll();
    }
    
    
}
