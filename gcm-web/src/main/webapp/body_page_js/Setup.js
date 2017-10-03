
var url =window.location.href;
var localhost =url.substring(7,url.lastIndexOf(':')+5);
var Gouvernorats;
var CodeVille;

$(function (){
    var codeMedTrit_ = localStorage.getItem("codeMedTrit_");
    var ville =GetListVilleDistinct();
    remplir_VILLE(ville);
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
     $('#datnaiss').datetimepicker({
            format: 'dd/mm/yyyy',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
         });
         
         $('.btn-finish').click(function (){
            var Err=AjParametre($("#nom").val(),$("#prenom").val(),$("#datnaiss").val(),$("#Salutation").val(),$("#Inscription").val(),$("#adr").val(),CodeVille,$("#fixe").val(),$("#gsm").val(),$("#email").val(),$("#Titre").val(),$("#Sépecialité").val(),$("#Gouvernorat").val(),$("#Code").val(),$("#Tiket").val(),$("#TVA").val(),$("#Montant").val(),$("#Type").val(),$("#Montant").val(),codeMedTrit_);
            if(Err==='true'){
                var paramater =GetParemetrebyCodeMedTrit(codeMedTrit_);
                if(paramater!==null)
                    localStorage.setItem("paramater",JSON.stringify(paramater));
                window.location.href= 'http://'+localhost+'/gcm-web/master_page/index.jsp';
            }
         });
});

