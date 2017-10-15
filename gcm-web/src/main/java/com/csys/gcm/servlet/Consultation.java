/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.servlet;
import com.csys.gcm.generic.WS;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

/**
 *
 * @author ASUS
 */
public class Consultation extends HttpServlet {

    private InputStream stream;
    private ByteArrayOutputStream baos;
    WS webservice;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, DatatypeConfigurationException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            if(WS.PortCltWS == null){
                        webservice= new WS();
                        webservice.GcmEventWS();
                    }
        
            Gson gson = new GsonBuilder().serializeNulls().create();
            HttpSession session=request.getSession(true);
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            org.joda.time.format.DateTimeFormatter sdftime =  DateTimeFormat.forPattern("dd/MM/yyyy HH:mm:ss");
            String function=request.getParameter("function");
            String type=request.getParameter("type");
            
            if(type.equals("consult")){
                switch (function) {
                    case "GetListMotif":
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListMotif()));
                                break;
                            }
                    case "GetSuivMotifId":
                            {
                                out.println(gson.toJson(WS.PortCltWS.getSuivMotifId()));
                                break;
                            }
                    case "GetListDiagnostic":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListDiagnostic()));
                                break;
                            }
                    case "GetListFile":        
                            {
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.getListFile(patient)));
                                break;
                            }
                    case "GetListAntecedents":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListAntecedents()));
                                break;
                            }
                    case "GetListActe":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListActe()));
                                break;
                            }
                    case "GetMaxActe":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getMaxActe()));
                                break;
                            }
                    case "GetListActeNonRemborsable":        
                            {
                                out.println(gson.toJson(WS.PortCltWS.getListActeNonRemborsable()));
                                break;
                            }
                    case "GetActeNonRemborsablebyLibelle":        
                            {
                                String libelle=request.getParameter("libelle");
                                out.println(gson.toJson(WS.PortCltWS.getActeNonRemborsablebyLibelle(libelle)));
                                break;
                            }
                    case "GetConsultStats":        
                            {
                                int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                                int month=Integer.parseInt(request.getParameter("month"));
                                int year=Integer.parseInt(request.getParameter("year"));
                                
                                out.println(gson.toJson(WS.PortCltWS.getConsultStats(codeMedTrit,month,year)));
                                break;
                            }
                    case "GetConsultAPCIStats":        
                            {
                                int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                                int month=Integer.parseInt(request.getParameter("month"));
                                int year=Integer.parseInt(request.getParameter("year"));
                                
                                out.println(gson.toJson(WS.PortCltWS.getConsultAPCIStats(codeMedTrit,month,year)));
                                break;
                            }
                    case "GetListRdvByNumMedecin":        
                            {
                                int numMedecinTrait=Integer.parseInt(request.getParameter("numMedecinTrait"));
                                out.println(gson.toJson(WS.PortCltWS.getListRdvByNumMedecin(numMedecinTrait)));
                                break;
                            }
                    case "GetRecettebyMedecin":        
                            {
                                int code_med_trait=Integer.parseInt(request.getParameter("code_med_trait"));
                                out.println(gson.toJson(WS.PortCltWS.getRecettebyMedecin(code_med_trait)));
                                break;
                            }
                    case "GetRecettebyMedecinDate":        
                            {
                                int code_med_trait=Integer.parseInt(request.getParameter("code_med_trait"));
                                 String dateAu=request.getParameter("dateAu");
                                Date dateAuu = sdf.parse(dateAu);
                                GregorianCalendar cau = new GregorianCalendar();
                                cau.setTime(dateAuu);
                                XMLGregorianCalendar dateCAu = DatatypeFactory.newInstance().newXMLGregorianCalendar(cau);
                                
                                 String datedu=request.getParameter("datedu");
                                Date dateduu = sdf.parse(datedu);
                                GregorianCalendar cdu = new GregorianCalendar();
                                cdu.setTime(dateduu);
                                XMLGregorianCalendar dateCdu = DatatypeFactory.newInstance().newXMLGregorianCalendar(cdu);
                                
                                out.println(gson.toJson(WS.PortCltWS.getRecettebyMedecinDate(code_med_trait,dateCAu,dateCdu)));
                                break;
                            }
                        case "GetRecetteCnambyMedecinDate":        
                            {
                                int code_med_trait=Integer.parseInt(request.getParameter("code_med_trait"));
                                 String dateAu=request.getParameter("dateAu");
                                Date dateAuu = sdf.parse(dateAu);
                                GregorianCalendar cau = new GregorianCalendar();
                                cau.setTime(dateAuu);
                                XMLGregorianCalendar dateCAu = DatatypeFactory.newInstance().newXMLGregorianCalendar(cau);
                                
                                 String datedu=request.getParameter("datedu");
                                Date dateduu = sdf.parse(datedu);
                                GregorianCalendar cdu = new GregorianCalendar();
                                cdu.setTime(dateduu);
                                XMLGregorianCalendar dateCdu = DatatypeFactory.newInstance().newXMLGregorianCalendar(cdu);
                                
                                out.println(gson.toJson(WS.PortCltWS.getRecetteCnambyMedecinDate(code_med_trait,dateCAu,dateCdu)));
                                break;
                            }
                    case "GetListConsultationByMedecin":        
                            {
                                int numMedecinTrait=Integer.parseInt(request.getParameter("numMedecinTrait"));
                                out.println(gson.toJson(WS.PortCltWS.getListConsultationByMedecin(numMedecinTrait)));
                                break;
                            }
                    case "GetBilanBioHemostaseByNumConsult":        
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.getBilanBioHemostaseByNumConsult(num_consult)));
                                break;
                            }
                    case "GetListAntecedentsByPatient":        
                            {
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.getListAntecedentsByPatient(patient)));
                                break;
                            }
                    case "GetListConsultationByPatient":        
                            {
                                int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                                out.println(gson.toJson(WS.PortCltWS.getListConsultationByPatient(NumFichPatient)));
                                break;
                            }
                    case "GetListPatientByFichPatient":        
                            {
                                int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                                int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                                out.println(gson.toJson(WS.PortCltWS.getListPatientByFichPatient(code_Med_Trit, NumFichPatient)));
                                break;
                            }
                    case "GetListMotifConsultByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListMotifConsultByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxAllByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxAllByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetListActeMedicauxNonRembByNumConsult":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getListActeMedicauxNonRembByNumConsult(NumConsult)));
                                break;
                            }
                    case "GetConsultationByNum":        
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.getConsultationByNum(num_consult)));
                                break;
                            }
                    case "GetListPrescriptionOrdByNumOrd":        
                            {
                                int Num_Ord=Integer.parseInt(request.getParameter("Num_Ord"));
                                out.println(gson.toJson(WS.PortCltWS.getListPrescriptionOrdByNumOrd(Num_Ord)));
                                break;
                            }
                    case "GetExamenByNumExamen":        
                            {
                                int NumConsult=Integer.parseInt(request.getParameter("NumConsult"));
                                out.println(gson.toJson(WS.PortCltWS.getExamenByNumExamen(NumConsult)));
                                break;
                            }
                    case "GetOrdonnanceByNum":        
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.getOrdonnanceByNum(num_consult)));
                                break;
                            }
                    default:
                        break;
                }
            }else
                 if(type.equals("update")){
                     switch (function) {
                        case "AjBilanBioHemostase":
                            {
                                String typSts=request.getParameter("typSts");
                                String TP=request.getParameter("TP");
                                String INH=request.getParameter("INH");
                                String TCA=request.getParameter("TCA");
                                String Fibrinéme=request.getParameter("Fibrinéme");
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.ajBilanBioHemostase(num_consult,typSts,TP,INH,TCA,Fibrinéme)));
                                break;
                            }
                        case "AjAntecedent":
                            {
                                String typ=request.getParameter("typ");
                                String descp=request.getParameter("descp");
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.ajAntecedent(typ, descp, patient)));
                                break;
                            }
                        case "AjFile":
                            {
                                String img=request.getParameter("img");
                                int patient=Integer.parseInt(request.getParameter("patient"));
//                                StringBuilder buffer = new StringBuilder();
//                                BufferedReader reader = request.getReader();
//                                String line;
//                                while ((line = reader.readLine()) != null) {
//                                    buffer.append(line);
//                                }
//                                String UploadImg=buffer.toString();
//                                String data = UploadImg.substring(UploadImg.indexOf("data:image/jpeg;base64"),UploadImg.lastIndexOf("------WebKitFormBoundar"));
//                                
                                out.println(gson.toJson(WS.PortCltWS.ajFile(patient,img)));
                                break;
                            }
                        case "SuppFile":
                            {
                                String id=request.getParameter("id");
                                out.println(gson.toJson(WS.PortCltWS.suppFile(id)));
                                break;
                            }
                        case "SuppAntecedentByPatient":
                            {
                                int patient=Integer.parseInt(request.getParameter("patient"));
                                out.println(gson.toJson(WS.PortCltWS.suppAntecedentByPatient(patient)));
                                break;
                            }
                        case "SuppPrescriptionOrdByNum_Ord":
                            {
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                                out.println(gson.toJson(WS.PortCltWS.suppPrescriptionOrdByNumOrd(num_ord)));
                                break;
                            }
                        case "SuppOrdonnance":
                            {
                                String num_ord=request.getParameter("num_ord");
                                out.println(gson.toJson(WS.PortCltWS.suppOrdonnance(num_ord)));
                                break;
                            }
                        case "AjExamen":
                            {
                                String TA=request.getParameter("TA");
                                String pouls=request.getParameter("pouls");
                                String temp=request.getParameter("temp");
                                String exam_phy=request.getParameter("exam_phy");
                                String etat_general=request.getParameter("etat_general");
                                String auscu_cardi=request.getParameter("auscu_cardi");
                                String auscu_pleuro=request.getParameter("auscu_plo");
                                String examen_ORL=request.getParameter("examen_ORL");
                                String aires_gangl=request.getParameter("aires_gangl");
                                String examen_abdominal=request.getParameter("examen_abdominal");
                                
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.ajExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_pleuro, examen_ORL, aires_gangl, examen_abdominal, num_consult)));
                                break;
                            }
                        case "UpdateExamen":
                            {
                                String TA=request.getParameter("TA");
                                String pouls=request.getParameter("pouls");
                                String temp=request.getParameter("temp");
                                String exam_phy=request.getParameter("exam_phy");
                                String etat_general=request.getParameter("etat_general");
                                String auscu_cardi=request.getParameter("auscu_cardi");
                                String auscu_plo=request.getParameter("auscu_plo");
                                String examen_ORL=request.getParameter("examen_ORL");
                                String aires_gangl=request.getParameter("aires_gangl");
                                String examen_abdominal=request.getParameter("examen_abdominal");
                                
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.updateExamen(TA,pouls,temp,exam_phy,etat_general,auscu_cardi,auscu_plo,examen_ORL,aires_gangl,examen_abdominal,num_consult)));
                                break;
                            }
                        case "AjConsultation":
                            {
                                String date_consult=request.getParameter("date_consult");
                                Date datnaiss = sdf.parse(date_consult);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int Diag_consult=Integer.parseInt(request.getParameter("Diag_consult"));
                                int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                                String type_consult=request.getParameter("type_consult");
                                int num_examen=Integer.parseInt(request.getParameter("num_examen"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajConsultation(dateC, num_patient, Diag_consult, type_consult,code_Med_Trit,num_examen,num_ord)));
                                break;
                            } 
                        case "AjRdv":
                            {
                                String start_date=request.getParameter("start_date");
                                DateTime start_date_ = sdftime.parseDateTime(start_date);
                                GregorianCalendar c = start_date_.toGregorianCalendar();
                                XMLGregorianCalendar date1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                String end_date=request.getParameter("end_date");
                                DateTime end_date_ = sdftime.parseDateTime(end_date);
                                GregorianCalendar c1 = end_date_.toGregorianCalendar();
                                XMLGregorianCalendar date2 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                                
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int num_medecin_trait=Integer.parseInt(request.getParameter("num_medecin_trait"));
                                String typeRDV=request.getParameter("typeRDV");
                                String descpRDV=request.getParameter("descpRDV");
                                int presence=Integer.parseInt(request.getParameter("presence"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajRdv(date1,typeRDV,descpRDV,presence,num_patient,num_medecin_trait,date2)));
                                break;
                            } 
                        case "UpdateRdv":
                            {
                                String start_date=request.getParameter("start_date");
                                DateTime start_date_ = sdftime.parseDateTime(start_date);
                                GregorianCalendar c = start_date_.toGregorianCalendar();
                                XMLGregorianCalendar date1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                String end_date=request.getParameter("end_date");
                                DateTime end_date_ = sdftime.parseDateTime(end_date);
                                GregorianCalendar c1 = end_date_.toGregorianCalendar();
                                XMLGregorianCalendar date2 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                                
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int numRdv=Integer.parseInt(request.getParameter("numRdv"));
                                String typeRDV=request.getParameter("typeRDV");
                                String descpRDV=request.getParameter("descpRDV");
                                int presence=Integer.parseInt(request.getParameter("presence"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateRdv(numRdv, date1, typeRDV, descpRDV, presence, num_patient, date2)));
                                break;
                            }
                        case "AjOrdonnance":
                            {
                                String date_Ord=request.getParameter("date_Ord");
                                Date date_Ordn = sdf.parse(date_Ord);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_Ordn);
                                XMLGregorianCalendar dateOrd = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                              
                                out.println(gson.toJson(WS.PortCltWS.ajOrdonnance(dateOrd, num_ord)));
                                break;
                            }
                        case "AjPrescriptionOrd":
                            {
                                int num_medc=Integer.parseInt(request.getParameter("num_medc"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                                String dure=request.getParameter("dure");
                                String qunt_med=request.getParameter("qunt_med");
                                String nb_fois_util=request.getParameter("nb_fois_util");
                              
                                out.println(gson.toJson(WS.PortCltWS.ajPrescriptionOrd(num_medc, num_ord, dure, qunt_med, nb_fois_util)));
                                break;
                            } 
                        case "UpdateConsultationOrd":
                            {
                                int num_Consult=Integer.parseInt(request.getParameter("num_Consult"));
                                int num_ord=Integer.parseInt(request.getParameter("num_ord"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateConsultationOrd(num_Consult, num_ord)));
                                break;
                            } 
                        case "UpdateConsultation":
                            {
                                String date_consult=request.getParameter("date_consult");
                                Date datnaiss = sdf.parse(date_consult);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_Consult=Integer.parseInt(request.getParameter("num_Consult"));
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int Diag_consult=Integer.parseInt(request.getParameter("Diag_consult"));
                                String type_consult=request.getParameter("type_consult");
                               
                                out.println(gson.toJson(WS.PortCltWS.updateConsultation(num_Consult,dateC, num_patient, Diag_consult, type_consult)));
                                break;
                            } 
                        case "AjMotif":
                            {
                                int num_motif=Integer.parseInt(request.getParameter("num_motif"));
                                String libelle=request.getParameter("libelle");
                               
                                out.println(gson.toJson(WS.PortCltWS.ajMotif(num_motif,libelle)));
                                break;
                            }
                        case "AjMotifConsult":
                            {
                                int num_Motif=Integer.parseInt(request.getParameter("num_Motif"));
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajMotifConsult(num_Motif, num_consult)));
                                break;
                            }
                        case "AjActe":
                            {
                                String libelle=request.getParameter("libelle");
                                int accord=Integer.parseInt(request.getParameter("accord"));
                                String tiket_moder=request.getParameter("tiket_moder");
                                String montant=request.getParameter("montant");
                                String Description=request.getParameter("Description");
                                String cotation=request.getParameter("cotation");
                                String type_acte=request.getParameter("type_acte");
                               
                                out.println(gson.toJson(WS.PortCltWS.ajActe(libelle, accord, tiket_moder, montant, Description, cotation, type_acte)));
                                break;
                            }
                        case "AjRecette":
                            {
                                String total=request.getParameter("total");
                                String date_trans=request.getParameter("date_trans");
                                Date date_trans_ = sdf.parse(date_trans);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_trans_);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                String codeActe=request.getParameter("codeActe");
                                String libelle=request.getParameter("libelle");
                                String type_depense=request.getParameter("type_depense");
                                String tiers=request.getParameter("tiers");
                                String cnam=request.getParameter("cnam");
                                String tiketModérateur=request.getParameter("tiketModérateur");
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                                int code_med_trait=Integer.parseInt(request.getParameter("code_med_trait"));
                                out.println(gson.toJson(WS.PortCltWS.ajRecette(total, dateC, libelle,type_depense,num_consult,num_patient,code_med_trait,tiers,codeActe,tiketModérateur,cnam)));
                                break;
                            }
                        case "UpdateRecetteDate":
                            {
                                
                                String date_trans=request.getParameter("date_trans");
                                Date date_trans_ = sdf.parse(date_trans);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_trans_);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                int num_trans=Integer.parseInt(request.getParameter("num_trans"));
                                out.println(gson.toJson(WS.PortCltWS.updateRecetteDate(num_trans,dateC)));
                                break;
                            }
                        case "SuppRecette":
                            {
                                String id=request.getParameter("id");
                                out.println(gson.toJson(WS.PortCltWS.suppRecette(id)));
                                break;
                            }
                        case "SuppRecettebyNUmConsultation":
                            {
                                String num_consult=request.getParameter("num_consult");
                                out.println(gson.toJson(WS.PortCltWS.suppRecettebyNUmConsultation(num_consult)));
                                break;
                            }
                        case "SuppRecettebyNUmActe":
                            {
                                String num_acte=request.getParameter("num_acte");
                                out.println(gson.toJson(WS.PortCltWS.suppRecettebyNUmActe(num_acte)));
                                break;
                            }
                        case "AjParametre":
                            {
                                
                                String date_naiss=request.getParameter("date_naiss");
                                Date datnaiss_ = sdf.parse(date_naiss);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss_);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                String nom_medecin=request.getParameter("nom_medecin");
                                String prenom_medecin=request.getParameter("prenom_medecin");
                                String salutation=request.getParameter("salutation");
                                String num_inscp_ord_med=request.getParameter("num_inscp_ord_med");
                                String adresse=request.getParameter("adresse");
                                String ville=request.getParameter("ville");
                                String Fixe=request.getParameter("Fixe");
                                String GSM=request.getParameter("GSM");
                                String email=request.getParameter("email");
                                String titre=request.getParameter("titre");
                                String specialite=request.getParameter("specialite");
                                String code_convent=request.getParameter("code_convent");
                                String type_consult=request.getParameter("type_consult");
                                String mnt_consultSansConv=request.getParameter("mnt_consultSansConv");
                                String gouvernorat=request.getParameter("gouvernorat");
                                int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                                double tiket_moder=Double.parseDouble(request.getParameter("tiket_moder"));
                                double tva_consult=Double.parseDouble(request.getParameter("tva_consult"));
                                double montant_consult=Double.parseDouble(request.getParameter("montant_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.ajParametre(nom_medecin, prenom_medecin, dateC, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv, code_Med_Trit)));
                                break;
                            }
                        case "UpdateParametre":
                            {
                                
                                String date_naiss=request.getParameter("date_naiss");
                                Date datnaiss_ = sdf.parse(date_naiss);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss_);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                
                                String nom_medecin=request.getParameter("nom_medecin");
                                String prenom_medecin=request.getParameter("prenom_medecin");
                                String salutation=request.getParameter("salutation");
                                String num_inscp_ord_med=request.getParameter("num_inscp_ord_med");
                                String adresse=request.getParameter("adresse");
                                String ville=request.getParameter("ville");
                                String Fixe=request.getParameter("Fixe");
                                String GSM=request.getParameter("GSM");
                                String email=request.getParameter("email");
                                String titre=request.getParameter("titre");
                                String specialite=request.getParameter("specialite");
                                String code_convent=request.getParameter("code_convent");
                                String type_consult=request.getParameter("type_consult");
                                String mnt_consultSansConv=request.getParameter("mnt_consultSansConv");
                                String gouvernorat=request.getParameter("gouvernorat");
                                int num_cab=Integer.parseInt(request.getParameter("num_cab"));
                                double tiket_moder=Double.parseDouble(request.getParameter("tiket_moder"));
                                double tva_consult=Double.parseDouble(request.getParameter("tva_consult"));
                                double montant_consult=Double.parseDouble(request.getParameter("montant_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateParametre(num_cab,nom_medecin, prenom_medecin, dateC, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv)));
                                break;
                            }
                        case "AjActeMedicaux":
                            {
                                String date_acte=request.getParameter("date_acte");
                                Date date_acte_ = sdf.parse(date_acte);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(date_acte_);
                                XMLGregorianCalendar dateacte = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                int num_acte=Integer.parseInt(request.getParameter("num_acte"));
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                int nb_pr_chg=Integer.parseInt(request.getParameter("nb_pr_chg"));
                               
                               
                                out.println(gson.toJson(WS.PortCltWS.ajActeMedicaux(num_acte,num_consult,dateacte,nb_pr_chg)));
                                break;
                            }
                        case "SuppConsultation":
                            {
                                String num_consult=request.getParameter("num_consult");
                               
                                out.println(gson.toJson(WS.PortCltWS.suppConsultation(num_consult)));
                                break;
                            } 
                        case "SuppRdv":
                            {
                                String num_RDV=request.getParameter("num_RDV");
                                out.println(gson.toJson(WS.PortCltWS.suppRdv(num_RDV)));
                                break;
                            }
                        case "SuppMedic":
                            {
                                String num_Medic=request.getParameter("num_Medic");
                                out.println(gson.toJson(WS.PortCltWS.suppMedic(num_Medic)));
                                break;
                            }
                        case "SuppMotif":
                            {
                                String num_motif=request.getParameter("num_motif");
                                out.println(gson.toJson(WS.PortCltWS.suppMotif(num_motif)));
                                break;
                            }
                        case "SuppMotifConsultbyNum_Consult":
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                                out.println(gson.toJson(WS.PortCltWS.suppMotifConsultbyNumConsult(num_consult)));
                                break;
                            } 
                        case "SuppActeMedicaux":
                            {
                                String num_consult=request.getParameter("num_consult");
                                String num_acte=request.getParameter("num_acte");
                                out.println(gson.toJson(WS.PortCltWS.suppActeMedicaux(num_acte, num_consult)));
                                break;
                            } 
                        case "SuppActeMedicauxbyNum_Consult":
                            {
                                int num_consult=Integer.parseInt(request.getParameter("num_consult"));
                               
                                out.println(gson.toJson(WS.PortCltWS.suppActeMedicauxbyNumConsult(num_consult)));
                                break;
                            } 
                        case "UpdateActeMedicauxbyNum_Consult":
                            {
                                int num_consult_old=Integer.parseInt(request.getParameter("num_consult_old"));
                                int num_consult_New=Integer.parseInt(request.getParameter("num_consult_New"));
                               
                                out.println(gson.toJson(WS.PortCltWS.updateActeMedicauxbyNumConsult(num_consult_old, num_consult_New)));
                                break;
                            } 
                        default:
                                    break;
                            }
                  }
         }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(Consultation.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
