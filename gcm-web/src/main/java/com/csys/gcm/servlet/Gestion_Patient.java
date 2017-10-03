/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.csys.gcm.servlet;

import com.csys.gcm.generic.WS;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
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
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

/**
 *
 * @author ASUS
 */
public class Gestion_Patient extends HttpServlet {

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
            throws ServletException, IOException, ParseException, DatatypeConfigurationException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            if(WS.PortCltWS == null){
                webservice = new WS();
                        webservice.GcmEventWS();
                    }
        
            Gson gson = new GsonBuilder().serializeNulls().create();
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            String function=request.getParameter("function");
            String type=request.getParameter("type");
            
            if(type.equals("consult")){
                
                switch (function) {
                    case "GetListPatient":
                        out.println(gson.toJson(WS.PortCltWS.getListPatient()));
                        break;
                    case "GetListVille":
                        out.println(gson.toJson(WS.PortCltWS.getListVille()));
                        break;
                    case "GetListDci":
                        out.println(gson.toJson(WS.PortCltWS.getListDci()));
                        break;
                    case "GetListGouvernorat":
                        String ville = request.getParameter("Ville");
                        out.println(gson.toJson(WS.PortCltWS.getListGouvernorat(ville)));
                        break;
                    case "GetListVilleDistinct":
                        out.println(gson.toJson(WS.PortCltWS.getListVilleDistinct()));
                        break;
                    case "GetListMedicament":
                        out.println(gson.toJson(WS.PortCltWS.getListMedic()));
                        break;
                    case "GetCptParamByCode":
                    {
                        String Param=request.getParameter("Param");
                        out.println(gson.toJson(WS.PortCltWS.getCptParamByCode(Param)));
                        break;
                    }
                    case "GetRdvStats":        
                    {
                        int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                        int month=Integer.parseInt(request.getParameter("month"));
                        int year=Integer.parseInt(request.getParameter("year"));

                        out.println(gson.toJson(WS.PortCltWS.getRdvStats(codeMedTrit,month,year)));
                        break;
                    }
                    case "GetPatientByNumFichPatient":
                    {
                        int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                        out.println(gson.toJson(WS.PortCltWS.getPatientByNumFichPatient(NumFichPatient)));
                        break;
                    }
                    case "GetListPatientByMedecin":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListPatientByMedecin(code_Med_Trit)));
                        break;
                    }
                    case "GetListAllPatientByMedecin":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListAllPatientByMedecin(code_Med_Trit)));
                        break;
                    }
                    case "GetListDossierParByMedecin":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListDossierParByMedecin(code_Med_Trit)));
                        break;
                    }
                    case "GetListPatientByMedecinOpt":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListPatientByMedecinOpt(code_Med_Trit)));
                        break;
                    }
                    case "GetListRdvByADate":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListRdvByADate(code_Med_Trit)));
                        break;
                    }
                    case "GetListSallebyCodeMedTrit":
                    {
                        int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                        out.println(gson.toJson(WS.PortCltWS.getListSallebyCodeMedTrit(code_Med_Trit)));
                        break;
                    }
                    case "GetAssuranceCNAMByPatient":
                    {
                        int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                        out.println(gson.toJson(WS.PortCltWS.getAssuranceCNAMByPatient(NumFichPatient)));
                        break;
                    }
                    case "GetTraitementAPCIByNumPatient":
                    {
                        int NumFichPatient=Integer.parseInt(request.getParameter("NumFichPatient"));
                        out.println(gson.toJson(WS.PortCltWS.getTraitementAPCIByNumPatient(NumFichPatient)));
                        break;
                    }
                    default:
                        break;
                }
               
            }else
                 if(type.equals("update")){
                     
                switch (function) {
                    case "AjPatient":
                        {
                            String nom=request.getParameter("nom");
                            String prenom=request.getParameter("prenom");
                            String sexse=request.getParameter("sexse");
                            String sutfam=request.getParameter("sutfam");
                            String prof=request.getParameter("prof");
                            String adr=request.getParameter("adr");
                            String fixe=request.getParameter("fixe");
                            String gsm=request.getParameter("gsm");
                            String poid=request.getParameter("poid");
                            String ville=request.getParameter("ville");
                            String fichpapier=request.getParameter("fichpapier");
                            String AutreAssur=request.getParameter("AutreAssur");
                            String code_apci=request.getParameter("code_apci");
                            String type_apci=request.getParameter("type_apci");
                            String date=request.getParameter("datnaiss");
                            Date datnaiss = sdf.parse(date);
                            GregorianCalendar c = new GregorianCalendar();
                            c.setTime(datnaiss);
                            XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                            String date_valid=request.getParameter("date_valid");
                            int AssurCnam=Integer.parseInt(request.getParameter("AssurCnam"));
                            if(!date_valid.isEmpty())
                            {
                                Date Date_valid = sdf.parse(date_valid);
                                GregorianCalendar c1 = new GregorianCalendar();
                                c1.setTime(Date_valid);
                                XMLGregorianCalendar dateC1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                                out.println(gson.toJson(WS.PortCltWS.ajPatient(nom,prenom,sexse,dateC,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier,AutreAssur,code_apci,type_apci,dateC1,AssurCnam)));
                            }
                            else{
                                XMLGregorianCalendar dateC1 =null;
                                out.println(gson.toJson(WS.PortCltWS.ajPatient(nom,prenom,sexse,dateC,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier,AutreAssur,code_apci,type_apci,dateC1,AssurCnam)));
                            } break;
                        }
                    case "AjSalle_Attente":
                        {
                            int num_rdv=Integer.parseInt(request.getParameter("num_rdv"));
                            int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                            int num_medc_trait=Integer.parseInt(request.getParameter("num_medc_trait"));
                            String note=request.getParameter("note");
                            out.println(gson.toJson(WS.PortCltWS.ajSalleAttente(num_patient,num_rdv, note, num_medc_trait)));
                            break;
                        }
                    case "AjPatientByMedecin":
                        {
                            int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                            int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                            String partage=request.getParameter("partage");
                            out.println(gson.toJson(WS.PortCltWS.ajPatientByMedecin(code_Med_Trit, num_patient,partage)));
                            break;
                        }
                    case "UpdateMedecinPartage":
                        {
                            int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                            int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                            String partage=request.getParameter("partage");
                            out.println(gson.toJson(WS.PortCltWS.updateMedecinPartage(code_Med_Trit, num_patient,partage)));
                            break;
                        }
                    case "AjMedic":
                        {
                            String desg=request.getParameter("desg");
                            String prix=request.getParameter("prix");
                            String generique=request.getParameter("generique");
                            String catg=request.getParameter("catg");
                            int codDci=Integer.parseInt(request.getParameter("codDci"));
                            out.println(gson.toJson(WS.PortCltWS.ajMedic(desg, prix, generique, catg, codDci)));
                            break;
                        }
                    case "SuppPatient":
                        {
                            String idpatient=request.getParameter("num");
                            out.println(gson.toJson(WS.PortCltWS.suppPatient(idpatient)));
                            break;
                        }
                    case "SuppPartage":
                        {
                            int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                            int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                            out.println(gson.toJson(WS.PortCltWS.suppPartage(code_Med_Trit,num_patient)));
                            break;
                        }
                    case "SuppSalleAttente":
                        {
                            int num_ligneAttend=Integer.parseInt(request.getParameter("num_ligneAttend"));
                            out.println(gson.toJson(WS.PortCltWS.suppSalleAttente(num_ligneAttend)));
                            break;
                        }
                    case "SuppAllSalleAttente":
                        {
                            int num_medc_trait=Integer.parseInt(request.getParameter("num_medc_trait"));
                            out.println(gson.toJson(WS.PortCltWS.suppAllSalleAttente(num_medc_trait)));
                            break;
                        }
                    case "UpdatePatient":
                        {
                            int  idpatient=Integer.parseInt(request.getParameter("num"));
                            String nom=request.getParameter("nom");
                            String prenom=request.getParameter("prenom");
                            String sexse=request.getParameter("sexse");
                            String sutfam=request.getParameter("sutfam");
                            String prof=request.getParameter("prof");
                            String adr=request.getParameter("adr");
                            String fixe=request.getParameter("fixe");
                            String gsm=request.getParameter("gsm");
                            String poid=request.getParameter("poid");
                            String ville=request.getParameter("ville");
                            String fichpapier=request.getParameter("fichpapier");
                            String AutreAssur=request.getParameter("AutreAssur");
                            String code_apci=request.getParameter("code_apci");
                            String type_apci=request.getParameter("type_apci");
                            String date=request.getParameter("datnaiss");
                            Date datnaiss = sdf.parse(date);
                            GregorianCalendar c = new GregorianCalendar();
                            c.setTime(datnaiss);
                            XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                            String date_valid=request.getParameter("date_valid");
                            int AssurCnam=Integer.parseInt(request.getParameter("AssurCnam"));
                            if(!date_valid.isEmpty())
                            {
                                Date Date_valid = sdf.parse(date_valid);
                                GregorianCalendar c1 = new GregorianCalendar();
                                c1.setTime(Date_valid);
                                XMLGregorianCalendar dateC1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                                out.println(gson.toJson(WS.PortCltWS.updatePatient(idpatient,nom,prenom,sexse,dateC,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier,AutreAssur,code_apci,type_apci,dateC1,AssurCnam)));
                            }
                            else{
                                XMLGregorianCalendar dateC1 =null;
                                out.println(gson.toJson(WS.PortCltWS.updatePatient(idpatient,nom,prenom,sexse,dateC,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier,AutreAssur,code_apci,type_apci,dateC1,AssurCnam)));
                            }
                            break;
                        }
                    case "UpdateAssuranceCNAM":
                        {
                            int  num_Assur=Integer.parseInt(request.getParameter("num_Assur"));
                            String regime_affi=request.getParameter("regime_affi");
                            String qualite=request.getParameter("qualite");
                            String ident_unique=request.getParameter("ident_unique");
                            int rang_Assur=Integer.parseInt(request.getParameter("rang_Assur"));
                            String date_valid=request.getParameter("date_valid");
                            Date Date_valid = sdf.parse(date_valid);
                            GregorianCalendar c1 = new GregorianCalendar();
                            c1.setTime(Date_valid);
                            XMLGregorianCalendar dateC1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                            String type_cnam=request.getParameter("type_cnam");
                            String cod_cnam=request.getParameter("cod_cnam");
                            String nom_medc=request.getParameter("nom_medc");
                            out.println(gson.toJson(WS.PortCltWS.updateAssuranceCNAM(num_Assur,regime_affi,qualite,ident_unique,rang_Assur,dateC1,type_cnam,nom_medc,cod_cnam)));
                            break;
                        }
                    case "AjAssuranceCNAM":
                        {
                            String regime_affi=request.getParameter("regime_affi");
                            String qualite=request.getParameter("qualite");
                            String ident_unique=request.getParameter("ident_unique");
                            int rang_Assur=Integer.parseInt(request.getParameter("rang_Assur"));
                            String date_valid=request.getParameter("date_valid");
                            Date Date_valid = sdf.parse(date_valid);
                            GregorianCalendar c1 = new GregorianCalendar();
                            c1.setTime(Date_valid);
                            XMLGregorianCalendar dateC1 = DatatypeFactory.newInstance().newXMLGregorianCalendar(c1);
                            String type_cnam=request.getParameter("type_cnam");
                            String cod_cnam=request.getParameter("cod_cnam");
                            String nom_medc=request.getParameter("nom_medc");
                            out.println(gson.toJson(WS.PortCltWS.ajAssuranceCNAM(regime_affi,qualite,ident_unique,rang_Assur,dateC1,type_cnam,nom_medc,cod_cnam)));
                            break;
                        }
                    case "UpdatePatientAPCI":
                        {
                            int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                            String code_apci=request.getParameter("code_apci");
                            String type_apci=request.getParameter("type_apci");
                            String Datnaiss=request.getParameter("datnaiss");
                            
                            if(!Datnaiss.isEmpty())
                            {
                                Date datnaiss = sdf.parse(Datnaiss);
                                GregorianCalendar c = new GregorianCalendar();
                                c.setTime(datnaiss);
                                XMLGregorianCalendar dateC = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
                                out.println(gson.toJson(WS.PortCltWS.updatePatientAPCI(num_patient,code_apci,type_apci,dateC)));
                            }
                            else{
                                XMLGregorianCalendar dateC =null;
                                out.println(gson.toJson(WS.PortCltWS.updatePatientAPCI(num_patient,code_apci,type_apci,dateC)));
                            }
                            
                            break;
                        }
                    case "SuppAssuranceCNAM":
                    {
                        String idpatient=request.getParameter("num");
                        out.println(gson.toJson(WS.PortCltWS.suppAssuranceCNAM(idpatient)));
                        break;
                    }
                    case "AjTraitementAPCI":
                        {
                            int codpat= Integer.parseInt(request.getParameter("num_patient"));
                            int codmedic= Integer.parseInt(request.getParameter("num_medic"));
                            String posologie=request.getParameter("posologie");
                            out.println(gson.toJson(WS.PortCltWS.ajTraitementAPCI(codpat,codmedic, posologie)));
                            break;
                        }
                    case "SuppTraitementAPCIByPatient":
                    {
                        int num_patient=Integer.parseInt(request.getParameter("num_patient"));
                        out.println(gson.toJson(WS.PortCltWS.suppTraitementAPCIByPatient(num_patient)));
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
        } catch (ParseException ex) {
            Logger.getLogger(Gestion_Patient.class.getName()).log(Level.SEVERE, null, ex);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Gestion_Patient.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (ParseException ex) {
            Logger.getLogger(Gestion_Patient.class.getName()).log(Level.SEVERE, null, ex);
        } catch (DatatypeConfigurationException ex) {
            Logger.getLogger(Gestion_Patient.class.getName()).log(Level.SEVERE, null, ex);
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
