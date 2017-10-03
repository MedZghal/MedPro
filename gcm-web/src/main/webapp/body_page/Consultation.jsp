<%-- 
    Document   : Consultation
    Created on : 8 mars 2017, 11:27:01
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title> Consultation </title>
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link rel="stylesheet" type="text/css" href="../js/highcharts/code/css/highcharts.css"/>
        <style>
            .select2-results__option[aria-selected=true] {
                display: none;
            }
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
                background: transparent;
                /*background: #FF0000;*/
            }
        </style>
    </head>
    
    <body style="font-family: cursive" >
        
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
                                    <span>Fiche d'observation</span>
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
                        <!-- END PAGE BAR -->
                        
                        <!-- END PAGE HEADER-->
                          <div class="row">
                            <div class="col-md-12">
                                <!-- BEGIN PROFILE SIDEBAR -->
                                <div class="profile-sidebar">
                                    
                                    <!-- PORTLET MAIN -->
                                    <div class="portlet light profile-sidebar-portlet " style="background-color: #fff;border-radius: 5px;">
                                       
                                        <!-- SIDEBAR USERPIC -->
                                        <div class="profile-userpic" style="cursor: pointer" >
                                            <img id='imgpatient' src="" class="img-responsive tooltips" data-tooltip="tooltip" title=""  data-original-title="" alt=""> </div>
                                        <!-- END SIDEBAR USERPIC -->
                                        <!-- SIDEBAR USER TITLE -->
                                        <div class="profile-usertitle">
                                            <div id="patientname" class="profile-usertitle-name uppercase">  </div>
                                            <div id="patientprof" class="profile-usertitle-name"> </div>
                                        </div>
                                        <div class="profile-userbuttons">
                                            <label id="id" class="label label-danger uppercase" style="cursor: pointer;" data-toggle="collapse" data-target="#details" ></label>&nbsp;
                                            <span id="cnam" class="popovers"  data-container="body" data-trigger="hover" data-placement="right" data-content="" data-original-title="Assurance CNAM" ></span>&nbsp;
                                            <!--label id="apci" class="label label-info uppercase"></label-->
                                            <span id="apci" class="popovers hide"  data-container="body" data-trigger="hover" data-placement="right" data-content="" data-original-title="Code Taritement APCI"></span>&nbsp;
                                            <!--label id="autreAssur" class="label label-warning uppercase"></label-->
                                            <span id="autreAssur"></span>
                                            <!-- COLOPSE BEGIN -->
                                            <div id="details" class="collapse">
                                                    <div id="tree" class="tree-demo" style="margin-left: -50px;margin-top: 10px;"> </div>
                                            </div>
                                            <!-- COLOPSE BEGIN -->
                                            <!--div id="details" class="collapse" ></div-->
                                        </div>
                                        <div class="profile-usermenu">
                                            <ul class="nav">
                                                <li>
                                                    <a href="#" id="ArchiMedical">
                                                        <img src="../img/cardiogram.png" style="width: 20px;" alt="cardiogram">&nbsp; Archive Médical
                                                    <span id='nbarchives' class="badge badge-info pull-right hide" > 0 </span></a>
                                                </li>
                                                <li class="active">
                                                    <a href="#" id="Ordonnance">
                                                        <img src="../img/drugs.png" style="width: 20px;" alt="Ordonnance">&nbsp; Ordonnance 
                                                    <span id='nbOrd' class="badge badge-danger pull-right" > 0 </span></a>
                                                </li>
                                                <li>
                                                    <a href="#" id="ActeMédicale">
                                                        <img src="../img/stethoscope.png" style="width: 20px;" alt="Acte Médical">&nbsp; Acte Médical 
                                                    <span id="nbactemedicale" class="badge badge-danger pull-right" > 0 </span></a>
                                                </li>
                                                 <li>
                                                    <a href="#" id="Courriers">
                                                        <img src="../img/stamp.png" style="width: 20px;" alt="Courriers">&nbsp;  Courriers 
                                                    <span class="badge badge-danger pull-right" > 0 </span></a>
                                                </li>
                                                <li>
                                                    <a href="#" id="Bilan">
                                                        <img src="../img/bilan.png" style="width: 20px;" alt="Bilan">&nbsp; Bilan 
                                                        <span id="Bilan" class="badge badge-info pull-right" >0</span></a>
                                                </li>
                                                <li>
                                                    <a href="#" id="Hisjsp">
                                                        <img src="../img/calendar.png" style="width: 20px;" alt="Historique des Soins">&nbsp; Consultations 
                                                        <span id="HisSoins" class="badge badge-default pull-right" ></span></a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <!-- END MENU -->
                                    </div>
                                    <!-- END PORTLET MAIN -->
                                    <!-- PORTLET MAIN -->
<!--                                    <div class="portlet light ">
                                         STAT 
                                        <div class="row list-separated profile-stat">
                                            <div class="col-md-4 col-sm-4 col-xs-6">
                                                <div class="uppercase profile-stat-title"> 37 </div>
                                                <div class="uppercase profile-stat-text"> Consultations </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4 col-xs-6">
                                                <div class="uppercase profile-stat-title"> 51 </div>
                                                <div class="uppercase profile-stat-text"> Rendez-vous </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4 col-xs-6">
                                                <div class="uppercase profile-stat-title"> 11 </div>
                                                <div class="uppercase profile-stat-text"> Acte </div>
                                            </div>
                                        </div>
                                         END STAT 
                                       
                                    </div>-->
                                    <!-- END PORTLET MAIN -->
                                </div>
                                <!-- END BEGIN PROFILE SIDEBAR -->
                                <!-- BEGIN PROFILE CONTENT -->
                                <div class="profile-content" data-auto-scroll="true" data-slide-speed="200">
                                        <div class="col-md-12">
                                            <div class="mt-element-ribbon" style="padding: 0px;">
<!--                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                    <div class="ribbon-sub ribbon-clip"></div>
                                                    <img src="../img/drugs_.png" alt="details">&nbsp;<span id="typeConsult"></span></div>-->
                                                                <div class="portlet-body full-height-content-scrollable">
                                                        <!-- PERSONAL INFO TAB -->
                                                            <form id="FormConsult" role="form" action="#">
                                                                
                                                                
                                                                                                                                <div class="panel-group accordion scrollable" id="accordion2">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img src="../img/test-tube.png" alt="assur">&nbsp;Antécedents </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="true"> Détails antécedents </a>
                                                                                    </div>

                                                                                </div>
                                                                                 
                                                                                    <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                                                                                        <div class="panel-body" >
<!--                                                                                <table >
                                                                                     <tr>
                                                                                         <td>
                                                                                              <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Personnels</label><br/>
                                                                    
                                                                                                <br/>

                                                                                                <div class="row">
                                                                                                    <label class="label label-sm label-success uppercase pull-left" style="margin-left: 40px;margin-right: 22px;"><i class="fa fa-medkit"></i>&nbsp;Médicaux</label>
                                                                                                        <div class="form-group">
                                                                                                            <div class="col-md-10">
                                                                                                                <img class="pull-left" src="../img/pulse.png" alt="Details" style="margin: 5px;">
                                                                                                                <input id="antMedic" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents médicaux"> 
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                                <br/>
                                                                                                <div class="row">
                                                                                                    <label class="label label-sm label-success uppercase pull-left" style="margin-left: 40px"><i class="fa fa-user-md"></i>&nbsp;Chirurgicaux</label>
                                                                                                        <div class="form-group">
                                                                                                            <div class="col-md-10">
                                                                                                                <img class="pull-left" src="../img/cherig.png" alt="Details" style="margin: 5px;">
                                                                                                                <input id="antch" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents chirurgicaux"> 
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                         </td>
                                                                                         <td style="    position: absolute;">
                                                                                              <label class="label label-danger uppercase pull-left"><i class="fa fa-users"></i>&nbsp; Antécidents Familiaux</label><br/>
                                                                                                <br/>

                                                                                               <div class="row">

                                                                                                       <div class="form-group">
                                                                                                           <div class="col-md-10" style="margin-left: 10px;">
                                                                                                               <img class="pull-left" src="../img/dru_gs.png" alt="Details" style="margin: 5px;">
                                                                                                               <input id="antFami" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents familiaux"> 
                                                                                                           </div>
                                                                                                       </div>
                                                                                               </div>
                                                                                         </td>
                                                                                     </tr>
                                                                                     <tr>
                                                                                         <td>
                                                                                             <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Allergies</label><br/>
                                                                                                <br/>

                                                                                               <div class="row">

                                                                                                       <div class="form-group">
                                                                                                           <div class="col-md-10" style="margin-left: 10px;">
                                                                                                               <img class="pull-left" src="../img/nurse_.png" alt="Details" style="margin: 5px;">
                                                                                                               <input id="antAllg" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents allergies"> 
                                                                                                           </div>
                                                                                                       </div>
                                                                                               </div>
                                                                                         </td>
                                                                                         <td>
                                                                                             <div id="traitementbody" class="hide">
                                                                                                <br/>
                                                                                            <label class="label label-warning uppercase pull-left"><i class="fa fa-medkit"></i>&nbsp; Traitements APCI</label><br/>
                                                                                            <br/>

                                                                                           <div class="row">

                                                                                                   <div class="form-group">
                                                                                                       <div class="col-md-10" style="margin-left: 10px;">
                                                                                                           <img class="pull-left" src="../img/pill_s.png" style="margin: 5px;" alt="Details">
                                                                                                           <input id="triApci_" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer traitements apci"> 
                                                                                                       </div>
                                                                                                   </div>
                                                                                           </div>
                                                                                            </div>
                                                                                         </td>
                                                                                     </tr>
                                                                                 </table>-->
                                                                       
                                                                                            
                                                                                            
                                                                                            <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th> # </th>
                                                        <th colspan="2" style="text-align: center;color: #337ab7;"> Détails antécédents médicaux </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> <label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Personnels</label> </td>
                                                        <td>
                                                             <div class="row">
                                                                                                    <label class="label label-sm label-success uppercase pull-left" style="margin-left: 15px;"><i class="fa fa-medkit"></i>&nbsp;Médicaux</label>
                                                                                                        <div class="form-group">
                                                                                                            <div class="col-md-12">
                                                                                                                <img class="pull-left" src="../img/pulse.png" alt="Details" style="margin: 5px;">
                                                                                                                <input id="antMedic" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents médicaux"> 
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </div>
                                                        
                                                        </td>
                                                        <td> 
                                                             <div class="row">
                                                                                                    <label class="label label-sm label-success uppercase pull-left" style="margin-left: 15px"><i class="fa fa-user-md"></i>&nbsp;Chirurgicaux</label>
                                                                                                        <div class="form-group">
                                                                                                            <div class="col-md-12">
                                                                                                                <img class="pull-left" src="../img/cherig.png" alt="Details" style="margin: 5px;">
                                                                                                                <input id="antch" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents chirurgicaux"> 
                                                                                                            </div>
                                                                                                        </div>
                                                                                                </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> <label class="label label-danger uppercase pull-left"><i class="fa fa-users"></i>&nbsp; Antécidents Familiaux</label></td>
                                                        <td colspan="2"> 
                                                                                   <div class="row">

                                                                                                       <div class="form-group">
                                                                                                           <div class="col-md-12" >
                                                                                                               <img class="pull-left" src="../img/dru_gs.png" alt="Details" style="margin: 5px;">
                                                                                                               <input id="antFami" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents familiaux"> 
                                                                                                           </div>
                                                                                                       </div>
                                                                                               </div>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td><label class="label label-danger uppercase pull-left"><i class="fa fa-user"></i>&nbsp; Antécidents Allergies</label></td>
                                                        <td colspan="2">
                                                                    <div class="row">

                                                                          <div class="form-group">
                                                                              <div class="col-md-12">
                                                                                  <img class="pull-left" src="../img/nurse_.png" alt="Details" style="margin: 5px;">
                                                                                  <input id="antAllg" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer antécidents allergies"> 
                                                                              </div>
                                                                          </div>
                                                                  </div>
                                                        </td>
                                                    </tr>
                                                    <tr id="traitementbody" class="hide">
                                                        <td><label class="label label-warning uppercase pull-left"><i class="fa fa-medkit"></i>&nbsp; Traitements APCI</label></td>
                                                        <td colspan="2">
                                                                <div class="row">

                                                                        <div class="form-group">
                                                                            <div class="col-md-12">
                                                                                <img class="pull-left" src="../img/pill_s.png" style="margin: 5px;" alt="Details">
                                                                                <input id="triApci_" type="text" class="form-control input-large" value="" data-role="tagsinput" style="height: 250px;" placeholder="Entrer traitements apci"> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                                                                            
                                                                                            
                                                                                        </div>
                                                                                    </div>
                                                                                 </div>
                                                                        </div>
                                                               
                                                                
                                                                 <div class="panel-group accordion scrollable mt-element-ribbon bg-grey-steel" id="accordion1">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img src="../img/exmm.png" alt="assur">&nbsp;Examen Clinique </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled " style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_1" aria-expanded="true">&nbsp;Détails Examen </a>
                                                                                    </div>

                                                                                </div>

                                                                                    <div id="collapse_1" class="panel-collapse collapse in" aria-expanded="true">
                                                                                        <div class="panel-body" >
                                                                                            <BR/>
                                                                                            <div class="row">
                                                                                                <div id="containerPouls" style="min-width: 500px;  height: 180px;margin-top: -25px;"></div>
                                                                                                <div id="containerTEMP" style="min-width: 500px;  height: 180px;"></div>
                                                                                                <div id="containerPOIDS" style="min-width: 500px;  height: 180px;"></div>
                                                                                            </div>
                                                                                            <div class="row">
                                                                    
                                                                    <div class="col-md-3">

                                                                        <div class="form-group form-md-line-input has-success ">
                                                                            <div class="input-icon">
                                                                                <input id="TA" name="TA" type="text" class="form-control" placeholder="TA"  >
                                                                                <label for="TA">TA</label>
                                                                                <span class="help-block"> Enter TA </span>
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
                                                                                 </div>
                                                                        </div>
                                                                

                                                                <div class="panel-group accordion scrollable mt-element-ribbon bg-grey-steel" id="accordion3">
                                                                     
                                                                    <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img src="../img/drugs_.png" alt="details">&nbsp;<span id="typeConsult"></span></div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled " style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion3" href="#collapse_3" aria-expanded="true">&nbsp;Détails consultation </a>
                                                                                    </div>

                                                                                </div>
                                                                                <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                                                    <div class="panel-body" style="background-color: #fff;border-radius: 10px;">
                                                                                            
                                                                                            <div class="row">
                                                                                                <div class="col-md-3 pull-right">
                                                                                                     <div class="form-group form-md-line-input has-success ">
                                                                                                        <div class="input-icon">
                                                                                                            <input id="date_consult" name="date_consult" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date">
                                                                                                            <label for="form_control_1">Date de Consultation</label>
                                                                                                            <i class="fa fa-calendar"></i>
                                                                                                        </div>
                                                                                                     </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            
                                                                                            <div class="col-md-6 row" style="margin-left: 20px">
                                                                                                <img class="pull-left" src="../img/hospitaldetails.png" alt="Details">
                                                                                                <div class="col-md-12 pull-left">
                                                                                                     <div class="form-group form-md-line-input has-success ">
                                                                                                        <div class="input-icon">
                                                                                                            <select id="Motif" name="Motif" class="form-control select2-multiple" multiple></select>
                                                                                                            <label for="form_control_1">Motif Consultation</label>
                                                                                                            <i class="fa fa-stethoscope" aria-hidden="true"></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="col-md-5 row" style="margin-left: 20px">
                                                                                                <img class="pull-left" src="../img/cardiog.png" alt="Details">
                                                                                                <div class="col-md-12 pull-left">
                                                                                                     <div class="form-group form-md-line-input has-success ">
                                                                                                        <div class="input-icon">
                                                                                                            <select id="Diag" name="Diag" class="form-control select2-selection--single"></select>
                                                                                                            <label for="form_control_1">Diagnostic</label>
                                                                                                            <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            
                                                                                    </div>
                                                                                </div>
                                                                                                                      </div>
                                                                            </div>
                                                                
                                                                <div class="margiv-top-10 center-wrap">
                                                                    <a id="submit" href="javascript:;" class="btn blue" style="margin-left: 230px;"> Enregister Consultation <span class="glyphicon glyphicon-cog"></span> </a>&nbsp;&nbsp;&nbsp;
                                                                    <a href="Patient.jsp" class="btn default"> Annuler Consultation <span class="glyphicon glyphicon-alert"> </span></a>
                                                                    
                                                                </div>
                                                                
                                                              
                                                                
                                                            </form>

                                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                          </div>
                         
                        <jsp:include page="js_declare.jsp"/>
                        
        <script src="../js/highcharts/code/highcharts.js"></script>
        <script src="../js/highcharts/code/modules/data.js"></script>
        <script src="../js/highcharts/code/modules/exporting.js"></script>
<!--         Additional files for the Highslide popup effect 
        <script src="https://www.highcharts.com/samples/static/highslide-full.min.js"></script>
        <script src="https://www.highcharts.com/samples/static/highslide.config.js" charset="utf-8"></script>-->
        <script src="../js/highcharts/code/themes/sand-signika.js"></script>
        
        <script src="../body_page_js/Consultation_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Consultation.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
