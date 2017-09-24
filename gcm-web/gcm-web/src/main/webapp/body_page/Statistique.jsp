<%-- 
    Document   : Comp
    Created on : 29 avr. 2017, 00:21:16
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title> Comptabilité </title>
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link rel="stylesheet" type="text/css" href="../js/highcharts/code/css/highcharts.css"/>
        
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
                                    <span>Gestion des Statistiques</span>
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
                        <div class="col-lg-12 col-xs-12 col-sm-12">
                                <div class="portlet light ">
                                    <div class="portlet-title tabbable-line">
                                        <div class="caption">
                                            <i class="icon-bubbles font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase">Gestion des Statistiques du Cabinet Médical</span>
                                        </div>
                                        <ul class="nav nav-tabs">
                                            <li class="active">
                                                <a href="#portlet_comments_1" data-toggle="tab"> Statistiques Consultations </a>
                                            </li>
                                            <li>
                                                <a href="#portlet_comments_2" data-toggle="tab"> Statistiques Patients </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="portlet_comments_1">
                                                <!-- BEGIN: Comments -->
                                                <span>Statistique Mensuelle Pour L'année</span><input style="margin-bottom: 10px;" class="datepicker pull-right" size="8" type="text">
                                                <div id="containerC" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                                                <!-- END: Comments -->
                                            </div>
                                            <div class="tab-pane" id="portlet_comments_2">
                                                <!-- BEGIN: Comments -->
                                                <div id="containerP" style="min-width: 1344px;  height: 400px;"></div>
                                                <!-- END: Comments -->
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
        
        <script src="../body_page_js/Statistique_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Statistique.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
