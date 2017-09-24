
/* global option */

$(function (){
/*init*/
    $('body').scrollTop(0);
    var date =FUllDateString(GetDateServeur());
    $("#date").append(date);
    var num_conslt =localStorage.getItem("num_conslt");
    
    $("#TP").inputmask('99 %', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
    $("#Fibrinémie").inputmask('99 g/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#INR").inputmask('99', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#TCA").inputmask('99 S', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
    $("#bilirubine_Total").inputmask('999 μMol/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#Bilirubine_Conjugué").inputmask('999 μMol/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
    $("#SGOT").inputmask('999 U/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#SGPT").inputmask('999 U/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#Phosphatases_Alcalines").inputmask('999 U/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#GammaGT").inputmask('999 U/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
    $("#VS").inputmask('999 MM/Heure', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#CRP").inputmask('999 M/gL', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#Cholestérol").inputmask('999 g/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#Triglycérides").inputmask('999 MMol/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#HDL").inputmask('999 g/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#LDL").inputmask('999 g/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#Creatinemie").inputmask('999 μMol/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    
    $("#urée").inputmask('999 MMol/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
                
    $("#Glycémie").inputmask('999 g/L', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    $("#Hémoglobine").inputmask('999 g/100ML', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    $("#Globules").inputmask('999 e/ML', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    $("#Plaquettes").inputmask('999 e/ML', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
    var bilanthémostase= GetBilanBioHemostaseByNumConsult(num_conslt);
    if(bilanthémostase!== null){
        console.log(bilanthémostase);
        $("#TP").val(bilanthémostase.tp);
        $("#Fibrinémie").val(bilanthémostase.fibrinéme);
        $("#INR").val(bilanthémostase.inh);
        $("#TCA").val(bilanthémostase.tca);
    }
/*end*/  

/*COMMANDE*/
    $("#submithémostase").click(function (){
        $('#FormVAL1').data('validator', null);
        handleValidation1();
        if( $('#FormVAL1').valid()){
            Err =AjBilanBioHemostase(num_conslt,"TA",$("#TP").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),$("#INR").val(),$("#TCA").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""),$("#Fibrinémie").val().toString().split(' ')[0].replace(new RegExp('_', 'g'),""));
                                                
                if(Err.toString() ==="true"){
                    window.parent.swal("Notification !", "Bilan d'hémostase Ajouté Avec Succès ", "success");
                   
                }else
                    window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
        }
    });
/*end*/
    
});


