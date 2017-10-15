
/* global option */
var Gouvernorats;
var CodeVille;
var paramater;
$(function (){
/*init*/
if(!window.parent.$("#menubackRc").hasClass('hide'))
        window.parent.$("#menubackRc").toggleClass('hide');
    paramater = JSON.parse(localStorage.getItem("paramater"));
    $("#date").append(FUllDateString(GetDateServeur()));
     $("#Code").inputmask({"mask": "99/99999999/99"});
    var ville =GetListVilleDistinct();
    remplir_VILLE(ville);
    if(paramater!==null){
        $("#nom").val(paramater.nomMedecin);
        $("#prenom").val(paramater.prenomMedecin);
        $("#datnaiss").val(DateMM_DD_YYYY(paramater.dateNaiss));
        $("#Salutation").val(paramater.salutation);
        $("#Inscription").val(paramater.numInscpOrdMed);
        $("#adr").val(paramater.adresse);
        $("#ville").val(paramater.ville.ville);
        Gouvernorats = GetListGouvernorat($("#ville").val());
        CodeVille=paramater.ville.codeVille;
        remplir_Gouvernorat(Gouvernorats);
        $('#Gouvernorat').val(paramater.ville.gouvernorat);
        $("#fixe").val(paramater.fixe);
        $("#gsm").val(paramater.gsm);
        $("#email").val(paramater.email);
        $("#Titre").val(paramater.titre);
        $("#Titre").val(paramater.titre);
        $("#Sépecialité").val(paramater.specialite);
        $("#Code").val(paramater.codeConvent);
        $("#Tiket").val(paramater.tiketModer);
        $("#TVA").val(paramater.tvaConsult);
        $("#Montant").val(paramater.montantConsult);
        $("#Type").val(paramater.typeConsult);
    }
/*end*/         

/*commande*/
    $("#ville").change(function (){
                 Gouvernorats = GetListGouvernorat($("#ville").val());
                 remplir_Gouvernorat(Gouvernorats);
             });
     $("#Gouvernorat").change(function (){
                 
                         $.each(Gouvernorats, function(i){
                            if(Gouvernorats[i].gouvernorat === $("#Gouvernorat").val())
                                CodeVille = Gouvernorats[i].codeVille;
                        });
            });
            
     $('#submit').on('click', function () {
                $('#FormVAL').data('validator', null);
                handleValidation();
                if( $('#FormVAL').valid() ){
                    //AjParametre($("#nom").val(),$("#prenom").val(),$("#datnaiss").val(),$("#Salutation").val(),$("#Inscription").val(),$("#adr").val(),$("#ville").val(),$("#fixe").val(),$("#gsm").val(),$("#email").val(),$("#Titre").val(),$("#Sépecialité").val(),0,$("#Code").val(),$("#Tiket").val(),$("#TVA").val(),$("#Montant").val(),$("#Type").val(),$("#Montant").val(),paramater.codeMedTrit.codeMedTrit);
                    var Err = UpdateParametre(paramater.numCab,$("#nom").val(),$("#prenom").val(),$("#datnaiss").val(),$("#Salutation").val(),$("#Inscription").val(),$("#adr").val(),CodeVille,$("#fixe").val(),$("#gsm").val(),$("#email").val(),$("#Titre").val(),$("#Sépecialité").val(),$("#Gouvernorat").val(),$("#Code").val().toString().split(' ')[0].replace(new RegExp('/', 'g'),""),$("#Tiket").val(),$("#TVA").val(),$("#Montant").val(),$("#Type").val(),parseInt($("#Montant").val())-parseInt($("#Tiket").val()),paramater.codeMedTrit.codeMedTrit);
                    if(Err.toString() ==="true"){
                        window.parent.swal("Notification !", "Paramétres Modifié Avec Succès ", "success");
                        paramater =GetParemetrebyCodeMedTrit(paramater.codeMedTrit.codeMedTrit);
                        localStorage.setItem("paramater",JSON.stringify(paramater));
                    }else
                        window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
                }
                else
                 window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
            });
/*end*/
});


