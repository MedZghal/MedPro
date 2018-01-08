<%-- 
    Document   : Acceuil
    Created on : 29 mars 2017, 14:23:52
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <jsp:include page="../body_page/css_declare.jsp"/>
        
        <link href="../css/pub.css" rel="stylesheet" type="text/css" />
        <link href="../css/style_Accueil.css" rel="stylesheet" type="text/css" />
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
        <title>Accueil</title>
    </head>
    <body  >
        
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
                                    <a href="#">Accueil</a>
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
                        <!-- END PAGE BAR -->
                        
                        <!--div class="page-title">
                            <div class="row titleRow">
                                <h2 style="font-family: cursive;">Gestion de Cabinet Médicale</h2>
                            </div>
                         </div-->
                <fieldset style=" margin-top: -15px; ">
                    <legend style="height: 90px;width: auto;background-color: transparent;padding-top: 20px;">
                        
                         <h1 id="tt" class="page-title"> 
<!--                            <span style="font-family: monospace;font-size: -webkit-xxx-large;font-style: oblique;">Gestion de Cabinet Médicale</span>
                            <small style="font-family: cursive;">accueil</small>-->
                            <img src="../img/Acceuil (1).png" alt="" style="margin-left: 10px;margin-top: -25px;margin-bottom: -12px;">
                            </h1>
                    </legend>
                            <div  style="margin-top: -48px;padding-left: 414px;" class="hide">
                                <ul id="ticker02">
                                <li><span style="color: #0044cc;">Version 3.0.1</span><a href="#">Gestion d'un complexe médical en ligne multi médecins </a></li>
                                <li><span style="color: #0044cc;">Version 2.0.0</span><a href="#">MEDPROApp l'extension mobile de MedPro ISO/ANDROID/WINDOWS PHONE</a></li>
                                <li><span style="color: #0044cc;">&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><span style="color: #0044cc;">&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                    
                                </ul>
                            </div>
                        <!-- eccetera -->
                        
                    
                        
                        <div class="row">

                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat blue">
                                    <div class="visual">
                                        <img style="width:35px;filter: invert(100%); " src="../img/079-safebox.png" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="number"> <span id="recette" data-counter="counterup" data-value="0">0</span> </div>
                                        <div class="desc"> Rendez-Vous </div>
                                    </div>
                                    <a class="more" href="javascript:;"> Afficher plus
                                        <i class="m-icon-swapright m-icon-white"></i>
                                    </a>
                                </div>
                            </div>

                            
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat blue">
                                    <div class="visual">
                                        <img style="width:35px;filter: invert(100%); " src="../img/001-clock-1.png" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="number"> <span id="rdv" data-counter="counterup" data-value="0">0</span> </div>
                                        <div class="desc"> Rendez-Vous </div>
                                    </div>
                                    <a class="more" href="javascript:;"> Afficher plus
                                        <i class="m-icon-swapright m-icon-white"></i>
                                    </a>
                                </div>
                            </div>
   
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat blue">
                                    <div class="visual">
                                        <img style="width:34px;filter: invert(100%); " src="../img/055-calendar-1.png" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="number"> <span id="consult" data-counter="counterup" data-value="0">0</span> </div>
                                        <div class="desc"> Consultation(s) </div>
                                    </div>
                                    <a class="more" href="javascript:;"> Afficher plus
                                        <i class="m-icon-swapright m-icon-white"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="dashboard-stat blue">
                                    <div class="visual">
                                         <img style="width:35px;filter: invert(100%); " src="../img/016-doctor-1.png" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="number"><span id="patients" data-counter="counterup" data-value="0">0</span> </div>
                                        <div class="desc"> Patient(s) </div>
                                    </div>
                                    <a class="more" href="javascript:;"> Afficher plus
                                        <i class="m-icon-swapright m-icon-white"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        
                        <section class="row service_tab" style="background-color: white;">
                            <!--section class="row page_intro">
                            <div class="row m0 inner">
                                <div class="container">
                                    <div class="row">
                                        <h5>service</h5>
                                        <h2>medicalpro services</h2>
                                    </div>
                                </div>
                            </div>
                        </section-->
                           
        <div class="col-md-12 col-sm-12 col-lg-12">
            
            <div class=" row">
        <!-- Nav tabs -->
                <ul class="nav nav-tabs nav-justified" role="tablist" id="service_tab">
                    <li role="presentation" id="Patient" class="active"><a href="#heart_surgery" aria-controls="heart_surgery" role="tab" data-toggle="tab"><span></span> Patient </a></li>
                    <li role="presentation" id="Consultation"><a href="#dna_testing" aria-controls="dna_testing" role="tab" data-toggle="tab"><span></span> Consultation </a></li>
                    <li role="presentation" id="Archive"><a href="#gen_treatment" aria-controls="gen_treatment" role="tab" data-toggle="tab"><span></span> Archive </a></li>
                    <li role="presentation" id="rdvs"><a href="#emergency_care" aria-controls="emergency_care" role="tab" data-toggle="tab"><span></span> RDV </a></li>
                    <li role="presentation" id="Paramétres"><a href="#ear_treatment" aria-controls="ear_treatment" role="tab" data-toggle="tab"><span></span> Paramétres </a></li>
                    <li role="presentation" id="Comptabilité"><a href="#dental_care" aria-controls="dental_care" role="tab" data-toggle="tab"><span></span> Comptabilité </a></li>
                  
                    <li role="presentation" id="Statistiques"><a href="#Statis" aria-controls="Statis" role="tab" data-toggle="tab"><span></span> Statistiques </a></li>
                    <li role="presentation" id="Pharmacie"><a href="#Pharmacie" aria-controls="Pharmacie" role="tab" data-toggle="tab"><span></span> Pharmacie </a></li>
                </ul>
            </div>
        
      
                <!-- Tab panes -->
                <section class="col-md-12 col-sm-12 col-lg-12 row quick_blocks_row quick_blocks_row_home2 ">


<div class="cc-main home-panel">
<div class="home-section-container home-how-container home-max-width" id="how">
    <ul class="home-how-step-ul"> 
        
        <li class="col-sm-4" >
            <div class="home-how-step-inner">
            <div > <img style="width:150px; " src="../img/anim-ressources-bleu.gif" alt=""></div>
            <p class="home-how-step-title"> Support </p>
            <p class="home-how-step-desc">Bénéficiez en tout lieu et à toute heure d’une assistance technique et fonctionnelle.</p>
            </div>
        </li>
        
        <li class="col-sm-4" >
            <div class="home-how-step-inner">
            <div > <img style="width:150px; " src="../img/anim-services-bleu.gif" alt=""></div>
            <p class="home-how-step-title"> Services </p>
            <p class="home-how-step-desc">Offrez-vous une nouvelle expérience utilisateur ,Une expérience de navigation nouvelle, une logique d’utilisation moderne et un usage adapté au tactile.</p>
            </div>
        </li>
        
        
        
        <li class="col-sm-4" >
            <div class="home-how-step-inner">
            <div > <img style="width:70px; " src="../img/Mymedapp.png" alt=""></div>
            <p class="home-how-step-title"><span>Med Pro App</span> <small style=" font-size: 15px; "> (<a id="download">ANDROID</a>,<a>IOS</a>,<a>WindowsM</a>)</small></p>
            <p class="home-how-step-desc">Une application mobile pour gérer le flux de demandes des patients en fonction de leur urgence, enregistrer des images et des comptes rendus sans quitter la table d’examen</p>
            </div>
        </li>
    </ul>
</div>
</div>
    </section>
                </div>
         </section>
                </fieldset>
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Accueil.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
