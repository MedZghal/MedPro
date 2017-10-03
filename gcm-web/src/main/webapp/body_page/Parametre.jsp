<%-- 
    Document   : AjPatient
    Created on : 22 févr. 2017, 14:20:03
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Paramétres Cabinet</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
    </head>
    <body style="font-family: cursive" >
        
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-settings"></i>
                                    <a href="#">Paramétres Cabinet</a>
                                </li>
                            </ul>
                            
                            <div class="page-toolbar">
                               <div class="page-toolbar">
                                <div id="dashboard-report-range" class="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Date d'aujourd'hui ">
                                    <i class="icon-calendar"></i>&nbsp;
                                    <span id="date" class="uppercase has-success"></span>&nbsp;
                                    <i class="fa fa-angle-down"></i>
                                </div>
                               </div>
                            </div>
                        </div>
                        <!-- END PAGE BAR -->
                          <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/settings.png" alt="details">&nbsp; Informations Cabinet </div>
                                                    </div>
                                                        <div class="panel-body">
                                                
                                                
                                                 <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="nom" name="nom" type="text" class="form-control" placeholder="Nom Médecin" >
                                                                <label for="form_control_1">Nom Médecin</label>
                                                                <span class="help-block">Entrer nom de Médecin</span>
                                                                 <i class="fa fa-users" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="prenom" name="prenom" type="text" class="form-control" placeholder="Prénom Médecin">
                                                                <label for="form_control_1">Prénom Médecin</label>
                                                                <span class="help-block">Entrer prénom de Médecin</span>
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="datnaiss" name="datnaiss" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date de naissance du patient">
                                                                <label for="form_control_1">Date de Naissance</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row">
                                                    
                                                     <div class="col-md-4">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="Salutation" name="Salutation" class="form-control">
                                                            <option value>sélectionnez Salutation</option>
                                                            <option value="Doctor">Doctor</option>
                                                            <option value="Doctor">Doctor</option>
                                                        </select>
                                                                <label for="form_control_1">Salutation</label>
                                                                <i class="fa fa-cogs"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input type="number" id="Inscription" name="Inscription" class="form-control" placeholder="N°Inscription">
                                                                <label for="form_control_1">N°Inscription Ordre Médecins</label>
                                                                <span class="help-block">Entrer N°Inscription</span>
                                                                <i class="fa fa-address-book-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="Sépecialité" name="Sépecialité" class="form-control">
                                                            <option value>sélectionnez Sépecialité</option>
                                                            <option value="Anatomie pathologique">Anatomie pathologique</option>
                                                            <option value="Biologie clinique">Biologie clinique</option>
                                                            <option value="Anesthésie-réanimation">Anesthésie-réanimation</option>
                                                            <option value="Cardiologie">Cardiologie</option>
                                                            <option value="Chirurgie">Chirurgie</option>
                                                            <option value="Chirurgie orthopédique">Chirurgie orthopédique</option>
                                                            <option value="Chirurgie plastique">Chirurgie plastique</option>
                                                            <option value="Dermatologie-Vénérologie">Dermatologie-Vénérologie</option>
                                                            <option value="Gastro-entérologie">Gastro-entérologie</option>
                                                            <option value="Gériatrie">Gériatrie</option>
                                                            <option value="Gynécologie-obstétrique">Gynécologie-obstétrique</option>
                                                            <option value="Médecine d’urgence">Médecine d’urgence</option>
                                                            <option value="Médecine du travail">Médecine du travail</option>
                                                            <option value="Médecine générale">Médecine générale</option>
                                                            <option value="Médecine légale">Médecine légale</option>
                                                            <option value="Médecine physique et réadaptation">Médecine physique et réadaptation</option>
                                                            <option value="Neurochirurgie">Neurochirurgie</option>
                                                            <option value="Ophtalmologie">Ophtalmologie</option>
                                                            <option value="Oto-rhino-laryngologie">Oto-rhino-laryngologie</option>
                                                            <option value="Neurologie">Neurologie</option>
                                                            <option value="Pédiatrie">Pédiatrie</option>
                                                            <option value="Pneumologie">Pneumologie</option>
                                                            <option value="Psychiatrie">Psychiatrie</option>
                                                            <option value="Radiodiagnostic">Radiodiagnostic</option>
                                                            <option value="Radiothérapie-oncologie">Radiothérapie-oncologie</option>
                                                            <option value="Rhumatologie">Rhumatologie</option>
                                                            <option value="Stomatologie">Stomatologie</option>
                                                            <option value="Urologie">Urologie</option>
                                                            
                                                            
                                                            
                                                        </select>
                                                                <label for="form_control_1">Sépecialité Médecin</label>
                                                                <i class="fa fa-user-md"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group form-md-line-input">
                                                            <div class="input-group right-addon">
                                                             <textarea id="adr" name ="adr" class="form-control" rows="3" placeholder="Enter l'adresse du patient"></textarea>
                                                             <label for="form_control_1" class="has-success"> Adresse </label>
                                                              <span class="input-group-addon">
                                                                     <i class="fa fa-map" aria-hidden="true"></i>
                                                                 </span>
                                                             </div>    
                                                         </div>
                                                
                                                <div class="row">
                                                    <div class="col-md-3">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="ville" name="ville" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;sélectionnez Ville </option>
                                                        </select>
                                                                <label for="form_control_1">Ville</label>
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <select id="Gouvernorat" name="Gouvernorat" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;&nbsp;sélectionnez Gouvernorat</option>   
                                                        </select>
                                                                <label for="form_control_1">Gouvernorat</label>
                                                                <i class="fa fa-map-signs" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="fixe" name="fixe" type="text" class="form-control" placeholder="Fixe">
                                                                <label for="form_control_1">N°Téléphone Fixe</label>
                                                                <span class="help-block">Entrer Fixe du patient</span>
                                                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="gsm" name="gsm" type="text" class="form-control" placeholder="GSM">
                                                                <label for="form_control_1">N°Téléphone GSM</label>
                                                                <span class="help-block">Entrer Gsm du patient</span>
                                                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                            
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group form-md-line-input has-success">
                                                                        <div class="input-icon">
                                                                         <textarea id="Titre" name ="Titre" class="form-control" rows="3" placeholder="Enter Titres"></textarea>
                                                                         <label for="form_control_1" class="has-success"> Titre </label>
                                                                          <span class="help-block">Enter Titre du Médecin </span>
                                                                          <i class="fa fa-user-md" aria-hidden="true"></i>
                                                                         </div>    
                                                                     </div>
                                                                    </div>
                                                                <div class="col-md-6" style="margin-top: 35px;">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="email" name="email" type="email" class="form-control" placeholder="Email Médecin">
                                                                            <label for="form_control_1">Email Médecin</label>
                                                                            <span class="help-block">Entrer Email du Médecin</span>
                                                                            <i class="fa fa-envelope-open-o"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                              
                                                                
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <br/>
                                                
                                                <div class="panel-group accordion scrollable" id="accordion2">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/nurse_.png" alt="cnam" style="margin-top: -6px;">&nbsp; Informations CNAM </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="false"> Médecin Conventionné avec CNAM </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                    <div class="row">
                                                                                    <div class="col-md-6">
                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                            <select id="Type" name="Type" class="form-control select2-bootstrap-append">
                                                                                                <option value> </option>
                                                                                                <option value="Consultation">Consultation</option>
                                                                                                <option value="Consultation Spécialiste">Consultation Spécialiste</option>
                                                                                                <option value="Consultation Neuro/Psy">Consultation Neuro/Psy</option>
                                                                                            </select>
                                                                                                    <label for="form_control_1">Type Consultation</label>
                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    <div class="col-md-6">
                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="Code" name="Code" type="text" class="form-control" placeholder="Code Conventionnel">
                                                                                                    <label for="form_control_1">Code Conventionnel</label>
                                                                                                    <span class="help-block">Entrer Code Conventionnel</span>
                                                                                                    <i class="fa fa-barcode" aria-hidden="true"></i>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row">
                                                                                         <div class="col-md-4">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="Tiket" name="Tiket" type="number" class="form-control" placeholder="Tiket Modérateur">
                                                                                                        <label for="form_control_1">Tiket Modérateur(%)</label>
                                                                                                        <span class="help-block">Entrer Tiket Modérateur</span>
                                                                                                        <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        <div class="col-md-4">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="TVA" name="TVA" type="number" class="form-control" placeholder="TVA Consultation">
                                                                                                        <label for="form_control_1">TVA Consultation(%)</label>
                                                                                                        <span class="help-block">Entrer TVA Consultation</span>
                                                                                                        <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                             <div class="col-md-4">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="Montant" name="Montant" type="number" class="form-control" placeholder="Montant Consultation">
                                                                                                        <label for="form_control_1"> Montant Consultation </label>
                                                                                                        <span class="help-block">Entrer Montant Consultation</span>
                                                                                                        <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div> 
                                                
                                                
                                            <div class="form-actions noborder center-align" style="background-color: transparent;">
                                                    <button id="submit" type="submit" style="font-family: cursive; margin-left: 390px; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                            <span class="ladda-label"> Validier 
                                                            <span class="glyphicon glyphicon-cog"> </span>
                                                            </span>
                                                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                    <span class="glyphicon glyphicon-alert"> </span>
                                                    </button>
                                            
                                            </div>
                                      
                                      </form> 
                                </div>
        </div>
                        
        
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Parametre_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Parametre.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
