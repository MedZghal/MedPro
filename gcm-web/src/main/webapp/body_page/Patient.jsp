<%-- 
    Document   : Patient
    Created on : 21 févr. 2017, 14:10:22
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
        <link href="../js/daterange/css/bootstrap-datepicker3.css" rel="stylesheet" type="text/css" />
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
                                    <i class="icon-users"></i>
                                    <a href="#">Liste des Patients</a>
                                </li>
                            </ul>
                            
                            <div class="page-toolbar">
                               <div class="page-toolbar">
                                <div id="dashboard-report-range" class="pull-right tooltips btn btn-sm" data-container="body" data-placement="bottom" data-original-title="Date d'aujourd'hui">
                                    <i class="icon-calendar"></i>&nbsp;
                                    <span id="date" class="uppercase has-success"></span>&nbsp;
                                    <i class="fa fa-angle-down"></i>
                                </div>
                               </div>
                            </div>
                        </div>
                        <!-- END PAGE BAR -->
                        
                        <!-- BEGIN PAGE TITLE-->
                    <fieldset>
                    <legend style=" width: auto; background-color: transparent; ">
                        <h1 class="page-title" style="font-family: Courier;"> Gestion des Patients
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des Patients</small>
                        </h1></legend>
        <div class="full-height-content full-height-content-scrollable">
                            <div class="full-height-content-body">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a id="Addpatient" class="dashboard-stat dashboard-stat-v2 blue" >
                                    <div class="visual">
                                        <i class="fa fa-comments"></i>
                                    </div>
                                    <div class="details" >
                                        <div  class="number">
                                            <span style="text-align: center"><img src="../img/avatars/new-user.png"></span>
                                        </div>
                                        <div class="desc"> Nouveau Patient </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a class="dashboard-stat dashboard-stat-v2 red" href="#">
                                    <div class="visual">
                                        <i class="fa fa-bar-chart-o"></i>
                                    </div>
                                    <div class="details">
                                        <div  class="number">
                                            <span id="nbpatient" data-counter="counterup" data-value="0">0</span>
                                        </div>
                                        <div class="desc"> Nombre des Patients </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a class="dashboard-stat dashboard-stat-v2 green" href="#">
                                    <div class="visual">
                                        <i class="fa fa-shopping-cart"></i>
                                    </div>
                                    <div class="details">
                                        <div class="number">
                                            <span id="nbconsult" data-counter="counterup" data-value="0">0</span>
                                        </div>
                                        <div class="desc"> Nombre de Consultations </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <a class="dashboard-stat dashboard-stat-v2 purple" href="#">
                                    <div class="visual">
                                        <i class="fa fa-globe"></i>
                                    </div>
                                    <div class="details">
                                        <div class="number"> +
                                            <span id="nbrdv"  data-counter="counterup" data-value="0">0</span></div>
                                        <div class="desc"> Nombre de RDV </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                          <div  id="wid-id-3" data-widget-colorbutton="true" data-widget-editbutton="false" data-widget-togglebutton="true" data-widget-deletebutton="true" role="widget">
				
				

				<!-- widget div-->
				<div role="content">
					
					<!-- widget edit box -->
					<div class="jarviswidget-editbox">
						<!-- This area used as dropdown edit box -->
						
					</div>
					<!-- end widget edit box -->
					<!-- widget content -->
					<div class="widget-body">
                                            
                                            <div class="form-group form-md-checkboxes pull-right" style=" margin-right: 20px;margin-top: -5px; ">
                                                <div class="md-checkbox-inline">
                                                    <div class="md-checkbox">
                                                        <input type="checkbox" id="checkboxSalle" class="md-check">
                                                        <label for="checkboxSalle" style="color: #23527c;">
                                                            <span></span>
                                                            <span class="check"></span>
                                                            <span class="box"></span> Salle d'attende(Par date) </label>
                                                    </div>
                                                    <div class="md-checkbox">
                                                        <input type="checkbox" id="checkboxPartage" class="md-check">
                                                        <label for="checkboxPartage" style="color: #23527c;">
                                                            <span></span>
                                                            <span class="check"></span>
                                                            <span class="box"></span> Dossier Partagé(Par Patient) </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div id="contents" class="backgrid-container">
                                                
                                            </div>
	
						
					</div>
					<!-- end widget content -->
					
				</div>
				<!-- end widget div -->
				
			</div>
                            </div>
        </div>
                        <div class="clearfix"></div>
                    </fieldset>
    <script src="../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
    
    <script src="../js/attrchange/attrchange.js"></script>
    <script src="../js/attrchange/attrchange_ext.js"></script>
    <script src="../js/backand.js"></script>
    
    <script src="../assets/global/plugins/bootstrap-fileinput/js/plugins/sortable.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-fileinput/js/plugins/purify.js" type="text/javascript"></script>
    <!--<script src="../assets/global/plugins/bootstrap-fileinput/js/plugins/piexif.js" type="text/javascript"></script>-->
    <script src="../assets/global/plugins/bootstrap-fileinput/js/fileinput.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-fileinput/js/locales/fr.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-fileinput/themes/explorer/theme.js" type="text/javascript"></script>
    <!--<script src="../assets/global/plugins/bootstrap-fileinput/themes/fa/theme.js" type="text/javascript"></script>-->
    <!--<script src="../assets/global/plugins/bootstrap-fileinput/js/locales/LANG.js" type="text/javascript"></script>-->
    
    
    
    <script src="../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="../assets/global/scripts/app.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/fr.js" type="text/javascript"></script>
    <script src="../js/backbone_backgrid/underscore.js"></script>
    <script src="../js/backbone_backgrid/backbone-min.js"></script>
    <script src="../js/backbone_backgrid/backbone-pageable.js"></script>
    <script src="../js/backbone_backgrid/backgrid.js"></script>
    <script src="../js/backbone_backgrid/backbone-dotattr.js"></script>
    <script src="../js/backbone_backgrid/backgrid-moment-cell.js"></script>
    <script src="../js/backbone_backgrid/backgrid-paginator.js"></script>
    <script src="../js/backbone_backgrid/backgrid-responsiveGrid.min.js"></script>
    <script src="../js/backbone_backgrid/backgrid-filter.js"></script>
    <script src="../js/backbone_backgrid/backgrid-sum.js"></script>
    <script src="../js/backbone_backgrid/backgrid-sizeable-columns.js"></script>
    <script src="../js/daterange/js/bootstrap-datepicker.js" type="text/javascript"></script>
    <script src="../js/daterange/locales/bootstrap-datepicker.fr.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/counterup/jquery.waypoints.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
    <script src="../js/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-sweetalert/sweetalert.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery-bootpag/jquery.bootpag.min.js" type="text/javascript"></script>
    <script src="../js/helper_functions.js"></script>
    <script src="../master_page/index.js?version=<%=session.getAttribute("versionJS")%>"></script>
    <script src="../body_page_js/Patient_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
    <script src="../body_page_js/Patient.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
