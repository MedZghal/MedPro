<%-- 
    Document   : Courriers
    Created on : 14 avr. 2017, 10:29:19
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Gestion des Courriers</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
        <style>
            @page {
                size: A5; 
                margin-right: -5px;
                margin-left: -5px;
              }
              @media print {
                /* dimensions for the whole page */
                display:none;
                hr {
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                    margin-left: auto;
                    margin-right: auto;
                    border-style: inset;
                    border-width: 1px;
                    }
              }
        </style>
        
    </head>
    <body style="font-family: cursive">
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-envelope-letter"></i>
                                    <a href="#">Courriers</a>
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
                        <div class="mt-element-ribbon col-md-6" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL1" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion2">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                            <span id="nbActeMedic" class="badge badge-danger pull-left" style="margin-left: 206px; margin-bottom: -20px; z-index: 6; position: relative;"> 0 </span>      
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 
                                                       <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;Liste des Courriers </div>
                                                            
                                                    </div>
                                                        <div class="panel-body">
                                                            
                                                            <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas des actes médical. </div>
                                                            <!-- Begin Acte body -->
                                                            <div class="row">
<!--                                                                    <img class="pull-left" src="../img/stamp.png" alt="Details">
                                                                     <label for="form_control_1">Choisir Type de Courrier :</label>-->
<!--                                                                    <div class="col-md-11 ">
                                                                         <div class="form-group form-md-line-input has-success ">
                                                                            <div class="input-icon">
                                                                                <select id="CourrierS2" name="dsgacte" class="form-control">
                                                                                    <optgroup label="Certificats Médicaux">
                                                                                        <option value="Certificat Médical">Certificat Médical</option>
                                                                                        <option value="Certificat d'inaptitude au Sport">Certificat d'inaptitude au Sport</option>
                                                                                        <option value="Certificat d'aptitude au Sport">Certificat d'aptitude au Sport</option>
                                                                                        <option value="Certificat Bonne Sante">Certificat Bonne Sante</option>
                                                                                    </optgroup>
                                                                                    <optgroup label="Demandes d'examen">
                                                                                        <option value="Demande d'examen Tomodensitométrique(TDM)">Demande d'examen Tomodensitométrique(TDM)</option>
                                                                                        <option value="Demande d'examen Echographique">Demande d'examen Echographique</option>
                                                                                        <option value="Demande d'examen Radiologique au Rayons X">Demande d'examen Radiologique au Rayons X</option>
                                                                                        <option value="Demande de Radio Thorax">Demande de Radio Thorax</option>
                                                                                    </optgroup>
                                                                                </select>
                                                                                <label for="form_control_1">Choisir Type de Courrier</label>
                                                                                <i class="icon-envelope-letter" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>-->
                                                    <div style="margin-left: 20px;margin-top: 15px;">
                                                                <div class="portlet-title" >
                                                                    <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                                                        <span class="caption-subject font-green-sharp bold uppercase">Certificats Médicaux </span>
                                                                    </div>

                                                                </div>
                                                                <div class="portlet-body profile-usermenu" style="height: auto;">
                                                                    <div class="todo-project-list">
                                                                        <ul class="nav nav-stacked">
                                                                            <li class="active" id="CertificatMédical">
                                                                                <a href="javascript:;"> Certificat Médical </a>
                                                                            </li>
                                                                            <li id="CertificatDinaptitudeAuSport">
                                                                                <a href="javascript:;"> Certificat d'inaptitude au Sport </a>
                                                                            </li>
                                                                            <li class="active" id="CertificatDaptitudeAuSport">
                                                                                <a href="javascript:;"> Certificat d'aptitude au Sport</a>
                                                                            </li>
                                                                            <li id="CertificatBonneSante">
                                                                                <a href="javascript:;"> Certificat Bonne Sante </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="portlet-title">
                                                                    <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                                                        <span class="caption-subject font-green-sharp bold uppercase">Demandes d'examen </span>
                                                                    </div>

                                                                </div>
                                                                <div class="portlet-body profile-usermenu" style="height: auto;">
                                                                    <div class="todo-project-list">
                                                                        <ul class="nav nav-stacked">
                                                                            <li id="DemandeDexamenTomodensitométriqueTDM">
                                                                                <a href="javascript:;"> Demande d'examen Tomodensitométrique(TDM) </a>
                                                                            </li>
                                                                            <li id="DemandeDexamenEchographique">
                                                                                <a href="javascript:;"> Demande d'examen Echographique </a>
                                                                            </li>
                                                                            <li class="active" id="DemandeDexamenRadiologiqueAuRayonsX">
                                                                                <a href="javascript:;"> Demande d'examen Radiologique au Rayons X</a>
                                                                            </li>
                                                                            <li id="DemandeDeRadioThorax">
                                                                                <a href="javascript:;"> Demande de Radio Thorax </a>
                                                                            </li>
<!--                                                                            
                                                                            <li id="DemandeOrdonnance">
                                                                                <a href="javascript:;"> Demande Ordonnance </a>
                                                                            </li>-->
                                                                            
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        </div>
                                                            
                                                            <!-- End Acte body -->
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
          </div>
                          <div class="col-md-6" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                    <div class="panel panel-default">

                                                        <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                           
                                                            <div class="panel-body">
                                                                
<!--                                                                <button id="edit" class="btn btn-primary" type="button">Modifier </button>
                                                                <button id="save" class="btn btn-primary"  type="button">Enregistrer </button>-->
                                                                <div class="click2edit" style="margin-left: 20px;margin-top: 20px;">
                                                                    
                                                                    <div id="container" style="MIN-HEIGHT: 100%; LEFT: 7px; /*WIDTH: 545px;*/ TOP: 7px; HEIGHT: 770px;text-align: -webkit-center;">
                                                                          
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                          </div>
                        
                        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Courriers_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Courriers.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
