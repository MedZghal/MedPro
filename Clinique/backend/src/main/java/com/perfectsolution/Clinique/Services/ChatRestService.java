/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Messanger;
import com.perfectsolution.Clinique.Metier.ChatMetier;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author ASUS
 */
@RestController
public class ChatRestService {
    
    @Autowired
    public ChatMetier chatMetier;

    
    /**
     *
     * @return
     */
    @GetMapping("/ChatMsg")
    public List<Messanger> getChatList() {
        return chatMetier.getChatList();
    }
    
}
