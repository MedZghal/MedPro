<%-- 
    Document   : ActeMedicCnam
    Created on : 30 mars 2017, 13:22:46
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Acte Médicale</title>
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
                                    <i class="fa fa-medkit"></i>
                                    <a href="#">Ajouter Acte Médicale </a>
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
          <div class="mt-element-ribbon col-md-8" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVALacte" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp; Acte Médicale </div>
                                                    </div>
                                                        <div class="panel-body">
                                                            <!-- Patient-->
                                                          <div class="tab-content">
                                                              <div class="tab-pane active" id="portlet_comments_1">
                                                                  <div class="mt-comments">
                                                                      <div class="mt-comment">
                                                                          <div class="mt-comment-img">
                                                                              <img id='imgpatient' src="" class="tooltips" data-tooltip="tooltip" title="" style="width: 50px;" data-original-title="" alt="">
                                                                          </div>
                                                                          <div class="mt-comment-body">
                                                                              <div class="mt-comment-info">
                                                                                  <span id="patientdetails" class="mt-comment-author uppercase"> </span>
                                                                                  <span class="mt-comment-date"><span id="patientDate"></span> <img src="../img/check.png" alt="e" style="width: 20px;margin-top: -2px;"></span> 
                                                                              </div>
                                                                              <div class="mt-comment-text" id="details">
                                                                                  
                                                                              </div>
                                                                              <div class="mt-comment-details">
                                                                                  </div>
                                                                          </div> </div></div></div>
                                                                                       </div><hr/>
                                                            <!-- Begin Acte body -->
                                                             <div class="row" style="margin-left: 20px">
                                                                    <img class="pull-left" src="../img/syringe.png" alt="Details">
                                                                    <div class="col-md-11">
                                                                         <div class="form-group form-md-line-input has-success ">
                                                                            <div class="input-icon">
                                                                                <select id="dsgacte" name="dsgacte" class="form-control select2-selection--single">
                                                                                </select>
                                                                                <label for="form_control_1">Désignation Acte</label>
                                                                                <i class="fa fa-medkit" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                             <div class="row">
                                                                <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Montant" name="Montant" type="number" class="form-control" placeholder="Montant Acte" >
                                                                            <label for="form_control_1">Montant Acte</label>
                                                                            <span class="help-block">Entrer Montant</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                     <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="date_Acte" name="date_Acte" class="form-control form-control-inline  date-picker" type="text" size="120" value="" placeholder="Entrez la date">
                                                                            <label for="form_control_1">Date Acte Médicale</label>
                                                                            <i class="fa fa-calendar"></i>
                                                                        </div>
                                                                     </div>
                                                                </div>
                                                    </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="form-group form-md-line-input has-success">
                                                                        <div class="input-icon">
                                                                         <textarea id="dspacte" name="dspacte" class="form-control" rows="3" placeholder="Enter Description de l'Acte Médical"></textarea>
                                                                         <label for="form_control_1" class="has-success"> Description de l'Acte Médical </label>
                                                                          <span class="help-block">Enter description de l'acte </span>
                                                                          <i class="fa fa-user-md" aria-hidden="true"></i>
                                                                         </div>    
                                                                     </div>
                                                                    </div>
                                                                </div>
                                                            <!-- End Acte body -->
                                                            <br/><br/>
                                                            
                                                              <div class="margiv-top-10 center-wrap">
                                                                    <a id="submitacte" href="javascript:;" class="btn blue" style="margin-left: 180px;"> Enregister Acte Médicale <span class="glyphicon glyphicon-cog"></span> </a>&nbsp;&nbsp;&nbsp;
                                                                    <a href="Patient.jsp" class="btn default"> Annuler l'enregistrement <span class="glyphicon glyphicon-alert"> </span></a>
                                                                    
                                                                </div>
                                                            
                                                            </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                        </div>
                        <div class="mt-element-ribbon col-md-4" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVAL1" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion2">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_2" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                            <span id="nbActeMedic" class="badge badge-danger pull-left" style="margin-left: 160px; margin-bottom: -20px; z-index: 6; position: relative;"> 0 </span>      
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 
                                                       <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;Liste des Acte </div>
                                                            
                                                    </div>
                                                        <div class="panel-body">
                                                            
                                                            <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas des actes médical. </div>
                                                            <!-- Begin Acte body -->
                                                            <div id="listeActes" style=" font-family: cursive;">
                                                                
                                                            </div>
                                                            
                                                            <!-- End Acte body -->
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
          </div>
        
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/ActeMedicCnam_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/ActeMedicCnam.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
