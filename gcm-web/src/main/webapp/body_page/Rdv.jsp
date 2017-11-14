<%-- 
    Document   : Rdv
    Created on : 7 avr. 2017, 09:56:08
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1 minimum-scale=1" />
        <title>Gestion des Rendez-Vous</title>
        <jsp:include page="../body_page/css_declare.jsp"/>
        <link rel="stylesheet" href="../js/dhtmlxscheduler/dhtmlxscheduler.css" type="text/css"/>
        <link rel="stylesheet" href="../js/dhtmlxscheduler/styles.css" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="../js/dhtmlxscheduler/dhtmlxcombo_dhx_terrace.css">
        <link rel="stylesheet" type="text/css" href="../js/dhtmlxscheduler/dhtmlxMenu/skins/dhtmlxmenu_dhx_terrace.css">
	<style type="text/css" media="screen">
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
                background: transparent;
            }
            .highlighted_timespan {
		transition: background-color 400ms;
		-moz-transition: background-color 400ms;
		-webkit-transition: background-color 400ms;
		-o-transition: background-color 400ms;
		opacity:0.4;
		filter:alpha(opacity=40);
            }
            .highlighted_timespan:hover {
                    background-color: #90ee90;
            }
        </style>
    </head>
    <body style="font-family: cursive;" >
        <!-- BEGIN PAGE BAR -->
                        <div class="page-bar" style="padding-top: 5px">
                            <ul class="page-breadcrumb">
                                <li>
                                    <i class="icon-home"></i>
                                    <a href="javascript:window.location.reload();">Home</a>
                                    <i class="fa fa-circle"></i>
                                </li>
                                <li>
                                    <i class="icon-calendar"></i>
                                    <a href="#">Rendez-Vous</a>
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
        <fieldset>
                    <legend style=" width: auto; background-color: transparent; ">
                        <h1 class="page-title" style="font-family: Courier;"> Gestion des Rendez-Vous
                            <small style=" margin-left: -15px; font-family: Courier; ">Liste des Rendez-Vous</small>
                        </h1>
                    </legend>
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
                                                                        <img id="fichelog" src="../img/weekly-calendar.png" alt="details">&nbsp; Rendez-Vous </div>
                                                    </div>
                                                        <div class="panel-body" style="height: 600px;padding: 0px;">
                                                                <!--div id="scheduler">

                                                                </div-->
                                                                
                                              <div id="scheduler_here" class="dhx_cal_container" style='width:100%; height:100%;font-family: cursive;'>
                                                    <div class="dhx_cal_navline">
                                                            <div class="dhx_cal_prev_button">&nbsp;</div>
                                                            <div class="dhx_cal_next_button">&nbsp;</div>
                                                            <div class="dhx_cal_today_button"></div>
                                                            <div class="dhx_cal_date"></div>
                                                            <div class="dhx_minical_icon" id="dhx_minical_icon" onclick="show_minical()">&nbsp;</div>
                                                            <div class="dhx_cal_tab" name="year_tab" style="right:330px;"></div>
                                                            <div class="dhx_cal_tab" name="agenda_tab" style="right:265px;"></div>
                                                            <div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div>
                                                            <div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div>
                                                            <div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>
                                                    </div>
                                                    <div class="dhx_cal_header">
                                                    </div>
                                                    <div class="dhx_cal_data">
                                                    </div>		
                                            </div>
                                                                
<!--                                                <div id="lightbox_form">
                                                    <div class="lightbox_left_section">
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="lightbox_right_section">
                                                        <input id="lightboxName" type="text" class="lightbox_text_field">
                                                    </div>
                                                    <div class="lightbox_left_section">
                                                        <label>Car</label>
                                                    </div>
                                                    <div class="lightbox_right_section">
                                                        <div class="select lightbox_select_field">
                                                            <select id="lightboxCar"></select>
                                                            <span class="select_layout"></span>
                                                        </div>
                                                    </div>
                                                    <div class="lightbox_left_section">
                                                        <label>Status</label>
                                                    </div>
                                                    <div id="lightboxStatus" class="lightbox_right_section">
                                                        <label>
                                                            <div class="radio">
                                                                <input name="status" type="radio">
                                                                <span class="radio_marker"></span>
                                                            </div>
                                                            Reservation
                                                        </label><br/>
                                                        <label>
                                                            <div class="radio">
                                                                <input name="status" type="radio">
                                                                <span class="radio_marker"></span>
                                                            </div>
                                                            Prepaid
                                                        </label><br/>
                                                        <label>
                                                            <div class="radio">
                                                                <input name="status" type="radio">
                                                                <span class="radio_marker"></span>
                                                            </div>
                                                            100% payment
                                                        </label>
                                                    </div>
                                                    <div class="lightbox_left_section">
                                                        <label>Pick Up</label>
                                                    </div>
                                                    <div id="lightboxPickUpDate" class="lightbox_right_section lightbox_date_select">
                                                        <img src="content/calendar.svg" id="lightboxFromIcon" class="date_calendar" onclick="show_minical(this, 'lightboxFromDate')"/>
                                                        <input id="lightboxFromDate" name="dateFrom" type="text" class="date_text" value="" onclick="show_minical(this, 'lightboxFromDate')"/>
                                                        <div class="select">
                                                            <select id="lightboxFromTime" name="timeFrom"></select>
                                                            <span class="select_layout"></span>
                                                        </div>
                                                    </div>
                                                    <div class="lightbox_left_section">
                                                        <label>Drop Off</label>
                                                    </div>
                                                    <div id="lightboxDropOffDate" class="lightbox_right_section lightbox_date_select">
                                                        <img src="content/calendar.svg" id="lightboxToIcon" class="date_calendar" onclick="show_minical(this, 'lightboxToDate')"/>
                                                        <input id="lightboxToDate" name="dateFrom" type="text" class="date_text" value="" onclick="show_minical(this, 'lightboxToDate')"/>
                                                        <div class="select">
                                                            <select id="lightboxToTime" name="timeFrom"></select>
                                                            <span class="select_layout"></span>
                                                        </div>
                                                    </div>
                                                    <div class="lightbox_buttons">
                                                        <div class="lightbox_left_section">
                                                            <button class="lightbox_button" onclick="delete_event()">DELETE</button>
                                                        </div>
                                                        <div class="lightbox_right_section">
                                                            <button class="lightbox_button" onclick="close_form()">CANCEL</button>
                                                            <button class="lightbox_button lightbox_button_active" onclick="save_form()">SAVE</button>
                                                        </div>
                                                    </div>
                                                </div>-->
                                                                                                      </div>
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                    </div>
                          </div>

        </fieldset>
       
       
        <jsp:include page="js_declare.jsp"/>
        <script src="../body_page_js/Rdv_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Rdv.js?version=<%=session.getAttribute("versionJS")%>"></script>
    </body>
</html>
