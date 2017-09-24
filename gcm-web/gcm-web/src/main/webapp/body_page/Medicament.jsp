<%-- 
    Document   : Medicament
    Created on : 28 avr. 2017, 15:00:42
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Gestion des Médicaments</title>
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
    <body style="font-family: cursive" class="page-portlet-fullscreen">
        <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-layers"></i>
                                    <a href="#"> Médicaments </a>
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
        
        <h1 class="page-title" style="font-family: Courier;"> Gestion des Médicaments
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des Médicaments</small>
                        </h1>
                        <!-- END PAGE BAR -->
                        <div class="full-height-content full-height-content-scrollable">
                            <div class="full-height-content-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <a id="AddMedic" class="dashboard-stat dashboard-stat-v2 blue" >
                                    <div class="visual">
                                        <i class="fa fa-comments"></i>
                                    </div>
                                    <div class="details" >
                                        <div  class="number">
                                            <span style="text-align: center"><img style="width: 40px;" src="../img/first-aid-kit_.png" alt=""></span>
                                        </div>
                                        <div class="desc"> Nouvelle Médicament </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <a class="dashboard-stat dashboard-stat-v2 red" href="#">
                                    <div class="visual">
                                        <i class="fa fa-bar-chart-o"></i>
                                    </div>
                                    <div class="details">
                                        <div  class="number">
                                            <span id="nbpatient" data-counter="counterup" data-value="0"><script>localStorage.getItem('nb');</script></span>
                                        </div>
                                        <div class="desc"> Nombre des Médicaments </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                         <div class="full-height-content full-height-content-scrollable">
                            <div class="full-height-content-body">
                                    <div  id="wid-id-3" data-widget-colorbutton="true" data-widget-editbutton="false" data-widget-togglebutton="true" data-widget-deletebutton="true" >
				
				

				<!-- widget div-->
				<div >
					
					<!-- widget edit box -->
					<div class="jarviswidget-editbox">
						<!-- This area used as dropdown edit box -->
						
					</div>
					<!-- end widget edit box -->
					<!-- widget content -->
					<div class="widget-body">
						
                                            <div id="contents">
                                                
                                            </div>
	
						
					</div>
					<!-- end widget content -->
					
				</div>
				<!-- end widget div -->
				
			</div>
                            </div>
                         </div>
                            </div>
                        </div>
          <script src="../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
          
          <script src="../js/attrchange/attrchange.js"></script>
        <script src="../js/attrchange/attrchange_ext.js"></script>
        
    <script src="../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="../assets/global/scripts/app.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/moment.min.js" type="text/javascript"></script>
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
    <script src="../assets/global/plugins/counterup/jquery.waypoints.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
    <script src="../js/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-sweetalert/sweetalert.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery-bootpag/jquery.bootpag.min.js" type="text/javascript"></script>
    <script src="../js/helper_functions.js"></script>
    <script src="../master_page/index.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Medicament_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Medicament.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
