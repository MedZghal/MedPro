var paramater;
var recettetoday=0;
var depense=0;

$(function (){
    
    var DateServeur =GetDateServeur();
    paramater= JSON.parse(localStorage.getItem("paramater"));
    
    $("#date").append(FUllDateString());
    $('#datedepot').datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        clearBtn: true,
        language: "fr",
        autoclose: true,
        todayHighlight: true
    });
    
    $('#datedepot').val(DateServeur);
    
    $('#sandbox-container .input-daterange').datepicker({
        format: "dd/mm/yyyy",
        maxViewMode: 0,
        todayBtn: "linked",
        clearBtn: true,
        language: "fr",
        autoclose: true,
        todayHighlight: true
    }).on('change', function (){        
        var recette =GetRecettebyMedecinDate(paramater.codeMedTrit.codeMedTrit,$("#datedebutp").val(),$("#datedebutf").val());
        $("#nbfacture").val(recette.length);
        recettetoday=0;
        depense=0;
        $.each(recette, function (i){
                recettetoday+=parseInt(recette[i].total);
        });

        $.each(recette, function (i){
            if(recette[i].type !== "CS" && recette[i].type !== "AT")
                depense+=parseInt(recette[i].total);
        });
        $("#contents").empty();
        $("#rechercher").remove();
        createBackGridRecette($("#datedebutp").val(),$("#datedebutf").val());
        
    });
    
    $("#datedebutp").val(DateServeur);
    $("#datedebutf").val(DateServeur).trigger('change');
    

});