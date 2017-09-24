
/* global parseFloat */
var recettetoday=0;
var depense=0;
moment.locale('fr');
var paramater;
$(function (){
    /*init*/
    if(!window.parent.$("#menuback").hasClass('hide'))
         window.parent.$("#menuback").toggleClass('hide');
    if(!window.parent.$("#menubackRc").hasClass('hide'))
         window.parent.$("#menubackRc").toggleClass('hide');
    $('body').scrollTop(0);
    var d =GetDateServeur();
    $("#date").append(FUllDateString(d));
     paramater= JSON.parse(localStorage.getItem("paramater"));
    
    $('#sandbox-container .input-daterange').datepicker({
        format: "dd/mm/yyyy",
        maxViewMode: 0,
        todayBtn: "linked",
        clearBtn: true,
        language: "fr",
        autoclose: true,
        todayHighlight: true
    }).on('change', function (){        
        var recette =GetRecettebyMedecinDate(paramater.codeMedTrit.codeMedTrit,$("#sandbox-container .input-daterange [name='start']").val(),$("#sandbox-container .input-daterange [name='end']").val());
        
        recettetoday=0;
        depense=0;
        $.each(recette, function (i){
                recettetoday+=parseInt(recette[i].total);
        });

        $.each(recette, function (i){
            if(recette[i].type !== "CS" && recette[i].type !== "AT")
                depense+=parseInt(recette[i].total);
        });
        
        createBackGridRecette($("#sandbox-container .input-daterange [name='start']").val(),$("#sandbox-container .input-daterange [name='end']").val());
        
    });
    
    $("#sandbox-container .input-daterange [name='start']").val(d);
    $("#sandbox-container .input-daterange [name='end']").val(d).trigger('change');
    
    
//    $("#ttRecette").empty().html(recettetoday.toFixed(3)+" DT");
//    $("#ttdepense").empty().html(depense.toFixed(3)+" DT");
//    $("#ttcoffre").empty().html((recettetoday-depense).toFixed(3)+" DT");
    
    $("#totRecette").attr("data-value",recettetoday);  
    $('#totRecette').counterUp({
            delay: 10,
            time: 1000
          });
    
    
    /*end*/
   
    /*commande*/
    $("#AddMedic").click(function (){
        window.parent.$("#confirmeemodal").attr("data-target","#depensemodal");
        window.parent.$("#confirmeemodal").trigger("click");
    });
    
    
    /*end*/
});
