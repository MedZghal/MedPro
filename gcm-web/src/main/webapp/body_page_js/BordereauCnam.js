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
        var bourdereauCnamtxt1 =$("<p></p>");
        var textbc1="I- \r\n";
        var textbc2="\r\nII- \r\n";
        var textbc3 ="\r\nIII- \r\n";
        recette =GetRecetteCnambyMedecinDate(paramater.codeMedTrit.codeMedTrit,$("#datedebutp").val(),$("#datedebutf").val());
        var dd =($("#datedebutp").val()+$("#datedebutf").val()+DateServeur).toString().replace(/\//g, '') ;
        textbc1+='1 \r\n'+paramater.codeConvent+"\r\n"+dd+"\r\n00000000000000000000"+numberX(recette.length,5)+"\r\n"+numberX(recettetoday,10)+"\r\n"+numberX(tiketModérateur,10)+"\r\n"+numberX((recettetoday-tiketModérateur),10);
       
        $("#nbfacture").val(recette.length);
        
        recettetoday=0;
        depense=0;
        tiketModérateur=0;
        
        $.each(recette, function (i){
            textbc2+="\r\n**"+(i+1)+"-201703**";  
            var caisse =recette[i].numConsult.numPatient.assurCnam.regimeAffi;
            if(caisse.toString() === "CNRPS")
                    textbc2+="\r\n2";
                else
                    textbc2+="\r\n1";
              var qualite =recette[i].numConsult.numPatient.assurCnam.qualite;
                
                    switch (qualite) {
                        case "Assuré":
                            {
                                textbc2+="\r\n0";
                                break;
                            }
                        case "Conjoint":
                            {
                                textbc2+="\r\n1";
                                break;
                            }
                        case "Enfant à charge":
                            {
                                textbc2+="\r\n2";
                                break;
                            }
                        case "Pére à charge":
                            {
                                textbc2+="\r\n3";
                                break;
                            }
                        case "Mére à charge":
                            {
                                textbc2+="\r\n4";
                                break;
                            }
                        default:
                            break;
                     }   
                if(qualite.toString() === "Enfant à charge"){
                    textbc2+="\r\n01";
                }else{
                    textbc2+="\r\n00";
                }
                var Patient =recette[i].numPatient;
                    textbc2+="\r\n"+Patient.nom +" "+Patient.prenom+ "\r\n"+Patient.datenaiss.year + "\r\n"+ Patient.datenaiss.month + "\r\n"+ Patient.datenaiss.day+recette[i].numConsult.numPatient.assurCnam.codCnam.toString().replace("/","")+ "\r\n"+recette[i].numConsult.dateConsult.year+ "\r\n"+recette[i].numConsult.dateConsult.month+ "\r\n"+recette[i].numConsult.dateConsult.day + "\r\n"+numberX(recette.length,5)+ "\r\n"+recette[i].total+ "\r\n"+numberX(recettetoday,10)+ "\r\n"+numberX(tiketModérateur,10)+ "\r\n"+numberX((recettetoday-tiketModérateur),10)+ "\r\n"+Patient.codeApci;
                
                recettetoday+=parseInt(recette[i].total);
                tiketModérateur+=parseInt(recette[i].tiketModérateur);
                depense+=parseInt(recette[i].total);
        });
        
        var textbc = textbc1+textbc2+textbc3;
        bourdereauCnamtxt1.text(textbc);
        $('#contextbrtxt').empty().append(bourdereauCnamtxt1);
        
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

