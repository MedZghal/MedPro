
/* global option, formatRepo, formatRepoSelection */

$(function (){
    /*init*/
//    window.location.reload(true);
    $('#content').scrollTop(0);
    if(!window.parent.$("#menuback").hasClass('hide'))
        window.parent.$("#menuback").toggleClass('hide');
    if(!window.parent.$("#menubackRc").hasClass('hide'))
        window.parent.$("#menubackRc").toggleClass('hide');
    var date =GetDateServeur();
    $("#ticker02").liScroll({travelocity: 0.05});
    $("#date").append(FUllDateString(date));
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var nbpatient=GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
    var rdv=GetListRdvByNumMedecin(paramater.codeMedTrit.codeMedTrit);
    var consult=GetListConsultationByMedecin(paramater.codeMedTrit.codeMedTrit); 
    var recette =GetRecettebyMedecin(paramater.codeMedTrit.codeMedTrit);
    var recettetoday=0;
    //console.log(recette);
    $.each(recette, function (i){
        //console.log(date);
        var datetrans=AddZero(parseInt(recette[i].dateTrans.day)+2)+"/"+AddZero(recette[i].dateTrans.month)+"/"+recette[i].dateTrans.year;
        //console.log(datetrans);
        if(datetrans===date)
            recettetoday+=parseInt(recette[i].total);
    });
            $("#recette").attr("data-value",recettetoday);  
            $('#recette').counterUp({
                    delay: 10,
                    time: 1000
                  });
            $("#patients").attr("data-value",nbpatient.length);  
            $('#patients').counterUp({
                    delay: 10,
                    time: 1000
                  });
            
            $("#consult").attr("data-value",consult.length);  
            $('#consult').counterUp({
                    delay: 10,
                    time: 1000
                  });
                
            $("#rdv").attr("data-value",rdv.length);  
            $('#rdv').counterUp({
                    delay: 10,
                    time: 1000
                });
   /*end*/
   
   
   
   
   /*commande*/
   $("#Patient").click(function (){
      window.location.href="Patient.jsp"; 
   });
   
   $("#rdvs").click(function (){
      window.location.href="Rdv.jsp"; 
   });
   
   $("#Comptabilité").click(function (){
      window.location.href="Recette.jsp"; 
   });
   
   $("#Pharmacie").click(function (){
      window.location.href="Medicament.jsp"; 
   });
   
   $("#Statistiques").click(function (){
      var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                window.location.href="Statistique.jsp";
            } 
   });
   
   
   $("#Archive").click(function (){
      var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                window.location.href="ArchiveMedic.jsp";
                localStorage.setItem("numFichPatient","");
            } 
   });
   
    $("#Paramétres").click(function (){
      var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                window.location.href="Parametre.jsp";
            } 
   });
   
   $("#Consultation").click(function (){
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            window.parent.toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var data=GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
                var patientTAB=[];
                $.each(data , function (i){
                    var partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,data[i].numFichPatient);
                    if(!partage.toString().includes("partagé"))
                        patientTAB.push({
                            id: data[i].numFichPatient,
                            text:data[i].numFichPatient,
                            adresse: data[i].adresse,
                            assurCnam:data[i].assurCnam,
                            autreAssur:data[i].autreAssur,
                            codeApci:data[i].codeApci,
                            dateValid:data[i].dateValid,
                            datenaiss:data[i].datenaiss,
                            fixe:data[i].fixe,
                            gsm:data[i].gsm,
                            nom:data[i].nom,
                            numFichPatient:data[i].numFichPatient,
                            prenom:data[i].prenom,
                            profession:data[i].profession,
                            sexe:data[i].sexe,
                            typeApci:data[i].typeApci
                        });
                });
        window.parent.$("#select2-patient2").select2({
            placeholder: "Enter id du Patient",
            width: "100%",
            data :patientTAB,
            allowClear: true,
//            ajax: {
//                url: "http://"+GetUrl()+"/gcm-web/Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
//                dataType: 'json',
//                delay: 250,
//                data: function(params) {
//                    return {
//                        q: params.term, // search term
//                        page: params.page
//                    };
//                },
//                processResults: function(data, page) {
//                    // parse the results into the format expected by Select2.
//                    // since we are using custom formatting functions we do not need to
//                    // alter the remote JSON data
//                    localStorage.setItem("ListePatient",JSON.stringify(data));
//                    _.each(data, function (item) {item.id = item.numFichPatient; });
//                    return {
//                        results: data
//                    };
//                },
//                cache: true
//            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });
        window.parent.$("#select2-patient2").val('').trigger('change');
        window.parent.$("#select2-select2-patient2-container").css("margin-left","15px"); 
        window.parent.$("[role='combobox']").css("padding-left","20px");
        window.parent.$("[role='combobox']").css("background-color","#eef1f5");
        window.parent.$("#confirmeemodal").attr("data-target","#consultpatientmodal");
        window.parent.$("#confirmeemodal").trigger("click");
        }
   });
   /*end*/
   
   
  
   
});
