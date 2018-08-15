/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;
import com.perfectsolution.Clinique.Entities.Messanger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class MessangerMetierImp {
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    
 
    
    public void notify(Messanger notification, String username) {
        messagingTemplate.convertAndSendToUser(
          username, 
          "/queue/notify", 
          notification
        );
        return;
    }
  
   
    public void chatSend(Messanger notification, String username) {
      messagingTemplate.convertAndSendToUser(
        username, 
        "/queue/chatSend", 
        notification
      );
      return;
    }
  
   
    public void chatRecive(Messanger notification, String username) {
     messagingTemplate.convertAndSendToUser(
       username, 
       "/queue/chatRecive", 
       notification
     );
     return;
   }
}
