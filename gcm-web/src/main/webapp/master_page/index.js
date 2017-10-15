/* global TextResizeDetector */

$.fn.fileInputThemes='fa';
moment.locale('fr');
var DataChange ="false";
 var Consults=[];
 var paramater;
 var index=1;
 var option=  toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

jQuery.fn.liScroll = function(settings) {
        settings = jQuery.extend({
        travelocity: 0.07
        }, settings);        
        return this.each(function(){
                var $strip = jQuery(this);
                $strip.addClass("newsticker");
                var stripWidth = 1;
                $strip.find("li").each(function(i){
                stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
                });
                var $mask = $strip.wrap("<div class='mask'></div>");
                var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");                                
                var containerWidth = $strip.parent().parent().width();    //a.k.a. 'mask' width     
                $strip.width(stripWidth);            
                var totalTravel = stripWidth+containerWidth;
                var defTiming = totalTravel/settings.travelocity;    // thanks to Scott Waye        
                function scrollnews(spazio, tempo){
                $strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
                }
                scrollnews(totalTravel, defTiming);                
                $strip.hover(function(){
                jQuery(this).stop();
                },
                function(){
                var offset = jQuery(this).offset();
                var residualSpace = offset.left + stripWidth;
                var residualTime = residualSpace/settings.travelocity;
                scrollnews(residualSpace, residualTime);
                });            
        });    
};

$(function () {
/*init*/
  
                
    $("#sidemenu").attrchange({
        trackValues: true, // set to true so that the event object is updated with old & new values
        callback: function(evnt) {
            if(evnt.attributeName === "class") { // which attribute you want to watch for changes
                if(evnt.newValue.search(/page-sidebar-menu-closed/i) === -1) { // "open" is the class name you search for inside "class" attribute
                    $("#logoImgChange").empty().append('<div id="logopub" style="margin-top: -24px;margin-left: -30px;margin-right: -17px;margin-bottom: -20px;">'+
                                            '<ul id="ticker03" >'+
                                            '<li ><a href="#"><img src="../img/1.png" alt="" style="width: 200px"></a></li>'+
                                            '<li ><a href="#"><img src="../img/2.png" alt="" style="width: 200px"></a></li>'+
                                            '<li ><a href="#"><img src="../img/3.png" alt="" style="width: 200px"></a></li>'+
                                           ' </ul>'+
                                        '</div>');
                        $("ul#ticker03").liScroll({travelocity: 0.05});
                        $("#logopub .tickercontainer").css({height:' 200px'});
                }else
                    $("#logoImgChange").empty().append('<img class="Rotate90"  src="../img/log4.png" alt="" style="width: 200px;margin-left: -94px;margin-top: 48px;margin-bottom: 53px;">');
            }
        }
    });

    $("ul#ticker03").liScroll({travelocity: 0.06});
    $("#logopub .tickercontainer").css({height:' 200px'});
    $("ul#ticker01").liScroll({travelocity: 0.05});
    paramater = JSON.parse(localStorage.getItem("paramater"));
    if(paramater!==null){
        
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0){
            $("#content").empty();
            $("#content").append('<iframe id="iframe_cloturee" src="../body_page/Rdv.jsp" width="100%" height="700px" frameborder="0" style="display:none" scrolling="auto"  onload="this.style.display = \'block\';"/>');
    
            $("#medecin").empty().append("Secétaire."+Secretaire.username);
            $("#ImgConnect").attr("src","../img/avatars/nurse.png");
        }
        else
        {
            $("#content").empty();
            $("#content").append('<iframe id="iframe_cloturee" src="../body_page/Accueil.jsp" width="100%" height="700px" frameborder="0" style="display:none" scrolling="auto"  onload="this.style.display = \'block\';"/>');
    
            if(paramater.codeMedTrit.codeMedTrit===1){
                $("#ImgConnect").attr("src","../img/avatars/adminlog.png");
                $("#medecin").empty().append("Administrateur");
            }else
            {
                $("#ImgConnect").attr("src","../img/avatars/doctor-.png");
                $("#medecin").empty().append("Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin);
            }
        }
        RefreshListeAttente();
        RefreshListeRdvAujourdHui();
        RefreshListeDossierPar();
        $("#datedepense").val(GetDateServeur());
    }
/*end*/


/*commande*/
    $("#confirmer").click(function (){
                   EngConsult(localStorage.getItem("numFichPatient"),localStorage.getItem("typeConsult"),"#anuulerEng");
                    });
                    
    $("#confirmerCnam").click(function (){
                   EngConsult(localStorage.getItem("numFichPatient"),localStorage.getItem("typeConsult"),"#anuulerEngCnam");
                    });
    
    $("#confirmerdepense").click(function (){
        handleValidationModalDepense();
        console.log($('#datedepense').val());
        if($('#modalDepenseForm').valid()){
            var Err=AjRecette($("#prixdepense").val(),$('#datedepense').val(),$("#libelledepense").val(),$("#typedepenses").val(),"0","0",paramater.codeMedTrit.codeMedTrit,"","","","");
            
            if(Err.toString()==="true"){
                window.parent.$("#anuulerdepense").trigger("click");
                window.parent.swal("Notification !", "Dépense ajouté Avec Succès. ", "success");
                $('#modalDepenseForm')[0].reset();
                $('#iframe_cloturee').contents().get(0).location.reload();
            }else
                window.parent.swal("Notification !!!", "Erreur lors de l'insertion ", "error");
            
        }
        else
             window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
    });
    
    $("#confirmerActe").click(function (){
        handleValidationModalActe();
        if($('#modalActeForm').valid()){
            var Err=AjActe($("#libacte").val(),$('input[name=radio2]:checked', '#modalActeForm').val(),$("#Tiketacte").val(),$("#montantacte").val(),"",$("#Cotationacte").val(),"CNAM");
            
            if(Err.toString()==="true"){
                window.parent.$("#anuulerActe").trigger("click");
                window.parent.swal("Notification !", "Acte ajouté Avec Succès. ", "success");
                $('#modalActeForm')[0].reset();
                //$('#iframe_cloturee').contents().get(0).location.reload();
                var acte =GetListActe();
                remplir_Acte(acte,$('#iframe_cloturee').contents().find("#acte"));          
                remplir_libacte(acte,$('#iframe_cloturee').contents().find("#libacte"));   
                localStorage.setItem("ActeCnam",JSON.stringify(acte));
            }else
                window.parent.swal("Notification !!!", "Erreur lors de l'insertion ", "error");
            
        }
        else
             window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
    });
    
    $("#confirmerMedicmodal").click(function (){
        handleValidationMedicmodal();
        if($('#modalmedicForm').valid()){
            var Err=AjMedic($("#desigcMedic").val(),$("#prixmedic").val(),$('input[name=radio2]:checked', '#modalmedicForm').val(),$('input[name=radio1]:checked', '#modalmedicForm').val(),$("#medicdci").val());
           
            if(Err.toString()==="true"){
                window.parent.$("#anuulerMedicmodal").trigger("click");
                window.parent.swal("Notification !", "Acte ajouté Avec Succès. ", "success");
                $('#modalmedicForm')[0].reset();
                $('#iframe_cloturee').contents().get(0).location.reload();
            }else
                window.parent.swal("Notification !!!", "Erreur lors de l'insertion ", "error");
            
        }
        else
             window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
    });
    
    $("#logout").click(function (){
        window.parent.$.SmartMessageBox({
                    title : '<i class="fa fa-sign-out txt-color-orangeDark"></i>  Se déconnecter !',
                    content : "Vous pouvez améliorer votre sécurité plus loin après avoir fermé la session en fermant le navigateur ouvert",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                            window.location.href="../index.jsp";
                        }
                        
                        if (ButtonPressed === "Annuler") {
                                
                        }
                            
                });
    });
    
    $("#deleteallSalle").click(function (){
        window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Êtes-vous sûr d'enlever tous les patients de la liste d'attente",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppAllSalleAttente(paramater.codeMedTrit.codeMedTrit);
                                     if(Err.toString()==="true"){
                                        RefreshListeAttente();
                                        toastr.success("Attention, Patients enlever Avec Succès!.",'success',option);
                                }else
                                    toastr.error("Attention,La liste est Vide. !!!.",'Error',option);
                                    
                                
                            }
                            
                });
    });
    
    $("#confirmerconsultpatient").click(function (){
        if($("#select2-patient2").val()!==null)
            CallConsult($("#select2-patient2").val());
        else
            window.parent.toastr.error("il faut choisir un patient d'abord?",'Error',option);
    });
    
    $("#confirmercontrole").click(function (){
        if($("#select2-patient1").val()!==null){
            var Consults =GetListConsultationByPatient($("#select2-patient1").val());
            if(Object.keys(Consults).length>0){
                var dateconsult =Consults[(Consults.length-1)].dateConsult;
                var type="Contrôle Pour Consultation "+VerifDateDD_MM_YYYY(dateconsult);
                    $("#anuulercontrole").trigger("click");
                    localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                    localStorage.setItem("Prescp",JSON.stringify([]));
                    localStorage.setItem("Ordonnance","false");
                    localStorage.setItem("UpdateConsult","false");
                    localStorage.setItem("Consults",JSON.stringify(Consults));
                    localStorage.setItem("typeConsult",type);
                    localStorage.setItem("numFichPatient",$("#select2-patient1").val());
                    $('#iframe_cloturee').contents().get(0).location.href="../body_page/Consultation.jsp";
                    $("#select2-patient1").empty().trigger('change');
            }else
                window.parent.toastr.error("Ce patient n'a pas de consultation?",'Error',option);
        }else
            window.parent.toastr.error("il faut choisir un patient d'abord?",'Error',option);
    });
    
    $("#Npatient1").click(function (){
        $("#anuulercontrole").trigger("click");
        if(!window.parent.$("#menuback").hasClass('hide'))
            window.parent.$("#menuback").toggleClass('hide');
        localStorage.setItem("Consultation","false");
        localStorage.setItem("Update","false");
        $('#iframe_cloturee').contents().get(0).location.href='../body_page/AjPatient.jsp';
    });
    
    $("#Npatient2").click(function (){
        $("#anuulerconsultpatient").trigger("click");
        if(!window.parent.$("#menuback").hasClass('hide'))
            window.parent.$("#menuback").toggleClass('hide');
        localStorage.setItem("Consultation","false");
        localStorage.setItem("Update","false");
        $('#iframe_cloturee').contents().get(0).location.href='../body_page/AjPatient.jsp';
    });
    
      var NumPatientSelected;
        window.parent.$("#select2-patient1").on("select2:select", function(e) { 
            NumPatientSelected=$(e.currentTarget).val(); 
        });
        window.parent.$("#select2-patient2").on("select2:select", function(e) { 
            NumPatientSelected=$(e.currentTarget).val(); 
        });
        
        $(document).on('mouseup', '.select2-container--open .select2-results__option #suppPatientArch', function () {
            
             window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Êtes-vous sûr de Supprimer ce Patient?.",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                                
                               var Err= SuppPatient(NumPatientSelected);
                               
                                if(Err.toString()==="true"){
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                    $("#anuulerconsultpatient").trigger("click");
                                    $("#anuulercontrole").trigger("click");
                                    $('#iframe_cloturee').contents().get(0).location.reload();
                                }else
                                    toastr.error("Attention, Ce patient à des consultations!.",'Error',option);
                                
                                    
                        }
                        
                            
                });
            
        });
         
        $(document).on('mouseup', '.select2-container--open .select2-results__option #modifPatientArch', function () {
            
            ModiferPatient(NumPatientSelected);
            $("#anuulerconsultpatient").trigger("click");
            $("#anuulercontrole").trigger("click");
        });
        
        $('#Accesmodal').on('shown', function () {
            ListeChargeUtil();
            var select_html="<option value></option>";
            if(paramater.codeMedTrit.codeMedTrit===1){
                 select_html+="<option value='Medecin'>Medecin</option>";
                 //select_html+="<option value='Secretaire'>Secretaire</option>";
            }else
                select_html+="<option value='Secretaire'>Secretaire</option>";
            
                $("#Type").empty().append(select_html);
          });
        
        $("#submitacces").click(function (){
            var Err;
            $('#FormVALUtilisateur').data('validator', null);
            handleValidationModalUtilisateur();
            if($('#FormVALUtilisateur').valid()){
                    if($('#Type').val().toString()==="Secretaire"){
                        var min =GetMinUtilisateur();
                        if(min>-1)
                            min=0;
                     Err=AjUtilisateur($('#Login').val(),$('#Passe').val(),$('#Type').val(),min-1,paramater.codeMedTrit.codeMedTrit);
                    }else
                     if($('#Type').val().toString()==="Medecin"){
                         var Max=GetMaxUtilisateur();
                         Err=AjUtilisateur($('#Login').val(),$('#Passe').val(),$('#Type').val(),Max+1,1);
                     }

                    if(Err.toString()==="true"){
                        toastr.success("Attention, Utilisateur Ajouté Avec Succès!.",'success',option);
                        $('#Login').val('');$('#Passe').val('');$('#Type').empty();
                        ListeChargeUtil();
                    }else
                        toastr.error("Attention, Error lors de la insertion!.",'Error',option);
            }
             else
                 window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
        });
        
/*end*/
 
});

function CallConsulttAtt(patient){
    $("#salleAttBtt")[0].click();
    CallConsult(patient);
}
function CallConsult(patient){
    var Consults =GetListConsultationByPatient(patient);
        var type="Consultation";
        
        if(Object.keys(Consults).length>0){
                        $("#anuulerconsultpatient").trigger("click");
                        localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                        localStorage.setItem("Prescp",JSON.stringify([]));
                        localStorage.setItem("Ordonnance","false");
                        localStorage.setItem("UpdateConsult","false");
                        localStorage.setItem("Consults",JSON.stringify(Consults));
                        localStorage.setItem("typeConsult",type);
                        localStorage.setItem("numFichPatient",patient);
                        $('#iframe_cloturee').contents().get(0).location.href="../body_page/Consultation.jsp";
                        $("#select2-patient2").empty().trigger('change');

        }else{
                $("#anuulerconsultpatient").trigger("click");
                localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                localStorage.setItem("Prescp",JSON.stringify([]));
                localStorage.setItem("Ordonnance","false");
                localStorage.setItem("UpdateConsult","false");
                localStorage.setItem("Consults",JSON.stringify([]));
                localStorage.setItem("typeConsult","Consultation");
                localStorage.setItem("numFichPatient",patient);
                $('#iframe_cloturee').contents().get(0).location.href="../body_page/Consultation.jsp";
                $("#select2-patient2").empty().trigger('change');
            }
}
function AjRecette(total,date_trans,libelle,type_depense,num_consult,num_patient,code_med_trait,tiers,codeActe,tiketModérateur,cnam)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjRecette&total="+total+"&date_trans="+date_trans+"&libelle="+libelle+"&type_depense="+type_depense+"&num_patient="+num_patient+"&num_consult="+num_consult+"&code_med_trait="+code_med_trait+"&tiers="+tiers+"&tiketModérateur="+tiketModérateur+"&codeActe="+codeActe+"&cnam="+cnam,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListPatientByFichPatient(code_Med_Trit, NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListPatientByFichPatient&code_Med_Trit="+code_Med_Trit+"&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjPatientByMedecin(code_Med_Trit,num_patient,partage)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjPatientByMedecin&code_Med_Trit="+code_Med_Trit+"&num_patient="+num_patient+"&partage="+partage,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function UpdateMedecinPartage(code_Med_Trit, num_patient,partage)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=UpdateMedecinPartage&code_Med_Trit="+code_Med_Trit+"&num_patient="+num_patient+"&partage="+partage,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppPartage(code_Med_Trit,num_patient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppPartage&code_Med_Trit="+code_Med_Trit+"&num_patient="+num_patient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetParemetre(codeMedTrit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetParemetre&codeMedTrit="+codeMedTrit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetRecettebyMedecin(code_med_trait)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetRecettebyMedecin&code_med_trait="+code_med_trait,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetRecettebyMedecinDate(code_med_trait,d1,d2)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetRecettebyMedecinDate&code_med_trait="+code_med_trait+"&dateAu="+d1+"&datedu="+d2,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetRecetteCnambyMedecinDate(code_med_trait,d1,d2)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetRecetteCnambyMedecinDate&code_med_trait="+code_med_trait+"&dateAu="+d1+"&datedu="+d2,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function RefreshListeRdvAujourdHui(){
    var listeRdvAujourd =GetListRdvByADate(paramater.codeMedTrit.codeMedTrit);
        window.parent.$("#notificationExRdv").empty().append("Vous avez des Rendez-vous aujourd'hui");
        window.parent.$("#nbrdvAujoud").empty().append(listeRdvAujourd.length);
        if(listeRdvAujourd.length>0)
            addListeRdvAujourdHui(listeRdvAujourd);
        else{
            window.parent.$("#notificationExRdv").empty().append("Pas de rendez-vous pour Aujourd'hui.");
            window.parent.$("#ListeRdvAujourdHui").empty();
        }
}

function RefreshListeDossierPar(){
    var ListeDossierPar =GetListDossierParByMedecin(paramater.codeMedTrit.codeMedTrit);
        window.parent.$("#notificationExPar").empty().append(ListeDossierPar.length +" Dossiers Partagé");
        window.parent.$("#nbDossierPar").empty().append(ListeDossierPar.length);
        if(ListeDossierPar.length>0)
            addListeDossierPar(ListeDossierPar);
        else{
            window.parent.$("#notificationExPar").empty().append("Pas de dossier partagé.");
            window.parent.$("#ListeDossierPar").empty();
        }
}

function RefreshListeAttente(){
    var listeAttente =GetListSallebyCodeMedTrit(paramater.codeMedTrit.codeMedTrit);
        window.parent.$('#nblisteattende').empty().append(listeAttente.length);
        addListeAttendeWS(listeAttente);
}
function toggleChat(){
    window.parent.$("#quick_sidebar_tab_1").toggleClass("page-quick-sidebar-content-item-shown");
}
function addListeAttendeWS(eventObjMenu){
    var listeAttende="";
    var tab =[];
    $.each(eventObjMenu,function (i){
        tab.push({
            'numligneAttend':eventObjMenu[i].numligneAttend,
            'numRdv':eventObjMenu[i].numRdv.numRDV,
            'numPatient':eventObjMenu[i].numRdv.fichPatient.fichPatientPK.numPatient
        });
        listeAttende+='<li class="media" onclick="CallConsulttAtt('+eventObjMenu[i].numRdv.fichPatient.fichPatientPK.numPatient+')">';
        listeAttende+='<div class="pull-right">';
        listeAttende+='<small>'+eventObjMenu[i].numRdv.startDate.hour+':'+eventObjMenu[i].numRdv.startDate.minute+'</small>&nbsp;';
        listeAttende+='<a class="pull-right" href="javascript:SuppSalleAttentes('+eventObjMenu[i].numligneAttend+');"><img class="media-object" src="../img/delete.png" style="width: 20px; position: relative; " alt="..."></a></div>';
        listeAttende+='<img onclick="toggleChat();" class="media-object" src="'+ImgProfile(eventObjMenu[i].numRdv.fichPatient.patient.datenaiss,eventObjMenu[i].numRdv.fichPatient.patient.sexe)+'" alt="...">';
        listeAttende+='<div class="media-body">';                                          
        listeAttende+='<h4 class="media-heading"> Rendez-Vous N°'+eventObjMenu[i].numRdv.numRDV+'</h4> ';                                       
        listeAttende+='<div class="media-heading-sub">'+eventObjMenu[i].numRdv.descpRDV+'</div>';                                        
        listeAttende+='</div></li>';  
    });
    localStorage.setItem('listeAttend',JSON.stringify(tab));
    window.parent.$("#listeDattende").empty().append(listeAttende);
    
                                        
}

function addListeRdvAujourdHui(rdv){
    var listeAttende="";
    $.each(rdv,function (i){                                                    
    listeAttende+='<li><a href="#">';
    listeAttende+='<span class="photo">';
    listeAttende+='<img src="'+ImgProfile(rdv[i].fichPatient.patient.datenaiss,rdv[i].fichPatient.patient.sexe)+'" class="img-circle" alt=""> </span>';
    listeAttende+='<span class="subject">';
    listeAttende+='<span class="from"> '+rdv[i].typeRDV+'</span>';                                          
    listeAttende+='<span class="time">'+rdv[i].startDate.hour+':'+rdv[i].startDate.minute+'</span></span>';                                       
    listeAttende+='<span class="message">'+rdv[i].descpRDV+'</span></a></li>';                                        
    });
    
    window.parent.$("#ListeRdvAujourdHui").empty().append(listeAttende);
                                        
}

function addListeDossierPar(DossierPar){
    var listeDossierPar="";
    var cnam="", apci ="" , AutreAurr="";
    $.each(DossierPar,function (i){                                                    
    listeDossierPar+='<li><a href="#">';
    listeDossierPar+='<span class="photo">';
    listeDossierPar+='<img src="'+ImgProfile(DossierPar[i].datenaiss,DossierPar[i].sexe)+'" class="img-circle" alt=""> </span>';
    listeDossierPar+='<span class="subject">';
    var partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,DossierPar[i].numFichPatient);
    cnam="";
    apci ="" ;
    AutreAurr="";
    if(DossierPar[i].dassurCnam !== null)
        cnam ="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
    if(DossierPar[i].codeApci !== "")
        apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
    if(DossierPar[i].autreAssur !== "")
        AutreAurr =AutreAssurImg(DossierPar[i].autreAssur);
    
    listeDossierPar+='<span class="from">Patient N° '+DossierPar[i].numFichPatient+'</span>';                                          
    listeDossierPar+='<span class="time">'+cnam +" "+apci+" "+AutreAurr+'</span></span>';                                       
    listeDossierPar+='<span class="message">'+"Nom et Prénom "+DossierPar[i].nom+' '+DossierPar[i].prenom+'<br>'+partage +'</span></a></li>';                                        
    });
    
    window.parent.$("#ListeDossierPar").empty().append(listeDossierPar);
                                        
}

function GetListUtilisateur()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetListUtilisateur",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function ListeChargeUtil(){
    var liste_Util;
    if(paramater.codeMedTrit.codeMedTrit===1)
        liste_Util=GetListUtilisateur();
    else
        liste_Util= GetListUtilisateurByMedecin(paramater.codeMedTrit.codeMedTrit);
               
    $("#nbUtilisateurs").empty().append(liste_Util.length);
    RemplirUtilisateurs(liste_Util);
    treeRefresh();
}

function GetMinUtilisateur()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetMinUtilisateur",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetMaxUtilisateur()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetMaxUtilisateur",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListSallebyCodeMedTrit(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListSallebyCodeMedTrit&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppAllSalleAttente(num_medc_trait)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppAllSalleAttente&num_medc_trait="+num_medc_trait,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListRdvByADate(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListRdvByADate&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppSalleAttente(num_ligneAttend)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppSalleAttente&num_ligneAttend="+num_ligneAttend,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppSalleAttentes(num_ligneAttend){
                $.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Êtes-vous sûr d'enlever ce patient de la liste d'attente",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppSalleAttente(num_ligneAttend);
                                     if(Err.toString()==="true"){
                                        RefreshListeAttente();
                                        toastr.success("Attention, Patient Supprimé Avec Succès!.",'success',option);
                                }else
                                    toastr.error("Attention, Suppression interdite !!!.",'Error',option);
                                    
                                
                            }
                        });    
}

function AjUtilisateur(username, pass, type_util,code_Med_Trit,secretaire)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=update&function=AjUtilisateur&username="+username+"&pass="+pass+"&type_util="+type_util+"&code_Med_Trit="+code_Med_Trit+"&secretaire="+secretaire,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjMedic(desg, prix, generique, catg, codDci)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjMedic&desg="+desg+"&prix="+prix+"&generique="+generique+"&catg="+catg+"&codDci="+codDci,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppUtilisateur(username)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=update&function=SuppUtilisateur&username="+username,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppUtilisateurBySec(secretaire)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=update&function=SuppUtilisateurBySec&secretaire="+secretaire,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetUtilisateurbyUsername(username)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetUtilisateurbyUsername&username="+username,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppParametre(id)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=update&function=SuppParametre&id="+id,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppParametreBycode_Med_Trit(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=update&function=SuppParametreBycode_Med_Trit&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListConsultationByMedecin(numMedecinTrait)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListConsultationByMedecin&numMedecinTrait="+numMedecinTrait,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListRdvByNumMedecin(numMedecinTrait)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListRdvByNumMedecin&numMedecinTrait="+numMedecinTrait,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjSalle_Attente(num_patient,num_rdv,num_medc_trait,note)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjSalle_Attente&num_patient="+num_patient+"&num_rdv="+num_rdv+"&num_medc_trait="+num_medc_trait+"&note="+note,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function ModifierUtilisateur(username){
    var ob=username.split(',');
    $("#Login").val(ob[0]);
    $("#Passe").val(ob[1]);
    $("#Type").val(ob[2]);
}

function SuppUtilisateurs(username){
//    console.log(paramater);
                $.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Utilisateur",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var util =GetUtilisateurbyUsername(username);
                                    var Err =SuppUtilisateur(username);
                                     if(Err.toString()==="true"){
                                         if(util.type ==="Medecin"){
                                             SuppParametreBycode_Med_Trit(util.codeMedTrit);
                                             SuppUtilisateurBySec(util.codeMedTrit);
                                         }
                                        ListeChargeUtil();
                                        toastr.success("Attention, Utilisateur Supprimé Avec Succès!.",'success',option);
                                }else
                                    toastr.error("Attention, Suppression interdite !!!.",'Error',option);
                                    
                                
                            }
                        });    
}


function RemplirUtilisateurs(utilisateurs){
    var tree_html="";
   tree_html+='<div class="row" style="font-family: cursive;">';
   $.each(utilisateurs, function (i){
       if(utilisateurs[i] !== null){
           var util =JSON.stringify(utilisateurs[i]);
            tree_html+='<div class="col-md-12" >';
            tree_html+='<div class="pull-right" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="#" onclick="ModifierUtilisateur(\'' + utilisateurs[i].username+ ','+utilisateurs[i].pass+','+utilisateurs[i].type+'\')"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="#" onclick="SuppUtilisateurs(\'' + utilisateurs[i].username + '\')"><i class="icon-trash"></i></a></div>';
            
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem" >';
            if(utilisateurs[i].codeMedTrit>0)
            tree_html+=' <span  style="width: 95%;style="font-family: cursive;""><i class="fa fa-lg fa-key"></i> Dr.'+utilisateurs[i].username+'</span>';
        else
            tree_html+=' <span  style="width: 95%;style="font-family: cursive;""><i class="fa fa-lg fa-key"></i> Secrétaire.'+utilisateurs[i].username+' (N° :'+utilisateurs[i].secretaire+')</span>';
        
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem" style="display:none;">';
            tree_html+='<span class="label label-success" ><i class="fa fa-lg fa-minus-circle"></i>Mot de Passe : '+utilisateurs[i].pass+'</span>';
           
            tree_html+='</li></ul></li></ul></li></ul></div></div>';    
        }
   });
   tree_html+='</div>';
   $("#listeUtilisateurs").empty().append(tree_html); 
}


function GetListUtilisateurByMedecin(secretaire_medecin)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetListUtilisateurByMedecin&secretaire_medecin="+secretaire_medecin,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetUtilisateurbyCodeMedTrit(codeMedTrit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetUtilisateurbyCodeMedTrit&codeMedTrit="+codeMedTrit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function  ModiferPatient(num_patient){
    localStorage.setItem("Update","true");
               localStorage.setItem("Consultation","false");
               localStorage.setItem("numFichPatient",num_patient);
               $('#iframe_cloturee').contents().get(0).location.href='../body_page/AjPatient.jsp';
}


function DeletePatient(num_patient){
        window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Patient",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                                
                               var Err= SuppPatient(num_patient);
                               
                                if(Err.toString()==="true"){
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Ce patient à des consultations", "error");
                                
                        }
                        
                            
                });
}

function formatRepo(repo) {
            if (repo.loading) return repo.text;
            var markup='<div class="pull-right" style="overflow-x:visible;"><a class="btn  btn-icon-only btn-default" id="modifPatientArch" ><i class="icon-wrench"></i></a> <a class="btn  btn-icon-only red" style="background-color: #e7505a;" id="suppPatientArch"  ><i style=" margin-left: -1px; " class="icon-close"></i></a></div>';
             markup += "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__avatar'><img src='" + ImgProfile(repo.datenaiss,repo.sexe) + "' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>"+repo.numFichPatient+ "</div>";

            if (repo.numFichPatient) {
                markup += "<div class='select2-result-repository__description'>" + repo.nom  +" "+ repo.prenom;
                 if(repo.assurCnam !== null)
                        markup +="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(repo.codeApci !== "")
                        markup +="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(repo.autreAssur !== "")
                        markup +=AutreAssurImg(repo.autreAssur);
                markup += "</div>";
            }

            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> Fixe : " + repo.fixe + " </div>" +
                "<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> Gsm : " + repo.gsm + " </div>" +
                "<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> Profession : " + repo.profession + " </div>" +
                "</div>" +
                "</div></div>";

            return markup;
    }

function formatRepoSelection(repo) {
            return repo.numFichPatient || repo.text;
        }
        
function GetListPatientByMedecin(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListAllPatientByMedecin(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListAllPatientByMedecin&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}
function GetListDossierParByMedecin(code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListDossierParByMedecin&code_Med_Trit="+code_Med_Trit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppPatient(idpatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppPatient&num="+idpatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}


function SuppConsultation(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppConsultation&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppOrdonnance(num_ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppOrdonnance&num_ord="+num_ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppActeMedicaux(num_acte, num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppActeMedicaux&num_acte="+num_acte+"&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListActeMedicauxNonRembByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActeMedicauxNonRembByNumConsult&NumConsult="+NumConsult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListActeMedicauxAllByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActeMedicauxAllByNumConsult&NumConsult="+NumConsult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListPrescriptionOrdByNumOrd(Num_Ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListPrescriptionOrdByNumOrd&Num_Ord="+Num_Ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListFile(patient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListFile&patient="+patient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetPatientByNumFichPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetPatientByNumFichPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetTraitementAPCIByNumPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetTraitementAPCIByNumPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function RemplirAntecedents(numFichPatientConsult){
    
             antecedents =GetListAntecedentsByPatient(numFichPatientConsult);
             
                 $('#antMedic').tagsinput('removeAll');
                 $('#antch').tagsinput('removeAll');
                 $('#antFami').tagsinput('removeAll');
                 $('#antAllg').tagsinput('removeAll');
                 $('#triApci').tagsinput('removeAll');
             if(Object.keys(antecedents).length>0){
                 $.each(antecedents, function (i){
                     var type =antecedents[i].typeAntced;
                     if(type ==="Médicaux")
                             $("#antMedic").tagsinput('add',antecedents[i].descripAntced);
                     else
                         if(type ==="Chirurgicaux")
                             $("#antch").tagsinput('add',antecedents[i].descripAntced);
                     else
                         if(type ==="Familiaux")
                             $("#antFami").tagsinput('add',antecedents[i].descripAntced);
                     else
                             $("#antAllg").tagsinput('add',antecedents[i].descripAntced);
                 });
             }
}

function GetListAntecedentsByPatient(patient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListAntecedentsByPatient&patient="+patient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetUrl(){
    var url =window.location.href;
    var localhost =url.substring(7,url.lastIndexOf('/gcm-web'));
    return localhost;
}
function GenerateCode(codeActe){
    var code="TRAIT",zero="";
    
    if (codeActe.length<5){
        for(i=0;i<(5-codeActe.length);i++)
            zero+="0";
        
        code+=zero+codeActe;
    }
    return code;
}

function remplir_Acte(Acte,element){
    
    var select_html="";
    $.each(Acte , function(i){
        select_html+="<option value='"+Acte[i].numActe+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+GenerateCode(Acte[i].numActe.toString())+"</option>";
    });
    element.empty().append(select_html);
    
}

function remplir_libacte(Acte,element){
    
    var select_html="";
    $.each(Acte , function(i){
        select_html+="<option value='"+Acte[i].numActe+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+Acte[i].libelle+"</option>";
    });
    element.empty().append(select_html);
    
}

function GetListActe()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActe",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}


function handleValidationModalDepense() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#modalDepenseForm');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);
        jQuery.validator.addMethod(
            "australianDate",
            function (value, element) {
              // put your own logic here, this is just a (crappy) example 
              return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
            },
            "Please enter a date in the format dd/mm/yyyy"
          );
        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                typedepenses: {
                    required: true
                },
                datedepense: {
                    required: true,
                    australianDate: true
                },
                libelledepense: {
                    required: true
                },
                prixdepense: {
                    required: true,
                    number: true
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }
    
function handleValidationModalActe() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#modalActeForm');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);

        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                libacte: {
                    minlength: 5,
                    required: true
                },
                montantacte: {
                    number: true,
                    required: true
                },
                Tiketacte: {
                    required: true,
                    number: true
                },
                Cotationacte: {
                    required: true,
                    number: true
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }
    
function handleValidationMedicmodal() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#modalmedicForm');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);

        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                desigcMedic: {
                    minlength: 5,
                    required: true
                },
                medicdci: {
                    required: true
                },
                posologie1: {
                    required: true
                },
                posologie2: {
                    required: true
                },
                posologie3: {
                    required: true
                },
                prixmedic:{
                    required: true,
                    number: true
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }
    
function handleValidationModalUtilisateur() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#FormVALUtilisateur');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);

        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                Login: {
                    minlength: 3,
                    required: true
                },
                Passe: {
                    minlength: 3,
                    required: true
                },
                Type: {
                    required: true
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }
    

function GetListActeMedicauxByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActeMedicauxByNumConsult&NumConsult="+NumConsult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjActe(libelle,accord,tiket_moder,montant,Description,cotation,type_acte)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjActe&libelle="+libelle+"&accord="+accord+"&tiket_moder="+tiket_moder+"&montant="+montant+"&Description="+Description+"&cotation="+cotation+"&type_acte="+type_acte,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppActeMedicauxbyNum_Consult(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppActeMedicauxbyNum_Consult&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function UpdateActeMedicauxbyNum_Consult(num_consult_old,num_consult_New)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateActeMedicauxbyNum_Consult&num_consult_old="+num_consult_old+"&num_consult_New="+num_consult_New,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function ImgProfile(datenaiss,sexe){
    
    var age =GetAge(datenaiss);
                    if (sexe === "Femme" )
                    {

                        if(age < 12)
                            return '../img/avatars/icon_girl-512.png';
                        else
                            if(age>=12 && age<=20)
                               return '../img/avatars/girl.png';
                       else
                            if(age>20 && age<=50)
                                return '../img/avatars/034-user-6.png';
                       else
                           return '../img/avatars/019-social-1.png';
                    }
                    else
                         {
                          if(age < 12)
                            return '../img/avatars/icon_boy-512.png';
                        else
                             if(age>=12 && age<=20)
                               return '../img/avatars/boy.png';
                            else
                                 if(age>20 && age<=50)
                                     return '../img/avatars/043-man-1.png';
                       else
                           return '../img/avatars/042-man-2.png';
                    }
}

function GetListMedicament()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListMedicament",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetListDci()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListDci",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetOrdonnanceByNum(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetOrdonnanceByNum&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function Annuler(){
     window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Annulation de Cette Consultation",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                        window.location.href='../master_page/index.jsp';
                                }
                            });
}

function treeRefresh(){
    $('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
			$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function(e) {
				var children = $(this).parent('li.parent_li').find(' > ul > li');
				if (children.is(':visible')) {
					children.hide('fast');
					$(this).attr('title', 'Expand this branch').find(' > i').removeClass().addClass('fa fa-lg fa-plus-circle');
				} else {
					children.show('fast');
					$(this).attr('title', 'Collapse this branch').find(' > i').removeClass().addClass('fa fa-lg fa-minus-circle');
				}
				e.stopPropagation();
			});
}

function GetListMotifConsultByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListMotifConsultByNumConsult&NumConsult="+NumConsult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppMotifConsultbyNum_Consult(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppMotifConsultbyNum_Consult&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function SuppPrescriptionOrdByNum_Ord(num_ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppPrescriptionOrdByNum_Ord&num_ord="+num_ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjConsultation(date_consult,num_patient,Diag_consult,type_consult,code_Med_Trit,num_examen,num_ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjConsultation&date_consult="+date_consult+"&num_patient="+num_patient+"&Diag_consult="+Diag_consult+"&type_consult="+type_consult+"&code_Med_Trit="+code_Med_Trit+"&num_examen="+num_examen+"&num_ord="+num_ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function UpdateConsultation(date_consult, num_patient, Diag_consult, type_consult,num_Consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateConsultation&num_Consult="+num_Consult+"&date_consult="+date_consult+"&num_patient="+num_patient+"&Diag_consult="+Diag_consult+"&type_consult="+type_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function UpdateConsultationOrd(num_Consult, num_ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateConsultationOrd&num_Consult="+num_Consult+"&num_ord="+num_ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function UpdateExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_plo, examen_ORL, aires_gangl, examen_abdominal, num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateExamen&TA="+TA+"&pouls="+pouls+"&temp="+temp+"&exam_phy="+exam_phy+"&etat_general="+etat_general+"&auscu_cardi="+auscu_cardi+"&auscu_plo="+auscu_plo+"&examen_ORL="+examen_ORL+"&aires_gangl="+aires_gangl+"&examen_abdominal="+examen_abdominal+"&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjOrdonnance(date_Ord,num_ord)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjOrdonnance&date_Ord="+date_Ord+"&num_ord="+num_ord,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjPrescriptionOrd(num_medc, num_ord, dure, qunt_med, nb_fois_util)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjPrescriptionOrd&num_medc="+num_medc+"&num_ord="+num_ord+"&dure="+dure+"&qunt_med="+qunt_med+"&nb_fois_util="+nb_fois_util,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjMotifConsult(num_Motif,num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjMotifConsult&num_Motif="+num_Motif+"&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AjExamen(TA, pouls, temp, exam_phy, etat_general, auscu_cardi, auscu_plo, examen_ORL, aires_gangl, examen_abdominal, num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjExamen&TA="+TA+"&pouls="+pouls+"&temp="+temp+"&exam_phy="+exam_phy+"&etat_general="+etat_general+"&auscu_cardi="+auscu_cardi+"&auscu_plo="+auscu_plo+"&examen_ORL="+examen_ORL+"&aires_gangl="+aires_gangl+"&examen_abdominal="+examen_abdominal+"&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}


function EngConsult(numFichPatient,ConsultType,button){
                   var Err="true";
                   var num_examen;
                   var paramater = JSON.parse(localStorage.getItem("paramater"));
                   var frame = $("#iframe_cloturee").contents();
                   var CptConsult=localStorage.getItem("num_conslt");
                   
                   if(localStorage.getItem('UpdateConsult')==="false"){
                   
                        Err=AjExamen(frame.find("#TA").val(),frame.find("#Pouls").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),frame.find("#Température").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),frame.find("#Exphy").val(),frame.find("#Etgeneral").val(),frame.find("#AusCar").val(),frame.find("#AusPleuro").val(),frame.find("#ExORL").val(),frame.find("#AirGan").val(),frame.find("#ExAbd").val(),CptConsult);
                   
                   
                     if(Err.toString()=== "true")
                     {
                         var Prescp=JSON.parse(localStorage.getItem("Prescp"));
                         if(Prescp.length>0){
//                             AjOrdonnance(frame.find("#date_consult").val(),CptConsult);
//                                $.each(Prescp, function (i){
//                                    AjPrescriptionOrd(Prescp[i].id,CptConsult,"",Prescp[i].quntite,Prescp[i].posologie);
//                                });
                                Err=AjConsultation(frame.find("#date_consult").val(),numFichPatient,frame.find("#Diag").val(),ConsultType,paramater.codeMedTrit.codeMedTrit,CptConsult,CptConsult);
                                }
                                else
                                    Err=AjConsultation(frame.find("#date_consult").val(),numFichPatient,frame.find("#Diag").val(),ConsultType,paramater.codeMedTrit.codeMedTrit,CptConsult,0);
                         
                         
                         var Motif =frame.find('#Motif').val().toString().split(',');
                            $.each(Motif,function (i){
                                if(Err.toString()=== "true")
                                      Err= AjMotifConsult(Motif[i],CptConsult); 
                                  else
                                      return false ;
                            });

                            

                            if(Err.toString()=== "true" ){
                                window.parent.$(button).trigger("click");
//                                console.log(ConsultType);
                                if(ConsultType.toString().includes("APCI"))
                                    var Err=AjRecette(parseInt($("#MontantCNAM").val())+parseInt($("#Tiket").val()),$('#dateConsultEngcnam').val(),"Montant Consultation","CS",CptConsult,numFichPatient,paramater.codeMedTrit.codeMedTrit,"Patient","",$("#Tiket").val(),$("#MontantCNAM").val());
                                else
                                    var Err=AjRecette($("#Honoraire").val(),$('#dateConsultEng').val(),"Montant Consultation","CS",CptConsult,numFichPatient,paramater.codeMedTrit.codeMedTrit,"Patient","","0","0");
                                /** Ref listE des consultations**/
                                Consults =GetListConsultationByPatient(numFichPatient);
                                localStorage.setItem("Consults",JSON.stringify(Consults));
                                 $.each(Consults,function (i){
                                    if(Consults[i].numConsult.toString() === CptConsult.toString())
                                    {
                                        var  conslt =Consults[i];
                                        localStorage.setItem("conslt",JSON.stringify(conslt));
                                        return false;
                                    }
                                });
                                frame.find('#HisSoins').empty().append(Consults.length);
                                window.parent.swal("Notification !", "Consultation inséré Avec Succès ", "success");
                                var containerPouls = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerPouls');
                                var containerTEMP = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerTEMP');
                                var containerPOIDS = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerPOIDS');
                                BuildCourbeConsult(Consults,containerPouls,containerTEMP,containerPOIDS);
                                localStorage.setItem("Consultation","true");
                                localStorage.setItem("UpdateConsult","true");
                                //$('#iframe_cloturee').contents().get(0).location.href="../body_page/Patient.jsp";
                            }else
                                    window.parent.swal("Notification !!!", "Erreur lors de l'insertion ", "error");

                     }
                     else
                         window.parent.swal("Notification !!!", "Erreur lors de l'insertion", "error");
                 }
                 else
                 {
                     var conslt =GetConsultationByNum(CptConsult);
                        localStorage.setItem("conslt",JSON.stringify(conslt));
                        
                        Err=UpdateExamen(frame.find("#TA").val(),frame.find("#Pouls").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),frame.find("#Température").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),frame.find("#Exphy").val(),frame.find("#Etgeneral").val(),frame.find("#AusCar").val(),frame.find("#AusPleuro").val(),frame.find("#ExORL").val(),frame.find("#AirGan").val(),frame.find("#ExAbd").val(),conslt.numConsult);
                    
                        
                        if(Err.toString()=== "true")
                        {
                            var Prescp=JSON.parse(localStorage.getItem("Prescp"));
                           
                            if(GetOrdonnanceByNum(conslt.numConsult) === null){
                                if(Prescp.length>0){
                                 AjOrdonnance(frame.find("#date_consult").val(),conslt.numConsult);
                                    $.each(Prescp, function (i){
                                        AjPrescriptionOrd(Prescp[i].id,conslt.numConsult,"","","");
                                    });
                                        UpdateConsultationOrd(conslt.numConsult,conslt.numConsult);
                                        Err=UpdateConsultation(frame.find("#date_consult").val(),numFichPatient,frame.find("#Diag").val(),ConsultType,conslt.numConsult);
                                    } 
                            }
                            else
                            {
                                if(Prescp.length>0){
                                    SuppPrescriptionOrdByNum_Ord(conslt.numConsult);
                                    $.each(Prescp, function (i){
                                        AjPrescriptionOrd(Prescp[i].id,conslt.numConsult,"","","");
                                    });
                                        Err=UpdateConsultation(frame.find("#date_consult").val(),numFichPatient,frame.find("#Diag").val(),ConsultType,conslt.numConsult);
                                    } 
                            }
                         
                         var Motif =frame.find('#Motif').val().toString().split(',');
                         Err=SuppMotifConsultbyNum_Consult(conslt.numConsult);
                            $.each(Motif,function (i){
                                if(Err.toString()=== "true")
                                      Err= AjMotifConsult(Motif[i],conslt.numConsult); 
                                  else
                                      return false ;
                            });

                            

                            if(Err.toString()=== "true" ){
                                window.parent.$(button).trigger("click");
                               
                                /** Ref listE des consultations**/
                                Consults =GetListConsultationByPatient(numFichPatient);
                                localStorage.setItem("Consults",JSON.stringify(Consults));
                                frame.find('#HisSoins').empty().append(Consults.length);
                                window.parent.swal("Notification !", "Consultation Modifié Avec Succès ", "success");
                                var $container = $('<div>').appendTo(document.body);
                                var containerPouls = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerPouls');
                                var containerTEMP = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerTEMP');
                                var containerPOIDS = document.getElementById('iframe_cloturee').contentWindow.document.getElementById('containerPOIDS');
                                BuildCourbeConsult(Consults,containerPouls,containerTEMP,containerPOIDS);
                            }else
                                    window.parent.swal("Notification !!!", "Erreur lors de l'insertion ", "error");

                     }
                     else
                         window.parent.swal("Notification !!!", "Erreur lors de l'insertion", "error");
                     }
                        localStorage.setItem("Prescp",JSON.stringify([]));
    }
  
  function GetConsultationByNum(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetConsultationByNum&num_consult="+num_consult,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function Redirection(url){
    $('#iframe_cloturee').contents().get(0).location.href="../body_page/"+url;
}
  function  CALLBACK(){
      var title =$('#iframe_cloturee').contents().attr('title');
      
      if(title === "AJouter Ordonnance"){
          window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De L'enregistration de Cette Ordonnance",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    localStorage.setItem("Ordonnance","true");
                                    $('#iframe_cloturee').contents().get(0).location.href="../body_page/Consultation.jsp";
                                        
                                }
                                if (ButtonPress === "Annuler") {
                                    localStorage.setItem("Prescp",JSON.stringify([]));
                                    $('#iframe_cloturee').contents().get(0).location.href="../body_page/Ordonnance.jsp";
                                        
                                }
                            });
            }else{
                    $('#iframe_cloturee').contents().get(0).location.href="../body_page/Consultation.jsp";
                    
        }
  }
  
function  CALLBACKRC(){
      $('#iframe_cloturee').contents().get(0).location.href="../body_page/Recette.jsp";
  }
 
function  CALLBACKBC(){
      $('#iframe_cloturee').contents().get(0).location.href="../body_page/BordereauCnam.jsp";
  }
  
  function GetListConsultationByPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListConsultationByPatient&NumFichPatient="+NumFichPatient,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetCptParamByCode(Param)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetCptParamByCode&Param="+Param,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function AutreAssurImg(Assur){
    var AutreAurr;
                    if(Assur === "STEG")
                        AutreAurr ="<img src='../img/steg_.png' style='width: 35px;' >";
                    else
                        if(Assur === "COMAR")
                            AutreAurr ="<img src='../img/ag42-logo_assurance_comar.png' style='width: 35px; height:16px;' >";
                    else
                        if(Assur === "MAGHREBIA")
                            AutreAurr ="<img src='../img/MAGHREBIA.png' style='width: 55px; height:20px;' >";
                    else
                        AutreAurr ="<img src='../img/amen.png' style='width: 35px; height:20px;' >";
                    
                    return AutreAurr;
}

function GetDateServeur()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetDateServeur",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}



function addSession(url, numdoss, codemed, datefeuil, user, depot, groupe) {
    var listRep;
    $.ajax({
        url: "../" + url + "?type=update&function=addSession&numdoss=" + numdoss + "&codemed=" + codemed
                + "&datefeuil=" + datefeuil + "&user=" + user + "&groupe=" + groupe,
        type: 'POST',
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
        },
        complete: function (jqXHR, textStatus) {
        },
        success: function (data, textStatus, jqXHR) {
            listRep = eval('(' + data + ')');
        }
    });
    return listRep;
}

function getSession(url) {
    var listRep;
    $.ajax({
        url: "../" + url + "?type=consult&function=getSession",
        type: 'POST',
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
        },
        complete: function (jqXHR, textStatus) {
        },
        success: function (data, textStatus, jqXHR) {
            listRep = eval('(' + data + ')');
        }
    });
    return listRep;
}

function dateNext()
{
    var length = parent.document.getElementById("selectDatesFeuille").length;
    var selectedIndex = document.getElementById("selectDatesFeuille").selectedIndex;
    if (selectedIndex > 0)
    {
        var valPrevious = document.getElementById("selectDatesFeuille").options[parseInt(selectedIndex) - 1].value;
        parent.$('#selectDatesFeuille').select2("val", valPrevious);
        parent.$('#selectDatesFeuille').change();
    }
}

function datePrevious()
{
    var selectedIndex = document.getElementById("selectDatesFeuille").selectedIndex;
    var length = document.getElementById("selectDatesFeuille").length;
    if (selectedIndex < length - 1)
    {
        var valNext = document.getElementById("selectDatesFeuille").options[parseInt(selectedIndex) + 1].value;
        parent.$('#selectDatesFeuille').select2("val", valNext);
        parent.$('#selectDatesFeuille').change();
    }
}

function createBackgrid(pageableGrid, idElement, gridColumns, collection, pagination, FocusableRow) {
    var columns = gridColumns;

    if (pagination === true) {
        pageableGrid = new Backgrid.Grid({
            emptyText: "Pas de resultat !",
            columns: columns,
            row: FocusableRow,
            collection: collection,
            footer: Backgrid.Extension.Paginator.extend({
                template: _.template('<tr><td colspan="<@= colspan @>"><ul class="pagination"><@ _.each(handles, function (handle) { @><li <@ if (handle.className) { @>class="<@= handle.className @>"<@ } @>><a href="#" <@ if (handle.title) {@> title="<@= handle.title @>"<@ } @>><@= handle.label @></a></li><@ }); @></ul></td></tr>')
            }),
            className: 'table table-bordered table-striped table-editable no-margin table-hover',
        });
    } else {
        pageableGrid = new Backgrid.Grid({
            emptyText: "",
            columns: columns,
            row: FocusableRow,
            collection: collection,
            className: 'table table-bordered table-striped table-editable no-margin table-hover',
        });
    }

    if (idElement === "_grid_examen_demande_pharm")
    {
        var clientSideFilter = new Backgrid.Extension.ClientSideFilter({
            collection: collection,
            placeholder: "Recherche",
            id: "rechercher",
            fields: ['desart', 'codart'],
            wait: 150
        });

        $("#_grid_examen_demande_pharm").before(clientSideFilter.render().el);

        document.getElementById("search").focus();
    } else if (idElement === "xxxxxxxx")
    {
        var clientSideFilter = new Backgrid.Extension.ClientSideFilter({
            collection: collection,
            placeholder: "Recherche",
            id: "rechercher",
            fields: ['desart', 'codart'],
            wait: 150
        });

        $("#xxxxx").before(clientSideFilter.render().el);

        document.getElementById("search").focus();
    } else if (idElement === "_grid_medecin")
    {
        var clientSideFilter = new Backgrid.Extension.ClientSideFilter({
            collection: collection,
            placeholder: "Recherche",
            id: "rechercher",
            fields: ['nomMed', 'codMed', 'libSpec'],
            wait: 150
        });

        $("#_grid_medecin").before(clientSideFilter.render().el);

        document.getElementById("search").focus();
    }

    $("#" + idElement).html(pageableGrid.render().$el);
    return pageableGrid;
}

function removeTmpGrid(grid)
{
    var models = grid.models;
    while (models.length > 0)
    {
        models[0].collection.remove(models[0]);
    }
}

function showDateFR() {
    window.parent.$("[name='_doss_date_cloturee']").hide();
    window.parent.$("#calendrier").show();
    window.parent.$("[name='_info_pat_rea_cloturee']").hide();
    window.parent.$("[name='_info_pat_rea']").show();
}

function js_dd_mm_yyyy__hh_mm_ss(date) {
    now = date;
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length === 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length === 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours();
    if (hour.length === 1) {
        hour = "0" + hour;
    }
    minute = "" + now.getMinutes();
    if (minute.length === 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length === 1) {
        second = "0" + second;
    }
    return day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second;
}

function hourNext()
{
    var length = parent.document.getElementById("selectHourPlanif").length;
    var selectedIndex = document.getElementById("selectHourPlanif").selectedIndex;
    if (selectedIndex > 0)
    {
        var valPrevious = document.getElementById("selectHourPlanif").options[parseInt(selectedIndex) - 1].value;
        parent.$('#selectHourPlanif').select2("val", valPrevious);
        parent.$('#selectHourPlanif').change();
        window.parent.$("#rightHour").show();
    } else if (selectedIndex >= 0) {
        window.parent.$("#leftHour").hide();

    }
}

function hourPrevious()
{
    var selectedIndex = document.getElementById("selectHourPlanif").selectedIndex;
    var length = document.getElementById("selectHourPlanif").length;
    if (selectedIndex < length - 1)
    {
        var valNext = document.getElementById("selectHourPlanif").options[parseInt(selectedIndex) + 1].value;
        parent.$('#selectHourPlanif').select2("val", valNext);
        parent.$('#selectHourPlanif').change();
        window.parent.$("#leftHour").show();
    } else if (selectedIndex <= length - 1) {
        window.parent.$("#rightHour").hide();
    }
}

function applyDatepicker(idElement) {

    $('#' + idElement).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        closeText: 'Fermer',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        dateFormat: 'dd/mm/yy',
        beforeShow: function () {
            setTimeout(function () {
                $('.ui-datepicker').css('z-index', 99999999999999);
            }, 0);
        }
    });

}

function fillSelectgetMedecin(div, groupe, codemed)
{
    $.ajax({
        url: "../Pharmacie?type=consult&function=getMedecin",
        contentType: "text/html; charset=utf-8",
        type: 'POST',
        dataType: "json",
        success: function (data)
        {
            var select_html = "<select id='selectgetMedecin'>";

            select_html += "<option value='choice' disabled='disabled' selected='selected'> Choisir Médecin </option>";

            $.each(data, function (i, item) {
                select_html += "<option value='" + data[i].codMed + "'>" + data[i].nomMed + "</option>";
            });

            select_html += "</select>";

            $('#' + div).html(select_html).trigger('create');

            $('#selectgetMedecin').select2({
                allowClear: true,
                dropdownAutoWidth: true,
                width: "100%"
            });
        },
        error: function () {
        }
    });
}

function DateSysteme()
{
    var reponse;
    $.ajax({
        url: "../Rea_Consult?function=getDate",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, textStatus, jqXHR)
        {
            reponse = data;
        }
    });

    return reponse;
}

function AddZero(num)
{
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
}

function GetAge(DateNaiss){
                  var datenaiss =AddZero(parseInt(DateNaiss.day)+2)+"/"+AddZero(parseInt(DateNaiss.month))+"/"+DateNaiss.year;
                  var d =new Date().toJSON().slice(0, 10);
                  var age = parseInt(d.toString().substr(0,4))-parseInt(datenaiss.substring(datenaiss.lastIndexOf('/')+1)) ;
                  return age;
}

function BlockDiv(Div){
    App.blockUI({
                target: '#'+Div,
                animate: true
            });
}

function RemoveCaractere(CH){
    for (i=0;i<4;i++)
        CH=CH.toString().replace('-','');
    
    return CH;
}

function FUllDate(date){
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    var mdate = moment().year(date.year).month(date.month).date(date.day);
    return mdate._d;
}

function FUllDateString(date){
//    var dateString=date.toString().split('/');
    
//    var mdate =moment();
//    mdate.format('LLLL');
    //mdate.locale('fr');
//    moment().format('LLLL');
//    var mdate = moment().set({'year': parseInt(dateString[2]) , 'month': parseInt(dateString[1]) ,'date': parseInt(dateString[0])});
   // var mdate = moment().year()).month(parseInt()).date(parseInt(dateString[0])).format();
//    console.log(mdate);
    return moment().format('LLLL');
}

function DateMM_DD_YYYY(datenaiss){
 return   AddZero(parseInt(datenaiss.month))+"/"+AddZero(parseInt(datenaiss.day)+2)+"/"+datenaiss.year;
}

function VerifDateDD_MM_YYYY(datenaiss){
    var day =parseInt(datenaiss.day);
    var month =parseInt(datenaiss.month);
    if(month === 2 && day===28 && parseInt(datenaiss.year)%2!==0)
        return   AddZero("2")+"/"+AddZero(parseInt(month+1))+"/"+datenaiss.year;
    else
        if(month === 2 && day===29 && parseInt(datenaiss.year)%2===0)
            return   AddZero("2")+"/"+AddZero(parseInt(month+1))+"/"+datenaiss.year;
    else
        if((month === 1 ||month === 3 ||month === 5 || month === 7 || month === 8 || month === 10 ||month === 12) && day===31)
            return   AddZero("2")+"/"+AddZero(parseInt(month+1))+"/"+datenaiss.year;
    else
        if((month === 4 ||month === 6 ||month === 9 || month === 11) && day===30)
            return   AddZero("2")+"/"+AddZero(parseInt(month+1))+"/"+datenaiss.year;
    else
        return   AddZero(day+2)+"/"+AddZero(parseInt(month))+"/"+datenaiss.year;    
        
}

function DateDD_MM_YYYY(datenaiss){
 return   AddZero(parseInt(parseInt(datenaiss.day)+2))+"/"+AddZero(datenaiss.month)+"/"+datenaiss.year;
}

function BuildCourbeConsult(Consults ,containerPouls,containerTEMP,containerPOIDS){
//    console.log(Consults);
    var CourbeConsult = Consults.reverse();
    var categoriesPOULS =[];
    var categoriesTEMP =[];
    var categoriesPOIDS =[];
    var POULS=[];
    var TEMP=[];
    var POIDS=[];
    for (i = 0; i <= 10; i++) {
//        console.log(CourbeConsult.length , "i :"+i);
        if(CourbeConsult.length >= i+1){
            if(CourbeConsult[i].numExamen!== null){
                

                if(CourbeConsult[i].numExamen.pouls !== ""){
                    categoriesPOULS.push(DateDD_MM_YYYY(CourbeConsult[i].dateConsult));
                    POULS.push(parseInt(CourbeConsult[i].numExamen.pouls));
                }
               

                if(CourbeConsult[i].numExamen.temp !== ""){
                    categoriesTEMP.push(DateDD_MM_YYYY(CourbeConsult[i].dateConsult));
                    TEMP.push(parseInt(CourbeConsult[i].numExamen.temp));
                }

                if(CourbeConsult[i].numPatient.poids !== ""){
                    categoriesPOIDS.push(DateDD_MM_YYYY(CourbeConsult[i].dateConsult));
                    POIDS.push(parseInt(CourbeConsult[i].numPatient.poids));
                }
                    
            }
            
        }else
            break;
            
    }
    
    categoriesPOULS.reverse();
    categoriesTEMP.reverse();
    categoriesPOIDS.reverse();
    POULS.reverse();
    TEMP.reverse();
    POIDS.reverse();
    
    Highcharts.chart( {
    chart: {
        renderTo: containerPouls,
        type: 'column'
    },
    title: {
        text: ' Par Pouls/TA/Température '
    },
    subtitle: {
        text: 'Dernier valeurs(POULS)'
    },
    xAxis: {
        categories: categoriesPOULS,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Détails des examens',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        pointFormat: 'Pould du patient : <b>{point.y:.1f} bqM</b>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    }
    ,
    series: [{
        name: 'POULS',
        data:     POULS
    }],
    dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
});

    Highcharts.chart( {
    chart: {
        renderTo: containerTEMP,
        type: 'area'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: 'Dernier valeurs(TEMP)'
    },
    xAxis: {
        categories: categoriesTEMP,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Détails des examens',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
       pointFormat: 'Température du patient : <b>{point.y:.1f} °C</b>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    }
    ,
    series: [{
        name: 'TEMP',
        data: TEMP
    }]
    ,
    dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
});

 Highcharts.chart( {
    chart: {
        renderTo: containerPOIDS
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: 'Dernier valeurs(POIDS)'
    },
    xAxis: {
        categories: categoriesPOIDS,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Détails des examens',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        pointFormat: 'Poids du patient : <b>{point.y:.1f} Kg</b>'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    }
    ,
    series: [ {
        name: 'POIDS',
        data: POIDS
    }] ,
    dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
});

}

function format2_8_2(ch){
    return ch.substr(0,2)+"/"+ch.substr(2,8)+"/"+ch.substr(8,2);
}
     