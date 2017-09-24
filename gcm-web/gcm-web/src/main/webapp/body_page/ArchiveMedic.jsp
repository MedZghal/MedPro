<%-- 
    Document   : Ordonnance
    Created on : 21 mars 2017, 15:52:20
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title> Archive Médical </title>
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
    
    <body id="PageArch" style="font-family: cursive;background-color: transparent;height: 100%;"   >
          <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="index.html">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-chemistry"></i>
                                    <span> Archive Médical </span>
                                </li>
                            </ul>
                            <div class="page-toolbar">
                                <div class="btn-group pull-right">
                                    <div class="page-toolbar">
                               <div class="page-toolbar">
                                <div id="dashboard-report-range" class="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Change dashboard date range">
                                    <i class="icon-calendar"></i>&nbsp;
                                    <span id="date" class="uppercase has-success"></span>&nbsp;
                                    <i class="fa fa-angle-down"></i>
                                </div>
                               </div>
                            </div>
                                </div>
                            </div>
                            
                        </div>
          <fieldset>
                    <legend style=" width: auto; background-color: transparent; ">
                        <h1 class="page-title" style="font-family: Courier;"> Gestion d'archive Médical
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des consultations</small>
                        </h1>
                    </legend>
                        <!-- END PAGE BAR -->
                          <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
<!--                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/cardiogram.png" alt="details" style="    width: 32px;">&nbsp; Archive Médical </div>
                                                    </div>
                                                        <div class="panel-body">
                                                

                                                                <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas de prescription ou n'est pas validée. Veuillez vérifier ci-dessous. </div>
                                                               <div class="alert alert-success display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre Ordonnance est Validé ! </div>


                                                                           <div class="row">
                                                                               <div class="col-md-6">
                                                                               <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                                                   <div class="portlet-title tabbable-line">
                                                                                       <div class="caption">
                                                                                           <i class="icon-bubbles font-dark hide"></i>
                                                                                           <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                                                       </div>
                                                                                       <ul class="nav nav-tabs">
                                                                                           <li class="active">
                                                                                               <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                           <li class="hide">
                                                                                               <a href="#" id="Npatient"> Nouveau Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                       </ul>
                                                                                   </div>
                                                                                   <div class="portlet-body">
                                                                                            <div class="col-sm-12">
                                                                                                <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                                                        <div class="input-icon">
                                                                                                            <select id="select2-patient" class="form-control"></select>
                                                                                                            <label for="form_control_1">Patient</label>
                                                                                                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div>
                                                                                   </div>
                                                                               </div>
                                                                               </div>
                                                                                <div class="col-md-6" >
                                                                               <div class="panel-group accordion scrollable" id="accordion2">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img src="../img/test-tube.png" alt="assur">&nbsp;Antécedents </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="false"> Détails antécedents </a>
                                                                                    </div>

                                                                                </div>

                                                                                    <div id="collapse_2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                                                        <div class="panel-body" >
                                                                                            <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Personnels</label><br/>
                                                                    
                                                                    <br/>
                                                                    
                                                                    <div class="row">
                                                                        <label class="label label-sm label-success uppercase pull-left" style="margin-left: 40px;margin-right: 22px;"><i class="fa fa-medkit"></i>&nbsp;Médicaux</label>
                                                                            <div class="form-group">
                                                                                <div class="col-md-10">
                                                                                    <img class="pull-left" src="../img/pulse.png" alt="Details" style="margin-left: 110px; margin-top: -25px;">
                                                                                    <input id="antMedic" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents médicaux" disabled="true"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="row">
                                                                        <label class="label label-sm label-success uppercase pull-left" style="margin-left: 19px"><i class="fa fa-user-md"></i>&nbsp;Chirurgicaux</label>
                                                                            <div class="form-group">
                                                                                <div class="col-md-10">
                                                                                    <img class="pull-left" src="../img/cherig.png" alt="Details" style="margin-left: 110px; margin-top: -25px;">
                                                                                    <input id="antch" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents chirurgicaux" disabled="true"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                    
                                                                    <br/>
                                                                    
                                                                    <label class="label label-danger uppercase pull-left"><i class="fa fa-users"></i>&nbsp; Antécidents Familiaux</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-top: 15px;">
                                                                                    <img class="pull-left" src="../img/dru_gs.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                    <input id="antFami" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents familiaux" disabled="true"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     
                                                                     <br/>
                                                                     <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Allergies</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-top: 15px;">
                                                                                    <img class="pull-left" src="../img/nurse_.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                    <input id="antAllg" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents allergies" disabled="true"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     <div id="traitementbody" class="hide">
                                                                         <br/>
                                                                     <label class="label label-warning uppercase pull-left"><i class="fa fa-medkit"></i>&nbsp; Traitements APCI</label><br/>
                                                                     <br/>
                                                                    
                                                                    <div class="row">
                                                                       
                                                                            <div class="form-group">
                                                                                <div class="col-md-10" style="margin-top: 15px;">
                                                                                    <img class="pull-left" src="../img/pill_s.png" style="margin-left: 115px; margin-top: -20px;" alt="Details">
                                                                                    <input id="triApci" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer traitements apci" disabled="true"> 
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                     </div>
                                                                                        </div>
                                                                                    </div>
                                                                                 </div>
                                                                        </div>
                                                                               </div>
                                                                        <div class="col-sm-6 pull-right">
                                                                               <div class="panel-group accordion scrollable" id="accordion1">
                                                                                  <div class="panel panel-default">
                                                                                        <div class="panel-heading">

                                                                                            <div class="panel-title" style="height: 60px">
                                                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                                                 <img src="../img/nurse_.png" alt="cnam" style="margin-top: -6px;">&nbsp; CNAM </div>


                                                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_1" aria-expanded="false"> Asureé CNAM </a>

                                                                                            </div>



                                                                                        </div>

                                                                                        <div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                                                            <div class="panel-body form">
                                                                                                        <div class="col-md-12 " >
                                                                                                     BEGIN SAMPLE FORM PORTLET
                                                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                                                <div class="form-body">
                                                                                                                    <div class="row">
                                                                                                                    <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                            <select id="regime_affi" name="regime_affi" class="form-control select2-bootstrap-append" disabled="true">
                                                                                                                                <option value> sélectionnez </option>
                                                                                                                                <option value="CNSS">CNSS</option>
                                                                                                                                <option value="CNRPS">CNRPS</option>
                                                                                                                            </select>
                                                                                                                                    <label for="form_control_1">Régime d'Affiliation</label>
                                                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="ident_unique" name="ident_unique" type="text" class="form-control" placeholder="Identifient CNAM" disabled="true">
                                                                                                                                    <label for="form_control_1">Identifient Unique</label>
                                                                                                                                    <span class="help-block">Entrer Identifient CNAM</span>
                                                                                                                                    <i class="fa fa-mobile" aria-hidden="true"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="row">
                                                                                                                         <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <select id="qualite" name="qualite" class="form-control select2-bootstrap-append" disabled="true">
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
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                         <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="date_valid_cnam" name="date_valid_cnam" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date de Validation" disabled="true">
                                                                                                                                    <label for="form_control_1">Date de Validation Carnet CNAM</label>
                                                                                                                                    <i class="fa fa-calendar"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-6">
                                                                                                                             <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <select id="type_cnam" name="type_cnam" class="form-control select2-bootstrap-append" disabled="true">
                                                                                                                                <option value> sélectionnez </option>
                                                                                                                                <option value="Filiére publique">Filiére publique</option>
                                                                                                                                <option value="Remboursement">Remboursement</option>
                                                                                                                                <option value="Tiers Payant">Tiers Payant</option>
                                                                                                                            </select>
                                                                                                                                    <label for="form_control_1"> Type Assurance </label>
                                                                                                                                    <i class="fa fa-hospital-o"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success ">
                                                                                                                                <div class="input-icon">
                                                                                                                                    <input id="rang_Assur" name="rang_Assur" type="number" class="form-control" placeholder="Rang" disabled="true">
                                                                                                                                    <label for="form_control_1">Rang Assuré</label>
                                                                                                                                    <span class="help-block">Entrer le Rang Assuré</span>
                                                                                                                                    <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                     END SAMPLE FORM PORTLET
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div> 
                                                                               </div>
                                                                               
                                                                           </div>
                                                            <div class="row">
                                                                 <div class="col-md-12">
                                                                               <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 745px;">
                                                                                   <div class="portlet-title tabbable-line">
                                                                                       <div class="caption">
                                                                                           <i class="icon-bubbles font-dark hide"></i>
                                                                                           <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Consultations </span>
                                                                                       </div>
                                                                                       <ul class="nav nav-tabs">
                                                                                           <li class="active">
                                                                                               <a href="#portlet_comments_1" data-toggle="tab"> Liste des Consultations &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                           <li class="hide">
                                                                                               <a href="#" id="Nconsult"> Nouvelle consultation <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                       </ul>
                                                                                   </div>
                                                                                   <div class="portlet-body">
                                                                                            <div class="col-sm-12">
                                                                                                <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                                                        <div class="input-icon">
                                                                                                            
                                                                                                            <select id="select2-consult" class="form-control"></select>
                                                                                                            
                                                                                                            <label for="form_control_1">Consultation<span id="nbconsultt" class="badge badge-danger pull-right" style="margin-top: 8px; margin-right: -7px;">0</span></label>
                                                                                                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div>
                                                                                       <div class="col-md-12" style="padding-left: 0px; padding-right: 0px;">
                                                                                           <div class="portlet light bordered">
                                                                                               <div class="portlet-body tabs-below">
                                                                                                   <div class="row">
                                                                                                       <div class="col-md-12">
                                                                                                           <div class="form-group">
                                                                                                                <div class="col-md-6" style="margin-left: -110px; margin-top: 15px; margin-bottom: 20px;">
                                                                                                                    <img class="pull-left" src="../img/hospitaldetails.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                                                    <input id="Motifs" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Motifs de Consultation" disabled="true"> 
                                                                                                                </div>
                                                                                                                <div class="col-md-6" style="margin-top: 15px;">
                                                                                                                    <img class="pull-left" src="../img/cardiog.png" alt="Details" style="margin-left: 115px; margin-top: -20px;">
                                                                                                                    <input id="Diagnostic" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Diagnostic de Consultation" disabled="true"> 
                                                                                                                </div>
                                                                                                            </div>
                                                                                                       </div>
                                                                                                   </div>
                                                                                                <div class="row">
                                                                                                    <div class="col-md-10 col-sm-10 col-xs-10">
                                                                                                        <div class="tab-content">
                                                                                                            <div class="tab-pane active in" id="tab_7_1">
                                                                                                                <div class="row">
                                                                                                                     <div class="row">
                                                                    
                                                                                                                            <div class="col-md-3">

                                                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                                                    <div class="input-icon">
                                                                                                                                        <input id="TA" name="TA" type="text" class="form-control" placeholder="TA" >
                                                                                                                                        <label for="form_control_1">TA</label>
                                                                                                                                        <span id="dateta" class="help-block"></span>
                                                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-3">

                                                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                                                    <div class="input-icon">
                                                                                                                                        <input id="Pouls" name="Pouls" type="text" class="form-control" placeholder="Pouls" >
                                                                                                                                        <label for="form_control_1">Pouls</label>
                                                                                                                                        <span class="help-block">Entrer Pouls</span>
                                                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-3">

                                                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                                                    <div class="input-icon">
                                                                                                                                        <input id="Température" name="Température" type="text" class="form-control" placeholder="Température" >
                                                                                                                                        <label for="form_control_1">Température</label>
                                                                                                                                        <span class="help-block">Entrer Température</span>
                                                                                                                                         <i class="fa fa-thermometer" aria-hidden="true"></i>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-3">

                                                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                                                    <div class="input-icon">
                                                                                                                                        <input id="Poids" name="Poids" type="text" class="form-control" placeholder="Poids" >
                                                                                                                                        <label for="form_control_1">Poids</label>
                                                                                                                                        <span class="help-block">Entrer Poids</span>
                                                                                                                                         <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class="row">
                                                                                                                            <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="Exphy" name ="Exphy" class="form-control" rows="3" placeholder="Enter les Détails de l'examen physique"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Examen physique </label>
                                                                                                                                  <span class="help-block">Enter les Détails de l'examen physique </span>
                                                                                                                                  <i class="fa fa-user-md" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="Etgeneral" name ="Etgeneral" class="form-control" rows="3" placeholder="Enter les détails de l'etat Général"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Etat Général </label>
                                                                                                                                  <span class="help-block">Enter les détails de l'etat Général </span>
                                                                                                                                  <i class="fa fa-user-md" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class="row">
                                                                                                                            <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="AusCar" name ="AusCar" class="form-control" rows="3" placeholder="Enter les Détails de l'ausculation Caradiaque "></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Ausculation Caradiaque </label>
                                                                                                                                  <span class="help-block">Enter les Détails de l'ausculation Caradiaque </span>
                                                                                                                                  <i class="fa fa-heartbeat" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-6">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="AusPleuro" name ="AusPleuro" class="form-control" rows="3" placeholder="Enter les détails de l'ausculation Pleuro-plumonaire"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Ausculation Pleuro-plumonaire </label>
                                                                                                                                  <span class="help-block">Enter les détails de l'ausculation Pleuro-plumonaire </span>
                                                                                                                                  <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div class="row">
                                                                                                                            <div class="col-md-4">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="ExORL" name ="ExORL" class="form-control" rows="3" placeholder="Enter les Détails de l'examen ORL"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Examen ORL </label>
                                                                                                                                  <span class="help-block">Enter les Détails de l'examen ORL </span>
                                                                                                                                  <i class="fa fa-stethoscope" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-4">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="AirGan" name ="AirGan" class="form-control" rows="3" placeholder="Enter les détails de l'aires Ganglison-naires"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Aires Ganglison-naires </label>
                                                                                                                                  <span class="help-block">Enter les détails de l'aires Ganglison-naires </span>
                                                                                                                                  <i class="fa fa-plus-square" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-4">
                                                                                                                            <div class="form-group form-md-line-input has-success">
                                                                                                                                <div class="input-icon">
                                                                                                                                 <textarea id="ExAbd" name ="ExAbd" class="form-control" rows="3" placeholder="Enter les détails de l'examen Abdominal"></textarea>
                                                                                                                                 <label for="form_control_1" class="has-success"> Examen Abdominal </label>
                                                                                                                                  <span class="help-block">Enter les détails de l'examen Abdominal </span>
                                                                                                                                  <i class="fa fa-stethoscope" aria-hidden="true"></i>
                                                                                                                                 </div>    
                                                                                                                             </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="tab-pane fade" id="tab_7_2">
                                                                                                              
                                                                                                            </div>
                                                                                                            <div class="tab-pane fade" id="tab_7_3">
                                                                                                                <div class="row">
                                                                                                                    <div id="listeActes" class="col-md-6">
                                                                                                                        
                                                                                                                    </div>
                                                                                                                    <div id="listeActesCnam" class="col-md-6">
                                                                                                                        
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="tab-pane fade" id="tab_7_4">
                                                                                                               
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-2 col-sm-2 col-xs-2">
                                                                                                        <ul class="nav nav-tabs tabs-right">
                                                                                                            <li class="active">
                                                                                                                <a href="#tab_7_1" data-toggle="tab" aria-expanded="true"> Examen Clinique <span id="nbexam" class="badge badge-danger pull-right"> 0 </span></a>
                                                                                                                
                                                                                                            </li>
                                                                                                            <li class="">
                                                                                                                <a href="#tab_7_2" data-toggle="tab" aria-expanded="false"> Ordonnance <span id="nbordonn" class="badge badge-danger pull-right"> 0 </span></a>
                                                                                                            </li>
                                                                                                            <li class="">
                                                                                                                <a href="#tab_7_3" data-toggle="tab" aria-expanded="false" > Acte Médical <span id="nbactemedic" class="badge badge-danger pull-right"> 0 </span></a>
                                                                                                            </li>
                                                                                                            <li class="">
                                                                                                                <a href="#tab_7_4" data-toggle="tab" aria-expanded="false"> Bilan <span id="nbbilann" class="badge badge-danger pull-right"> 0 </span></a>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                               </div>
                                                                                           </div>
                                                                                            </div>
                                                                                        </div>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                               </div>
                                                            </div>

                                                                </div>
                    
                                                             
                                                        </div>
                                            -->
                                              <div class="panel-group accordion scrollable" id="accordion2">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img id="fichelog" src="../img/cardiogram.png" alt="details" style="    width: 32px;">&nbsp; Archive Médical </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="true"> Détails Archive </a>
                                                                                    </div>

                                                                                </div>
                                                                                 
                                                                                    <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                                                                                        <div class="panel-body" >
                                            
                                                                   <div class="table-responsive">
                                                                       <div class="col-sm-6 pull-left">
                                                                                                <div class="form-group form-md-line-input has-success " style="margin-bottom: 10px;margin-left: -15px;">
                                                                                                        <div class="input-icon">
                                                                                                            <select id="select2-patient" class="form-control"></select>
                                                                                                            <label for="form_control_1">Patient</label>
                                                                                                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div>
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr style="text-align: center;color: #337ab7;">
                                                        <th style="text-align: center;" > Date </th>
                                                        <th style="text-align: center;"> Déscription </th>
                                                        <th style="text-align: center;"> Prescription </th>
                                                        <th style="text-align: center;" colspan="2" > Soins a réaliser </th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody id="TABARCH" >
                                                </tbody>
                                            </table>
                                        </div>
                                                            </div>
                                               </div>
                                            </div>
                                   </div>

                                                                
                                                    </div>
                                                </div>
                                                
                                        
                                   
          </fieldset>
         <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/ArchiveMedic_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/ArchiveMedic.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
