<%-- 
    Document   : Accés
    Created on : 12 avr. 2017, 10:08:14
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Gestion des Bilans</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
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
                                    <a href="#">Bilans</a>
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
                        <div class="portlet light bordered" style="background-color: white;">
                                    <div class="portlet-title tabbable-line">
                                        <div class="caption">
                                            <img src="../img/medical-history.png" alt="cnam" style="margin-top: -6px;">
                                            <span class="caption-subject font-dark bold uppercase">Liste Bilans</span>
                                        </div>
                                        <ul class="nav nav-tabs">
                                            <li class="">
                                                <a href="#portlet_tab3" data-toggle="tab" aria-expanded="false"> Bilan Biologique </a>
                                            </li>
                                            <li class="active">
                                                <a href="#portlet_tab2" data-toggle="tab" aria-expanded="true"> Bilan Radiologique </a>
                                            </li>
                                            <li class="">
                                                <a href="#portlet_tab1" data-toggle="tab" aria-expanded="false"> Autre Bilan </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="tab-content">
                                            
                                            <div class="tab-pane" id="portlet_tab3">
                                                <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL1" novalidate="novalidate" method="POST">
                                                
                                            <div class="panel-group accordion scrollable" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; bilan d'hémostase </div>
                                                                    
                                                                  <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion1" href="#collapse_3" aria-expanded="false"> Détails du bilan </a>
                                                            </div>
                                                            
                                                                      


                                                        </div>
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                       
                                        <div class="panel-body">
                                                
                                                
                                                 <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="TP" name="TP" type="text" class="form-control" placeholder="Taux de prothrombine" >
                                                                <label for="form_control_1">TP</label>
                                                                <span class="help-block">Entrer TP</span>
                                                                 <i class="fa fa-users" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="Fibrinémie" name="Fibrinémie" type="text" class="form-control" placeholder="Fibrinémie">
                                                                <label for="form_control_1">Fibrinémie</label>
                                                                <span class="help-block">Entrer Fibrinémie</span>
                                                                <i class="fa fa-user"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="row">
                                                    
                                                        <div class="col-md-6">

                                                            <div class="form-group form-md-line-input has-success ">
                                                                <div class="input-icon">
                                                                    <input id="INR" name="INR" type="text" class="form-control" placeholder="International Normalized Ratio" >
                                                                    <label for="form_control_1">INR</label>
                                                                    <span id="dateta" class="help-block"></span>
                                                                     <i class="fa fa-tint" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">

                                                            <div class="form-group form-md-line-input has-success ">
                                                                <div class="input-icon">
                                                                    <input id="TCA" name="TCA" type="text" class="form-control" placeholder="Temps de céphaline activée" >
                                                                    <label for="form_control_1">TCA</label>
                                                                    <span id="dateta" class="help-block"></span>
                                                                     <i class="fa fa-tint" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            
                                                <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                    <button id="submithémostase" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                            <span class="ladda-label"> Enregistrer 
                                                            <span class="glyphicon glyphicon-cog"> </span>
                                                            </span>
                                                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                    <span class="glyphicon glyphicon-alert"> </span>
                                                    </button>
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
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan Hépatique </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="false"> Détails du bilan </a>
                                                                
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
                                                                                                <input id="bilirubine_Total" name="bilirubine_Total" type="text" class="form-control" placeholder="bilirubine Total" >
                                                                                                <label for="form_control_1">Bilirubine Total</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Bilirubine_Conjugué" name="Bilirubine_Conjugué" type="text" class="form-control" placeholder="Bilirubine Conjugué" >
                                                                                                <label for="form_control_1">Bilirubine Conjugué</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                        <div class="col-md-1">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="SGOT" name="SGOT" type="text"  class="form-control" placeholder="SGOT" >
                                                                                                        <label for="form_control_1">SGOT/SGPT</label>
                                                                                                        <span class="help-block"></span>
                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="col-md-1">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="SGPT" name="SGPT" type="text" class="form-control" placeholder="SGPT" >
                                                                                                        <span id="dateta" class="help-block"></span>
                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div>
                                                                                             <div class="col-md-5">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="Phosphatases_Alcalines" name="Phosphatases_Alcalines" type="text" class="form-control" placeholder="Phosphatases Alcalines" >
                                                                                                        <label for="form_control_1">Phosphatases Alcalines</label>
                                                                                                        <span id="dateta" class="help-block"></span>
                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                         <div class="col-md-5">
                                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                                    <div class="input-icon">
                                                                                                        <input id="GammaGT" name=">GammaGT" type="text" class="form-control" placeholder="GammaGT" >
                                                                                                        <label for="form_control_1">GammaGT</label>
                                                                                                        <span id="dateta" class="help-block"></span>
                                                                                                         <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                    </div>
                                                                                    
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div> 
                                               <br/>
                                               <div class="panel-group accordion scrollable" id="accordion1">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan Inflammatoire </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion1" href="#collapse_1" aria-expanded="false"> Détails du bilan </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="VS" name="VS" type="text" class="form-control" placeholder="Vitesse de sédimentation" >
                                                                                                <label for="form_control_1">VS</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="CRP" name="CRP" type="text" class="form-control" placeholder="Protéine C réactive" >
                                                                                                <label for="form_control_1">CRP</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                    
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div>
                                               <br/>
                                               <div class="panel-group accordion scrollable" id="accordion4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan Lipidique </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion1" href="#collapse_4" aria-expanded="false"> Détails du bilan </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_4" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Cholestérol" name="Cholestérol" type="text" class="form-control" placeholder="Cholestérol" >
                                                                                                <label for="form_control_1">Cholestérol</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Triglycérides" name="Triglycérides" type="text" class="form-control" placeholder="Triglycérides" >
                                                                                                <label for="form_control_1">Triglycérides</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                 <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="HDL" name="HDL" type="text" class="form-control" placeholder="Lipoprotéines de haute densité" >
                                                                                                <label for="form_control_1">HDL</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="LDL" name="LDL" type="text" class="form-control" placeholder="Lipoprotéines de basse densité" >
                                                                                                <label for="form_control_1">LDL</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>    
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div>
                                               <BR/>
                                               
                                               <div class="panel-group accordion scrollable" id="accordion5">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan Rénal </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion5" href="#collapse_5" aria-expanded="false"> Détails du bilan </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_5" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Creatinemie" name="Creatinemie" type="text" class="form-control" placeholder="Clairance de la créatinine" >
                                                                                                <label for="form_control_1">Creatinemie</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="urée" name="urée" type="text" class="form-control" placeholder="L'urée ou céramide" >
                                                                                                <label for="form_control_1">Urée </label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                 <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Créatinine" name="Créatinine" type="text" class="form-control" placeholder="Clairance Créatinine" >
                                                                                                <label for="form_control_1">Clairance Créatinine</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Poids" name="Poids" type="number" class="form-control" placeholder="Poids" >
                                                                                                <label for="form_control_1">Poids</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>    
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div>
                                               
                                               <br/>
                                               
                                               <div class="panel-group accordion scrollable" id="accordion6">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan Glymémie </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion6" href="#collapse_6" aria-expanded="false"> Détails du bilan </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_6" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                <div class="row">
                                                                                    <div class="col-md-12">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Glycémie" name="Glycémie" type="text" class="form-control" placeholder="Taux Glycémie" >
                                                                                                <label for="form_control_1">Taux Glycémie</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>   
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div>
                                               
                                               <br/>
                                               
                                                <div class="panel-group accordion scrollable" id="accordion7">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            
                                                            <div class="panel-title" style="height: 60px">
                                                                <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 <div class="ribbon-sub ribbon-clip"></div>
                                                                 <img src="../img/surveillance.png" alt="cnam" >&nbsp; Bilan NFS </div>
                                                                 
                                                                 <a>
                                                                 <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                     <i class="icon-trash" style="margin-left: -3px"></i>
                                                                </div>
                                                                 </a>
                                                                
                                                                <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion7" href="#collapse_7" aria-expanded="false"> Détails du bilan </a>
                                                                
                                                            </div>
                                                                    


                                                        </div>

                                                        <div id="collapse_7" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                                            <div class="panel-body form">
                                                                        <div class="col-md-12 " >
                                                                    <!-- BEGIN SAMPLE FORM PORTLET-->
                                                                        <div  id ="cnam" class="portlet-body form">
                                                                                <div class="form-body">
                                                                                <div class="row">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Hémoglobine" name="Hémoglobine" type="text" class="form-control" placeholder="Hémoglobine" >
                                                                                                <label for="form_control_1">Hémoglobine</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Globules" name="Globules" type="text" class="form-control" placeholder="Globules Blancs" >
                                                                                                <label for="form_control_1">Globules Blancs</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-md-12">
                                                                                        <div class="form-group form-md-line-input has-success ">
                                                                                            <div class="input-icon">
                                                                                                <input id="Plaquettes" name="Plaquettes" type="text" class="form-control" placeholder="Plaquettes" >
                                                                                                <label for="form_control_1">Plaquettes</label>
                                                                                                <span id="dateta" class="help-block"></span>
                                                                                                 <i class="fa fa-tint" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                    <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -20px;">
                                                                                        <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                                <span class="ladda-label"> Enregistrer 
                                                                                                <span class="glyphicon glyphicon-cog"> </span>
                                                                                                </span>
                                                                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                        <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                                        <span class="glyphicon glyphicon-alert"> </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- END SAMPLE FORM PORTLET-->
                                                                </div>
                                                            
                                                            </div>
                                                        </div>

                                                </div>
                                      </form> 
                                </div>
                            </div>
                                            </div>
                                            <div class="tab-pane active" id="portlet_tab2">
                                                    <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                                            <div class="portlet-body form">
                                                                <form role="form" id="FormVAL2" novalidate="novalidate" method="POST">

                                                                    <div class="panel-group accordion scrollable" id="accordion8">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; Echographie </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion8" href="#collapse_8" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_8" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-4">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="NomEchographie" name="NomEchographie" type="text" class="form-control" placeholder="Nom de l'echographie" >
                                                                                        <label for="form_control_1">Nom</label>
                                                                                        <span class="help-block">Nom</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DateEchographie" name="DateEchographie" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Date del'echographie">
                                                                                        <label for="form_control_1">Date</label>
                                                                                        <i class="fa fa-calendar"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DescriptionEchographie" name="DescriptionEchographie" type="text" class="form-control" placeholder="Description">
                                                                                        <label for="form_control_1">Description</label>
                                                                                        <span class="help-block">Description</span>
                                                                                        <i class="fa fa-user"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="panel-group accordion scrollable" id="accordion9">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; IRM </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion9" href="#collapse_9" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_9" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-4">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="NomIRM" name="NomIRM" type="text" class="form-control"  >
                                                                                        <label for="form_control_1">Nom</label>
                                                                                        <span class="help-block">Nom</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DateIRM" name="DateIRM" class="form-control form-control-inline  date-picker" type="text" size="120" value="" >
                                                                                        <label for="form_control_1">Date</label>
                                                                                        <i class="fa fa-calendar"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DescriptionIRM" name="DescriptionIRM" type="text" class="form-control" placeholder="Description">
                                                                                        <label for="form_control_1">Description</label>
                                                                                        <span class="help-block">Description</span>
                                                                                        <i class="fa fa-user"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="panel-group accordion scrollable" id="accordion10">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; Radiographie </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion10" href="#collapse_10" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_10" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-4">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="NomRadiographie" name="NomRadiographie" type="text" class="form-control"  >
                                                                                        <label for="form_control_1">Nom</label>
                                                                                        <span class="help-block">Nom</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DateRadiographie" name="DateRadiographie" class="form-control form-control-inline  date-picker" type="text" size="120" value="" >
                                                                                        <label for="form_control_1">Date</label>
                                                                                        <i class="fa fa-calendar"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DescriptionRadiographie" name="DescriptionRadiographie" type="text" class="form-control" placeholder="Description">
                                                                                        <label for="form_control_1">Description</label>
                                                                                        <span class="help-block">Description</span>
                                                                                        <i class="fa fa-user"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="panel-group accordion scrollable" id="accordion11">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; Scanner </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion11" href="#collapse_11" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_11" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-4">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="NomScanner" name="NomScanner" type="text" class="form-control"  >
                                                                                        <label for="form_control_1">Nom</label>
                                                                                        <span class="help-block">Nom</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DateScanner" name="DateScanner" class="form-control form-control-inline  date-picker" type="text" size="120" value="" >
                                                                                        <label for="form_control_1">Date</label>
                                                                                        <i class="fa fa-calendar"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DescriptionScanner" name="DescriptionScanner" type="text" class="form-control" placeholder="Description">
                                                                                        <label for="form_control_1">Description</label>
                                                                                        <span class="help-block">Description</span>
                                                                                        <i class="fa fa-user"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                    </div>
                                            </div>
                                            <div class="tab-pane" id="portlet_tab1">
                                                                          <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                                            <div class="portlet-body form">
                                                                <form role="form" id="FormVAL2" novalidate="novalidate" method="POST">

                                                                    <div class="panel-group accordion scrollable" id="accordion12">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; Autre Bilan </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion12" href="#collapse_12" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_12" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-6">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="NomAutre" name="NomAutre" type="text" class="form-control" >
                                                                                        <label for="form_control_1">Nom</label>
                                                                                        <span class="help-block">Nom</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="DescriptionAutre" name="DescriptionAutre" type="text" class="form-control" placeholder="Description">
                                                                                        <label for="form_control_1">Description</label>
                                                                                        <span class="help-block">Description</span>
                                                                                        <i class="fa fa-user"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="panel-group accordion scrollable" id="accordion13">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; ECBU </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion13" href="#collapse_13" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_13" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-6">

                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="Bactériurie" name="Bactériurie" type="text" class="form-control"  >
                                                                                        <label for="form_control_1">Bactériurie</label>
                                                                                        <span class="help-block">Bactériurie</span>
                                                                                         <i class="fa fa-users" aria-hidden="true"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <div class="form-group form-md-line-input has-success ">
                                                                                    <div class="input-icon">
                                                                                        <input id="Leucocyturie" name="Leucocyturie" class="form-control form-control-inline" type="text" size="120" value="" >
                                                                                        <label for="form_control_1">Leucocyturie</label>
                                                                                        <span class="help-block">Leucocyturie</span>
                                                                                        <i class="fa fa-calendar"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                        
                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div class="panel-group accordion scrollable" id="accordion14">

                                                                        <div class="panel panel-default">
                                                                            <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                                <div class="ribbon-sub ribbon-clip"></div>
                                                                                                <img id="fichelog" src="../img/surveillance.png" alt="details">&nbsp; ECG </div>

                                                                                          <a>
                                                                                         <div id="SuppCnam"  class="ribbon ribbon-right ribbon-vertical-right ribbon-border-dash ribbon-color-danger ribbon-round ribbon-shadow uppercase hide" style="margin-right: 40px">
                                                                                             <i class="icon-trash" style="margin-left: -3px"></i>
                                                                                        </div>
                                                                                         </a>

                                                                                        <a id="hidecnam" class="accordion-toggle accordion-toggle-styled collapsed" style="font-family: cursive;padding-top: 20px;cursor: pointer; " data-toggle="collapse" data-parent="#accordion14" href="#collapse_14" aria-expanded="false"> Détails du bilan </a>
                                                                                    </div>




                                                                                </div>
                                                                            <div id="collapse_14" class="panel-collapse collapse in" aria-expanded="true" >

                                                                                <div class="panel-body">


                                                                         <div class="alert alert-danger display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                                        <div class="alert alert-success display-hide">
                                                                            <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>

                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="form-group form-md-line-input has-success">
                                                                                    <div class="input-icon">
                                                                                     <textarea id="DESCRIPTIONECG" name ="DESCRIPTIONECG" class="form-control" rows="3" placeholder="Enter les Détails de la description"></textarea>
                                                                                     <label for="form_control_1" class="has-success"> DESCRIPTION </label>
                                                                                      <span class="help-block">DESCRIPTION </span>
                                                                                      <i class="fa fa-user-md" aria-hidden="true"></i>
                                                                                     </div>    
                                                                                 </div>
                                                                            </div>
                              
                                                                        </div>

                                                                        <div class="form-actions noborder pull-right" style="background-color: transparent;margin-top: -30px; margin-bottom: -20px;">
                                                                            <button id="submit" type="submit" style="font-family: cursive; width: 200px" data-loading-text="Loading..." class="btn blue mt-ladda-btn ladda-button mt-progress-demo uppercase " data-style="slide-right">
                                                                                    <span class="ladda-label"> Enregistrer 
                                                                                    <span class="glyphicon glyphicon-cog"> </span>
                                                                                    </span>
                                                                                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                                            <button type="reset" id="reset" class="btn default  uppercase" style="font-family: cursive; width: 200px"> Annuler
                                                                            <span class="glyphicon glyphicon-alert"> </span>
                                                                            </button>
                                                                        </div>

                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Bilan_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Bilan.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>