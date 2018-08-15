/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ASUS
 */
@Entity
@Table(name = "Messanger")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Messanger.findAll", query = "SELECT m FROM Messanger m"),
    @NamedQuery(name = "Messanger.findByMessageId", query = "SELECT m FROM Messanger m WHERE m.messageId = :messageId"),
    @NamedQuery(name = "Messanger.findByUserId", query = "SELECT m FROM Messanger m WHERE m.userId = :userId"),
    @NamedQuery(name = "Messanger.findByUserName", query = "SELECT m FROM Messanger m WHERE m.userName = :userName"),
    @NamedQuery(name = "Messanger.findByUserImgUrl", query = "SELECT m FROM Messanger m WHERE m.userImgUrl = :userImgUrl"),
    @NamedQuery(name = "Messanger.findByToUserId", query = "SELECT m FROM Messanger m WHERE m.toUserId = :toUserId"),
    @NamedQuery(name = "Messanger.findByToUserName", query = "SELECT m FROM Messanger m WHERE m.toUserName = :toUserName"),
    @NamedQuery(name = "Messanger.findByUserAvatar", query = "SELECT m FROM Messanger m WHERE m.userAvatar = :userAvatar"),
    @NamedQuery(name = "Messanger.findByTime", query = "SELECT m FROM Messanger m WHERE m.time = :time"),
    @NamedQuery(name = "Messanger.findByMessage", query = "SELECT m FROM Messanger m WHERE m.message = :message"),
    @NamedQuery(name = "Messanger.findByStatus", query = "SELECT m FROM Messanger m WHERE m.status = :status")})
public class Messanger implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "message_id")
    private Integer messageId;
    @Size(max = 50)
    @Column(name = "user_id")
    private String userId;
    @Size(max = 50)
    @Column(name = "user_name")
    private String userName;
    @Size(max = 50)
    @Column(name = "user_img_url")
    private String userImgUrl;
    @Size(max = 50)
    @Column(name = "to_user_id")
    private String toUserId;
    @Size(max = 50)
    @Column(name = "to_user_name")
    private String toUserName;
    @Size(max = 50)
    @Column(name = "user_avatar")
    private String userAvatar;
    @Size(max = 50)
    @Column(name = "time")
    private String time;
    @Size(max = 500)
    @Column(name = "message")
    private String message;
    @Size(max = 50)
    @Column(name = "status")
    private String status;

    public Messanger() {
    }

    public Messanger(Integer messageId) {
        this.messageId = messageId;
    }

    public Messanger(String userId, String userName, String userImgUrl, String toUserId, String toUserName, String userAvatar, String message) {
        this.userId = userId;
        this.userName = userName;
        this.userImgUrl = userImgUrl;
        this.toUserId = toUserId;
        this.toUserName = toUserName;
        this.userAvatar = userAvatar;
        this.time = (new Date()).toString();
        this.message = message;
        this.status = "sucess";
    }
    

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserImgUrl() {
        return userImgUrl;
    }

    public void setUserImgUrl(String userImgUrl) {
        this.userImgUrl = userImgUrl;
    }

    public String getToUserId() {
        return toUserId;
    }

    public void setToUserId(String toUserId) {
        this.toUserId = toUserId;
    }

    public String getToUserName() {
        return toUserName;
    }

    public void setToUserName(String toUserName) {
        this.toUserName = toUserName;
    }

    public String getUserAvatar() {
        return userAvatar;
    }

    public void setUserAvatar(String userAvatar) {
        this.userAvatar = userAvatar;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (messageId != null ? messageId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Messanger)) {
            return false;
        }
        Messanger other = (Messanger) object;
        if ((this.messageId == null && other.messageId != null) || (this.messageId != null && !this.messageId.equals(other.messageId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.perfectsolution.Clinique.Entities.Messanger[ messageId=" + messageId + " ]";
    }
    
}
