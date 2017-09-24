<%-- 
    Document   : AjOrdonnance
    Created on : 24 mars 2017, 20:38:44
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>AJouter Ordonnance</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link href="../css/invocie.css" rel="stylesheet" type="text/css"  />
    </head>
   <body>
         <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="fa fa-medkit"></i>
                                    <a href="#">AJouter Ordonnance</a>
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
                        
                        <div class="mt-element-ribbon col-md-6" style="padding: 0px 10px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
                    
                                    <div class="yourWrapperClass">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/pills.png" alt="details">&nbsp;Ordonnance</div>
                                                    </div>
                                                   
                                                        
                                                                          
                                                                                                            
                                                            
                        
		
                                                     <div id="container" style="width: 100%;font-family: monospace;font-size: 14px;font-style: italic;">
                                                             <span class="pull-left"><img alt="" src="../img/gc_m.png" class="pull-right" style="width: 120px;" ></span>
                                                                <span id="drname" class="pull-right"></span>
                                                                <span id="adresse" class="pull-right" style="margin-top: 20px;margin-right: -100px;"></span>
                                                                     <br/>
                                                                     <hr/>
                                                                     <span style="font-style: oblique;font-size: 22px;">Cabinet Médicale</span>

                          
                                            <article>
                                                <h1>Ordonnance Médicale</h1>
<!--                                                <address class="pull-right" style="margin-top: -100px;font-family: fantasy;font-style: inherit;">
                                                    <ul>
                                                        <li><span id="sp"></span></li>
                                                        <li><span id="tel"></span></li>
                                                        <li><span id="gcm"></span></li>
                                                        </ul>
                                                </address>-->
                                                <table class="meta">
                                                        <tr>
                                                                <th><span contenteditable>Numéro #</span></th>
                                                                <td><span id="numeroOrd" contenteditable>101138</span></td>
                                                        </tr>
                                                        <tr>
                                                                <th><span contenteditable>Date</span></th>
                                                                <td><span id="dateOrd" contenteditable></span></td>
                                                        </tr>
                                                        <tr class="hide">
                                                                <th><span contenteditable>Montant</span></th>
                                                                <td><span  contenteditable>$</span><span id="mntOrd">0.00</span></td>
                                                        </tr>
                                                </table>
                                                <table id='preOrd' class="inventory" style="width: 100%;">
                                                        <thead>
                                                                <tr>
                                                                        <th><span contenteditable>Médicament</span></th>
                                                                        <th><span contenteditable>Posologie</span></th>
                                                                        <th style=" width: 75px; "><span contenteditable>Quantité</span></th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                           <td style="padding: 10px 0px 10px 10px;"><a class="cut">SUPP</a>
                                                           <div>
                                                                <a href="#" class="tooltips" data-tooltip="tooltip"  title=""  id="medic" data-type="select2"  data-original-title="Select Médicament" > </a>
                                                              </div> 
                                                           </td>
                                                          
                                                           <td style="padding: 10px 0px 10px 10px;" >
                                                               <div>
                                                                    <a href="#" class="tooltips" data-tooltip="tooltip" title="" id="posologie" data-type="address" data-original-title="Enter Posologie de Médicament"> </a>
                                                               </div>
                                                            </td>
                                                            <td style="padding: 10px 0px 10px 10px; " >
                                                               <div>
                                                                    <a href="#" class="tooltips" data-tooltip="tooltip" title="" id="quntite" data-type="number"  data-original-title="Enter Quantité de Médicament">1</a>
                                                               </div>
                                                            </td>

                                                        </tr>
                                                                        </tbody>
                                                                </table>
                                                                <a class="add pull-right" data-html2canvas-ignore="true">AJOUTER</a>

                                                        </article>
                                                                    <aside>
                                                                            <span >Additional Notes</span>
                                                                            <hr/>
                                                                            <div contenteditable>
                                                                                    <p>Après 15 jours, vous ne pourrez pas avoir de contrôle pour cette consultation.</p>
                                                                            </div>
                                                                    </aside>
                                                </div>
                                                        <a class="btn tooltips pull-right" id="create_pdf" style=" margin-top: -90px; margin-right: 10px; " data-tooltip="tooltip" data-placement="bottom" title="" data-original-title="Enregistrer ordonnance.">
                                                            <img src='../img/printer.png' alt="">
                                                        </a>
                                            </div>    
                                  </div>     
                                                    
                                                        
                                                         
                                                    </div>
                                         
                                        </form>
                                    </div>
                    
              </div> 
                        
                        <div class="col-md-6"  >
                                    <!--%@include  file="AjOrdExtra.jsp" %-->
                             <div class=" form">
                                        <form role="form"  method="POST">
                                               
                                                    <div class="panel panel-default">

                                                        <div  class="panel-collapse" >
                                                           
                                                            <div class="panel-body">
                                                                
<!--                                                                <button id="edit" class="btn btn-primary" type="button">Modifier </button>
                                                                <button id="save" class="btn btn-primary"  type="button">Enregistrer </button>-->
                                                                <div class="click2edit" style="margin-top: 20px;">
                                                                    
                                                                    <div id="result" style="MIN-HEIGHT: 100%; LEFT: 7px; /*WIDTH: 545px;*/ TOP: 7px; HEIGHT: 770px;    text-align: -webkit-center;">
                                                                          
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                     
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                        </div>
        
                        
                                    
<jsp:include page="js_declare.jsp"/>
  <script src="../body_page_js/AjOrdonnance_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/AjOrdonnance.js?version=<%=session.getAttribute("versionJS")%>"></script>
</body>
</html>