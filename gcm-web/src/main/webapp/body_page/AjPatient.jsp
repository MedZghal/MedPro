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
        <title>Gestion des Patients</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
         <style>
            /*Scroll hide*/
            html {
                overflow: scroll;
                overflow-x: hidden;
            }
            ::-webkit-scrollbar {
                width: 0px;  /* remove scrollbar space */
                background: transparent;  /* optional: just make scrollbar invisible */
            }
            /* optional: show position indicator in red */
            ::-webkit-scrollbar-thumb {
                background: #FF0000;
            }
        </style>
    </head>
    <body  >
        
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-user"></i>
                                    <a href="#">Fiche Patient</a>
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
                                                                        <img id="fichelog" src="" alt="details">&nbsp; Fiche Patient </div>
                                                    </div>
                                                        <div class="panel-body">
                                                
                                                
                                                 <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="nom">Nom</label>
                                                            <div class="input-icon">
                                                                 <i class="fa fa-users" aria-hidden="true"></i>
                                                                <input id="nom" name="nom" type="text" class="form-control" placeholder="Nom" >
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="nom" name="nom" type="text" class="form-control" placeholder="Nom" >
                                                                <label for="form_control_1">Nom</label>
                                                                <span class="help-block">Entrer nom de patient</span>
                                                                 <i class="fa fa-users" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="prenom">Prénom</label>
                                                            <div class="input-icon">
                                                                 <i class="fa fa-user"></i>
                                                                <input id="prenom" name="prenom" type="text" class="form-control" placeholder="Prénom">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="prenom" name="prenom" type="text" class="form-control" placeholder="Prénom">
                                                                <label for="form_control_1">Prénom</label>
                                                                <span class="help-block">Entrer prénom de patient</span>
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="fich">Num Fiche</label>
                                                            <div class="input-icon">
                                                                 <i class="fa fa-bookmark"></i>
                                                                <input id="fich" name="fich" type="text" class="form-control" placeholder="Num Fiche(Papier)">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="fich" name="fich" type="text" class="form-control" placeholder="Num Fiche(Papier)">
                                                                <label for="form_control_1">Num Fiche</label>
                                                                <span class="help-block">Entrer Num Fiche du patient</span>
                                                                <i class="fa fa-bookmark"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="datnaiss">Date de Naissance</label>
                                                            <div class="input-icon">
                                                                  <i style=" margin-top: 9px; " class="fa fa-calendar"></i>
                                                                <input id="datnaiss" name="datnaiss" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de naissance du patient">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="datnaiss" name="datnaiss" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de naissance du patient">
                                                                <label for="form_control_1">Date de Naissance</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                     <div class="col-md-4">
                                                         <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="sexse">Sexe</label>
                                                            <div class="input-icon">
                                                                  <i class="fa fa-transgender"></i>
                                                                <select id="sexse" name="sexe" class="form-control">
                                                                    <option value>sélectionnez le sexe</option>
                                                                    <option value="Homme">Homme</option>
                                                                    <option value="Femme">Femme</option>
                                                                </select>
                                                            </div>
                                                        </div>
<!--                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="sexse" name="sexe" class="form-control">
                                                            <option value>sélectionnez le sexe</option>
                                                            <option value="Homme">Homme</option>
                                                            <option value="Femme">Femme</option>
                                                        </select>
                                                                <label for="form_control_1">Sexe</label>
                                                                <i class="fa fa-transgender"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="sutfam">Sutuation Familiaire</label>
                                                            <div class="input-icon">
                                                                 <i class="fa fa-hospital-o"></i>
                                                                <select id="sutfam" name="sutfam" class="form-control">
                                                            <option value>sélectionnez la Sutuation Familiaire</option>
                                                            <option value="Célebataire">Célebataire</option>
                                                            <option value="Marié(e)">Marié(e)</option>
                                                            <option value="Divorcé(e)">Divorcé(e)</option>
                                                            <option value="Veuf(ve)">Veuf(ve)</option>
                                                        </select>
                                                            </div>
                                                        </div>
                                                        
<!--                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="sutfam" name="sutfam" class="form-control">
                                                            <option value>sélectionnez la Sutuation Familiaire</option>
                                                            <option value="Célebataire">Célebataire</option>
                                                            <option value="Marié(e)">Marié(e)</option>
                                                            <option value="Divorcé(e)">Divorcé(e)</option>
                                                            <option value="Veuf(ve)">Veuf(ve)</option>
                                                        </select>
                                                                <label for="form_control_1">Sutuation Familiaire</label>
                                                                <i class="fa fa-hospital-o"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                
                                               <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="age">Entrer l'âge du patient</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-birthday-cake"></i>
                                                                 <input type="number" id="age" name="age" disabled class="form-control" placeholder="Age">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input type="number" id="age" name="age" disabled class="form-control" placeholder="Age">
                                                                <label for="form_control_1">Age</label>
                                                                <span class="help-block">Entrer l'âge du patient</span>
                                                                <i class="fa fa-birthday-cake"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="poid">Entrer Poid du patient</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                 <input id="poid" name="poid" type="number" class="form-control" placeholder="Poids">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="poid" name="poid" type="number" class="form-control" placeholder="Poids">
                                                                <label for="form_control_1">Poids</label>
                                                                <span class="help-block">Entrer Poid du patient</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="poid">Profession</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-suitcase" aria-hidden="true"></i>
                                                                 <input id="prof" name="prof" type="text" class="form-control" placeholder="Profession">
                                                            </div>
                                                        </div>
                                                        
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="prof" name="prof" type="text" class="form-control" placeholder="Profession">
                                                                <label for="form_control_1"> Profession </label>
                                                                <span class="help-block">Entrer Profession du patient</span>
                                                                <i class="fa fa-suitcase" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    
                                                </div>
                                                
                                                            <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="adr">Adresse</label>
                                                            <div class="input-icon">
                                                                  <i class="fa fa-map" aria-hidden="true"></i>
                                                                 <textarea id="adr" name ="adr" class="form-control" rows="3" placeholder="Enter l'adresse du patient"></textarea>
                                                            </div>
                                                        </div>
<!--                                                <div class="form-group form-md-line-input">
                                                            <div class="input-group right-addon">
                                                             <textarea id="adr" name ="adr" class="form-control" rows="3" placeholder="Enter l'adresse du patient"></textarea>
                                                             <label for="form_control_1" class="has-success"> Adresse </label>
                                                              <span class="input-group-addon">
                                                                     <i class="fa fa-map" aria-hidden="true"></i>
                                                                 </span>
                                                             </div>    
                                                         </div>-->
                                                
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="ville">Ville</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                                 <select id="ville" name="ville" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;sélectionnez Ville </option>
                                                        </select>
                                                            </div>
                                                        </div>
                                                        
<!--                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="ville" name="ville" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;sélectionnez Ville </option>
                                                        </select>
                                                                <label for="form_control_1">Ville</label>
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="Gouvernorat">Gouvernorat</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-map-signs" aria-hidden="true"></i>
                                                                  <select id="Gouvernorat" name="Gouvernorat" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;&nbsp;sélectionnez Gouvernorat</option>   
                                                        </select>
                                                            </div>
                                                        </div>
<!--                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <select id="Gouvernorat" name="Gouvernorat" class="form-control">
                                                            <option value>&nbsp;&nbsp;&nbsp;&nbsp;sélectionnez Gouvernorat</option>   
                                                        </select>
                                                                <label for="form_control_1">Gouvernorat</label>
                                                                <i class="fa fa-map-signs" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-3">
                                                         <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="fixe">N°Téléphone Fixe</label>
                                                            <div class="input-icon">
                                                                   <i class="fa fa-phone-square" aria-hidden="true"></i>
                                                                  <input id="fixe" name="fixe" type="text" class="form-control" placeholder="Fixe">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="fixe" name="fixe" type="text" class="form-control" placeholder="Fixe">
                                                                <label for="form_control_1">N°Téléphone Fixe</label>
                                                                <span class="help-block">Entrer Fixe du patient</span>
                                                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="gsm">N°Téléphone GSM</label>
                                                            <div class="input-icon">
                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                  <input id="gsm" name="gsm" type="text" class="form-control" placeholder="GSM">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="gsm" name="gsm" type="text" class="form-control" placeholder="GSM">
                                                                <label for="form_control_1">N°Téléphone GSM</label>
                                                                <span class="help-block">Entrer Gsm du patient</span>
                                                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                
                                                <div class="panel-group accordion scrollable" id="accordion2">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/nurse_.png" alt="cnam" style="margin-top: -6px;">&nbsp; CNAM </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="false"> Asureé CNAM </a>
                                                                
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
                                                                                        <div class="form-group form-input has-success ">
                                                                                            <label style="color: #27a4b0;" for="regime_affi">Régime d'Affiliation</label>
                                                                                            <div class="input-icon">
                                                                                                  <i class="fa fa-hospital-o"></i>
                                                                                                <select id="regime_affi" name="regime_affi" class="form-control select2-bootstrap-append">
                                                                                                <option value> sélectionnez </option>
                                                                                                <option value="CNSS">CNSS</option>
                                                                                                <option value="CNRPS">CNRPS</option>
                                                                                            </select>
                                                                                            </div>
                                                                                        </div>
<!--                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                            <select id="regime_affi" name="regime_affi" class="form-control select2-bootstrap-append">
                                                                                                <option value> sélectionnez </option>
                                                                                                <option value="CNSS">CNSS</option>
                                                                                                <option value="CNRPS">CNRPS</option>
                                                                                            </select>
                                                                                                    <label for="form_control_1">Régime d'Affiliation</label>
                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                    <div class="col-md-6">
                                                                                         <div class="form-group form-input has-success ">
                                                                                            <label style="color: #27a4b0;" for="ident_unique">Identifient Unique</label>
                                                                                            <div class="input-icon">
                                                                                                  <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                <input id="ident_unique" name="ident_unique" type="text" class="form-control" placeholder="Identifient CNAM">
                                                                                            </div>
                                                                                        </div>
<!--                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="ident_unique" name="ident_unique" type="text" class="form-control" placeholder="Identifient CNAM">
                                                                                                    <label for="form_control_1">Identifient Unique</label>
                                                                                                    <span class="help-block">Entrer Identifient CNAM</span>
                                                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row">
                                                                                         <div class="col-md-6">
                                                                                              <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="qualite">Qualité</label>
                                                                                                <div class="input-icon">
                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                   <select id="qualite" name="qualite" class="form-control select2-bootstrap-append">
                                                                                                        <option value> sélectionnez </option>
                                                                                                        <option value="Assuré">Assuré</option>
                                                                                                        <option value="Conjoint">Conjoint</option>
                                                                                                        <option value="Enfant à charge">Enfant à charge</option>
                                                                                                        <option value="Pére à charge">Pére à charge</option>
                                                                                                        <option value="Mére à charge">Mére à charge</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
<!--                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <select id="qualite" name="qualite" class="form-control select2-bootstrap-append">
                                                                                                <option value> sélectionnez </option>
                                                                                                <option value="Assuré">Assuré</option>
                                                                                                <option value="Conjoint">Conjoint</option>
                                                                                                <option value="Enfant à charge">Enfant à charge</option>
                                                                                                <option value="Pére à charge">Pére à charge</option>
                                                                                                <option value="Mére à charge">Mére à charge</option>
                                                                                            </select>
                                                                                                    <label for="form_control_1">Qualité</label>
                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                         <div class="col-md-6">
                                                                                              <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="date_valid_cnam">Date de Validation Carnet CNAM</label>
                                                                                                <div class="input-icon">
                                                                                                    <i style="margin-top: 9px;" class="fa fa-calendar"></i>
                                                                                                   <input id="date_valid_cnam" name="date_valid_cnam" class="form-control form-control-inline  date-picker" type="text" size="120" value="" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Validation">
                                                                                                </div>
                                                                                            </div>
<!--                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="date_valid_cnam" name="date_valid_cnam" class="form-control form-control-inline  date-picker" type="text" size="120" value="" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Validation">
                                                                                                    <label for="form_control_1">Date de Validation Carnet CNAM</label>
                                                                                                    <i class="fa fa-calendar"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row">
                                                                                        <div class="col-md-6">
                                                                                             <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="type_cnam">Type Assurance</label>
                                                                                                <div class="input-icon">
                                                                                                   <i class="fa fa-hospital-o"></i>
                                                                                                    <select id="type_cnam" name="type_cnam" class="form-control select2-bootstrap-append">
                                                                                                        <option value> sélectionnez </option>
                                                                                                        <option value="Filiére publique">Filiére publique</option>
                                                                                                        <option value="Remboursement">Remboursement</option>
                                                                                                        <option value="Tiers Payant">Tiers Payant</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
<!--                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <select id="type_cnam" name="type_cnam" class="form-control select2-bootstrap-append">
                                                                                                <option value> sélectionnez </option>
                                                                                                <option value="Filiére publique">Filiére publique</option>
                                                                                                <option value="Remboursement">Remboursement</option>
                                                                                                <option value="Tiers Payant">Tiers Payant</option>
                                                                                            </select>
                                                                                                    <label for="form_control_1"> Type Assurance </label>
                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                        <div class="col-md-6">
                                                                                            <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="rang_Assur">Rang Assuré</label>
                                                                                                <div class="input-icon">
                                                                                                   <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                   <input id="rang_Assur" name="rang_Assur" type="number" class="form-control" placeholder="Rang">
                                                                                                </div>
                                                                                            </div>
<!--                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="rang_Assur" name="rang_Assur" type="number" class="form-control" placeholder="Rang">
                                                                                                    <label for="form_control_1">Rang Assuré</label>
                                                                                                    <span class="help-block">Entrer le Rang Assuré</span>
                                                                                                    <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                    </div>
                                                                                     <div class="row">
                                                                                         <div class="col-md-6">
                                                                                             <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="medfamille">Nom Médecin de famille</label>
                                                                                                <div class="input-icon">
                                                                                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                    <input id="medfamille" name="medfamille" type="text" class="form-control" placeholder="Nom Médecin de famille">
                                                                                                </div>
                                                                                            </div>
<!--                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="medfamille" name="medfamille" type="text" class="form-control" placeholder="Nom Médecin de famille">
                                                                                                    <label for="medfamille">Nom Médecin de famille</label>
                                                                                                    <span class="help-block">Entrer Nom Médecin</span>
                                                                                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                </div>
                                                                                            </div>-->
                                                                                        </div>
                                                                                        <div class="col-md-6">
                                                                                             <div class="form-group form-input has-success ">
                                                                                                <label style="color: #27a4b0;" for="codecnam">Code Cnam</label>
                                                                                                <div class="input-icon">
                                                                                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                    <input id="codecnam" name="codecnam" type="text" class="form-control" placeholder="Code Cnam"  >
                                                                                                </div>
                                                                                            </div>
<!--                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                <div class="input-icon">
                                                                                                    <input id="codecnam" name="codecnam" type="text" class="form-control" placeholder="Code Cnam"  >
                                                                                                    <label for="codecnam">Code Cnam</label>
                                                                                                    <span class="help-block">Entrer Code Cnam</span>
                                                                                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                </div>
                                                                                            </div>-->
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
                                                
                                                <div class="panel-group accordion scrollable" id="accordion1">
                                                     <div class="panel panel-default">
                                                         <div class="panel-heading">

                                                             <div class="panel-title" style="height: 60px">
                                                                 <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                  <div class="ribbon-sub ribbon-clip"></div>
                                                                  <img src="../img/pill_s.png" alt="apci">&nbsp; APCI </div>
                                                                  
                                                                   <a>
                                                                 <div id="SuppApci"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                 
                                                                 <a id="hideapci" class="accordion-toggle accordion-toggle-styled collapsed hide" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_1" aria-expanded="false"> Demande de APCI </a>
                                                             </div>

                                                         </div>
                                                         <div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                             <div class="panel-body">
                                                                 <div class="col-md-12" >
                                                                             <!-- BEGIN SAMPLE FORM PORTLET-->

                                                                                 <div id ="apci" class="portlet-body form">
                                                                                         <div class="form-body">
                                                                                             <div class="row">
                                                                                             <div class="col-md-6">
                                                                                                 <div class="form-group form-input has-success ">
                                                                                                    <label style="color: #27a4b0;" for="type_apci">Type APCI</label>
                                                                                                    <div class="input-icon">
                                                                                                        <i class="fa fa-hospital-o"></i>
                                                                                                        <select id="type_apci" name="type_apci" class="form-control select2-bootstrap-append">
                                                                                                            <option value> sélectionnez </option>
                                                                                                            <option value="APCI Remb"> APCI Remb </option>
                                                                                                            <option value="APCI Tiers Payant"> APCI Tiers Payant </option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
<!--                                                                                                      <div class="form-group form-md-line-input has-success ">
                                                                                                         <div class="input-icon">
                                                                                                             <select id="type_apci" name="type_apci" class="form-control select2-bootstrap-append">
                                                                                                         <option value> sélectionnez </option>
                                                                                                         <option value="APCI Remb"> APCI Remb </option>
                                                                                                         <option value="APCI Tiers Payant"> APCI Tiers Payant </option>
                                                                                                     </select>
                                                                                                             <label for="form_control_1"> Type APCI </label>
                                                                                                             <i class="fa fa-hospital-o"></i>
                                                                                                         </div>
                                                                                                     </div>-->
                                                                                                 </div>
                                                                                             <div class="col-md-6">
                                                                                                   <div class="form-group form-input has-success ">
                                                                                                    <label style="color: #27a4b0;" for="code_apci">Code APCI</label>
                                                                                                    <div class="input-icon">
                                                                                                        <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                        <input id="code_apci" name="code_apci" type="text" class="form-control" placeholder="Code APCI">
                                                                                                    </div>
                                                                                                </div>
<!--                                                                                                     <div class="form-group form-md-line-input has-success ">
                                                                                                         <div class="input-icon">
                                                                                                             <input id="code_apci" name="code_apci" type="text" class="form-control" placeholder="Code APCI">
                                                                                                             <label for="form_control_1">Codes APCI</label>
                                                                                                             <span class="help-block">Entrer Codes APCI</span>
                                                                                                             <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                         </div>
                                                                                                     </div>-->
                                                                                                 </div>
                                                                                             </div>
                                                                                             <div class="row">
                                                                                             <div class="col-md-12">
                                                                                                  <div class="form-group form-input has-success ">
                                                                                                    <label style="color: #27a4b0;" for="date_valid_apci">Date de Validation APCI</label>
                                                                                                    <div class="input-icon">
                                                                                                        <i style="margin-top: 9px;" class="fa fa-calendar"></i>
                                                                                                        <input id="date_valid_apci" name="date_valid_apci" class="form-control form-control-inline  date-picker" type="text" size="120" value="" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Validation">
                                                                                                    </div>
                                                                                                </div>
<!--                                                                                                     <div class="form-group form-md-line-input has-success ">
                                                                                                         <div class="input-icon">
                                                                                                             <input id="date_valid_apci" name="date_valid_apci" class="form-control form-control-inline  date-picker" type="text" size="120" value="" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Validation">
                                                                                                             <label for="form_control_1">Date de Validation APCI</label>
                                                                                                             <i class="fa fa-calendar"></i>
                                                                                                         </div>
                                                                                                     </div>-->
                                                                                                 </div>
                                                                                             </div>
                                                                                             <div class="row">
                                                                                                 <div class="col-md-12">
                                                                                                     <label class="has-success" style="color: #27a4b5; font-size: 16px"> Traitements APCI </label><BR/>
                                                                                                          <div id="mt-repeater" class="form-group mt-repeater">
                                                                                                                    <div data-repeater-list="group-c">
                                                                                                                        <div data-repeater-item="" class="mt-repeater-item">
                                                                                                                            
                                                                                                                                <div class="row mt-repeater-row">
                                                                                                                                    <div class="col-md-5">
                                                                                                                                        <label class="control-label has-success" style="color: #27a4b0; font-size: 14px"> Médicament </label>
                                                                                                                                        <select  name="group-c[0][medic]" class="form-control select2-bootstrap-append"  >
                                                                                                                                            <option value> sélectionnez </option>
                                                                                                                                        </select>
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1">
                                                                                                                                        <label class="control-label" style="color: #27a4b0; font-size: 14px"> Posologie </label>
                                                                                                                                        <input type="number" name="group-c[0][p1]" placeholder="1" max="99" class="form-control" value="1">
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1" style="padding: 0px">
                                                                                                                                        <label class="control-label " style="color: transparent"> Posologie </label>
                                                                                                                                        <select name="group-c[0][p2]" class="form-control select2-bootstrap-append">
                                                                                                                                            <option value="amp" selected> amp </option>
                                                                                                                                            <option value="appl">appl</option>
                                                                                                                                            <option value="cachet"> cachet </option>
                                                                                                                                            <option value="c à c"> c à c </option>
                                                                                                                                            <option value="c à m"> c à m </option>
                                                                                                                                            <option value="c à s"> c à s </option>
                                                                                                                                            <option value="dose"> dose </option>
                                                                                                                                            <option value="géllule"> géllule </option>
                                                                                                                                            <option value="goutte"> goutte </option>
                                                                                                                                            <option value="granule"> granule </option>
                                                                                                                                            <option value="injection"> injection </option>
                                                                                                                                            <option value="ml"> ml </option>
                                                                                                                                            <option value="nébulisati"> nébulisati </option>
                                                                                                                                            <option value="ovule"> ovule </option>
                                                                                                                                            <option value="comp"> comp </option>
                                                                                                                                            <option value="disp"> disp </option>
                                                                                                                                            <option value="panseme"> panseme </option>
                                                                                                                                            <option value="pastille"> pastille </option>
                                                                                                                                            <option value="patch"> patch </option>
                                                                                                                                            <option value="pulv"> pulv </option>
                                                                                                                                            <option value="sachet"> sachet </option>
                                                                                                                                            <option value="suppo"> suppo </option>
                                                                                                                                            <option value="tablette"> tablette </option>
                                                                                                                                            <option value="timbre"> timbre </option>
                                                                                                                                        </select>
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1">
                                                                                                                                        <label class="control-label " style="color: transparent"> Posologie </label>
                                                                                                                                        <input type="number" name="group-c[0][p3]" placeholder="1" max="99" class="form-control" value="1">
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1" style="padding: 0px">
                                                                                                                                        <label class="control-label " style="color: transparent"> Posologie </label>
                                                                                                                                        <select name="group-c[0][p4]" class="form-control select2-bootstrap-append">
                                                                                                                                            <option value="jour" selected> jour </option>
                                                                                                                                            <option value="semaine">semaine</option>
                                                                                                                                            <option value="mois"> mois </option>
                                                                                                                                        </select>
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1">
                                                                                                                                        <label class="control-label " style="color: transparent"> Posologie </label>
                                                                                                                                        <input type="number" name="group-c[0][p5]" placeholder="1" max="99" class="form-control" value="1">
                                                                                                                                    </div>
                                                                                                                                    <div class="col-md-1" style="padding: 0px">
                                                                                                                                        <label class="control-label " style="color: transparent"> Posologie </label>
                                                                                                                                        <select name="group-c[0][p6]" class="form-control select2-bootstrap-append">
                                                                                                                                            <option value="jour" selected> jour </option>
                                                                                                                                            <option value="semaine">semaine</option>
                                                                                                                                            <option value="mois"> mois </option>
                                                                                                                                        </select>
                                                                                                                                    </div>
                                                                                                                                
                                                                                                                                    <div class="col-md-1" style=" margin-top: -7px; ">
                                                                                                                                        <a id="SuppMedic" href="javascript:;" data-repeater-delete="" class="btn btn-danger mt-repeater-delete">
                                                                                                                                            <i class="fa fa-close"></i>
                                                                                                                                        </a>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                              <a id="addMedic" href="javascript:;" data-repeater-create="" class="btn btn-info mt-repeater-add">
                                                                                                                                  <i class="fa fa-plus"></i> Ajouter Médicament </a>
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
                                                
                                               
                                                
                                                <div class="panel-group accordion scrollable" id="accordion4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">

                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/wheelchair.png" alt="assur">&nbsp; Autre Assurance </div>
                                                                <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion4" href="#collapse_4" aria-expanded="false"> Asureé Autre Assurance (ou Mutuelle) </a>
                                                            </div>

                                                        </div>

                                                        <div id="collapse_4" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body">
                                                        <div class="col-md-12 " >
                                                            <div class="form-group form-input has-success ">
                                                                <label style="color: #27a4b0;" for="autreAssur">Assurance</label>
                                                                <div class="input-icon">
                                                                    <i class="fa fa-hospital-o"></i>
                                                                    <select id="autreAssur" class="form-control select2-bootstrap-append">
                                                                        <option value> sélectionnez </option>
                                                                        <option value="COMAR"> COMAR </option>
                                                                        <option value="STEG">STEG</option>
                                                                        <option value="MAGHREBIA"> MAGHREBIA </option>
                                                                        <option value="AMEN"> AMEN </option>
                                                                    </select>
                                                                </div>
                                                            </div>
<!--                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                         <div class="input-icon">
                                                                                                     <select id="autreAssur" class="form-control select2-bootstrap-append">
                                                                                                         <option value> sélectionnez </option>
                                                                                                         <option value="COMAR"> COMAR </option>
                                                                                                         <option value="STEG">STEG</option>
                                                                                                         <option value="MAGHREBIA"> MAGHREBIA </option>
                                                                                                         <option value="AMEN"> AMEN </option>
                                                                                                     </select>
                                                                                                             <label for="form_control_1"> Assurance </label>
                                                                                                             <i class="fa fa-hospital-o"></i>
                                                                                                         </div>
                                                                                                     </div>-->
                                                        </div>
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
        <script src="../body_page_js/AjPatient_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/AjPatient.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
