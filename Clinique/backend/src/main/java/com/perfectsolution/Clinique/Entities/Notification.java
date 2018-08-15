package com.perfectsolution.Clinique.Entities;

public class Notification {

private String User;
private String message;

  public Notification (String content,String User) {
    this.message = content;
    this.User = User;
  }

  public String getContent() {
    return message;
  }

    public String getUser() {
        return User;
    }
  
  
}
