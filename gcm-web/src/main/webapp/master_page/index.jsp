<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MedPRO -- GCM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta content="Preview page of Metronic Admin Theme #1 for blank page layout" name="description" />
        <meta content="" name="author" />
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link rel="stylesheet" type="text/css" href="../js/highcharts/code/css/highcharts.css"/>
        <link rel="shortcut icon" href="../img/favicon/favicon.ico" /> 
        
    </head>
    <!-- END HEAD -->
<!--page-sidebar-closed-->
    <body id="HomeMedPro" style="font-family: cursive;background: transparent" class="page-sidebar-closed-hide-logo page-content-white page-md page-header-fixed page-sidebar-fixed ">
        
        <div class="page-wrapper">
            <!-- BEGIN HEADER -->
            <div class="page-header navbar navbar-fixed-top">
                <!-- BEGIN HEADER INNER -->
                <div class="page-header-inner ">
                    <!-- BEGIN LOGO -->
                    <div class="page-logo">
                        <a href="index.jsp">
                            <!--<img src="../imcg/avatars/doctor.png" alt="logo" class="logo-default" />--> 
                        </a>
                        <div class="menu-toggler sidebar-toggler">
                            <span></span>
                        </div>
                        
                    </div>
                    
                    <!-- END LOGO -->
                    <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                    </a>
                    <!-- END RESPONSIVE MENU TOGGLER -->
                    <!-- BEGIN TOP NAVIGATION MENU -->
                    <div class="top-menu">
                        <ul class="nav navbar-nav pull-right">
                            <!-- BEGIN NOTIFICATION DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte -->
                            <!-- DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode -->
                            <!-- DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class -->
                            <li class="dropdown dropdown-extended dropdown-inbox" id="header_notification_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-bell"></i>
                                    <span class="badge badge-default" id="nbDossierPar"> 0 </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3>
                                            <span class="bold" id="notificationExPar">12 </span></h3>
                                        <a href="#">Voir tout</a>
                                    </li>
                                     <li>
                                        <ul class="dropdown-menu-list scroller" id="ListeDossierPar" style="height: 275px;" data-handle-color="#637283">
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                             <li class="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-tag"></i>
                                    <span class="badge badge-default"> 0 </span>
                                </a>
                                <ul class="dropdown-menu extended tasks">
                                    <li class="external">
                                        <h3>
                                            <span class="bold"> &nbsp;</span> &nbsp;</h3>
                                        <a href="app_todo.html">Voir tout</a>
                                    </li>
                                </ul>
                            </li>
                            <!-- END NOTIFICATION DROPDOWN -->
                            <!-- BEGIN INBOX DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <i class="icon-calendar"></i>
                                    <span class="badge badge-default" id="nbrdvAujoud">  </span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="external">
                                        <h3> 
                                            <span class="external" id="notificationExRdv" ></span> </h3>
                                    </li>
                                    <li>
                                        <ul class="dropdown-menu-list scroller" id="ListeRdvAujourdHui" style="height: 275px;" data-handle-color="#637283">
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <!-- END TODO DROPDOWN -->
                            <!-- BEGIN USER LOGIN DROPDOWN -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-user">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img id="ImgConnect" alt="" class="img-circle" src="" />
                                    <span id="medecin" class="username username-hide-on-mobile"></span>
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="#" id='paramlog'>
                                            <i class="icon-user"></i> Mes Paramètres </a>
                                    </li>
                                    <li>
                                        <a href="#" id='callog'>
                                            <i class="icon-calendar"></i> Calendrier </a>
                                    </li>
                                    <li>
                                        <a  id="dicom">
                                            <i class="fa fa-medkit"></i> Dicom PACS
                                            <span class="badge badge-danger"> 3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" id="dwv" >
                                            <i class="fa fa-user-md"></i> Dicom Local
                                            <span class="badge badge-success"> 7 </span>
                                        </a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="#" id="Sécurité">
                                            <i class="icon-lock"></i> Sécurité </a>
                                    </li>
                                    <li>
                                        <a id="logout">
                                            <i class="icon-key"></i> Déconnexion </a>
                                    </li>
                                </ul>
                            </li>
                            <!-- END USER LOGIN DROPDOWN -->
                            <!-- BEGIN QUICK SIDEBAR TOGGLER -->
                            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
                            <li class="dropdown dropdown-quick-sidebar-toggler">
                                <a href="javascript:;" class="dropdown-toggle">
                                    <i class="icon-logout"></i>
                                </a>
                            </li>
                            <!-- END QUICK SIDEBAR TOGGLER -->
                        </ul>
                    </div>
                    <!-- END TOP NAVIGATION MENU -->
                   <ul id="ticker01">
                       <li><span style="color: white;">19/08/2017</span><a href="#">Dernier mise à jour <img src="../img/log societe2.png" style="width: 100px;"> MedPRO <small>Gestion d'un complexe médical en ligne</small> Version 3.0.1 </a></li>
                        <li><span style="color: white;">10/05/2017</span><a href="#">Petites Annonces Offres d'emploi - Marketing / Publicité / Communication en Tunisie - Toutes les offres d'emploi. </a></li>
                        <li><span style="color: white;">10/04/2017</span><a href="#">End up doing is ...</a></li>
                        <li><span style="color: white;">10/06/2017</span><a href="#">The code that you ...</a></li>
                       
                        <!-- eccetera -->
                    </ul>


                </div>
                <!-- END HEADER INNER -->
            </div>
            <!-- END HEADER -->
            <!-- BEGIN HEADER & CONTENT DIVIDER -->
            <div class="clearfix"> </div>
            <!-- END HEADER & CONTENT DIVIDER -->
            <!-- BEGIN CONTAINER -->
            <div class="page-container">
                <!-- BEGIN SIDEBAR -->
                <div class="page-sidebar-wrapper">
                    <!-- BEGIN SIDEBAR -->
                    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <div class="page-sidebar navbar-collapse collapse">
                        <!-- BEGIN SIDEBAR MENU -->
                        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                          <!--page-sidebar-menu-closed-->
                        <ul id='sidemenu' class="page-sidebar-menu  page-header-fixed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px;">
                            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
                            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                            <li class="sidebar-toggler-wrapper hide">
                                <div class="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            <!-- END SIDEBAR TOGGLER BUTTON -->
                            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
                            <li class="sidebar-search-wrapper">
                                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                                <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                                <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                                <form class="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                                    <a href="javascript:;" class="remove">
                                        <i class="icon-close"></i>
                                    </a>
                                    <div id='logoImgChange' >
                                        <div id="logopub" style="margin-top: -45px;margin-left: -30px;margin-right: -17px;margin-bottom: -20px;">
                                            <ul id="ticker03" >
                                            <li ><a href="#"><img src="../img/1.png" alt="" style="width: 200px"></a></li>
                                            <li ><a href="#"><img src="../img/2.png" alt="" style="width: 200px"></a></li>
                                            <li ><a href="#"><img src="../img/3.png" alt="" style="width: 200px"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                <!-- END RESPONSIVE QUICK SEARCH FORM -->
                            </li>
                            <li class="nav-item start active">
                                <a  class="nav-link nav-toggle" id="Accueil" >
                                    <i class="icon-home"></i>
                                    <span class="title">Accueil</span>
                                    <span class="arrow"></span>
                                    <span class="selected"></span>
                                </a>
                            </li>
                            <li class="heading">
                                <h3 class="uppercase">Services</h3>
                            </li>
                            
                            <li class="nav-item  open">
                                <a  class="nav-link nav-toggle">
                                    <i class="icon-user-following"></i>
                                    <span class="arrow">Gestion Patient</span>
                                </a>
                            <ul class="sub-menu" style="display: block;">
                                <li class="nav-item  ">
                                    <a  class="nav-link nav-toggle" id="patient">
                                        <i class="icon-user-following"></i>
                                        <span class="title">Liste des Patients</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a  class="nav-link nav-toggle">
                                        <i class="icon-clock"></i>
                                        <span class="title">Consultation</span>
                                        <span class="arrow"></span>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="nav-item  ">
                                            <a  class="nav-link " id="consultation">
                                                <i class="icon-clock"></i>
                                                <span class="title">consultation</span>
                                            </a>
                                        </li>
                                        <li class="nav-item  ">
                                            <a class="nav-link " id="controle">
                                                <i class="icon-clock"></i>
                                                <span class="title">contrôle</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item  ">
                                    <a  class="nav-link nav-toggle" id="ArchiveMedic">
                                        <i class="icon-layers"></i>
                                        <span class="title">Archive</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a  class="nav-link nav-toggle" id="rdv">
                                        <i class="icon-calendar"></i>
                                        <span class="title">Gestion des RDV</span>
                                    </a>
                                </li>
                            </ul>
                                
                            <li class="nav-item  ">
                                <a  class="nav-link nav-toggle">
                                    <i class="icon-diamond"></i>
                                    <span class="arrow">Trésorerie</span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" id="comptabilite" >
                                            <i class="icon-user-following"></i>
                                            <span class="title">État de coffre</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle">
                                            <i class="icon-clock"></i>
                                            <span class="title">Règlement Patient</span>
                                            <span class="title"></span>
                                        </a>
                                    </li>
                                    <li class="nav-item  " id="BordereauCNAM">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-layers"></i>
                                            <span class="title">Bordereau CNAM</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">Bordereau Organisme</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">Règlement Organisme</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>  
                            
                            <li class="nav-item  ">
                                <a  class="nav-link nav-toggle" >
                                    <i class="icon-bar-chart"></i>
                                    <span class="arrow">Statistiques</span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" id="Statistiques" >
                                            <i class="icon-clock"></i>
                                            <span class="title">État de CA par période</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle">
                                            <i class="icon-user-following"></i>
                                            <span class="title">État des Patients par période</span>
                                            <span class="title"></span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-layers"></i>
                                            <span class="title">Évolution des consultations par mois</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">Évolution des consultations par sexe</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">Évolution des consultations par nature<small>(Payant, CNAM, Autres)</small></span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">État des Patients PEC<small>(régler et non régler)</small></span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link nav-toggle" >
                                            <i class="icon-calendar"></i>
                                            <span class="title">État des Patients Payant<small>(régler et non régler)</small></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>  
                            
                            <li class="nav-item  ">
                                <a  class="nav-link nav-toggle" >
                                    <i class="icon-settings"></i>
                                    <span class="title">Paramétrage</span>
                                    <span class="arrow"></span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a  class="nav-link " id="Cabinet">
                                            <i class="icon-settings"></i>
                                            <span class="title">Cabinet</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:;" class="nav-link nav-toggle" id="medicament">
                                            <i class="icon-layers"></i>
                                            <span class="title">Médicament</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:;" class="nav-link nav-toggle" id="acteapl">
                                            <i class="icon-layers"></i>
                                            <span class="title">Acte</span>
                                        </a>
                                    </li>
                                    <li class="nav-item  ">
                                        <a  class="nav-link " id="Acces">
                                            <i class="icon-settings"></i>
                                            <span class="title">Accés</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item  ">
                                <a  class="nav-link nav-toggle" >
                                    <i class="icon-diamond"></i>
                                    <span class="title">Clinique</span>
                                     <span class="arrow"></span>
                                </a>
                                <ul class="sub-menu">
                                    <li class="nav-item  ">
                                        <a  class="nav-link " >
                                            <i class="icon-settings"></i>
                                            <span class="title">Fiche Médecin</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="heading">
                                <h3 class="uppercase">A propos</h3>
                            </li>
                            <li class="nav-item  ">
                                        <a href="#" class="nav-link ">
                                            <i class="icon-info"></i>
                                            <span class="title">About</span>
                                            <span class="arrow"></span>
                                        </a>
                            </li>
                        </ul>
                        <!-- END SIDEBAR MENU -->
                        <!-- END SIDEBAR MENU -->
                    </div>
                    <!-- END SIDEBAR -->
                </div>
                <!-- END SIDEBAR -->
                <!-- BEGIN CONTENT -->
                <div class="page-content-wrapper">
                    
                    <!-- BEGIN CONTENT BODY -->
                    <div id="content" class="page-content" >
                        <!-- BEGIN PAGE HEADER-->
                       
                        <!-- END PAGE TITLE-->
                        <!-- END PAGE HEADER-->
                       
                        
                    </div>
                    <!-- END CONTENT BODY -->
                </div>
                <!-- END CONTENT -->
                <!-- BEGIN QUICK SIDEBAR -->
                <a href="javascript:;" class="page-quick-sidebar-toggler">
                    <i class="icon-login"></i>
                </a>
                <div class="page-quick-sidebar-wrapper" data-close-on-body-click="false">
                    <div class="page-quick-sidebar">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Patient
                                    <span id='nblisteattende' class="badge badge-danger">0</span>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Autre
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li id="deleteallSalle">
                                        <a href="javascript:;" data-toggle="tab">
                                            <i class="icon-bell"></i> Vider Liste </a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                            <i class="icon-settings"></i> Autre Rendez-Vous </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                                <div class="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-class="page-quick-sidebar-list">
                                    <h3 class="list-heading"> <span class="label label-sm label-success"> Salle d'attente </span></h3>
                                    <ul id='listeDattende' class="media-list list-items scroller" style="height: 490px;" data-always-visible="1" data-rail-visible1="1">
                                        
                                    </ul>
                                    <div class="task-footer" style="margin-right: 10px;margin-bottom: 10px;margin-top:70px;">
                                            <div class="btn-arrow-link pull-right">
                                                <a onclick="Redirection('Rdv.jsp')">Voir tous les rendez-vous</a>
                                                <i class="icon-arrow-right"></i>
                                            </div>
                                        </div>
                                    
                                </div>
                                <div class="page-quick-sidebar-item">
                                    <div class="page-quick-sidebar-chat-user">
                                        <div class="page-quick-sidebar-nav">
                                            <a href="javascript:;" class="page-quick-sidebar-back-to-list">
                                                <i class="icon-arrow-left"></i>Back</a>
                                        </div>
                                        <div class="page-quick-sidebar-chat-user-messages">
                                            <div class="post out">
                                                <img class="avatar" src="../img/avatars/doctor-.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Médecin</a>
                                                    <span class="datetime">20:15</span>
                                                    <span class="body"> When could you send me the report ? </span>
                                                </div>
                                            </div>
                                            <div class="post in">
                                                <img class="avatar" src="../img/avatars/nurse.png" alt="...">
                                                <div class="message">
                                                    <span class="arrow"></span>
                                                    <a href="javascript:;" class="name">Sécretaire</a>
                                                    <span class="datetime">20:15</span>
                                                    <span class="body"> Its almost done. I will be sending it shortly </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="page-quick-sidebar-chat-user-form">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Type a message here...">
                                                <div class="input-group-btn">
                                                    <button type="button" class="btn green">
                                                        <i class="icon-paper-clip"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                                <div class="page-quick-sidebar-settings-list">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END QUICK SIDEBAR -->
            </div>
            <!-- END CONTAINER -->
            <!-- BEGIN FOOTER -->
            <div class="page-footer">
                <div class="page-footer-inner"> 2017 &copy; Gestion d'un complexe médical
                    <a target="_blank" href="#">MedPRO</a> &nbsp;|&nbsp;
                    <a href="#" title="" target="_blank"> By Zghal Mohamed</a>
                </div>
                <div class="scroll-to-top">
                    <i class="icon-arrow-up"></i>
                </div>
            </div>
            <!-- END FOOTER -->
        </div>
        
        <!-- BEGIN QUICK NAV -->
        <nav class="quick-nav hide">
            <a class="quick-nav-trigger" href="#0">
                <span aria-hidden="true"></span>
            </a>
            <ul>
                <li>
                    <a href="#" target="_blank" class="active">
                        <span>Purchase Metronic</span>
                        <i class="icon-basket"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <span>Customer Reviews</span>
                        <i class="icon-users"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <span>Showcase</span>
                        <i class="icon-user"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <span>Changelog</span>
                        <i class="icon-graph"></i>
                    </a>
                </li>
            </ul>
            <span aria-hidden="true" class="quick-nav-bg"></span>
        </nav>
        <div class="quick-nav-overlay"></div>
        <!-- END QUICK NAV -->
        
        <!-- fire button -->
        <a id="confirmeemodal" class="btn btn-outline dark hide" data-target="" data-toggle="modal"></a>
        
         <!-- Modal eng Consultation -->
                <div id="Consult" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/bloc.png'></img> Enregistrer Consultation</h4>
                             </div>
                             <div class="modal-body">
                                 <p><img src='../img/ERR.png'> Vous voulez vraiment Enrigister la Consultation de Mr(s) <span id="nomprenompatient"></span></p>
                                 <div class="col-md-8">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="Honoraire" name="Honoraire" type="number" class="form-control" placeholder="Honoraire Consultation">
                                                                <label for="form_control_1">Honoraire Consultation</label>
                                                                <span class="help-block">Entrer Honoraire Consultation</span>
                                                                <i class="fa fa-money" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 hide">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="dateConsultEng" name="dateConsultEng" class="form-control form-control-inline  date-picker" data-date-format="dd/mm/yyyy" type="text" size="120" value="" placeholder="Entrez la date de Consultation">
                                                                <label for="form_control_1">Date de Consultation</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerEng" type="button" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmer" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
         <!-- Modal eng Consultation cnam-->
                <div id="ConsultCnam" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/bloc.png'></img> Enregistrer Consultation CNAM</h4>
                             </div>
                             <div class="modal-body">
                                 <p><img src='../img/ERR.png'> Vous voulez vraiment Enrigister la Consultation de Mr(s) <span id="nomprenompatientcnam"></span></p>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="Tiket" name="Tiket" type="number" class="form-control" placeholder="Tiket Modérateur">
                                                                <label for="form_control_1">Tiket Modérateur</label>
                                                                <span class="help-block">Entrer Tiket Modérateur</span>
                                                                <i class="fa fa-money" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="MontantCNAM" name="MontantCNAM" type="text" class="form-control" placeholder="Montant CNAM">
                                                                <label for="form_control_1"> Montant CNAM </label>
                                                                <span class="help-block">Entrer Montant CNAM</span>
                                                                <i class="fa fa-money" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 hide">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="dateConsultEngcnam" name="dateConsultEng" class="form-control form-control-inline  date-picker" type="text" size="120" value="" data-date-format="dd/mm/yyyy" placeholder="Entrez la date de Consultation">
                                                                <label for="form_control_1">Date de Consultation</label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerEngCnam" type="button" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerCnam" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
        
          <!-- Modal Aj acte-->
                <div id="ajactemodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"></img> Ajouter un nouvel acte médical CNAM</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalActeForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                    <div class="col-md-4">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="libacte" name="libacte" type="text" class="form-control" placeholder="Libellé Acte">
                                                                <label for="form_control_1">Libellé Acte</label>
                                                                <span class="help-block">Entrer Libellé</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div class="col-md-4">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="montantacte" name="montantacte" type="number" class="form-control" placeholder="Montant Acte" >
                                                                            <label for="form_control_1">Montant Acte</label>
                                                                            <span class="help-block">Entrer Montant</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    <div class="col-md-4">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Tiketacte" name="Tiketacte" type="number" class="form-control" placeholder="Tiket Modérateur">
                                                                            <label for="form_control_1">Tiket Modérateur</label>
                                                                            <span class="help-block">Entrer Tiket Modérateur</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    
                                                    <div class="row" style="margin-left: 200px; font-style: italic; font-family: monospace; font-size: larger;">
                                                                <div class="md-radio-inline">
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="avec" name="radio2" class="md-radiobtn" value="1">
                                                                        <label for="avec">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Avec Accord Préalable CNAM </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="sans" name="radio2" class="md-radiobtn" checked="" value="0">
                                                                        <label for="sans">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Sans Accord Préalable CNAM </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             <div class="col-md-12">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Cotationacte" name="Cotationacte" type="number" class="form-control" placeholder="Cotation">
                                                                            <label for="form_control_1"> Cotation </label>
                                                                            <span class="help-block">Entrer Cotation</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerActe" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerActe" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
          <!-- Modal patient consult-->
                <div id="consultpatientmodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"> Ajouter une Nouvelle Consultation</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalpatientForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="col-md-12">
                                            <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                <div class="portlet-title tabbable-line">
                                                    <div class="caption">
                                                        <i class="icon-bubbles font-dark hide"></i>
                                                        <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                    </div>
                                                    <ul class="nav nav-tabs">
                                                        <li class="active">
                                                            <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="Npatient2"> Nouveau Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="portlet-body">
                                                         <div class="col-sm-12">
                                                             <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                     <div class="input-icon">
                                                                         <select id="select2-patient2" class="form-control"></select>
                                                                         <label for="form_control_1">Patient</label>
                                                                         <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                     </div>
                                                                 </div>
                                                         </div>
                                                </div>
                                            </div>
                                            </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerconsultpatient" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerconsultpatient" type="submit" class="btn green"> Nouvelle Consultation </button>
                             </div>
                         </div>
          
          <!-- Modal patient contole-->
                <div id="controlemodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/ajacte.png' style="width: 30px;"> Contrôle </h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalcontroleForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="col-md-12">
                                            <div class="portlet light bordered" style="background-color: #fff;margin: 5px;height: 130px;">
                                                <div class="portlet-title tabbable-line">
                                                    <div class="caption">
                                                        <i class="icon-bubbles font-dark hide"></i>
                                                        <span class="caption-subject font-dark bold uppercase"><img src="../img/pillsapci.png" alt="details" > &nbsp;Patients </span>
                                                    </div>
                                                    <ul class="nav nav-tabs">
                                                        <li class="active">
                                                            <a href="#portlet_comments_1" data-toggle="tab"> Liste des Patients &nbsp;<img src="../img/pills.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="Npatient1"> Nouveau Patient <img src="../img/drugs.png" style="width: 20px;margin-top: -5px;" alt=""> </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="portlet-body">
                                                         <div class="col-sm-12">
                                                             <div class="form-group form-md-line-input has-success " style=" margin-top: -15px; ">
                                                                     <div class="input-icon">
                                                                         <select id="select2-patient1" class="form-control"></select>
                                                                         <label for="form_control_1">Patient</label>
                                                                         <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                                     </div>
                                                                 </div>
                                                         </div>
                                                </div>
                                            </div>
                                            </div>
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulercontrole" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmercontrole" type="submit" class="btn green"> Nouvelle Contrôle </button>
                             </div>
                         </div>
          
           <!--ModalAcces-->
	 <div id="Accesmodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;margin-bottom: -10px;"> <img src='../img/worldwide.png' style="width: 40px;">&nbsp; Gestion d'Accés (Sécurite)</h4>
                             </div>
                             <div class="modal-body">
                                  <div class="mt-element-ribbon col-md-8" style="padding: 0px 0px 0px 10px;" data-auto-scroll="true" data-slide-speed="200">
            
            
                                    <div class="portlet-body form">
                                        <form role="form" id="FormVALUtilisateur" novalidate="novalidate" method="POST">
                                                
                                                <div class="panel-group accordion" id="accordion3">
                                                    
                                                <div class="panel panel-default">
                                                   
                                                    <div id="collapse_3" class="panel-collapse collapse in" aria-expanded="true" >
                                                        <div class="row" style="margin-left: 0px;">
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                        <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;<span id='typeaction'> Nouvel utilisateur </span></div>
                                                    </div>
                                                        <div class="panel-body">
                                                            <!-- Begin Acte body -->
                                                             <div class="row">
                                                                <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Login" name="Login" type="text" class="form-control" placeholder="Login Utilisateur" >
                                                                            <label for="form_control_1">Login</label>
                                                                            <span class="help-block">Entrer Login</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="Passe" name="Passe" type="text" class="form-control" placeholder="Mot de Passe Utilisateur" >
                                                                            <label for="form_control_1">Mot de Passe</label>
                                                                            <span class="help-block">Entrer Mot de Passe</span>
                                                                             <i class="fa fa-dollar" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    </div>
                                                            <div class="col-md-12">
                                                         <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="Type" name="Type" class="form-control">
                                                            
                                                        </select>
                                                                <label for="form_control_1">Type</label>
                                                                <i class="fa fa-user-md"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                            <!-- End Acte body -->
                                                            <br/><br/>
                                                            
                                                              <div class="margiv-top-10 center-wrap">
                                                                    <a id="submitacces" href="javascript:;" class="btn blue" style="margin-left: 120px;"> Enregister Utilisateur <span class="glyphicon glyphicon-cog"></span> </a>&nbsp;&nbsp;&nbsp;
                                                                    <a type="reset" data-dismiss="modal"class="btn default"> Annuler l'enregistrement <span class="glyphicon glyphicon-alert"> </span></a>
                                                                    
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
                                                            <span id="nbUtilisateurs" class="badge badge-danger pull-left" style="margin-left: 233px; margin-bottom: -20px; z-index: 6; position: relative;"> 0 </span>      
                                                   <div class="ribbon ribbon-left ribbon-clip ribbon-shadow ribbon-round ribbon-border-dash-hor ribbon-color-info uppercase" style="font-family: cursive">
                                                                 
                                                       <div class="ribbon-sub ribbon-clip"></div>
                                                                        <img  src="../img/nurse_.png" alt="details">&nbsp;Liste des Utilisateurs </div>
                                                            
                                                    </div>
                                                        <div class="panel-body">
                                                            
                                                            <div class="alert alert-danger display-hide">
                                                                   <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Cette consultation n'a pas des actes médical. </div>
                                                            <!-- Begin utilisateur body -->
                                                            <div id="listeUtilisateurs" style=" font-family: cursive;">
                                                                
                                                            </div>
                                                            
                                                            <!-- End utilisateur body -->
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                            </div>
                             </div>
                         </div>
         
           <!-- Modal medicament-->
                <div id="medicmodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/first-aid-kit_.png' style="width: 30px;"></img> Ajouter un nouvelle Médicament</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalmedicForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                    <div class="col-md-12">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="desigcMedic" name="desigcMedic" type="text" class="form-control" placeholder="Libellé désignation">
                                                                <label for="form_control_1">Désignation</label>
                                                                <span class="help-block">Entrer désignation</span>
                                                                <i class="fa fa-anchor" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">

                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                        <select id="medicdci" name="medicdci" class="form-control">
                                                        </select>
                                                                <label for="form_control_1">DCI</label>
                                                                <i class="fa fa-medkit"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                    <select id="posologie1" name="posologie1" class="form-control">
                                                                        <option value="appl">appl</option>
                                                                            <option value="cachet"> cachet </option>
                                                                            <option value="c à c"> c à c </option>
                                                                            <option value="c à m"> c à m </option>
                                                                            <option value="c à s"> c à s </option>
                                                                            <option value="dose"> dose </option>
                                                                            <option value="géllule"> géllule </option>
                                                                            <option value="goutte"> goutte </option>
                                                                            <option value="granule"> granule </option>
                                                                            <option value="injection"> injection </option>
                                                                            <option value="ml"> ml </option>
                                                                            <option value="nébulisati"> nébulisati </option>
                                                                            <option value="ovule"> ovule </option>
                                                                            <option value="comp"> comp </option>
                                                                            <option value="disp"> disp </option>
                                                                            <option value="panseme"> panseme </option>
                                                                            <option value="pastille"> pastille </option>
                                                                            <option value="patch"> patch </option>
                                                                            <option value="pulv"> pulv </option>
                                                                            <option value="sachet"> sachet </option>
                                                                            <option value="suppo"> suppo </option>
                                                                            <option value="tablette"> tablette </option>
                                                                            <option value="timbre"> timbre </option>
                                                                    </select>
                                                                            <label for="form_control_1">Posologie 1 </label>
                                                                            <i class="fa fa-medkit"></i>
                                                                        </div>
                                                                    </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="prixmedic" name="prixmedic" type="number" class="form-control" placeholder="prix médicament">
                                                                            <label for="form_control_1">Prix</label>
                                                                            <span class="help-block">Entrer prix</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    <div class="col-md-4">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                    <select id="posologie2" name="posologie2" class="form-control">
                                                                        <option value="appl">appl</option>
                                                                            <option value="cachet"> cachet </option>
                                                                            <option value="c à c"> c à c </option>
                                                                            <option value="c à m"> c à m </option>
                                                                            <option value="c à s"> c à s </option>
                                                                            <option value="dose"> dose </option>
                                                                            <option value="géllule"> géllule </option>
                                                                            <option value="goutte"> goutte </option>
                                                                            <option value="granule"> granule </option>
                                                                            <option value="injection"> injection </option>
                                                                            <option value="ml"> ml </option>
                                                                            <option value="nébulisati"> nébulisati </option>
                                                                            <option value="ovule"> ovule </option>
                                                                            <option value="comp"> comp </option>
                                                                            <option value="disp"> disp </option>
                                                                            <option value="panseme"> panseme </option>
                                                                            <option value="pastille"> pastille </option>
                                                                            <option value="patch"> patch </option>
                                                                            <option value="pulv"> pulv </option>
                                                                            <option value="sachet"> sachet </option>
                                                                            <option value="suppo"> suppo </option>
                                                                            <option value="tablette"> tablette </option>
                                                                            <option value="timbre"> timbre </option>
                                                                    </select>
                                                                            <label for="form_control_1">Posologie 2 </label>
                                                                            <i class="fa fa-medkit"></i>
                                                                        </div>
                                                                    </div>
                                                    </div>
                                                    <div class="col-md-4 pull-right">
                                                        <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                    <select id="posologie3" name="posologie3" class="form-control">
                                                                          <option value="amp" selected> amp </option>
                                                                            <option value="appl">appl</option>
                                                                            <option value="cachet"> cachet </option>
                                                                            <option value="c à c"> c à c </option>
                                                                            <option value="c à m"> c à m </option>
                                                                            <option value="c à s"> c à s </option>
                                                                            <option value="dose"> dose </option>
                                                                            <option value="géllule"> géllule </option>
                                                                            <option value="goutte"> goutte </option>
                                                                            <option value="granule"> granule </option>
                                                                            <option value="injection"> injection </option>
                                                                            <option value="ml"> ml </option>
                                                                            <option value="nébulisati"> nébulisati </option>
                                                                            <option value="ovule"> ovule </option>
                                                                            <option value="comp"> comp </option>
                                                                            <option value="disp"> disp </option>
                                                                            <option value="panseme"> panseme </option>
                                                                            <option value="pastille"> pastille </option>
                                                                            <option value="patch"> patch </option>
                                                                            <option value="pulv"> pulv </option>
                                                                            <option value="sachet"> sachet </option>
                                                                            <option value="suppo"> suppo </option>
                                                                            <option value="tablette"> tablette </option>
                                                                            <option value="timbre"> timbre </option>
                                                                    </select>
                                                                            <label for="form_control_1">Posologie 3 </label>
                                                                            <i class="fa fa-medkit"></i>
                                                                        </div>
                                                                    </div>
                                                    </div>
                                                    <div class="row" style="margin-left: 50px; font-style: italic; font-family: monospace; font-size: larger;">
                                                                <div class="md-radio-inline">
                                                                    <label for="form_control_1">Générique :</label>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Générique" name="radio2" class="md-radiobtn" value="Générique">
                                                                        <label for="Générique">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Générique </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Princips" name="radio2" class="md-radiobtn" checked="" value="Princips">
                                                                        <label for="Princips">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Princips </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                   <div class="row" style="margin-left: 50px; font-style: italic; font-family: monospace; font-size: larger;">
                                                                <div class="md-radio-inline">
                                                                    <label for="form_control_1">Catégorie CNAM :</label>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Essentiel" name="radio1" class="md-radiobtn" value="Essentiel">
                                                                        <label for="Essentiel">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Essentiel </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Intermédiare" name="radio1" class="md-radiobtn" checked="" value="Intermédiare">
                                                                        <label for="Intermédiare">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Intermédiare </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Vital" name="radio1" class="md-radiobtn" checked="" value="Vital">
                                                                        <label for="Vital">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Vital </label>
                                                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <div class="md-radio">
                                                                        <input type="radio" id="Confort" name="radio1" class="md-radiobtn" checked="" value="Confort">
                                                                        <label for="Confort">
                                                                            <span class="inc"></span>
                                                                            <span class="check"></span>
                                                                            <span class="box"></span> Confort </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                             
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerMedicmodal" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerMedicmodal" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
        <!-- Modal depense-->
                <div id="depensemodal" class="modal container fade fast" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/first-aid-kit_.png' style="width: 30px;"></img> Ajouter Dépense</h4>
                             </div>
                             <div class="modal-body">
                                 <form id="modalDepenseForm" role="form" novalidate="novalidate" method="POST">
                                     <div class="alert alert-danger display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-times"></i> Vous avez des erreurs dans le formulaire. Veuillez vérifier ci-dessous. </div>
                                                <div class="alert alert-success display-hide">
                                                    <button class="close" data-close="alert"></button><i class="fa-fw fa fa-check"></i> Votre validation de formulaire est réussie ! </div>
                                                    
                                                    <div class="col-md-6">

                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                    <select id="typedepenses" name="typedepenses" class="form-control">
                                                                        <option value="Frais de Télécommunications">Frais de Télécommunications</option>
                                                                            <option value="Eau">Eau</option>
                                                                            <option value="Electricité">Electricité</option>
                                                                            <option value="Gaz">Gaz</option>
                                                                            <option value="Internet">Internet</option>
                                                                            <option value="Frais de Loyer">Frais de Loyer</option>
                                                                            <option value="Fournitures Cabinet">Fournitures Cabinet</option>
                                                                            <option value="Fournitures Médicales">Fournitures Médicales</option>
                                                                            <option value="Fournitures Maison">Fournitures Maison</option>
                                                                            <option value="Entretien et Réparations">Entretien et Réparations</option>
                                                                            <option value="Frais d'Assurance et de Sécurité Sociale">Frais d'Assurance et de Sécurité Sociale</option>
                                                                            <option value="Frais de Transport">Frais de Transport</option>
                                                                            <option value="Immobilisation Constructions">Immobilisation Constructions</option>
                                                                            <option value="Immobilisation Terrain">Immobilisation Terrain</option>
                                                                            <option value="Impôts">Impôts</option>
                                                                            <option value="Réglementation Crédit">Réglementation Crédit</option>
                                                                            <option value="Salaire du Personnel">Salaire du Personnel</option>
                                                                            <option value="Services Bancaire">Services Bancaire</option>
                                                                            <option value="Voyages et Déplacements">Voyages et Déplacements</option>
                                                                            <option value="Documentation">Documentation</option>
                                                                            <option value="Autres Facture">Autres Facture</option>
                                                                            <option value="Autres">Autres</option>
                                                                    </select>
                                                                            <label for="form_control_1">Type Dépense </label>
                                                                            <i class="fa fa-medkit"></i>
                                                                        </div>
                                                                    </div>
                                                    </div>
                                                     <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="datedepense" name="datedepense" class="form-control form-control-inline  date-picker" data-date-format="dd/mm/yyyy" type="text" size="120"  placeholder="Date du Dépense">
                                                                <label for="form_control_1">Date </label>
                                                                <i class="fa fa-calendar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-md-line-input has-success ">
                                                            <div class="input-icon">
                                                                <input id="libelledepense" name="libelledepense" type="text" class="form-control" placeholder="Entrer Libellé">
                                                                <label for="form_control_1">Libellé</label>
                                                                <span class="help-block">Libellé Dépense</span>
                                                                <i class="fa fa-bookmark"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                                    <div class="form-group form-md-line-input has-success ">
                                                                        <div class="input-icon">
                                                                            <input id="prixdepense" name="prixdepense" type="number" class="form-control" placeholder="Montant Dépense">
                                                                            <label for="form_control_1">Montant</label>
                                                                            <span class="help-block">Entrer Montant</span>
                                                                            <i class="fa fa-money"></i>
                                                                        </div>
                                                                    </div>
                                                    </div>    
                                     </form>
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerdepense" type="reset" data-dismiss="modal" class="btn btn-outline dark">Annuler</button>
                                 <button id="confirmerdepense" type="submit" class="btn green"> Enregistrer </button>
                             </div>
                         </div>
        
        <!-- Modal fileUpload-->
                <div id="fileUpload" class="modal container fade fast" aria-hidden="true" role="dialog" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/report.png' style="width: 30px;"></img> Ajouter Files ( Patient N°<span id="nomprenompatientFile"></span>) </h4>
                             </div>
                             <div class="modal-body">
   
                                <form enctype="multipart/form-data">
                                    <div class="form-group">
                                        <input id="input-704" name="input-704[]" type="file" multiple accept="image/*" class="file-loading" >
                                    </div>
                                </form>
                                  <!--<img id="documentHolder" alt="Image view placeholder" src="" />-->
                             </div>
                             <div class="modal-footer">
                                 <button id="anuulerfileUpload" type="button" data-dismiss="modal" class="btn btn-outline dark">Quitter</button>
                             </div>
                </div>
        
        <!-- Modal Partage-->
                <div id="PartageModal" class="modal container fade fast" aria-hidden="true" role="dialog" style="font-family: cursive;" tabindex="-1">
                             <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                 <h4 class="modal-title" style="font-family: cursive;"> <img src='../img/group.png' style="width: 30px;"></img> Partager Dossier (Patient N°<span id="nomprenompatientPartage"></span>) </h4>
                             </div>
                             <div class="modal-body" id="MedcinPartager">
                                 
                                                <div id="listeMedcinPartager" ></div>
                                 
                             </div>
                    <div class="modal-footer" style="margin-top: -40px;">
                                 <button id="anuulerPartage" type="button" data-dismiss="modal" class="btn btn-outline dark">Quitter</button>
                    </div>
                </div>
        
        <!-- Back Consult -->
                <ul id="menuback" class="mfb-component--br mfb-zoomin hide" data-mfb-toggle="hover">
                        <li class="mfb-component__wrap">
                          <a href="#" class="mfb-component__button--main">
                              <img src='../img/observation.png' style="padding-top: 10px;padding-left: 8px;">
                          </a>
                          <ul class="mfb-component__list">
                            <li>
                              <a href="javascript:CALLBACK();" data-mfb-label="Retour à la Fenétre Consultation" class="mfb-component__button--child" >
                                <img src='../img/exit.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                            <li>
                              <a href="javascript:Annuler();" data-mfb-label="Annuler Consultation" class="mfb-component__button--child">
                                <img src='../img/basket.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                          </ul>
                        </li>
                </ul>
         <!-- Back Recette -->
                <ul id="menubackRc" class="mfb-component--br mfb-zoomin hide" data-mfb-toggle="hover">
                        <li class="mfb-component__wrap">
                          <a href="#" class="mfb-component__button--main">
                              <img src='../img/increase.png' style="width: 46px;padding-top: 10px;padding-left: 8px;">
                          </a>
                          <ul class="mfb-component__list">
                            <li>
                              <a href="javascript:CALLBACKRC();" data-mfb-label="Retour à la Fenétre de Comptabilité" class="mfb-component__button--child" >
                                <img src='../img/exit.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                          </ul>
                        </li>
                </ul>
         
         <!-- Back Bourd Cnam -->
                <ul id="menubackBc" class="mfb-component--br mfb-zoomin hide" data-mfb-toggle="hover">
                        <li class="mfb-component__wrap">
                          <a href="#" class="mfb-component__button--main">
                              <img src='../img/increase.png' style="width: 46px;padding-top: 10px;padding-left: 8px;">
                          </a>
                          <ul class="mfb-component__list">
                            <li>
                              <a href="javascript:CALLBACKBC();" data-mfb-label="Retour à la Fenétre de Bordereau CNAM" class="mfb-component__button--child" >
                                <img src='../img/exit.png' style="padding-top: 12px;padding-left: 11px;">
                              </a>
                            </li>
                          </ul>
                        </li>
                </ul>

       <jsp:include page="../body_page/js_declare.jsp"/>
        
        <script src="../js/plugin/other-plugin/mymenu.js"></script>
           <script src="../js/highcharts/code/highcharts.js"></script>
                        <script src="../js/highcharts/code/modules/data.js"></script>
                        <script src="../js/highcharts/code/modules/exporting.js"></script>

<!--         Additional files for the Highslide popup effect 
        <script src="https://www.highcharts.com/samples/static/highslide-full.min.js"></script>
        <script src="https://www.highcharts.com/samples/static/highslide.config.js" charset="utf-8"></script>-->
        <script src="../js/highcharts/code/themes/sand-signika.js"></script>
        
        <!-- END THEME LAYOUT SCRIPTS -->
    </body>

</html>