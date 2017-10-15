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
              
            ::selection {
  color: #eee;
  background: darkred;
}

body > section {
  position: relative;
}
a {
  color: #555;
}
a[data-disabled] {
  color: #ccc;
  text-decoration: line-through;
}
textarea {
  font-size: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0 3px 7px #ccc inset;
  -moz-box-shadow: 0 3px 7px #ccc inset;
  -o-box-shadow: 0 3px 7px #ccc inset;
  -ms-box-shadow: 0 3px 7px #ccc inset;
  box-shadow: 0 3px 7px #ccc inset;
  outline: none;
  width: 500px;
  height: 100px;
  resize: none;
}
button {
  display: inline-block;
  background: -webkit-gradient(linear, 0% 40%, 0% 70%, from(#F9F9F9), to(#E3E3E3));
  background: -webkit-linear-gradient(#F9F9F9 40%, #E3E3E3 70%);
  background: -moz-linear-gradient(#F9F9F9 40%, #E3E3E3 70%);
  background: -ms-linear-gradient(#F9F9F9 40%, #E3E3E3 70%);
  background: -o-linear-gradient(#F9F9F9 40%, #E3E3E3 70%);
  background: linear-gradient(#F9F9F9 40%, #E3E3E3 70%);
  border: 1px solid #999;
  -webkit-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
button:hover {
  border-color: black;
}
button:active {
  background: -webkit-gradient(linear, 0% 40%, 0% 70%, from(#E3E3E3), to(#F9F9F9));
  background: -webkit-linear-gradient(#E3E3E3 40%, #F9F9F9 70%);
  background: -moz-linear-gradient(#E3E3E3 40%, #F9F9F9 70%);
  background: -ms-linear-gradient(#E3E3E3 40%, #F9F9F9 70%);
  background: -o-linear-gradient(#E3E3E3 40%, #F9F9F9 70%);
  background: linear-gradient(#E3E3E3 40%, #F9F9F9 70%);
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
ul :last-child {
  margin-top: 10px;
}
details {
  position: absolute;
  top: 1em;
  left: 1em;
  margin: 1em 0;
  cursor: pointer;
  padding: 10px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 5px;
  max-width: 600px;
  font-size: 10pt;
  z-index: 100;
}
details > div {
  margin: 10px 0;
}
details blockquote {
  font-style: italic;
}
input[type="text"] {
  font-size: inherit;
  padding: 5px 7px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  vertical-align: middle;
}
[contenteditable] {
  width: 500px;
  height: 200px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 5px #ccc inset, 0 -1px 1px #ccc inset;
  margin-bottom: 1em;
}
[contenteditable],
input[type="text"] {
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #aaa;
}
[contenteditable]:hover,
[contenteditable]:focus,
input[type="text"]:hover,
input[type="text"]:focus {
  outline: none;
  color: black;
}
aside:hover {
  opacity: 1;
}
aside {
  position: absolute;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 10pt;

  width: 200px;
  display: inline-block;
  text-shadow: 1px 1px 1px black;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
aside:before {
  content: '';
  width: 15px;
  height: 15px;
  background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%);
  background: -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%);
  -webkit-transform: rotateZ(45deg);
  -moz-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
  -o-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
  left: -8px;
  top: 45px;
  position: absolute;
}
aside a {
  color: inherit;
}
output:hover + aside {
  opacity: 1;
}
#download-help {
  top: 200px;
  left: 420px;
}
h1 {
  color: #aaa;
  font-weight: normal;
  text-align: center;
  margin: 0 0 1.5em 0;
  font-size: 175%;
  line-height: 1.5;
}
h1 a {
  color: inherit;
  text-decoration: none;
}
h1 a:hover {
  padding-bottom: 3px;
  border-bottom: 2px solid #eee;
}
        </style>
    </head>
    <body id="BCPage" style="font-family: cursive">
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb" style=" margin-top: -10px; ">
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
                                                       <div class="pull-right" id="btAction" style=" margin-top: -69px; margin-right: 25px; ">
                                                                    <a class="btn tooltips pull-right" id="create_pdf" style="margin-top: 18px;margin-left: 20px;margin-bottom: 15px;margin-right: 13px;" data-tooltip="tooltip" data-placement="bottom" title="" data-original-title="Imprimer." href="javascript:GetPrintBC();">
                                                                                          <img style="width: 25px;" src="../img/printer.png" alt=""> Génerate Bordereau Cnam
                                                                          </a>
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
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="nbordereau">N°Bordereau</label>
                                                            <div class="input-icon">
                                                                 <i style=" margin-top: 9px; " class="icon-layers" aria-hidden="true"></i>
                                                                <input id="nbordereau" name="nbordereau" type="text" class="form-control" placeholder="Numéro de bordereau" >
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="nbordereau" name="nbordereau" type="text" class="form-control" placeholder="Numéro de bordereau" >
                                                                <label for="nbordereau">N°Bordereau</label>
                                                                <span class="help-block">Entrer numéro de bordereau</span>
                                                                 <i class="icon-layers" aria-hidden="true"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="datedepot">Date Dépot</label>
                                                            <div class="input-icon">
                                                                 <i style=" margin-top: 9px; " class="fa fa-calendar"></i>
                                                                <input id="datedepot" name="datedepot" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Dépot">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="datedepot" name="datedepot" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Dépot">
                                                                <label for="datedepot">Date Dépot</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="nbfacture">Nombre Facture</label>
                                                            <div class="input-icon">
                                                                 <i style=" margin-top: 9px; " class="icon-layers" aria-hidden="true"></i>
                                                                <input id="nbfacture" disabled name="nbfacture" type="text" class="form-control" placeholder="Entrer Nombre Facture" >
                                                            </div>
                                                        </div>
<!--                                                                <div class="form-group form-md-line-input has-success ">
                                                                    <div class="input-icon">
                                                                        <input id="nbfacture" disabled name="nbfacture" type="text" class="form-control" placeholder="Entrer Nombre Facture" >
                                                                        <label for="nbfacture">Nombre Facture</label>
                                                                        <span class="help-block">Entrer Nombre Facture</span>
                                                                         <i class="icon-layers" aria-hidden="true"></i>
                                                                    </div>
                                                                </div>-->
                                                    </div>  
                                                    
                                        </div>
                                        <div class="row" id="sandbox-container">
                                            <div class="input-daterange input-group" id="datepicker">
                                                    <div class="col-md-6">
                                                         <div class="form-group form-input has-success ">
                                                             <label style="color: #27a4b0;" for="datedepot">Date Début Péroide</label>
                                                            <div class="input-icon">
                                                                 <i style=" margin-top: 9px; "  class="fa fa-calendar"></i>
                                                                <input style="text-align: left;border-radius: 4px;" id="datedebutp" name="datedebutp" class="form-control  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date début péroide">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input style=" text-align: left; " id="datedebutp" name="datedebutp" class="form-control  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date début péroide">
                                                               <label for="datedepot">Date Début Péroide</label>
                                                                <i style="bottom: -35px;" class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-input has-success ">
                                                            <label style="color: #27a4b0;" for="datedepot">Date fin Péroide</label>
                                                            <div class="input-icon">
                                                                 <i  style=" margin-top: 9px; " class="fa fa-calendar"></i>
                                                                 <input style="text-align: left;border-radius: 4px;" id="datedebutf" name="datedebutf" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date  fin péroide">
                                                            </div>
                                                        </div>
<!--                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input style=" text-align: left; " id="datedebutf" name="datedebutf" class="form-control form-control-inline  date-picker" type="text" size="120" data-date-format="dd/mm/yyyy" placeholder="Entrez la date  fin péroide">
                                                               <label for="datedepot">Date fin Péroide</label>
                                                                <i style="bottom: -35px;" class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                            </div>
                                                  
                                        </div>
                                        <div class="hide">
                                        <section>
                                            <div id="container">
                                              <div id="contextbrtxt" contenteditable></div>
                                              <input type="text" value="BordereauCnam.txt" placeholder="BordereauCnam.txt">
                                              <input id="firebrtxt" type="button" onclick="downloadFile()" value="Create file"> <output></output>
                                            </div>
                                          </section>
                                            


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
                                        <div class="widget-body" style=" padding-bottom: 1px; ">
                                            <div style="col-lg-12 col-xs-12 col-sm-12">
                                                <fieldset style=" margin: 10px;">
                                                    <legend>Liste des Factures</legend>
                                                        <div id="contents" class="backgrid-container">

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
    <script src="../js/moment-timezone.js"></script>
    
    <script src="../js/backbone_backgrid/underscore.js"></script>
    <script src="../js/backbone_backgrid/backbone-min.js"></script>
    <script src="../js/backbone_backgrid/backbone-pageable.js"></script>
    <script src="../js/backbone_backgrid/backgrid.js"></script>
    <script src="../js/backbone_backgrid/backgrid-moment-cell.js"></script>
    <script src="../js/backbone_backgrid/backbone-dotattr.js"></script>
    <script src="../js/backbone_backgrid/backgrid-paginator.js"></script>
    <script src="../js/backbone_backgrid/backgrid-responsiveGrid.min.js"></script>
    <script src="../js/backbone_backgrid/backgrid-filter.js"></script>
    <script src="../js/backbone_backgrid/backgrid-sum.js"></script>
    
    
    
    <!--<script src="../js/jquery-ui.js"></script>-->
    <script src="../js/bootstrap-datetimepicker.js" type="text/javascript"></script>
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