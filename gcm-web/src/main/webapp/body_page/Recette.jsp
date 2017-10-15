

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Gestion de Compbtabilité</title>
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
            @page { size: portrait; } 
            @media print {
                .backgrid-filter{
                    display: none;
                }
                #btAction{
                    display: none;
                }
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
                                    <i class="icon-diamond"></i>
                                    <a href="#">Liste des Dépenses</a>
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
        <fieldset>
                    <legend style=" width: auto; background-color: transparent; ">
                        <h1 class="page-title" style="font-family: Courier;"> Compbtabilité
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des Dépenses</small>
                        </h1>
                    </legend>
                        <!-- END PAGE BAR -->
        <div id="RCPage" class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                            <div class="panel-group accordion scrollable" id="accordion2">
                                                                             <div class="panel panel-default">
                                                                                <div class="panel-heading">

                                                                                    <div class="panel-title" style="height: 60px">
                                                                                        <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                                         <div class="ribbon-sub ribbon-clip"></div>
                                                                                         <img id="fichelog" src="../img/cardiogram.png" alt="details" style="    width: 32px;">&nbsp; Dépenses </div>
                                                                                        <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="true"> Détails Dépenses </a>
                                                                                    </div>
                                                                                 <div class="pull-right" id="btAction" style=" margin-top: -69px; margin-right: 25px; ">
                                                                                                <a class="btn tooltips pull-right" id="create_pdf" style="margin-top: 18px;margin-left: 20px;margin-bottom: 15px;margin-right: 13px;" data-tooltip="tooltip" data-placement="bottom" title="" data-original-title="Imprimer." href="javascript:GetPrint();">
                                                                                                                      <img style="width: 25px;" src="../img/printer.png" alt=""> Imprimer
                                                                                                      </a>
                                                                                                   <a class="btn tooltips pull-right" id="AddMedic" style="margin-top: 18px;margin-left: 20px;" data-tooltip="tooltip" data-placement="bottom" title="" data-original-title="Ajouter Dépense.">
                                                                                                                      <img style="width: 25px;" src="../img/Money-icon.png" alt=""> Ajouter Dépense
                                                                                                      </a>
                                                                                  </div>
                                                                                </div>
                <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                        <div class="full-height-content full-height-content-scrollable">
                            <div class="full-height-content-body">


                         
                         <div class="full-height-content full-height-content-scrollable" style=" padding-top: 1px; ">
                             
                            <div class="full-height-content-body">
                                
                                    <div  id="wid-id-3" data-widget-colorbutton="true" data-widget-editbutton="false" data-widget-togglebutton="true" data-widget-deletebutton="true" style=" padding-bottom: 10px; " >
				
				

				<!-- widget div-->
				<fieldset style=" margin: 10px; ">
                                        <legend style="margin-bottom: 25px;" >Liste des Dépenses</legend>
				
					<!-- widget content -->
					<div class="widget-body">
                                            <div  class="span5 col-md-5" id="sandbox-container" style="margin-left: -5px;margin-top: -26px;margin-bottom: 10px;">
                                                <div class="input-daterange input-group" id="datepicker">
                                                <input type="text" class="input-sm form-control" name="start">
                                                <span class="input-group-addon"><img src="../img/calendar_milestones-128.png" alt="" style="width:20px;"></span>
                                                <input type="text" class="input-sm form-control" name="end">
                                                </div>
                                            </div>
<!--                                            <div><span id="detail">Au :</span><input class="form-control" id="FilterAu" style="width: 300px; margin-left: 30px; margin-top: -20px;" type="text" ></div>
                                            <div  style="margin-left: 340px; margin-top: -33px;"><span id="detail">Du :</span><input class="form-control" id="Filterdu"  style="width: 300px; margin-left: 30px; margin-top: -20px;" type="text" ></div>
                                            -->
                                            <div id="contents" class="backgrid-container" >
                                                
                                            </div>
	
						
					</div>
					<!-- end widget content -->
					
                                </fieldset>
				<!-- end widget div -->
				
			</div>
                            </div>
                         </div>
                            </div>
                        </div>
                                                                                 </div>
                                                                             </div>
                                            </div>
                                        </form>
                                    </div>
        </div>
        </fieldset>
          <script src="../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
          
          <script src="../js/attrchange/attrchange.js"></script>
        <script src="../js/attrchange/attrchange_ext.js"></script>
        
        
    <script src="../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="../assets/global/scripts/app.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/moment.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/fr.js" type="text/javascript"></script>
    <script src="../js/backbone_backgrid/underscore.js"></script>
    <script src="../js/backbone_backgrid/backbone-min.js"></script>
    <script src="../js/backbone_backgrid/backbone-pageable.js"></script>
    <script src="../js/backbone_backgrid/backgrid.js"></script>
    <script src="../js/backbone_backgrid/backgrid-paginator.js"></script>
    <script src="../js/backbone_backgrid/backgrid-responsiveGrid.min.js"></script>
    <script src="../js/backbone_backgrid/backgrid-filter.js"></script>
    <script src="../js/backbone_backgrid/backgrid-sum.js"></script>
    <!--<script src="../js/jquery-ui.js"></script>-->
    <script src="../js/daterange/js/bootstrap-datepicker.js" type="text/javascript"></script>
    <script src="../js/daterange/locales/bootstrap-datepicker.fr.min.js" type="text/javascript"></script>
    
    <script src="../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    
    <script src="../assets/global/plugins/counterup/jquery.waypoints.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/counterup/jquery.counterup.min.js" type="text/javascript"></script>
    <script src="../js/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/bootstrap-sweetalert/sweetalert.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
    <script src="../assets/global/plugins/jquery-bootpag/jquery.bootpag.min.js" type="text/javascript"></script>
    <script src="../js/helper_functions.js"></script>
    <script src="../master_page/index.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Recette_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Recette.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>