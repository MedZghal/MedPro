var url =window.location.href;
var localhost =url.substring(7,url.lastIndexOf('/gcm-web'));
        
var options=  toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

/* global session */

function GetListUtilisateur()
{
    var reponse;
    $.ajax({
        url: "Gestion_Acces?type=consult&function=GetListUtilisateur",
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

function GetParemetrebyCodeMedTrit(codeMedTrit)
{
    var reponse;
    $.ajax({
        url: "Gestion_Acces?type=consult&function=GetParemetrebyCodeMedTrit&codeMedTrit="+codeMedTrit,
        type: 'POST',
        async: false,
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown)
        {
        },
        success: function (data, texStatus, jqXHR)
        {
            reponse = data;
        }
    });
    return reponse;
}

 var utilisateur =GetListUtilisateur();
 
function Connect(){
    localStorage.setItem("Secretaire",JSON.stringify([]));
     var verif ="false";
     var paramater,codeMedTrit;
        $.each(utilisateur , function(i){
            if(utilisateur[i].username === $("#user").val() && utilisateur[i].pass === $("#password").val() ){
                if(utilisateur[i].codeMedTrit<0){
                    codeMedTrit=utilisateur[i].secretaire;
                    localStorage.setItem("Secretaire",JSON.stringify(utilisateur[i]));
                }else
                    codeMedTrit=utilisateur[i].codeMedTrit;
                verif ="true";
                paramater =GetParemetrebyCodeMedTrit(codeMedTrit);
                if(paramater!==null)
                    localStorage.setItem("paramater",JSON.stringify(paramater));
                else
                    localStorage.setItem("codeMedTrit_",codeMedTrit);
                    
                return false;
            }
        });
        
       if(verif.toString() === "true"){
                if(paramater!==null)
                    window.location.href= 'https://'+localhost+'/gcm-web/master_page/index.jsp';
                else
                    window.location.href= 'https://'+localhost+'/gcm-web/body_page/Setup.jsp';
                }
                else
                    toastr.error('Nom utilisateur/Mot de passe invalide veuillez essayer de nouveau?','Error',options);
                                        
}

$(function(){
    
    $("#user").focus();
     
        
        $(document).keypress(function(e) {
            if(e.which === 13) {
                Connect();
            }
        });
    
            // init background slide images
		    $.backstretch([
                        "img/bg/background.jpg",
		        "img/bg/lvkwE1.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		    	}
        	);
        
   
 
       $("#submit").unbind("click");
    $("#submit").bind("click", function (e)
    {
       Connect();
    });

    });
