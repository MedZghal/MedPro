/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.service;

import com.csys.gcm.dao.ActeDao;
import com.csys.gcm.dao.AntecedentsDao;
import com.csys.gcm.dao.AssuranceDao;
import com.csys.gcm.dao.BilanDao;
import com.csys.gcm.dao.CabinetMedicalDao;
import com.csys.gcm.dao.ConsultationDao;
import com.csys.gcm.dao.ExamenDao;
import com.csys.gcm.dao.LettreDao;
import com.csys.gcm.dao.MedicamentDao;
import com.csys.gcm.dao.MotifDao;
import com.csys.gcm.dao.OrdonnanceDao;
import com.csys.gcm.dao.PatientDao;
import com.csys.gcm.dao.RdvDao;
import com.csys.gcm.dao.RecetteDao;
import com.csys.gcm.dao.TraitementAPCIDao;
import com.csys.gcm.model.Acte;
import com.csys.gcm.model.ActeMedicaux;
import com.csys.gcm.model.Antecedents;
import com.csys.gcm.model.AssuranceCNAM;
import com.csys.gcm.model.BianBioGly;
import com.csys.gcm.model.BilanAAutre;
import com.csys.gcm.model.BilanAECBU;
import com.csys.gcm.model.BilanAECG;
import com.csys.gcm.model.BilanBioHemostase;
import com.csys.gcm.model.BilanBioHepatique;
import com.csys.gcm.model.BilanBioNFS;
import com.csys.gcm.model.BilanBioRenal;
import com.csys.gcm.model.BilanBioinflam;
import com.csys.gcm.model.BilanBiolipidique;
import com.csys.gcm.model.CabinetMedical;
import com.csys.gcm.model.Consultation;
import com.csys.gcm.model.Dci;
import com.csys.gcm.model.Diagnostic;
import com.csys.gcm.model.Examen;
import com.csys.gcm.model.FileUpload;
import com.csys.gcm.model.Lettre;
import com.csys.gcm.model.Medicament;
import com.csys.gcm.model.Motif;
import com.csys.gcm.model.MotifConsult;
import com.csys.gcm.model.Ordonnance;
import com.csys.gcm.model.Param;
import com.csys.gcm.model.Patient;
import com.csys.gcm.model.PrescriptionOrd;
import com.csys.gcm.model.Rdv;
import com.csys.gcm.model.Recette;
import com.csys.gcm.model.SalleAttente;
import com.csys.gcm.model.TraitementAPCI;
import com.csys.gcm.model.Utilisateur;
import com.csys.gcm.model.Ville;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;


/**
 *
 * @author ASUS
 */
@WebService(serviceName = "GcmEventWS")
public class GcmEventWS {

    /**
     * This is a sample web service operation
     * @return 
     */
    
    @WebMethod(operationName = "GetListPatient")
    public List<Patient> GetListPatient()  {
        return new PatientDao().GetListPatient();
    }
    
    /**
     *
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "GetListPatientByMedecin")
    public List<Patient> GetListPatientByMedecin(@WebParam(name = "code_Med_Trit") int code_Med_Trit)  {
        return new PatientDao().GetListPatientByMedecin(code_Med_Trit);
    }
    
    /**
     *
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "GetListAllPatientByMedecin")
    public List<Patient> GetListAllPatientByMedecin(@WebParam(name = "code_Med_Trit") int code_Med_Trit)  {
        return new PatientDao().GetListAllPatientByMedecin(code_Med_Trit);
    }
    /**
     *
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "GetListDossierParByMedecin")
    public List<Patient> GetListDossierParByMedecin(@WebParam(name = "code_Med_Trit") int code_Med_Trit)  {
        return new PatientDao().GetListDossierParByMedecin(code_Med_Trit);
    }
    /**
     *
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "GetListPatientByMedecinOpt")
    public List<String[]> GetListPatientByMedecinOpt(@WebParam(name = "code_Med_Trit") int code_Med_Trit)  {
        return new PatientDao().GetListPatientByMedecinOpt(code_Med_Trit);
    }
    
    /**
     *
     * @param code_Med_Trit
     * @param numPatient
     * @return
     */
    @WebMethod(operationName = "GetListPatientByFichPatient")
    public String GetListPatientByFichPatient(@WebParam(name = "code_Med_Trit") int code_Med_Trit,@WebParam(name = "numPatient") int numPatient)  {
        return new PatientDao().GetListPatientByFichPatient(code_Med_Trit, numPatient);
    }
    
    @WebMethod(operationName = "GetDateServeur")
    public String GetDateServeur()  {
        return new CabinetMedicalDao().GetDateServeur();
    }
    
    /**
     *
     * @param NumFichPatient
     * @return
     */
    @WebMethod(operationName = "GetPatientByNumFichPatient")
    public Patient GetPatientByNumFichPatient(@WebParam(name = "NumFichPatient") int NumFichPatient )  {
        return new PatientDao().GetPatientByNumFichPatient(NumFichPatient);
    }
        
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListVille")
    public List<Ville> GetListVille()  {
        return new PatientDao().GetListVille();
    }
    
    /**
     *
     * @param ville
     * @return
     */
    @WebMethod(operationName = "GetListGouvernorat")
    public List<Ville> GetListGouvernorat(@WebParam(name = "Ville") String ville )  {
        return new PatientDao().GetListGouvernorat(ville);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListVilleDistinct")
    public List<String> GetListVilleDistinct()  {
        return new PatientDao().GetListVilleDistinct();
    }
    
    /**
     *
     
     * @param nom
     * @param pr
     * @param sexe
     * @param d
     * @param sut_fam
     * @param prof
     * @param adr
     * @param fixe
     * @param tel
     * @param poid
     * @param codVill
     * @param fichpapier
     * @param AutreAssur
     * @param code_apci
     * @param type_apci
     * @param date_valid
     * @param AssurCnam
     * @return
     */
    @WebMethod(operationName = "AjPatient")
    public String AjPatient(@WebParam(name = "nom") String nom ,@WebParam(name = "prenom") String pr , @WebParam(name = "sexse") String sexe,@WebParam(name = "datnaiss") Date d,@WebParam(name = "sutfam") String sut_fam,@WebParam(name = "prof") String prof,@WebParam(name = "adr") String adr,@WebParam(name = "fixe") String fixe,@WebParam(name = "gsm") String tel,@WebParam(name = "poid") String poid ,@WebParam(name = "ville") String codVill,@WebParam(name = "fichpapier") String fichpapier,@WebParam(name = "AutreAssur") String AutreAssur,@WebParam(name = "code_apci") String code_apci,@WebParam(name = "type_apci") String type_apci,@WebParam(name = "date_valid") Date date_valid,@WebParam(name = "AssurCnam") int AssurCnam) {
        /*String id ,String nom ,String pr , String sexe,Date d,String sut_fam,String prof,String adr,String fixe,String tel,String poid ,String codVill*/ 
        return new PatientDao().AjPatient(nom, pr, sexe, d, sut_fam, prof, adr, fixe, tel, poid, codVill, fichpapier, AutreAssur, code_apci, type_apci, date_valid,AssurCnam);
    }

    /**
     *
     * @param code_Med_Trit
     * @param num_patient
     * @param partage
     * @return
     */
    @WebMethod(operationName = "AjPatientByMedecin")
    public String AjPatientByMedecin(@WebParam(name = "code_Med_Trit") int code_Med_Trit ,@WebParam(name = "num_patient") int num_patient,@WebParam(name = "partage") String partage ) {
        try {
            return new PatientDao().AjPatientByMedecin(code_Med_Trit, num_patient,partage);
        } catch (ParseException ex) {
            Logger.getLogger(GcmEventWS.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppPatient")
    public boolean SuppPatient(@WebParam(name = "num") String id) {
         return new PatientDao().SuppPatient(id);
    }
    
    /**
     *
     * @param code_Med_Trit
     * @param num_patient
     * @return
     */
    @WebMethod(operationName = "SuppPartage")
    public boolean SuppPartage(@WebParam(name = "code_Med_Trit") int code_Med_Trit,@WebParam(name = "num_patient") int num_patient) {
         return new PatientDao().SuppPartage(code_Med_Trit,num_patient);
    }
    
    /**
     *
     * @param num_fich_patient
     * @param nom
     * @param pr
     * @param sexe
     * @param d
     * @param sut_fam
     * @param prof
     * @param adr
     * @param fixe
     * @param tel
     * @param poid
     * @param codVill
     * @param fichpapier
     * @param AutreAssur
     * @param code_apci
     * @param type_apci
     * @param date_valid
     * @param AssurCnam
     * @return
     */
    @WebMethod(operationName = "UpdatePatient")
    public String UpdatePatient(@WebParam(name = "num_fich_patient") int num_fich_patient ,@WebParam(name = "nom") String nom ,@WebParam(name = "prenom") String pr , @WebParam(name = "sexe") String sexe,@WebParam(name = "datnaiss") java.util.Date d,@WebParam(name = "sutfam") String sut_fam,@WebParam(name = "prof") String prof,@WebParam(name = "adr") String adr,@WebParam(name = "fixe") String fixe,@WebParam(name = "gsm") String tel,@WebParam(name = "poid") String poid ,@WebParam(name = "ville") String codVill,@WebParam(name = "fichpapier")  String fichpapier,@WebParam(name = "AutreAssur")  String AutreAssur,@WebParam(name = "code_apci")  String code_apci,@WebParam(name = "type_apci")  String type_apci,@WebParam(name = "date_valid")  Date date_valid,@WebParam(name = "AssurCnam")  int AssurCnam) {
         return new PatientDao().UpdatePatient(num_fich_patient, nom, pr, sexe, d, sut_fam, prof, adr, fixe, tel, poid, codVill, fichpapier, AutreAssur, code_apci, type_apci, date_valid, AssurCnam);
    }
    
    /**
     *
     * @param code_Med_Trit
     * @param num_patient
     * @param partage
     * @return
     */
    @WebMethod(operationName = "UpdateMedecinPartage")
    public String UpdateMedecinPartage(@WebParam(name = "code_Med_Trit") int code_Med_Trit ,@WebParam(name = "num_patient") int num_patient ,@WebParam(name = "partage") String partage ) {
         return new PatientDao().UpdateMedecinPartage(code_Med_Trit,num_patient,partage);
    }
    /**
     *
     * @param num_fich_patient
     * @param code_apci
     * @param type_apci
     * @param date_valid
     * @return
     */
    @WebMethod(operationName = "UpdatePatientAPCI")
    public String UpdatePatientAPCI(@WebParam(name = "num_fich_patient") int num_fich_patient,@WebParam(name = "code_apci")  String code_apci,@WebParam(name = "type_apci")  String type_apci,@WebParam(name = "date_valid")  Date date_valid ) {
         return new PatientDao().UpdatePatientAPCI(num_fich_patient,code_apci,type_apci,date_valid);
    }
    
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListAntecedents")
    public List<Antecedents> GetListAntecedents()  {
        return new AntecedentsDao().GetListAntecedents();
    }
    
    /**
     *
     * @param patient
     * @return
     */
    @WebMethod(operationName = "GetListAntecedentsByPatient")
    public List<Antecedents> GetListAntecedentsByPatient(@WebParam(name = "patient") int patient )  {
        return new AntecedentsDao().GetListAntecedentsByPatient(patient);
    }
    
    /**
     *
     * @param typ
     * @param descp
     * @param codpat
     * @return
     */
    @WebMethod(operationName = "AjAntecedent")
    public String AjAntecedent(@WebParam(name = "typ") String typ ,@WebParam(name = "descp") String descp , @WebParam(name = "patient") int codpat) {
        return new AntecedentsDao().AjAntecedent(typ, descp, codpat);
    }
    
    /**
     *
     * @param numAnt
     * @param typ
     * @param descp
     * @param codpat
     * @return
     */
    @WebMethod(operationName = "UpdateAntecedent")
    public String UpdateAntecedent(@WebParam(name = "num") String numAnt ,@WebParam(name = "typ") String typ ,@WebParam(name = "descp") String descp , @WebParam(name = "patient") int codpat) {
         return new AntecedentsDao().UpdateAntecedent(numAnt, typ, descp,codpat);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppAntecedent")
    public boolean SuppAntecedent(@WebParam(name = "num") String id) {
         return new AntecedentsDao().SuppAntecedent(id);
    }
    
    /**
     *
     * @param patient
     * @return
     */
    @WebMethod(operationName = "SuppAntecedentByPatient")
    public boolean SuppAntecedentByPatient(@WebParam(name = "num") int patient) {
         return new AntecedentsDao().SuppAntecedentByPatient(patient);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListActe")
    public List<Acte> GetListActe()  {
        return new ActeDao().GetListActe();
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetMaxActe")
    public int GetMaxActe()  {
        return new ActeDao().GetMaxActe();
    }
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListActeNonRemborsable")
    public List<Acte> GetListActeNonRemborsable()  {
        return new ActeDao().GetListActeNonRemborsable();
    }
    
    /**
     *
     * @param Libelle
     * @return
     */
    @WebMethod(operationName = "GetActeNonRemborsablebyLibelle")
    public Acte GetActeNonRemborsablebyLibelle(@WebParam(name = "Libelle") String Libelle)  {
        return new ActeDao().GetActeNonRemborsablebyLibelle(Libelle);
    }
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "GetListActeMedicauxByNumConsult")
    public List<ActeMedicaux> GetListActeMedicauxByNumConsult(@WebParam(name = "num_consult") int num_consult)  {
        return new ActeDao().GetListActeMedicauxByNumConsult(num_consult);
    }
    
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "GetListActeMedicauxAllByNumConsult")
    public List<ActeMedicaux> GetListActeMedicauxAllByNumConsult(@WebParam(name = "num_consult") int num_consult)  {
        return new ActeDao().GetListActeMedicauxAllByNumConsult(num_consult);
    }
    
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "GetListActeMedicauxNonRembByNumConsult")
    public List<ActeMedicaux> GetListActeMedicauxNonRembByNumConsult(@WebParam(name = "num_consult") int num_consult)  {
        return new ActeDao().GetListActeMedicauxNonRembByNumConsult(num_consult);
    }
    /**
     *
     * @param lib
     * @param acord
     * @param tiket_moder
     * @param Mnt
     * @param Descp
     * @param Cot
     * @param typ
     * @return
     */
    @WebMethod(operationName = "AjActe")
    public String AjActe(@WebParam(name = "lib") String lib ,@WebParam(name = "acord") int acord ,@WebParam(name = "tiket") String tiket_moder,@WebParam(name = "Mnt") String Mnt,@WebParam(name = "Dscp")String Descp,@WebParam(name = "cotation")String Cot,@WebParam(name = "type")String typ) {
        return new ActeDao().AjActe(lib, acord, tiket_moder, Mnt, Descp, Cot,typ);
    }
    
    /**
     *
     * @param numActe
     * @param lib
     * @param acord
     * @param tiket_moder
     * @param Mnt
     * @param Descp
     * @param Cot
     * @param typ
     * @return
     */
    @WebMethod(operationName = "UpdateActe")
    public String UpdateActe(@WebParam(name = "num") String numActe, @WebParam(name = "lib") String lib ,@WebParam(name = "acord") int acord ,@WebParam(name = "tiket") String tiket_moder,@WebParam(name = "Mnt") String Mnt,@WebParam(name = "Dscp")String Descp,@WebParam(name = "cotation")String Cot,@WebParam(name = "type")String typ) {
         return new ActeDao().UpdateActe(numActe, lib, acord, tiket_moder, Mnt, Descp, Cot,typ);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppActe")
    public boolean SuppActe(@WebParam(name = "num") String id) {
         return new ActeDao().SuppActe(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListRdv")
    public List<Rdv> GetListRdv()  {
        return new RdvDao().GetListRdv();
    }
    
    /**
     *
     * @param numMedecinTrait
     * @return
     */
    @WebMethod(operationName = "GetListRdvByNumMedecin")
    public List<Rdv> GetListRdvByNumMedecin(@WebParam(name = "numMedecinTrait") int numMedecinTrait)  {
        return new RdvDao().GetListRdvByNumMedecin(numMedecinTrait);
    }
    
    @WebMethod(operationName = "GetListRdvByADate")
    public List<Rdv> GetListRdvByADate(@WebParam(name = "numMedecinTrait") int numMedecinTrait)  {
        return new RdvDao().GetListRdvByADate(numMedecinTrait);
    }
    
    /**
     *
     * @param start_date  
     * @param typeRDV  
     * @param descpRDV  
     * @param presence  
     * @param num_patient  
     * @param end_date  
     * @param num_medecin_trait  
     * @return
     */
    @WebMethod(operationName = "AjRdv")
    public String AjRdv(@WebParam(name = "start_date") Date start_date ,@WebParam(name = "typeRDV") String typeRDV ,@WebParam(name = "descpRDV") String descpRDV,@WebParam(name = "presence") int presence,@WebParam(name = "num_patient") int num_patient,@WebParam(name = "num_medecin_trait") int num_medecin_trait,@WebParam(name = "end_date") Date end_date) {
        return new RdvDao().AjRdv(start_date,typeRDV,descpRDV,presence,num_patient,num_medecin_trait,end_date);
    }
    
    /**
     *
     * @param numRdv
     * @param start_date
     * @param typ
     * @param descpRDV
     * @param pres
     * @param Codpat
     * @param end_date
     * @return
     */
    @WebMethod(operationName = "UpdateRdv")
    public String UpdateRdv(@WebParam(name = "numRdv") int numRdv,@WebParam(name = "start_date") Date start_date ,@WebParam(name = "type") String typ ,@WebParam(name = "descpRDV") String descpRDV,@WebParam(name = "presence") int pres,@WebParam(name = "patient") int Codpat,@WebParam(name = "end_date") Date end_date) {
         return new RdvDao().UpdateRdv(numRdv, start_date, typ, descpRDV, pres, Codpat, end_date);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppRdv")
    public boolean SuppRdv(@WebParam(name = "num") String id) {
         return new RdvDao().SuppRdv(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListMedic")
    public List<Medicament> GetListMedic()  {
        return new MedicamentDao().GetListMedic();
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListDci")
    public List<Dci> GetListDci()  {
        return new MedicamentDao().GetListDci();
    }
    /**
     *
     * @param desg
     * @param prix
     * @param generique
     * @param catg
     * @param codDci
     * @return
     */
    @WebMethod(operationName = "AjMedic")
    public String AjMedic(@WebParam(name = "desg") String desg,@WebParam(name = "prix") String prix ,@WebParam(name = "generique") String generique,@WebParam(name = "catg") String catg,@WebParam(name = "DCI")int codDci) {
        return new MedicamentDao().AjMedic(desg, prix, generique, catg, codDci);
    }
    
    /**
     *
     * @param numMedic
     * @param desg
     * @param prix
     * @param generique
     * @param catg
     * @param codDci
     * @return
     */
    @WebMethod(operationName = "UpdateMedic")
    public String UpdateMedic(@WebParam(name = "num") int numMedic,@WebParam(name = "desg") String desg,@WebParam(name = "prix") String prix ,@WebParam(name = "generique") String generique,@WebParam(name = "catg") String catg,@WebParam(name = "DCI")int codDci) {
         return new MedicamentDao().UpdateMedic(numMedic, desg, prix, generique, catg, codDci);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppMedic")
    public boolean SuppMedic(@WebParam(name = "num") String id) {
         return new MedicamentDao().SuppMedic(id);
    }
    
    /**
     *
     * @param codeMedTrit
     * @return
     */
    @WebMethod(operationName = "GetListSallebyCodeMedTrit")
    public List<SalleAttente> GetListSallebyCodeMedTrit(@WebParam(name = "codeMedTrit") int codeMedTrit)  {
        return new CabinetMedicalDao().GetListSallebyCodeMedTrit(codeMedTrit);
    }
    
    /**
     *
     * @param num_patient
     * @param num_rdv
     * @param note
     * @param num_medc_trait
     * @return
     */
    @WebMethod(operationName = "AjSalle_Attente")
    public String AjSalle_Attente(@WebParam(name = "num_patient") int num_patient,@WebParam(name = "num_rdv") int num_rdv ,@WebParam(name = "note") String note,@WebParam(name = "num_medc_trait") int num_medc_trait) {
        return new CabinetMedicalDao().AjSalle_Attente(num_patient,num_rdv, note, num_medc_trait);
    }
    
    /**
     *
     * @param num_ligneAttend
     * @return
     */
    @WebMethod(operationName = "SuppSalleAttente")
    public boolean SuppSalleAttente(@WebParam(name = "num_ligneAttend") int num_ligneAttend) {
         return new CabinetMedicalDao().SuppSalleAttente(num_ligneAttend);
    }
    
    /**
     *
     * @param num_medc_trait
     * @return
     */
    @WebMethod(operationName = "SuppAllSalleAttente")
    public boolean SuppAllSalleAttente(@WebParam(name = "num_medc_trait") int num_medc_trait) {
         return new CabinetMedicalDao().SuppAllSalleAttente(num_medc_trait);
    }
    
    /**
     *
     * @param codeMedTrit
     * @return
     */
    @WebMethod(operationName = "GetParametre")
    public List<CabinetMedical> GetParametre(@WebParam(name = "codeMedTrit") int codeMedTrit)  {
        return new CabinetMedicalDao().GetParemetre(codeMedTrit);
    }
    
    /**
     *
     * @param codeMedTrit
     * @return
     */
    @WebMethod(operationName = "GetParemetrebyCodeMedTrit")
    public CabinetMedical GetParemetrebyCodeMedTrit(@WebParam(name = "codeMedTrit") int codeMedTrit)  {
        return new CabinetMedicalDao().GetParemetrebyCodeMedTrit(codeMedTrit);
    }
    
    
    /**
     *
     * @param nom_medecin
     * @param prenom_medecin
     * @param date_naiss
     * @param salutation
     * @param num_inscp_ord_med
     * @param adresse
     * @param ville
     * @param Fixe
     * @param GSM
     * @param email
     * @param titre
     * @param specialite
     * @param gouvernorat
     * @param code_convent
     * @param tiket_moder
     * @param tva_consult
     * @param montant_consult
     * @param type_consult
     * @param mnt_consultSansConv
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "AjParametre")
    public String AjParametre(@WebParam(name = "nom_medecin") String nom_medecin ,@WebParam(name = "prenom_medecin") String prenom_medecin,@WebParam(name = "DateNais_medecin") Date date_naiss,@WebParam(name = "salutation_medecin") String salutation,@WebParam(name = "num_inscp_ord_medecin") String num_inscp_ord_med,@WebParam(name = "adresse") String adresse ,@WebParam(name = "ville") String ville,@WebParam(name = "fixe") String Fixe,@WebParam(name = "gsm") String GSM ,@WebParam(name = "email") String email,@WebParam(name = "titre") String titre,@WebParam(name = "spec") String specialite,@WebParam(name = "gouvernorat") String gouvernorat,@WebParam(name = "code_conv") String code_convent ,@WebParam(name = "tiket_M") double tiket_moder,@WebParam(name = "tva") double tva_consult,@WebParam(name = "Mnt_consult") double montant_consult,@WebParam(name = "typ_consult") String type_consult,@WebParam(name = "Mnt_consult_Sconv") String mnt_consultSansConv ,@WebParam(name = "code_Med_Trit") int code_Med_Trit ) {
        return new CabinetMedicalDao().AjParametre(nom_medecin, prenom_medecin, date_naiss, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv,code_Med_Trit);
    }
    
    /**
     *
     * @param numParam
     * @param nom_medecin
     * @param prenom_medecin
     * @param date_naiss
     * @param salutation
     * @param num_inscp_ord_med
     * @param adresse
     * @param ville
     * @param Fixe
     * @param GSM
     * @param email
     * @param titre
     * @param specialite
     * @param gouvernorat
     * @param code_convent
     * @param tiket_moder
     * @param tva_consult
     * @param montant_consult
     * @param type_consult
     * @param mnt_consultSansConv
     * @return
     */
    @WebMethod(operationName = "UpdateParametre")
    public String UpdateParametre(@WebParam(name = "num") int numParam,@WebParam(name = "nom_medecin") String nom_medecin ,@WebParam(name = "prenom_medecin") String prenom_medecin,@WebParam(name = "DateNais_medecin") Date date_naiss,@WebParam(name = "salutation_medecin") String salutation,@WebParam(name = "num_inscp_ord_medecin") String num_inscp_ord_med,@WebParam(name = "adresse") String adresse ,@WebParam(name = "ville") String ville,@WebParam(name = "fixe") String Fixe,@WebParam(name = "gsm") String GSM ,@WebParam(name = "email") String email,@WebParam(name = "titre") String titre,@WebParam(name = "spec") String specialite,@WebParam(name = "gouvernorat") String gouvernorat,@WebParam(name = "code_conv") String code_convent ,@WebParam(name = "tiket_M") double tiket_moder,@WebParam(name = "tva") double tva_consult,@WebParam(name = "Mnt_consult") double montant_consult,@WebParam(name = "typ_consult") String type_consult,@WebParam(name = "Mnt_consult_Sconv") String mnt_consultSansConv ) {
         return new CabinetMedicalDao().UpdateParametre(numParam, nom_medecin, prenom_medecin, date_naiss, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppParametre")
    public boolean SuppParametre(@WebParam(name = "num") String id) {
         return new CabinetMedicalDao().SuppParametre(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetAssuranceCNAM")
    public List<AssuranceCNAM> GetAssuranceCNAM()  {
        return new AssuranceDao().GetListAssuranceCNAM();
    }
    
    /**
     *
     * @param NumFichPatient
     * @return
     */
    @WebMethod(operationName = "GetAssuranceCNAMByPatient")
    public AssuranceCNAM GetAssuranceCNAMByPatient(@WebParam(name = "NumFichPatient") int NumFichPatient )  {
        return new AssuranceDao().GetAssuranceCNAMByPatient(NumFichPatient);
    }
    
    /**
     *
     * @param regime_affi
     * @param qualite
     * @param ident_unique
     * @param rang_Assur
     * @param date_valid
     * @param type
     * @param nom_medc
     * @param cod_cnam
     * @return
     */
    @WebMethod(operationName = "AjAssuranceCNAM")
    public String AjAssuranceCNAM(@WebParam(name = "regime_affi") String regime_affi,@WebParam(name = "qualite") String qualite,@WebParam(name = "idn_uniq") String ident_unique,@WebParam(name = "Rang") int rang_Assur,@WebParam(name = "date_valid") Date date_valid,@WebParam(name = "type") String type,@WebParam(name = "nom_medc") String nom_medc,@WebParam(name = "cod_cnam") String cod_cnam) {
        try {
            return new AssuranceDao().AjAssuranceCNAM(regime_affi, qualite, ident_unique, rang_Assur, date_valid, type,nom_medc,cod_cnam);
        } catch (SQLException ex) {
            Logger.getLogger(GcmEventWS.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    /**
     *
     * @param numAssur
     * @param regime_affi
     * @param qualite
     * @param ident_unique
     * @param rang_Assur
     * @param date_valid
     * @param type
     * @param nom_medc
     * @param cod_cnam
     * @return
     */
    @WebMethod(operationName = "UpdateAssuranceCNAM")
    public String UpdateAssuranceCNAM(@WebParam(name = "num") int numAssur,@WebParam(name = "regime_affi") String regime_affi,@WebParam(name = "qualite") String qualite,@WebParam(name = "idn_uniq") String ident_unique,@WebParam(name = "Rang") int rang_Assur,@WebParam(name = "date_valid") Date date_valid,@WebParam(name = "type") String type,@WebParam(name = "nom_medc") String nom_medc,@WebParam(name = "cod_cnam") String cod_cnam) {
         return new AssuranceDao().UpdateAssuranceCNAM(numAssur, regime_affi, qualite, ident_unique, rang_Assur, date_valid, type,nom_medc,cod_cnam);
    }
    
    
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppAssuranceCNAM")
    public boolean SuppAssuranceCNAM(@WebParam(name = "num") String id) {
         return new AssuranceDao().SuppAssuranceCNAM(id);
    }
    
    
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListConsultation")
    public List<Consultation> GetListConsultation()  {
        return new ConsultationDao().GetListConsultation();
    }
    
    /**
     *
     * @param num_patient
     * @return
     */
    @WebMethod(operationName = "GetListFile")
    public List<FileUpload> GetListFile(@WebParam(name = "num_patient") int num_patient)  {
        return new ConsultationDao().GetListFile(num_patient);
    }
    
    /**
     *
     * @param num_patient
     * @param img
     * @return
     */
    @WebMethod(operationName = "AjFile")
    public String AjFile(@WebParam(name = "num_patient") int num_patient,@WebParam(name = "img")  String img) {
        return new ConsultationDao().AjFile(num_patient,img);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppFile")
    public boolean SuppFile(@WebParam(name = "id") String id) {
         return new ConsultationDao().SuppFile(id);
    }
    /**
     *
     * @param codeMedTrit
     * @param month
     * @param year
     * @return
     */
    @WebMethod(operationName = "GetConsultStats")
    public int GetConsultStats(@WebParam(name = "codeMedTrit") int codeMedTrit,@WebParam(name = "month") int month,@WebParam(name = "year") int year)  {
        return new ConsultationDao().GetConsultStats(codeMedTrit, month, year);
    }
    
    /**
     *
     * @param codeMedTrit
     * @param month
     * @param year
     * @return
     */
    @WebMethod(operationName = "GetConsultAPCIStats")
    public int GetConsultAPCIStats(@WebParam(name = "codeMedTrit") int codeMedTrit,@WebParam(name = "month") int month,@WebParam(name = "year") int year)  {
        return new ConsultationDao().GetConsultAPCIStats(codeMedTrit, month, year);
    }
    
    /**
     *
     * @param codeMedTrit
     * @param month
     * @param year
     * @return
     */
    @WebMethod(operationName = "GetRdvStats")
    public int GetRdvStats(@WebParam(name = "codeMedTrit") int codeMedTrit,@WebParam(name = "month") int month,@WebParam(name = "year") int year)  {
        return new RdvDao().GetRdvStats(codeMedTrit, month, year);
    }
    /**
     *
     * @param numPatient
     * @return
     */
    @WebMethod(operationName = "GetListConsultationByPatient")
    public List<Consultation> GetListConsultationByPatient(@WebParam(name = "numPatient") int numPatient)  {
        return new ConsultationDao().GetListConsultationByPatient(numPatient);
    }
    
    /**
     *
     * @param codeMedTrit
     * @return
     */
    @WebMethod(operationName = "GetListConsultationByMedecin")
    public List<Consultation> GetListConsultationByMedecin(@WebParam(name = "codeMedTrit") int codeMedTrit)  {
        return new ConsultationDao().GetListConsultationByMedecin(codeMedTrit);
    }
    
    /**
     *
     * @param num_Consult
     * @return
     */
    @WebMethod(operationName = "GetConsultationByNum")
    public Consultation GetConsultationByNum(@WebParam(name = "num_Consult") int num_Consult)  {
        return new ConsultationDao().GetConsultationByNum(num_Consult);
    }
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListDiagnostic")
    public List<Diagnostic> GetListDiagnostic()  {
        return new ConsultationDao().GetListDiagnostic();
    }
    
    /**
     *
     * @param date_consult
     * @param num_patient
     * @param Diag_consult
     * @param type_consult
     * @param code_Med_Trit
     * @param num_examen
     * @param num_ord
     * @return
     */
    @WebMethod(operationName = "AjConsultation")
    public String AjConsultation(@WebParam(name = "Date") Date date_consult,@WebParam(name = "patient") int num_patient,@WebParam(name = "Diagnostic") int Diag_consult,@WebParam(name = "type") String type_consult,@WebParam(name = "code_Med_Trit") int code_Med_Trit,@WebParam(name = "num_examen") int num_examen,@WebParam(name = "num_ord") int num_ord) {
        return new ConsultationDao().AjConsultation(date_consult, num_patient, Diag_consult, type_consult,code_Med_Trit,num_examen,num_ord);
    }
    
    /**
     *
     * @param num_Consult
     * @param date_consult
     * @param num_patient
     * @param Diag_consult
     * @param type_consult
     * @return
     */
    @WebMethod(operationName = "UpdateConsultation")
    public String UpdateConsultation(@WebParam(name = "num") int num_Consult,@WebParam(name = "Date") Date date_consult,@WebParam(name = "patient") int num_patient,@WebParam(name = "Diagnostic") int Diag_consult,@WebParam(name = "type") String type_consult) {
         return new ConsultationDao().UpdateConsultation(num_Consult, date_consult, num_patient, Diag_consult, type_consult);
    }
    
    /**
     *
     * @param num_Consult
     * @param num_ord
     * @return
     */
    @WebMethod(operationName = "UpdateConsultationOrd")
    public String UpdateConsultationOrd(@WebParam(name = "num") int num_Consult,@WebParam(name = "num_ord") int num_ord) {
         return new ConsultationDao().UpdateConsultationOrd(num_Consult, num_ord);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppConsultation")
    public boolean SuppConsultation(@WebParam(name = "num") String id) {
         return new ConsultationDao().SuppConsultation(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListLettre")
    public List<Lettre> GetListLettre()  {
        return new LettreDao().GetListLettre();
    }
    
    /**
     *
     * @param date_Creation
     * @param contenu
     * @param type
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "AjLettre")
    public String AjLettre(@WebParam(name = "Date") Date date_Creation ,@WebParam(name = "contenu") String contenu ,@WebParam(name = "type") String type,@WebParam(name = "consultation") int num_consult) {
        return new LettreDao().AjLettre(date_Creation, contenu, type, num_consult);
    }
    
    /**
     *
     * @param num_lettre
     * @param date_Creation
     * @param contenu
     * @param type
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "UpdateLettre")
    public String UpdateLettre(@WebParam(name = "num") int num_lettre,@WebParam(name = "Date") Date date_Creation ,@WebParam(name = "contenu") String contenu ,@WebParam(name = "type") String type,@WebParam(name = "consultation") int num_consult) {
         return new LettreDao().UpdateLettre(num_lettre, date_Creation, contenu, type, num_consult);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppLettre")
    public boolean SuppLettre(@WebParam(name = "num") String id) {
         return new LettreDao().SuppLettre(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetExamen")
    public List<Examen> GetExamen()  {
        return new ExamenDao().GetExamen();
    }
    
    /**
     *
     * @param NumExamen
     * @return
     */
    @WebMethod(operationName = "GetExamenByNumExamen")
    public List<Examen> GetExamenByNumExamen(@WebParam(name = "NumExamen") int NumExamen)  {
        return new ExamenDao().GetExamenByNumExamen(NumExamen);
    }
    
    /**
     *
     * @param TA
     * @param pouls
     * @param temp
     * @param exam_phy
     * @param etat_general
     * @param auscu_cardi
     * @param auscu_plo
     * @param examen_ORL
     * @param aires_gangl
     * @param examen_abdominal
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "AjExamen")
    public String AjExamen(@WebParam(name = "TA") String TA,@WebParam(name = "pouls") String pouls,@WebParam(name = "temp") String temp,@WebParam(name = "exam_phy") String exam_phy,@WebParam(name = "etat_general")String etat_general,@WebParam(name = "auscu_cardi") String auscu_cardi,@WebParam(name = "auscu_plo") String auscu_plo,@WebParam(name = "examen_ORL") String examen_ORL,@WebParam(name = "aires_gangl") String aires_gangl,@WebParam(name = "examen_abdominal") String examen_abdominal,@WebParam(name = "num_consult") int num_consult) {
        return new ExamenDao().AjExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_plo, examen_ORL, aires_gangl, examen_abdominal, num_consult);
    }
    
    /**
     *
     * @param TA
     * @param pouls
     * @param temp
     * @param exam_phy
     * @param etat_general
     * @param auscu_cardi
     * @param auscu_plo
     * @param examen_ORL
     * @param aires_gangl
     * @param examen_abdominal
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "UpdateExamen")
    public String UpdateExamen(@WebParam(name = "TA") String TA,@WebParam(name = "pouls") String pouls,@WebParam(name = "temp") String temp,@WebParam(name = "exam_phy") String exam_phy,@WebParam(name = "etat_general")String etat_general,@WebParam(name = "auscu_cardi") String auscu_cardi,@WebParam(name = "auscu_plo") String auscu_plo,@WebParam(name = "examen_ORL") String examen_ORL,@WebParam(name = "aires_gangl") String aires_gangl,@WebParam(name = "examen_abdominal") String examen_abdominal,@WebParam(name = "num_consult") int num_consult) {
         return new ExamenDao().UpdateExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_plo, examen_ORL, aires_gangl, examen_abdominal, num_consult);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppExamen")
    public boolean SuppExamen(@WebParam(name = "num") String id) {
         return new ExamenDao().SuppExamen(id);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetRecette")
    public List<Recette> GetRecette()  {
        return new RecetteDao().GetRecette();
    }
    
    /**
     *
     * @param code_med_trait
     * @return
     */
    @WebMethod(operationName = "GetRecettebyMedecin")
    public List<Recette> GetRecettebyMedecin(@WebParam(name = "code_med_trait") int code_med_trait)  {
        return new RecetteDao().GetRecettebyMedecin(code_med_trait);
    }
    
    /**
     *
     * @param code_med_trait
     * @param DateAu
     * @param Datedu
     * @return
     */
    @WebMethod(operationName = "GetRecettebyMedecinDate")
    public List<Recette> GetRecettebyMedecinDate(@WebParam(name = "code_med_trait") int code_med_trait,@WebParam(name = "DateAu") Date DateAu,@WebParam(name = "Datedu") Date Datedu)  {
        return new RecetteDao().GetRecettebyMedecinDate(code_med_trait,DateAu,Datedu);
    }
    /**
     *
     * @param total
     * @param date_trans
     * @param libelle
     * @param type
     * @param num_consult
     * @param num_patient
     * @param tiers
     * @param code_med_trait
     * @param codeActe
     * @param tiketModérateur
     * @param cnam
     * @return
     */
    @WebMethod(operationName = "AjRecette")
    public String AjRecette(@WebParam(name = "total") String total,@WebParam(name = "date_trans") Date date_trans,@WebParam(name = "libelle") String libelle,@WebParam(name = "type") String type,@WebParam(name = "num_consult") int num_consult,@WebParam(name = "num_patient") int num_patient,@WebParam(name = "code_med_trait") int code_med_trait,@WebParam(name = "tiers") String tiers,@WebParam(name = "codeActe") String codeActe,@WebParam(name = "tiketModérateur") String tiketModérateur,@WebParam(name = "cnam") String cnam) {
        return new RecetteDao().AjRecette(total,date_trans,libelle,type,num_consult,num_patient,code_med_trait,tiers,codeActe,tiketModérateur,cnam);
    }
    
    /**
     *
     * @param num_trans
     * @param montant
     * @param date_trans
     * @param libelle
     * @param type
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "UpdateRecette")
    public String UpdateRecette(@WebParam(name = "num") int num_trans,@WebParam(name = "Montant") String montant,@WebParam(name = "date_trans") Date date_trans,@WebParam(name = "libelle") String libelle,@WebParam(name = "type") String type,@WebParam(name = "num_consult") int num_consult) {
         return new RecetteDao().UpdateRecette(num_trans, montant, date_trans, libelle, type, num_consult);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppRecette")
    public boolean SuppRecette(@WebParam(name = "num") String id) {
         return new RecetteDao().SuppRecette(id);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppRecettebyNUmConsultation")
    public boolean SuppRecettebyNUmConsultation(@WebParam(name = "num") String id) {
         return new RecetteDao().SuppRecettebyNUmConsultation(id);
    }
    
    /**
     *
     * @param id
     * @return
     */
    @WebMethod(operationName = "SuppRecettebyNUmActe")
    public boolean SuppRecettebyNUmActe(@WebParam(name = "num") String id) {
         return new RecetteDao().SuppRecettebyNUmActe(id);
    }
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListActeMedicaux")
    public List<ActeMedicaux> GetListActeMedicaux()  {
        return new ActeDao().GetListActeMedicaux();
    }
    
    /**
     *
     * @param num_acte
     * @param num_consult
     * @param date
     * @param nb_pr_chg
     * @return
     */
    @WebMethod(operationName = "AjActeMedicaux")
    public String AjActeMedicaux(@WebParam(name = "num_acte") int num_acte,@WebParam(name = "num_consult") int num_consult,@WebParam(name = "date_acte") Date date,@WebParam(name = "nb_pr_chg") int nb_pr_chg) {
        return new ActeDao().AjActeMedicaux(num_acte, num_consult, date, nb_pr_chg);
    }
    
    /**
     *
     * @param num_acte
     * @param num_consult
     * @param date
     * @param nb_pr_chg
     * @return
     */
    @WebMethod(operationName = "UpdateActeMedicaux")
    public String UpdateActeMedicaux(@WebParam(name = "num_acte") int num_acte,@WebParam(name = "num_consult") int num_consult,@WebParam(name = "date_acte") Date date,@WebParam(name = "nb_pr_chg") int nb_pr_chg) {
         return new ActeDao().UpdateActeMedicaux(num_acte, num_consult, date, nb_pr_chg);
    }
    
    /**
     *
     * @param num_consult_old
     * @param num_consult_New
     * @return
     */
    @WebMethod(operationName = "UpdateActeMedicauxbyNum_Consult")
    public String UpdateActeMedicauxbyNum_Consult(@WebParam(name = "num_consult_old") int num_consult_old,@WebParam(name = "num_consult_New") int num_consult_New) {
         return new ActeDao().UpdateActeMedicauxbyNum_Consult(num_consult_old, num_consult_New);
    }
    
    /**
     *
     * @param acte
     * @param consult
     * @return
     */
    @WebMethod(operationName = "SuppActeMedicaux")
    public boolean SuppActeMedicaux(@WebParam(name = "num_acte") String acte,@WebParam(name = "num_consult") String consult) {
         return new ActeDao().SuppActeMedicaux(acte, consult);
    }
    
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "SuppActeMedicauxbyNum_Consult")
    public boolean SuppActeMedicauxbyNum_Consult(@WebParam(name = "num_consult") int num_consult) {
         return new ActeDao().SuppActeMedicauxbyNum_Consult(num_consult);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListMotif")
    public List<Motif> GetListMotif()  {
        return new MotifDao().GetListMotif();
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetSuivMotifId")
    public int GetSuivMotifId()  {
        return new MotifDao().GetSuivMotifId();
    }
    /**
     *
     * @param num_motif
     * @param Lib
     * @return
     */
    @WebMethod(operationName = "AjMotif")
    public String AjMotif(@WebParam(name = "num_motif") int num_motif,@WebParam(name = "Lib") String Lib) {
        return new MotifDao().AjMotif(num_motif,Lib);
    }
    
    /**
     *
     * @param num_motif
     * @param lib
     * @return
     */
    @WebMethod(operationName = "UpdateMotif")
    public String UpdateMotif(@WebParam(name = "num_motif") int num_motif ,@WebParam(name = "lib") String lib) {
         return new MotifDao().UpdateMotif(num_motif, lib);
    }
    
    /**
     *
     * @param num_motif
     * @return
     */
    @WebMethod(operationName = "SuppMotif")
    public boolean SuppMotif(@WebParam(name = "num_motif") String num_motif) {
         return new MotifDao().SuppMotif(num_motif);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListMotifConsult")
    public List<MotifConsult> GetListMotifConsult()  {
        return new MotifDao().GetListMotifConsult();
    }
    
    /**
     *
     * @param NumConsult
     * @return
     */
    @WebMethod(operationName = "GetListMotifConsultByNumConsult")
    public List<MotifConsult> GetListMotifConsultByNumConsult(@WebParam(name = "NumConsult") int NumConsult)  {
        return new MotifDao().GetListMotifConsultByNumConsult(NumConsult);
    }
    
    /**
     *
     * @param num_Motif
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "AjMotifConsult")
    public String AjMotifConsult(@WebParam(name = "num_Motif") int num_Motif,@WebParam(name = "num_consult") int num_consult) {
        return new MotifDao().AjMotifConsult(num_Motif, num_consult);
    }
    
    /**
     *
     * @param num_Motif
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "UpdateMotifConsult")
    public String UpdateMotifConsult(@WebParam(name = "num_Motif") int num_Motif,@WebParam(name = "num_consult") int num_consult) {
         return new MotifDao().UpdateMotifConsult(num_Motif, num_consult);
    }
    
    /**
     *
     * @param num_Motif
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "SuppMotifConsult")
    public boolean SuppMotifConsult(@WebParam(name = "num_Motif") String num_Motif,@WebParam(name = "num_consult") String num_consult) {
         return new MotifDao().SuppMotifConsult(num_Motif, num_consult);
    }
    
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "SuppMotifConsultbyNum_Consult")
    public boolean SuppMotifConsultbyNum_Consult(@WebParam(name = "num_consult") int num_consult) {
         return new MotifDao().SuppMotifConsultbyNum_Consult(num_consult);
    }
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListOrdonnance")
    public List<Ordonnance> GetListOrdonnance()  {
        return new OrdonnanceDao().GetListOrdonnance();
    }
    
    /**
     *
     * @param num_Ord
     * @return
     */
    @WebMethod(operationName = "GetOrdonnanceByNum")
    public Ordonnance GetOrdonnanceByNum(@WebParam(name = "num_Ord") int num_Ord)  {
        return new OrdonnanceDao().GetOrdonnanceByNum(num_Ord);
    }
    
    /**
     *
     * @param date
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "AjOrdonnance")
    public String AjOrdonnance(@WebParam(name = "date_Ordonnance") Date date ,@WebParam(name = "num_consult")  int num_consult) {
        return new OrdonnanceDao().AjOrdonnance(date, num_consult);
    }
    
    /**
     *
     * @param num_Ord
     * @param date
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "UpdateOrdonnance")
    public String UpdateOrdonnance(@WebParam(name = "num_Ord") int num_Ord,@WebParam(name = "date_Ordonnance") Date date ,@WebParam(name = "num_consult")  int num_consult) {
         return new OrdonnanceDao().UpdateOrdonnance(num_Ord, date, num_consult);
    }
    
    /**
     *
     * @param num_Ord
     * @return
     */
    @WebMethod(operationName = "SuppOrdonnance")
    public boolean SuppOrdonnance(@WebParam(name = "num_Ord") String num_Ord){
         return new OrdonnanceDao().SuppOrdonnance(num_Ord);
    }
    
    /**
     *
     * @param num_Ord
     * @return
     */
    @WebMethod(operationName = "SuppPrescriptionOrdByNum_Ord")
    public boolean SuppPrescriptionOrdByNum_Ord(@WebParam(name = "num_Ord") int num_Ord){
         return new OrdonnanceDao().SuppPrescriptionOrdByNum_Ord(num_Ord);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListPrescriptionOrd")
    public List<PrescriptionOrd> GetListPrescriptionOrd()  {
        return new OrdonnanceDao().GetListPrescriptionOrd();
    }
    
    /**
     *
     * @param Num_Ord
     * @return
     */
    @WebMethod(operationName = "GetListPrescriptionOrdByNumOrd")
    public List<PrescriptionOrd> GetListPrescriptionOrdByNumOrd(@WebParam(name = "Num_Ord") int  Num_Ord)  {
        return new OrdonnanceDao().GetListPrescriptionOrdByNumOrd(Num_Ord);
    }
    
    /**
     *
     * @param num_medc
     * @param num_ord
     * @param dure
     * @param qunt_med
     * @param nb_fois_util
     * @return
     */
    @WebMethod(operationName = "AjPrescriptionOrd")
    public String AjPrescriptionOrd(@WebParam(name = "num_medc") int num_medc,@WebParam(name = "num_ord") int num_ord,@WebParam(name = "dure_medc") String dure,@WebParam(name = "qunt_medc") String qunt_med,@WebParam(name = "nb_fois_util") String nb_fois_util) {
        return new OrdonnanceDao().AjPrescriptionOrd(num_medc, num_ord, dure, qunt_med, nb_fois_util);
    }
    
    /**
     *
     * @param num_medc
     * @param num_ord
     * @param dure
     * @param qunt_med
     * @param nb_fois_util
     * @return
     */
    @WebMethod(operationName = "UpdatePrescriptionOrd")
    public String UpdatePrescriptionOrd(@WebParam(name = "num_medc") int num_medc,@WebParam(name = "num_ord") int num_ord,@WebParam(name = "dure_medc") String dure,@WebParam(name = "qunt_medc") String qunt_med,@WebParam(name = "nb_fois_util") String nb_fois_util) {
         return new OrdonnanceDao().UpdatePrescriptionOrd(num_medc, num_ord, dure, qunt_med, nb_fois_util);
    }
    
    /**
     *
     * @param num_medc
     * @param num_Ord
     * @return
     */
    @WebMethod(operationName = "SuppPrescriptionOrd")
    public boolean SuppPrescriptionOrd(@WebParam(name = "num_medc") String num_medc,@WebParam(name = "num_Ord") String num_Ord){
         return new OrdonnanceDao().SuppPrescriptionOrd(num_medc, num_Ord);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetMaxUtilisateur")
    public int GetMaxUtilisateur()  {
        return new CabinetMedicalDao().GetMaxUtilisateur();
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetMinUtilisateur")
    public int GetMinUtilisateur()  {
        return new CabinetMedicalDao().GetMinUtilisateur();
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListUtilisateur")
    public List<Utilisateur> GetListUtilisateur()  {
        return new CabinetMedicalDao().GetListUtilisateur();
    }
    
    /**
     *
     * @param codeMedTrit
     * @return
     */
    @WebMethod(operationName = "GetUtilisateurbyCodeMedTrit")
    public Utilisateur GetUtilisateurbyCodeMedTrit(@WebParam(name = "codeMedTrit") int codeMedTrit)  {
        return new CabinetMedicalDao().GetUtilisateurbyCodeMedTrit(codeMedTrit);
    }
    
    /**
     *
     * @param username
     * @return
     */
    @WebMethod(operationName = "GetUtilisateurbyUsername")
    public Utilisateur GetUtilisateurbyUsername(@WebParam(name = "username") String username)  {
        return new CabinetMedicalDao().GetUtilisateurbyUsername(username);
    }
    
    /**
     *
     * @param secretaire_medecin
     * @return
     */
    @WebMethod(operationName = "GetListUtilisateurByMedecin")
    public List<Utilisateur> GetListUtilisateurByMedecin(@WebParam(name = "secretaire_medecin") String secretaire_medecin)  {
        return new CabinetMedicalDao().GetListUtilisateurByMedecin(secretaire_medecin);
    }
    
    /**
     *
     * @param username
     * @param pass
     * @param type
     * @param code_Med_Trit
     * @param secretaire
     * @return
     */
    @WebMethod(operationName = "AjUtilisateur")
    public String AjUtilisateur(@WebParam(name = "username") String username,@WebParam(name = "pass") String pass,@WebParam(name = "type") String type,@WebParam(name = "code_Med_Trit") int code_Med_Trit,@WebParam(name = "secretaire") String secretaire) {
        return new CabinetMedicalDao().AjUtilisateur(username, pass, type,code_Med_Trit,secretaire);
    }
    
    @WebMethod(operationName = "UpdateUtilisateur")
    public String UpdateUtilisateur(@WebParam(name = "username") String username,@WebParam(name = "pass") String pass,@WebParam(name = "type") String type) {
         return new CabinetMedicalDao().UpdateUtilisateur(username, pass, type);
    }
    
    /**
     *
     * @param username
     * @return
     */
    @WebMethod(operationName = "SuppUtilisateur")
    public boolean SuppUtilisateur(@WebParam(name = "username") String username){
         return new CabinetMedicalDao().SuppUtilisateur(username);
    }
    
    /**
     *
     * @param secretaire
     * @return
     */
    @WebMethod(operationName = "SuppUtilisateurBySec")
    public boolean SuppUtilisateurBySec(@WebParam(name = "secretaire") String secretaire){
         return new CabinetMedicalDao().SuppUtilisateurBySec(secretaire);
    }
    
    /**
     *
     * @param code_Med_Trit
     * @return
     */
    @WebMethod(operationName = "SuppParametreBycode_Med_Trit")
    public boolean SuppParametreBycode_Med_Trit(@WebParam(name = "code_Med_Trit") String code_Med_Trit){
         return new CabinetMedicalDao().SuppParametreBycode_Med_Trit(code_Med_Trit);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioGly")
    public List<BianBioGly> GetListBianBioGly()  {
        return new BilanDao().GetListBianBioGly();
    }
    
    /**
     *
     * @param num_consult
     * @param taux
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "AjBilanBioGly")
    public String AjBilanBioGly(@WebParam(name = "num_consult") int  num_consult ,@WebParam(name = "taux") String taux,@WebParam(name = "typSts") String typSts) {
        return new BilanDao().AjBianBioGly(num_consult, taux, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param taux
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioGly")
    public String UpdateBilanBioGly(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult ,@WebParam(name = "taux") String taux,@WebParam(name = "typSts") String typSts) {
         return new BilanDao().UpdateBianBioGly(num_bilan, num_consult, taux, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioGly")
    public boolean SuppBilanBioGly(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBianBioGly(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioHemostase")
    public List<BilanBioHemostase> GetListBilanBioHemostase()  {
        return new BilanDao().GetListBilanBioHemostase();
    }
    
    /**
     *
     * @param num_consult
     * @return
     */
    @WebMethod(operationName = "GetBilanBioHemostaseByNumConsult")
    public BilanBioHemostase GetBilanBioHemostaseByNumConsult(@WebParam(name = "num_consult") int num_consult)  {
        return new BilanDao().GetBilanBioHemostaseByNumConsult(num_consult);
    }
    
    /**
     *
     * @param num_consult
     * @param typSts
     * @param TP
     * @param INH
     * @param TCA
     * @param Fibrinéme
     * @return
     */
    @WebMethod(operationName = "AjBilanBioHemostase")
    public String AjBilanBioHemostase(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "TP") String TP,@WebParam(name = "INH") String INH,@WebParam(name = "TCA") String TCA,@WebParam(name = "Fibrinéme") String Fibrinéme) {
        return new BilanDao().AjBilanBioHemostase(num_consult, typSts, TP, INH, TCA, Fibrinéme);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param typSts
     * @param TP
     * @param INH
     * @param TCA
     * @param Fibrinéme
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioHemostase")
    public String UpdateBilanBioHemostase(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "TP") String TP,@WebParam(name = "INH") String INH,@WebParam(name = "TCA") String TCA,@WebParam(name = "Fibrinéme") String Fibrinéme) {
         return new BilanDao().UpdateBilanBioHemostase(num_bilan, num_consult, typSts, TP, INH, TCA, Fibrinéme);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioHemostase")
    public boolean SuppBilanBioHemostase(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBioHemostase(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioHepatique")
    public List<BilanBioHepatique> GetListBilanBioHepatique()  {
        return new BilanDao().GetListBilanBioHepatique();
    }
    
    /**
     *
     * @param num_consult
     * @param typSts
     * @param Bilirubine_total
     * @param Bilirubine_Conjugue
     * @param SGOT_SGPT
     * @param gammaGT
     * @param Ph_Alcalines
     * @return
     */
    @WebMethod(operationName = "AjBilanBioHepatique")
    public String AjBilanBioHepatique(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "Bilirubine_total") String Bilirubine_total,@WebParam(name = "Bilirubine_Conjugue") String Bilirubine_Conjugue,@WebParam(name = "SGOT_SGPT") String SGOT_SGPT,@WebParam(name = "gammaGT") String gammaGT,@WebParam(name = "Ph_Alcalines") String Ph_Alcalines) {
        return new BilanDao().AjBilanBioHepatique(num_consult, typSts, Bilirubine_total, Bilirubine_Conjugue, SGOT_SGPT, gammaGT, Ph_Alcalines);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param typSts
     * @param Bilirubine_total
     * @param Bilirubine_Conjugue
     * @param SGOT_SGPT
     * @param gammaGT
     * @param Ph_Alcalines
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioHepatique")
    public String UpdateBilanBioHepatique(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "Bilirubine_total") String Bilirubine_total,@WebParam(name = "Bilirubine_Conjugue") String Bilirubine_Conjugue,@WebParam(name = "SGOT_SGPT") String SGOT_SGPT,@WebParam(name = "gammaGT") String gammaGT,@WebParam(name = "Ph_Alcalines") String Ph_Alcalines) {
         return new BilanDao().UpdateBilanBioHepatique(num_bilan, num_consult, typSts, Bilirubine_total, Bilirubine_Conjugue, SGOT_SGPT, gammaGT, Ph_Alcalines);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioHepatique")
    public boolean SuppBilanBioHepatique(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBioHepatique(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBiolipidique")
    public List<BilanBiolipidique> GetListBilanBiolipidique()  {
        return new BilanDao().GetListBilanBiolipidique();
    }
    
    /**
     *
     * @param num_consult
     * @param cholesterol
     * @param triglycerides
     * @param HDL
     * @param LDL
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "AjBilanBiolipidique")
    public String AjBilanBiolipidique(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "cholesterol") String cholesterol,@WebParam(name = "triglycerides") String triglycerides,@WebParam(name = "HDL") String HDL,@WebParam(name = "LDL") String LDL,@WebParam(name = "typSts") String typSts) {
        return new BilanDao().AjBilanBiolipidique(num_consult, cholesterol, triglycerides, HDL, LDL, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param cholesterol
     * @param triglycerides
     * @param HDL
     * @param LDL
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBiolipidique")
    public String UpdateBilanBiolipidique(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "cholesterol") String cholesterol,@WebParam(name = "triglycerides") String triglycerides,@WebParam(name = "HDL") String HDL,@WebParam(name = "LDL") String LDL,@WebParam(name = "typSts") String typSts) {
         return new BilanDao().UpdateBilanBiolipidique(num_bilan, num_consult, cholesterol, triglycerides, HDL, LDL, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBiolipidique")
    public boolean SuppBilanBiolipidique(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBiolipidique(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioRenal")
    public List<BilanBioRenal> GetListBilanBioRenal()  {
        return new BilanDao().GetListBilanBioRenal();
    }
    
    /**
     *
     * @param num_consult
     * @param Creatinemie
     * @param Uree
     * @param Poids
     * @param Clairance_Creatinine
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "AjBilanBioRenal")
    public String AjBilanBioRenal(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "Creatinemie") String Creatinemie,@WebParam(name = "Uree") String Uree,@WebParam(name = "Poids") String Poids,@WebParam(name = "Clairance_Creatinine") String Clairance_Creatinine,@WebParam(name = "typSts") String typSts) {
        return new BilanDao().AjBilanBioRenal(num_consult, Creatinemie, Uree, Poids, Clairance_Creatinine, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param Creatinemie
     * @param Uree
     * @param Poids
     * @param Clairance_Creatinine
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioRenal")
    public String UpdateBilanBioRenal(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "Creatinemie") String Creatinemie,@WebParam(name = "Uree") String Uree,@WebParam(name = "Poids") String Poids,@WebParam(name = "Clairance_Creatinine") String Clairance_Creatinine,@WebParam(name = "typSts") String typSts) {
         return new BilanDao().UpdateBilanBioRenal(num_bilan, num_consult, Creatinemie, Uree, Poids, Clairance_Creatinine, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioRenal")
    public boolean SuppBilanBioRenal(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBioRenal(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioNFS")
    public List<BilanBioNFS> GetListBilanBioNFS()  {
        return new BilanDao().GetListBilanBioNFS();
    }
    
    /**
     *
     * @param num_consult
     * @param typSts
     * @param Hémoglobine
     * @param Globunes_Blancs
     * @param plaquettes
     * @return
     */
    @WebMethod(operationName = "AjBilanBioNFS")
    public String AjBilanBioNFS(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "Hémoglobine") String Hémoglobine,@WebParam(name = "Globunes_Blancs") String Globunes_Blancs,@WebParam(name = "plaquettes") String plaquettes) {
        return new BilanDao().AjBilanBioNFS(num_consult, typSts, Hémoglobine, Globunes_Blancs, plaquettes);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param typSts
     * @param Hémoglobine
     * @param Globunes_Blancs
     * @param plaquettes
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioNFS")
    public String UpdateBilanBioNFS(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "typSts") String typSts,@WebParam(name = "Hémoglobine") String Hémoglobine,@WebParam(name = "Globunes_Blancs") String Globunes_Blancs,@WebParam(name = "plaquettes") String plaquettes) {
         return new BilanDao().UpdateBilanBioNFS(num_bilan, num_consult, typSts, Hémoglobine, Globunes_Blancs, plaquettes);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioNFS")
    public boolean SuppBilanBioNFS(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBioNFS(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanBioinflam")
    public List<BilanBioinflam> GetListBilanBioinflam()  {
        return new BilanDao().GetListBilanBioinflam();
    }
    
    /**
     *
     * @param num_consult
     * @param VS
     * @param CRP
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "AjBilanBioinflam")
    public String AjBilanBioinflam(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "VS") String VS,@WebParam(name = "CRP") String CRP,@WebParam(name = "typSts") String typSts) {
        return new BilanDao().AjBilanBioinflam(num_consult, VS, CRP, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param VS
     * @param CRP
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "UpdateBilanBioinflam")
    public String UpdateBilanBioinflam(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "VS") String VS,@WebParam(name = "CRP") String CRP,@WebParam(name = "typSts") String typSts) {
         return new BilanDao().UpdateBilanBioinflam(num_bilan, num_consult, VS, CRP, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanBioinflam")
    public boolean SuppBilanBioinflam(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanBioinflam(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanAECBU")
    public List<BilanAECBU> GetListBilanAECBU()  {
        return new BilanDao().GetListBilanAECBU();
    }
    
    /**
     *
     * @param num_consult
     * @param bacteriurie
     * @param leucocyturie
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "AjBilanAECBU")
    public String AjBilanAECBU(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "bacteriurie") String bacteriurie,@WebParam(name = "leucocyturie") String leucocyturie,@WebParam(name = "typSts") String typSts) {
        return new BilanDao().AjBilanAECBU(num_consult, bacteriurie, leucocyturie, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param bacteriurie
     * @param leucocyturie
     * @param typSts
     * @return
     */
    @WebMethod(operationName = "UpdateBilanAECBU")
    public String UpdateBilanAECBU(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "bacteriurie") String bacteriurie,@WebParam(name = "leucocyturie") String leucocyturie,@WebParam(name = "typSts") String typSts) {
         return new BilanDao().UpdateBilanAECBU(num_bilan, num_consult, bacteriurie, leucocyturie, typSts);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanAECBU")
    public boolean SuppBilanAECBU(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanAECBU(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanAAutre")
    public List<BilanAAutre> GetListBilanAAutre()  {
        return new BilanDao().GetListBilanAAutre();
    }
    
    /**
     *
     * @param num_consult
     * @param nom
     * @param descp
     * @return
     */
    @WebMethod(operationName = "AjBilanAAutre")
    public String AjBilanAAutre(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "nom") String nom,@WebParam(name = "descp") String descp) {
        return new BilanDao().AjBilanAAutre(num_consult, nom, descp);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param nom
     * @param descp
     * @return
     */
    @WebMethod(operationName = "UpdateBilanAAutre")
    public String UpdateBilanAAutre(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "nom") String nom,@WebParam(name = "descp") String descp) {
         return new BilanDao().UpdateBilanAAutre(num_bilan, num_consult, nom, descp);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanAAutre")
    public boolean SuppBilanAAutre(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanAAutre(num_bilan);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListBilanAECG")
    public List<BilanAECG> GetListBilanAECG()  {
        return new BilanDao().GetListBilanAECG();
    }
    
    /**
     *
     * @param num_consult
     * @param descp
     * @return
     */
    @WebMethod(operationName = "AjBilanAECG")
    public String AjBilanAECG(@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "descp") String descp) {
        return new BilanDao().AjBilanAECG(num_consult, descp);
    }
    
    /**
     *
     * @param num_bilan
     * @param num_consult
     * @param descp
     * @return
     */
    @WebMethod(operationName = "UpdateBilanAECG")
    public String UpdateBilanAECG(@WebParam(name = "num_bilan") int num_bilan,@WebParam(name = "num_consult") int  num_consult,@WebParam(name = "descp") String descp) {
         return new BilanDao().UpdateBilanAECG(num_bilan, num_consult, descp);
    }
    
    /**
     *
     * @param num_bilan
     * @return
     */
    @WebMethod(operationName = "SuppBilanAECG")
    public boolean SuppBilanAECG(@WebParam(name = "num_bilan") String num_bilan){
         return new BilanDao().SuppBilanAECG(num_bilan);
    }
            
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetCptParam")
    public List<Param> GetCptParam()  {
        return new CabinetMedicalDao().GetCptParam();
    }
    
    /**
     *
     * @param code
     * @return
     */
    @WebMethod(operationName = "GetCptParamByCode")
    public int GetCptParamByCode(@WebParam(name = "CodeParam") String code)  {
        return new CabinetMedicalDao().GetCptParamByCode(code);
    }
    
    /**
     *
     * @param code
     * @return
     */
    @WebMethod(operationName = "CptIncParamByCode")
    public String CptIncParamByCode(@WebParam(name = "CodeParam") String code)  {
        return new CabinetMedicalDao().CptIncParamByCode(code);
    }
    
    /**
     *
     * @return
     */
    @WebMethod(operationName = "GetListTraitementAPCI")
    public List<TraitementAPCI> GetListTraitementAPCI()  {
        return new TraitementAPCIDao().GetListTraitementAPCI();
    }
    
    /**
     *
     * @param NumFichPatient
     * @return
     */
    @WebMethod(operationName = "GetTraitementAPCIByNumPatient")
    public List<TraitementAPCI> GetTraitementAPCIByNumPatient(@WebParam(name = "NumFichPatient") int NumFichPatient )  {
        return new TraitementAPCIDao().GetTraitementAPCIByNumPatient(NumFichPatient);
    }
    /**
     *
     * @param num_patient
     * @param num_medic
     * @param posologie
     * @return
     */
    @WebMethod(operationName = "AjTraitementAPCI")
    public String AjTraitementAPCI(@WebParam(name = "num_patient") int  num_patient,@WebParam(name = "num_medic") int  num_medic,@WebParam(name = "posologie") String posologie) {
        try {
            return new TraitementAPCIDao().AjTraitementAPCI(num_patient, num_medic, posologie);
        } catch (SQLException ex) {
            Logger.getLogger(GcmEventWS.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    /**
     *
     * @param num_patient
     * @param num_medic
     * @return
     */
    @WebMethod(operationName = "SuppTraitementAPCI")
    public boolean SuppTraitementAPCI(@WebParam(name = "num_patient") int  num_patient,@WebParam(name = "num_medic") int  num_medic){
         return new TraitementAPCIDao().SuppTraitementAPCI(num_patient, num_medic);
    }
    
    /**
     *
     * @param num_patient
     * @return
     */
    @WebMethod(operationName = "SuppTraitementAPCIByPatient")
    public boolean SuppTraitementAPCIByPatient(@WebParam(name = "num_patient") int  num_patient){
         return new TraitementAPCIDao().SuppTraitementAPCIByPatient(num_patient);
    }
    
}
