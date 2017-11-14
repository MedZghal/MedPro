<%@page import="java.io.Console"%>
<%@page import="java.util.Date"%>


<%
    long ts = (new Date()).getTime();
    session.setAttribute("versionJS",ts);
    
    String User = (String) session.getAttribute("user");
    if (User != null) 
    {
        out.println("<script>window.location.href='./logout.jsp';</script>");
    }
%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MedPRO -- GCM</title>
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <!-- #CSS Links -->
        <!-- Basic Styles -->
        <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/font-awesome.min.css">
     
        <link rel="stylesheet" type="text/css" media="screen" href="js/bootstrap-toastr/toastr.min.css">

        <!-- SmartAdmin Styles : Caution! DO NOT change the order -->
        <link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-production-plugins.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-production.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-skins.min.css">

        <!-- SmartAdmin RTL Support -->
        <link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-rtl.min.css"> 

        <!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->
        <link rel="stylesheet" type="text/css" media="screen" href="css/demo.min.css">

        <!-- page related CSS -->
        <link rel="stylesheet" type="text/css" media="screen" href="css/lockscreen.min.css">
           <link rel="stylesheet" type="text/css" media="screen" href="css/login.css">

        <!-- #FAVICONS -->
        <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
        <link rel="icon" href="img/favicon/favicon.ico" type="image/x-icon">
    </head>
     
 <body class="login" style="font-family: cursive">
        
        
       
            <!-- BEGIN LOGIN FORM -->
             <div class="lockscreen animated flipInY">
                 <!-- BEGIN LOGO -->
				<div class="logo">
					<h1 class="semi-bold"><img src="img/logo-o.png" alt="" /> SE CONNECTER </h1>
                                        <img class="logResponse pull-right" src="./img/log4.png" alt="" >
				</div>
                 
                 <!-- END LOGO -->
        <!-- BEGIN LOGIN -->
        <div style="background: url(img/bg-white-lock.png) repeat;border-width: 3px;">
					<img src="img/avatars/doctor.jpg" alt="" width="120" height="120" />
                                        <div>
						<h1>
                                                    <i class="fa fa-user fa-3x text-muted air air-top-right hidden-mobile"></i>
                                                </h1>
                                                <div class="input-group">
                                                    <input id="user" class="form-control" type="text" placeholder="Nom d'utilisateur">
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-primary" disabled>
                                                            <i class="fa fa-user"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <br>
                                                <% String var = request.getParameter("var");
                                                    if (var != null) 
                                                {%>
                                                <div id="captcha">
                                                </div>
                                                <br>
                                                <%  
                                                }%>
                                                <div class="input-group">
                                                    <input id="password" class="form-control" type="password" placeholder="Mot de passe">
                                                    
                                                      
                                                    
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-primary" disabled>
                                                            <i class="fa fa-key"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="submit" class="btn btn-primary" style="margin-left: 55%;"  >
                                                    Connexion
                                                </button>
					</div>
                          </div>
                          <!-- BEGIN COPYRIGHT -->
				<div  class="copyright">
					Copyright Perfect Solution 2017.
                                </div>
                         
                </div>
        <!-- END LOGIN -->
		<!-- BOOTSTRAP JS -->    
                <!--<script src="body_page_js/acceuil_function.js?version=<%=session.getAttribute("versionJS")%>"></script>-->
                <script src="js/jquery/jquery.min.js"></script>
                <script src="js/jquery/jquery-ui.min.js"></script>
                <script src="js/notification/SmartNotification.min.js"></script>
                
                <script src="js/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
                <script src="js/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
                <script src="js/captcha.js"></script>
                <script src="js/md5.js"></script>
                <script src="index.js?version=<%=session.getAttribute("versionJS")%>"></script>
                <%
                   session.setAttribute("user", request.getParameter("user"));
                    if (var != null) 
                {%>
                    <script type="text/javascript">sjcap();</script>
                <%  
                }%>
   
                                                 
       </body>