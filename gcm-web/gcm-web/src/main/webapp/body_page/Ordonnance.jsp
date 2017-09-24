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
        <title> Ordonnance </title>
        <jsp:include page="../body_page/css_declare.jsp"/>
    </head>
    
    <body style="font-family: cursive;background-color: transparent;height: 100%;"  >
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
                                    <span> Ordonnance </span>
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
                          <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="fichelog" src="../img/pills.png" alt="details">&nbsp; Ordonnance </div>
                                                    </div>
                                                        <div class="panel-body">
                                                

                                                                <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas de prescription ou n'est pas validée. Veuillez vérifier ci-dessous. </div>
                                                               <div class="alert alert-success display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre Ordonnance est Validé ! </div>


                                                                           <div class="row">

                                                                               <div class="portlet light bordered" style="background-color: #fff;margin: 5px;">
                                                                                   <div class="portlet-title tabbable-line">
                                                                                       <div class="caption">
                                                                                           <i class="icon-bubbles font-dark hide"></i>
                                                                                           <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Prescriptions </span>
                                                                                       </div>
                                                                                       <ul class="nav nav-tabs">
                                                                                           <li class="active">
                                                                                               <a href="#portlet_comments_1" data-toggle="tab"> Liste des Ordonnances &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                           <li>
                                                                                               <a href="javascript:window.location.href='AjOrdonnance_.jsp';"> Ajouter Ordonnance <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt="Ordonnance"> </a>
                                                                                           </li>
                                                                                       </ul>
                                                                                   </div>
                                                                                   <div class="portlet-body">
                                                                                       <div class="tab-content">
                                                                                           <div class="tab-pane active" id="portlet_comments_1">

                                                                                           </div>
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
         <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Ordonnance_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Ordonnance.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
