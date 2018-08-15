/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Dao;

import com.perfectsolution.Clinique.Entities.FileUpload;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author ASUS
 */
public interface FileUploadRepository extends JpaRepository<FileUpload,Integer>{
    @Query("SELECT f FROM FileUpload f WHERE f.numPatient.numFichPatient = :numPatient")
    public List<FileUpload> GetlistFileUp(@Param("numPatient") int num_patient);
}
