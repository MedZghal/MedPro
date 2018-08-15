/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perfectsolution.Clinique.Metier;

import com.perfectsolution.Clinique.Dao.FileUploadRepository;
import com.perfectsolution.Clinique.Entities.FileUpload;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS
 */
@Service
public class FileUploadMetierImpl implements FileUploadMetier{
    
    @Autowired
    public FileUploadRepository fileUploadRepository;

    @Override
    public List<FileUpload> GetlistFileUp(int num_patient) {
         return fileUploadRepository.GetlistFileUp(num_patient);
    }


}
