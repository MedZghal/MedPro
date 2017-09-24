<%-- 
    Document   : HistoriqueSoins
    Created on : 14 mars 2017, 12:22:07
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title> Historique de Soins </title>
        <jsp:include page="../body_page/css_declare.jsp"/>
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
                                    <span>Historique de Soins</span>
                                </li>
                            </ul>
                        </div>
                        <!-- END PAGE BAR -->
                        
        <div class="col-lg-12">
                                <div class="mt-element-ribbon" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img id="Historique" src="../img/medical-history.png" alt="details" >&nbsp; Historique de Soins </div>
                                                                        
                                                                        <div class="pull-right" style="width: 300px;margin-right: 20px;margin-top: 10px;">
                                                                            <div class="input-group">
                                                                                <input id="Search" type="text" class="form-control" placeholder="Search...">
                                                                                <span class="input-group-btn">
                                                                                    <a href="javascript:;" class="btn blue submit">
                                                                                        <i class="icon-magnifier"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                    </div>
                                                        <div class="panel-body">
                                                            <div id="contentHis">
			
                                                            </div>
								</div>
                                                    </div>
                                                </div>
                                                </div>

							</form>

						</div>
                                </div>
        </div>
						

        
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/HistoriqueSoins_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/HistoriqueSoins.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
