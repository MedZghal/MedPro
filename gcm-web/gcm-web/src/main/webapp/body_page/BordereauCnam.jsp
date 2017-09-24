<%-- 
    Document   : BordereauCnam
    Created on : 21 sept. 2017, 11:35:01
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Gestion des Bordereau</title>
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
                                    <i class="icon-diamond"></i>
                                    <a href="#">Bordereau</a>
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
                        <h1 class="page-title" style="font-family: Courier;"> Bordereau CNAM
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des Factures</small>
                        </h1>
                    </legend>
                        <!-- END PAGE BAR -->
        <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                            <div class="panel-group accordion scrollable" id="accordion2">
                                                <div class="panel panel-default">
                                                   <div class="panel-heading">

                                                       <div class="panel-title" style="height: 60px">
                                                           <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                            <div class="ribbon-sub ribbon-clip"></div>
                                                            <img id="fichelog" src="../img/cardiogram.png" alt="details" style="    width: 32px;">&nbsp; Bordereau </div>
                                                           <a id="accordion-toggle" class="accordion-toggle accordion-toggle-styled" style="font-family: cursive;padding-top: 20px " data-toggle="collapse" data-parent="#accordion1" href="#collapse_2" aria-expanded="true"> Détails Bordereau CNAM </a>
                                                       </div>

                                                   </div>
                        <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                        <div class="full-height-content full-height-content-scrollable">
                            <div class="full-height-content-body">
                                
                                <div class="col-lg-12 col-xs-12 col-sm-12" style=" margin-top: 10px;    margin-bottom: 10px; "> 
                                     <fieldset>
                                        <legend>Bordereau</legend>
                                        <div class="row">
                                                    <div class="col-md-4">
                                                        
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="nbordereau" name="nbordereau" type="text" class="form-control" placeholder="Numéro de bordereau" >
                                                                <label for="nbordereau">N°Bordereau</label>
                                                                <span class="help-block">Entrer numéro de bordereau</span>
                                                                 <i class="icon-layers" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="datedepot" name="datedepot" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Dépot">
                                                                <label for="datedepot">Date Dépot</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">

                                                                <div class="form-group form-md-line-input has-success ">
                                                                    <div class="input-icon">
                                                                        <input id="nbfacture" disabled name="nbfacture" type="text" class="form-control" placeholder="Entrer Nombre Facture" >
                                                                        <label for="nbfacture">Nombre Facture</label>
                                                                        <span class="help-block">Entrer Nombre Facture</span>
                                                                         <i class="icon-layers" aria-hidden="true"></i>
                                                                    </div>
                                                                </div>
                                                    </div>  
                                                    
                                        </div>
                                        <div class="row" id="sandbox-container">
                                            <div class="input-daterange input-group" id="datepicker">
                                                    <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input style=" text-align: left; " id="datedebutp" name="datedebutp" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date début péroide">
                                                               <label for="datedepot">Date Début Péroide</label>
                                                                <i style="bottom: -35px;" class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input style=" text-align: left; " id="datedebutf" name="datedebutf" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date  fin péroide">
                                                               <label for="datedepot">Date fin Péroide</label>
                                                                <i style="bottom: -35px;" class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                                  
                                        </div>
                                       </fieldset>
                                </div>

                         <div class="full-height-content full-height-content-scrollable" style=" padding-top: 48px; ">
                             
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
                                        <div class="widget-body " style=" padding-bottom: 1px; ">
                                            <div style="col-lg-12 col-xs-12 col-sm-12">
                                                <fieldset style=" margin: 10px;">
                                                    <legend>Liste des Factures</legend>
                                                        <div id="contents" >

                                                        </div>
                                                </fieldset>
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
    <script src="../js/backbone_backgrid/backbone-dotattr.js"></script>
    <script src="../js/backbone_backgrid/backgrid-paginator.js"></script>
    <script src="../js/backbone_backgrid/backgrid-responsiveGrid.min.js"></script>
    <script src="../js/backbone_backgrid/backgrid-filter.js"></script>
    <script src="../js/backbone_backgrid/backgrid-sum.js"></script>
    <!--<script src="../js/jquery-ui.js"></script>-->
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
        <script src="../body_page_js/BordereauCnam_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/BordereauCnam.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>