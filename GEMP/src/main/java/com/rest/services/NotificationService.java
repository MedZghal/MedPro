package com.rest.services;

import com.rest.entities.Notification;
import com.rest.metier.NotificationMetierImpl;
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




@Controller
public class NotificationService {

  @Autowired
  private NotificationMetierImpl notificationService;

  /**
   * GET  /  -> show the index page.
     * @param principal
     * @return 
   */
  
  @RequestMapping(value = "/hello", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Notification> hello(Principal principal) throws MalformedURLException, IOException {
            ResponseEntity<Notification> rep=new ResponseEntity<Notification>(new Notification("GEMP Login, " + principal.getName() + "!",principal.getName()), HttpStatus.OK);
            
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

  /**
   * POST  /some-action  -> do an action.
   * 
   * After the action is performed will be notified UserA.
     * @param msg
     * @param user
     * @return 
   */
  @RequestMapping(value = "/some-action", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity<?> someAction(@RequestParam String msg,@RequestParam String user,Principal principal) {

    // Do an action here
    // ...
    
    // Send the notification to "UserA" (by username)
    notificationService.notify(
      new Notification(msg,principal.getName()), // notification object
      user                   // username
    );
    
    // Return an http 200 status code
    return new ResponseEntity<>(HttpStatus.OK);
  }
  
  
  @RequestMapping(value = "/SendMsg", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity<?> SendMsg(@RequestParam String msg,@RequestParam String user,Principal principal) {

    // Do an action here
    // ...
    
    // Send the notification to "UserA" (by username)
    notificationService.chatSend(
      new Notification(msg,principal.getName()), // notification object
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
    notificationService.chatRecive(
      new Notification(msg,principal.getName()), // notification object
      user                   // username
    );
    
    // Return an http 200 status code
    return new ResponseEntity<>(HttpStatus.OK);
  }

} // class NotificationService
