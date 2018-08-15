/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Services;

import com.perfectsolution.Clinique.Entities.Messanger;
import com.perfectsolution.Clinique.Metier.MessangerMetierImp;
import java.io.IOException;
import java.net.MalformedURLException;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author ASUS
 */
@Controller
public class MessangerRestService {
    
    @Autowired
    public MessangerMetierImp messangerMetierImp;
    
     @RequestMapping(value = "/hello", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Messanger> hello(Principal principal) throws MalformedURLException, IOException {
            ResponseEntity<Messanger> rep=new ResponseEntity<>(new Messanger("GEMP Login, " + principal.getName() + "!",principal.getName(),"","","","",""), HttpStatus.OK);
            
            return rep ;
	}

  
    @RequestMapping("/")
    public String index() {
      return "index";
    }

    /**
     * GET  /notifications  -> show the notifications page.
     */
    @RequestMapping("/notifications")
    public String notifications() {
      return "notifications";
    }
    @RequestMapping(value = "/SendMsg", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> SendMsg(@RequestParam String msg,@RequestParam String user,Principal principal) {

      // Do an action here
      // ...

      // Send the notification to "UserA" (by username)
      messangerMetierImp.chatSend(
        new Messanger(principal.getName(),principal.getName(),"","","","",msg), // notification object
        user                   // username
      );
      // Return an http 200 status code
      return new ResponseEntity<>(HttpStatus.OK);
    }
  
    
    @RequestMapping(value = "/ReciveMsg", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> ReciveMsg(@RequestParam String msg,@RequestParam String user,Principal principal) {

      // Do an action here
      // ...

      // Send the notification to "UserA" (by username)
      messangerMetierImp.chatRecive(
        new Messanger(principal.getName(),principal.getName(),"","","","",msg), // notification object
        user                   // username
      );

      // Return an http 200 status code
      return new ResponseEntity<>(HttpStatus.OK);
    }
}
