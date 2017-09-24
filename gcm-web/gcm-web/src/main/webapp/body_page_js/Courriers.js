
var paramater;
var dateServeur;
var patient;

$(function (){
/*init*/
    
    dateServeur=GetDateServeur();
    paramater= JSON.parse(localStorage.getItem("paramater"));
    patient=JSON.parse(localStorage.getItem('patient'));
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    CertificatMedicale();
    
    $("#CourrierS2").select2({
        placeholder: "Choisir Type Courrier",
            width: "100%"
    });
    
    $("[role='combobox']").css("padding-left","30px");
    $("[role='combobox']").css("background-color","#eef1f5");
       
       
/*end*/    
    
    
/*Commande*/

    $("#CertificatMédical").click(function (){
        CertificatMedicale();
    });
    $("#CertificatDinaptitudeAuSport").click(function (){
        CertificatMedicaleDInaptitude();
    });
    $("#CertificatDaptitudeAuSport").click(function (){
        CertificatMedicaleDaptitude();
    });
    $("#CertificatBonneSante").click(function (){
        CertificatMedicaleBonneSante();
    });
    $("#DemandeDexamenTomodensitométriqueTDM").click(function (){
        DemandeDExamenTomodensitométrique();
    });
    $("#DemandeDexamenEchographique").click(function (){
        DemandeDExamenEchographique();
    });
    $("#DemandeDexamenRadiologiqueAuRayonsX").click(function (){
        DemandeDExamenRadiologiqueRayonsX();
    });
    
    $("#DemandeDeRadioThorax").click(function (){
        DemandeRadiographieThorax();
    });
    
//     $("#DemandeOrdonnance").click(function (){
//        DemandeOrdonnance();
//    });
//    $("#CourrierS2").change(function (){
//       if($("#CourrierS2").val().toString()==="Certificat Médical") 
//           CertificatMedicale();
//       else
//           if($("#CourrierS2").val().toString()==="Certificat d'inaptitude au Sport") 
//               CertificatMedicaleDInaptitude();
//       else
//           if($("#CourrierS2").val().toString()==="Certificat d'aptitude au Sport") 
//               CertificatMedicaleDaptitude();
//       else
//           if($("#CourrierS2").val().toString()==="Certificat Bonne Sante") 
//               CertificatMedicaleBonneSante();
//       else
//           if($("#CourrierS2").val().toString()==="Demande d'examen Tomodensitométrique(TDM)") 
//               DemandeDExamenTomodensitométrique();
//       else
//           if($("#CourrierS2").val().toString()==="Demande d'examen Echographique") 
//               DemandeDExamenEchographique();
//       else
//           if($("#CourrierS2").val().toString()==="Demande d'examen Radiologique au Rayons X") 
//               DemandeDExamenRadiologiqueRayonsX();
//       else
//            DemandeRadiographieThorax();
//    });
    
//    $("#edit").click(function (){

       $('.click2edit').summernote({
           focus: true,
           toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['misc', ['print']]
          ]
           
       }); 
       
//    });
//      
//     $("#save").click(function (){
//        var aHTML = $('.click2edit').summernote('code'); //save HTML If you need(aHTML: array).
//        $('.click2edit').summernote('destroy');
//      });
/*end*/
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
});