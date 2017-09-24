
/* global _, option, paramater, formatRepo, formatRepoSelection */
var ListePatient=[];
$(function (){
    /*init*/
    if(!window.parent.$("#menubackRc").hasClass('hide'))
        window.parent.$("#menubackRc").toggleClass('hide');
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    $(".bootstrap-tagsinput").css("background-color","#eef1f5");
    $(".bootstrap-tagsinput input").css("width","130%");
    $(".bootstrap-tagsinput").css("margin-left","110px");
    $(".bootstrap-tagsinput").css("margin-top","-25px");
    $(".bootstrap-tagsinput").css("width","100%");
    
    RemplirPatients();
        
    $("#select2-select2-patient-container").css("margin-left","15px");    
    $("#select2-select2-consult-container").css("margin-left","15px");
    $("[role='combobox']").css("padding-left","20px");
    $("[role='combobox']").css("background-color","#eef1f5");
    
    if(localStorage.getItem("numFichPatient")!==""){
        var num_patient=localStorage.getItem("numFichPatient");
//        $('#select2-patient').empty().append('<option selected value="'+num_patient+'">'+num_patient+'</option>');
//        $('#select2-patient').select2('data', {
//            id: num_patient
//          });
        
        //TriggerPatient();
        $('#select2-patient').val(num_patient).trigger('change');
        RemplirTableArch($("#select2-patient").val());
        
    }
    /*end*/
    
    /*commande*/
    $("#select2-patient").change(function (){
//       TriggerPatient();
        RemplirTableArch($("#select2-patient").val());
    });
    
//    $("#select2-consult").change(function (){
//        var consult=GetConsultationByNum($("#select2-consult").val());
//        var motifs = GetListMotifConsultByNumConsult(consult.numConsult);
//        $('#Motifs').tagsinput('removeAll');
//        $('#Diagnostic').tagsinput('removeAll');
//            if(Object.keys(motifs).length>0){
//                            $.each(motifs, function (i){
//                                $("#Motifs").tagsinput('add',motifs[i].motif.libelle);
//                            });
//                        }
//            $("#Diagnostic").tagsinput('add',consult.diagconsult.libelle);
//            if(consult.numExamen !== null){
//                    $("#nbexam").empty().append("1");
//                    $("#TA").val(consult.numExamen.ta);
//                    $("#Pouls").val(consult.numExamen.pouls);
//                    $("#Température").val(consult.numExamen.temp);
//                    $("#AirGan").val(consult.numExamen.airesGangl);
//                    $("#AusCar").val(consult.numExamen.auscuCardi);
//                    $("#AusPleuro").val(consult.numExamen.auscuPleuro);
//                    $("#Etgeneral").val(consult.numExamen.etatGeneral);
//                    $("#Exphy").val(consult.numExamen.examPhy);
//                    $("#ExAbd").val(consult.numExamen.examenAbdominal);
//                    $("#ExORL").val(consult.numExamen.examenORL);
//                }
//            if(consult.numOrd!==null)
//            {
//                $("#nbordonn").empty().append("1");
//                Remplir_Ord(consult);
//            }else{
//                $("#tab_7_2").empty();
//                $("#nbordonn").empty().append("0");
//            }
//            var nbActess =GetListActeMedicauxAllByNumConsult(consult.numConsult).length;
//            $("#nbactemedic").empty().append(nbActess);
//            if(nbActess>0)
//                remplirActeMedical(consult.numConsult);
//            else{
//                $("#listeActes").empty();
//                $("#listeActesCnam").empty();
//            }
//                
//    });
    
//    $("#Nconsult").click(function (){
//        if($("#select2-patient").val()!==null){
//            localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
//            var Consults =GetListConsultationByPatient($("#select2-patient").val());        
//            localStorage.setItem("Prescp",JSON.stringify([]));
//            localStorage.setItem("Ordonnance","false");
//            localStorage.setItem("UpdateConsult","false");
//            localStorage.setItem("Consults",JSON.stringify(Consults));
//            localStorage.setItem("typeConsult","Consultation");
//            localStorage.setItem("numFichPatient",$("#select2-patient").val());
//            window.location.href='../body_page/Consultation.jsp';
//        }else
//             window.parent.toastr.error("Attention, Vous devez d'abord choisir un patient!.",'Error',option);
//    });
    
//    $("#Npatient").click(function (){
//        if(!window.parent.$("#menuback").hasClass('hide'))
//            window.parent.$("#menuback").toggleClass('hide');
//        localStorage.setItem("Consultation","false");
//        localStorage.setItem("Update","false");
//        window.location.href='AjPatient.jsp';
//    });
    
    /*select dropdown control*/
//        var NumConsultSelected;
//        $("#select2-consult").on("select2:select", function(e) { 
//            NumConsultSelected=$(e.currentTarget).val(); 
//        });
//        
//        $(document).on('mouseup', '.select2-container--open .select2-results__option #suppConsultArch', function () {
//            DeleteConsult(NumConsultSelected);
//        });
//         
//        $(document).on('mouseup', '.select2-container--open .select2-results__option #modifConsultArch', function () {
//            ModifierConsult(NumConsultSelected);
//        });
//        
//        var NumPatientSelected;
//        $("#select2-patient").on("select2:select", function(e) { 
//            NumPatientSelected=$(e.currentTarget).val(); 
//        });
//        
//        $(document).on('mouseup', '.select2-container--open .select2-results__option #suppPatientArch_', function () {
//            DeletePatient_(NumPatientSelected);
//        });
//         
//        $(document).on('mouseup', '.select2-container--open .select2-results__option #modifPatientArch_', function () {
//            if(NumPatientSelected === undefined)
//                NumPatientSelected=localStorage.getItem("numFichPatient");
//            ModiferPatient(NumPatientSelected);
//        });
        
    /*end*/
    
/*end*/
    
});
