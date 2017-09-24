<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>GCM-Configuration</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <meta name="viewport" content="width=device-width" />

	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png" />
	<link rel="icon" type="image/png" href="assets/img/favicon.png" />

	<!--     Fonts and icons     -->
	<link href="../css/font-awesome.min_1.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
	

	<!-- CSS Files -->
	<link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="../assets/css/material-bootstrap-wizard.css" rel="stylesheet" />
        <!--link href="../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" /-->
	<!-- CSS Just for demo purpose, don't include it in your project -->
	<link href="../assets/css/demo.css" rel="stylesheet" />
        <link href="../assets/css/material-dashboard.css" rel="stylesheet" />
</head>

<body>
	<div class="image-container set-full-height" style="background-image: url('../img/bg/background.jpg')">
	   

		<!--  Made With Material Kit  -->
		<a href="#" class="made-with-mk">
			<div class="brand">CM</div>
			<div class="made-with"> Gestion <strong>Cabinet Médical</strong></div>
		</a>

	    <!--   Big container   -->
	    <div class="container">
	        <div class="row">
		        <div class="col-sm-8 col-sm-offset-2">
		            <!--      Wizard container        -->
		            <div class="wizard-container">
		                <div class="card wizard-card" data-color="red" id="wizard">
		                    <form action="" method="POST">
		                <!--        You can switch " data-color="blue" "  with one of the next bright colors: "green", "orange", "red", "purple"             -->

		                    	<div class="wizard-header">
		                        	<h3 class="wizard-title">
		                        		Configurer Cabinet
		                        	</h3>
									<h5>Configurez votre Cabinet après 3 étapes .</h5>
		                    	</div>
								<div class="wizard-navigation">
									<ul>
			                            <li><a href="#details" data-toggle="tab">Informations Cabinet</a></li>
			                            <li><a href="#captain" data-toggle="tab">Informations CNAM</a></li>
			                            <li><a href="#description" data-toggle="tab">Terminer</a></li>
			                        </ul>
								</div>

		                        <div class="tab-content">
		                            <div class="tab-pane" id="details">
		                            	<div class="row">
                                                     <div >
                                                    <div class="col-sm-4">
                                                        
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                 <i class="fa fa-users" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">nom <small>(required)</small></label>
                                                                <input id="nom" name="nom" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                  <i class="fa fa-user"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">prénom <small>(required)</small></label>
                                                                <input id="prenom" name="prenom" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                                <span class="input-group-addon">
                                                                        <i class="fa fa-calendar"></i>
                                                                </span>
                                                                 <input id="datnaiss" name="datnaiss" class="form-control datepicker" type="text" >
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div >
                                                    
                                                     <div class="col-sm-4">
                                                         <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                  <i class="fa fa-cogs"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Salutation <small>(required)</small></label>
                                                                    <select id="Salutation" name="Salutation" class="form-control">
                                                                        <option value="Doctor">Doctor</option>
                                                                        <option value="Doctor">Doctor</option>
                                                                    </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                         <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                  <i class="fa fa-address-book-o"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">N°Inscription <small>(required)</small></label>
                                                                <input type="number" id="Inscription" name="Inscription" class="form-control" >
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                         <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                   <i class="fa fa-user-md"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Sépecialité <small>(required)</small></label>
                                                        <select id="Sépecialité" name="Sépecialité" class="form-control">
                                                            <option value="Anatomie pathologique">Anatomie pathologique</option>
                                                            <option value="Biologie clinique">Biologie clinique</option>
                                                            <option value="Anesthésie-réanimation">Anesthésie-réanimation</option>
                                                            <option value="Cardiologie">Cardiologie</option>
                                                            <option value="Chirurgie">Chirurgie</option>
                                                            <option value="Chirurgie orthopédique">Chirurgie orthopédique</option>
                                                            <option value="Chirurgie plastique">Chirurgie plastique</option>
                                                            <option value="Dermatologie-Vénérologie">Dermatologie-Vénérologie</option>
                                                            <option value="Gastro-entérologie">Gastro-entérologie</option>
                                                            <option value="Gériatrie">Gériatrie</option>
                                                            <option value="Gynécologie-obstétrique">Gynécologie-obstétrique</option>
                                                            <option value="Médecine d’urgence">Médecine d’urgence</option>
                                                            <option value="Médecine du travail">Médecine du travail</option>
                                                            <option value="Médecine générale">Médecine générale</option>
                                                            <option value="Médecine légale">Médecine légale</option>
                                                            <option value="Médecine physique et réadaptation">Médecine physique et réadaptation</option>
                                                            <option value="Neurochirurgie">Neurochirurgie</option>
                                                            <option value="Ophtalmologie">Ophtalmologie</option>
                                                            <option value="Oto-rhino-laryngologie">Oto-rhino-laryngologie</option>
                                                            <option value="Neurologie">Neurologie</option>
                                                            <option value="Pédiatrie">Pédiatrie</option>
                                                            <option value="Pneumologie">Pneumologie</option>
                                                            <option value="Psychiatrie">Psychiatrie</option>
                                                            <option value="Radiodiagnostic">Radiodiagnostic</option>
                                                            <option value="Radiothérapie-oncologie">Radiothérapie-oncologie</option>
                                                            <option value="Rhumatologie">Rhumatologie</option>
                                                            <option value="Stomatologie">Stomatologie</option>
                                                            <option value="Urologie">Urologie</option>
                                                            
                                                            
                                                            
                                                        </select>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="col-sm-12">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                  <i class="fa fa-map" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Adresse<small>(required)</small></label>
                                                             <textarea id="adr" name ="adr" class="form-control" rows="3" ></textarea>
                                                             
                                                             </div>    
                                                         </div>
                                                    </div>
                                                <div >
                                                    <div class="col-sm-4">
                                                         <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                 <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Ville <small>(required)</small></label>
                                                        <select id="ville" name="ville" class="form-control">
                                                        </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                     <i class="fa fa-map-signs" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Gouvernorat <small>(required)</small></label>
                                                                <select id="Gouvernorat" name="Gouvernorat" class="form-control"></select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">N°Téléphone Fixe <small>(required)</small></label>
                                                                <input id="fixe" name="fixe" type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                <div>
                                                    <div class="col-md-6">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                 <i class="fa fa-mobile" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">N°Téléphone GSM <small>(required)</small></label>
                                                                <input id="gsm" name="gsm" type="text" class="form-control" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                        <div class="col-sm-6">
                                                            <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                 <i class="fa fa-envelope-open-o"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Email Médecin <small>(required)</small></label>
                                                                <input id="email" name="email" type="email" class="form-control" >
                                                                          </div>
                                                                    </div>
                                                                </div>
                                                
                                                    </div>
                                                            <div >
                                                                <div class="col-sm-12">
                                                        <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                   <i class="fa fa-user-md" aria-hidden="true"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Titre<small> (Médecin)</small></label>
                                                                         <textarea id="Titre" name ="Titre" class="form-control" rows="3" ></textarea>
                                                                   
                                                                         </div>    
                                                                     </div>
                                                                    </div>
                                                                
                                                              
                                                                
                                                        </div>
		                            	</div>
		                            </div>
		                            <div class="tab-pane" id="captain">
		                                <h4 class="info-text">Médecin Conventionné avec CNAM </h4>
		                                <div class="row">
		                                       <div >
                                                            <div class="col-sm-6">
                                                                     <div class="input-group ">
                                                            <span class="input-group-addon">
                                                                   <i class="fa fa-hospital-o"></i>
                                                            </span>
                                                            <div class="form-group label-floating">
                                                                <label class="control-label">Type Consultation </label>
                                                                    <select id="Type" name="Type" class="form-control select2-bootstrap-append">
                                                                        <option value> </option>
                                                                        <option value="Consultation">Consultation</option>
                                                                        <option value="Consultation Spécialiste">Consultation Spécialiste</option>
                                                                        <option value="Consultation Neuro/Psy">Consultation Neuro/Psy</option>
                                                                    </select>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                        <div class="input-group ">
                                                                        <span class="input-group-addon">
                                                                               <i class="fa fa-barcode" aria-hidden="true"></i>
                                                                        </span>
                                                                        <div class="form-group label-floating">
                                                                            <label class="control-label">Code Conventionnel</label>
                                                                                <input id="Code" name="Code" type="text" class="form-control" >
                                                                             
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                        </div>
                                                        <div >
                                                             <div class="col-sm-4">
                                                               <div class="input-group ">
                                                                    <span class="input-group-addon">
                                                                            <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                    </span>
                                                                    <div class="form-group label-floating">
                                                                        <label class="control-label">Tiket Modérateur(%)</label>
                                                                            <input id="Tiket" name="Tiket" type="number" class="form-control" value="0" >

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="input-group ">
                                                                    <span class="input-group-addon">
                                                                            <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                    </span>
                                                                    <div class="form-group label-floating">
                                                                        <label class="control-label">TVA Consultation(%)</label>
                                                                                <input id="TVA" name="TVA" type="number" class="form-control" value="0" >

                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div class="col-sm-4">
                                                                    <div class="input-group ">
                                                                    <span class="input-group-addon">
                                                                           <i class="fa fa-anchor" aria-hidden="true"></i>
                                                                    </span>
                                                                    <div class="form-group label-floating">
                                                                        <label class="control-label">Montant Consultation</label>
                                                                            <input id="Montant" name="Montant" type="number" class="form-control" value="0"  >
                                                                                                   
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </div>
		                                </div>
		                            </div>
		                            <div class="tab-pane" id="description">
                                                <div class="row" >
		                                    <h1 class="text-center text-success" style="padding-top: 50px;"><i class="fa fa-check"></i> Terminer!
									<br>
									<small>Paramètres de configuration terminé</small></h1>
		                                </div>
		                            </div>
		                        </div>
	                        	<div class="wizard-footer">
	                            	<div class="pull-right">
	                                    <input type='button' class='btn btn-next btn-fill btn-danger btn-wd' name='next' value='Next' />
	                                    <input type='button' class='btn btn-finish btn-fill btn-danger btn-wd' name='finish' value='Finish' />
	                                </div>
	                                <div class="pull-left">
	                                    <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />

										<div class="footer-checkbox">
											<div class="col-sm-12">
											  <div class="checkbox">
												  <label>
													  <input type="checkbox" name="optionsCheckboxes">
												  </label>
												  Abonnez-vous à notre newsletter
											  </div>
										  </div>
										</div>
	                                </div>
	                                <div class="clearfix"></div>
	                        	</div>
		                    </form>
		                </div>
		            </div> <!-- wizard container -->
		        </div>
	    	</div> <!-- row -->
		</div> <!--  big container -->

	    <div class="footer">
	        <div class="container text-center">
	             
	        </div>
	    </div>
	</div>
     <!--   Core JS Files   -->
	<script src="../assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
	<script src="../assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="../assets/js/jquery.bootstrap.js" type="text/javascript"></script>
        <script src="../assets/global/plugins/moment.min.js" type="text/javascript"></script>
        <script src="../assets/js/bootstrap-datetimepicker.js" type="text/javascript"></script>
	<!--  Plugin for the Wizard -->
	<script src="../assets/js/material-bootstrap-wizard.js"></script>

	<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
	<script src="../assets/js/jquery.validate.min.js"></script>
        <script src="../body_page_js/Setup_function.js?version=<%=session.getAttribute("versionJS")%>"></script>
        <script src="../body_page_js/Setup.js?version=<%=session.getAttribute("versionJS")%>"></script>
</body>
	<!--   Core JS Files   -->
	
</html>
