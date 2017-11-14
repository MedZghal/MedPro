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
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author ASUS
 */
public class Gestion_Acces extends HttpServlet {

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
            throws ServletException, IOException {
       response.setContentType("text/html;charset=UTF-8");
       
        try (PrintWriter out = response.getWriter()) {
            
            if(WS.PortCltWS == null){
                        webservice= new WS();
                        webservice.GcmEventWS();
//                        webservice.GempApplication();
                    }
        
            Gson gson = new GsonBuilder().serializeNulls().create();
            HttpSession session=request.getSession(true);
            
            String function=request.getParameter("function");
            String type=request.getParameter("type");
            
            if(type.equals("consult")){
                
                switch (function) {
                    case "GetListUtilisateur":
                        {
                            out.println(gson.toJson(WS.PortCltWS.getListUtilisateur()));
                            break;
                        }
                    case "GetMaxUtilisateur":
                        {
                            out.println(gson.toJson(WS.PortCltWS.getMaxUtilisateur()));
                            break;
                        }
                        case "GetMinUtilisateur":
                        {
                            out.println(gson.toJson(WS.PortCltWS.getMinUtilisateur()));
                            break;
                        }
                    case "GetDateServeur":
                        {
                            out.println(gson.toJson(WS.PortCltWS.getDateServeur()));
                            break;
                        }
                    case "GetParemetre":        
                        {
                            int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                            out.println(gson.toJson(WS.PortCltWS.getParametre(codeMedTrit)));
                            break;
                        }
                    case "GetUtilisateurbyCodeMedTrit":        
                        {
                            int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                            out.println(gson.toJson(WS.PortCltWS.getUtilisateurbyCodeMedTrit(codeMedTrit)));
                            break;
                        }
                    case "GetListUtilisateurByMedecin":        
                        {
                            String secretaire_medecin=request.getParameter("secretaire_medecin");
                            out.println(gson.toJson(WS.PortCltWS.getListUtilisateurByMedecin(secretaire_medecin)));
                            break;
                        }
                    case "GetUtilisateurbyUsername":        
                        {
                            String username=request.getParameter("username");
                            out.println(gson.toJson(WS.PortCltWS.getUtilisateurbyUsername(username)));
                            break;
                        }
                    case "GetParemetrebyCodeMedTrit":
                        {
                            int codeMedTrit=Integer.parseInt(request.getParameter("codeMedTrit"));
                            out.println(gson.toJson(WS.PortCltWS.getParemetrebyCodeMedTrit(codeMedTrit)));
                            break;
                        }
                    default:
                        break;
                }
            }else
                 if(type.equals("update")){
                     switch (function) {
                        case "SuppUtilisateur":
                            {
                                String username=request.getParameter("username");
                                out.println(gson.toJson(WS.PortCltWS.suppUtilisateur(username)));
                                break;
                            }
                        case "SuppUtilisateurBySec":
                            {
                                String secretaire=request.getParameter("secretaire");
                                out.println(gson.toJson(WS.PortCltWS.suppUtilisateurBySec(secretaire)));
                                break;
                            }
                        case "SuppParametre":
                            {
                                String id=request.getParameter("id");
                                out.println(gson.toJson(WS.PortCltWS.suppParametre(id)));
                                break;
                            }  
                        case "SuppParametreBycode_Med_Trit":
                            {
                                String code_Med_Trit=request.getParameter("code_Med_Trit");
                                out.println(gson.toJson(WS.PortCltWS.suppParametreBycodeMedTrit(code_Med_Trit)));
                                break;
                            } 
                        case "AjUtilisateur":
                            {
                                String username=request.getParameter("username");
                                String pass=request.getParameter("pass");
                                String type_util=request.getParameter("type_util");
                                String secretaire=request.getParameter("secretaire");
                                int code_Med_Trit=Integer.parseInt(request.getParameter("code_Med_Trit"));
                                
                                out.println(gson.toJson(WS.PortCltWS.ajUtilisateur(username, pass, type_util, code_Med_Trit, secretaire)));
                                break;
                            }
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
        processRequest(request, response);
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
        processRequest(request, response);
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
