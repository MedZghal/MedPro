var paramater;
var recettetoday=0;
var depense=0;
var tiketModérateur=0;
var DateSTART;
var DateEND;
var DateServeur;
var recette;

$(function (){
    if(!window.parent.$("#menubackBc").hasClass('hide'))
        window.parent.$("#menubackBc").toggleClass('hide');
     DateServeur=GetDateServeur();
    paramater= JSON.parse(localStorage.getItem("paramater"));
    DateSTART=DateServeur;
    DateEND=DateServeur;
    
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
        recette =GetRecetteCnambyMedecinDate(paramater.codeMedTrit.codeMedTrit,$("#datedebutp").val(),$("#datedebutf").val());
        $("#nbfacture").val(recette.length);
        
        recettetoday=0;
        depense=0;
        tiketModérateur=0;
        
        $.each(recette, function (i){
                recettetoday+=parseInt(recette[i].total);
                tiketModérateur+=parseInt(recette[i].tiketModérateur);
                depense+=parseInt(recette[i].total);
        });
        
        $("#contents").empty();
        $("#rechercher").remove();
        createBackGridRecetteCnam($("#datedebutp").val(),$("#datedebutf").val());
        localStorage.setItem("DateSTART",$("#datedebutp").val());
        localStorage.setItem("DateEND",$("#datedebutf").val());
        
    });
    
    if(!localStorage.DateSTART &&!localStorage.DateSTART){
        $("#datedebutp").val(DateSTART);
        $("#datedebutf").val(DateEND).trigger('change');
    }else{
        $("#datedebutp").val(localStorage.DateSTART);
        $("#datedebutf").val(localStorage.DateEND).trigger('change');
    }
  

});

