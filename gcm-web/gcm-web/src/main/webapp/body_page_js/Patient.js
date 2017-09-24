
/* global option */
var file;
var numpt;
var imgs;
var img=[];
var config=[];
var Err;

$(function(){
    /*init*/
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        createBackGrid();
        var paramater = JSON.parse(localStorage.getItem("paramater"));
        var nbpatient=GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
        var rdv=GetListRdvByNumMedecin(paramater.codeMedTrit.codeMedTrit);
        var consult=GetListConsultationByMedecin(paramater.codeMedTrit.codeMedTrit);
        $(window).on('load', function(){
            
            $("#nbpatient").attr("data-value",nbpatient.length);  
            $('#nbpatient').counterUp({
                    delay: 10,
                    time: 1000,
                    offset: 70,
                    beginAt: 100,
                    formatter: function (n) {
                      return n.replace(/,/g, '.');
                    }});
            
            $("#nbconsult").attr("data-value",consult.length);  
            $('#nbconsult').counterUp({
                    delay: 10,
                    time: 1000,
                    offset: 70,
                    beginAt: 100,
                    formatter: function (n) {
                      return n.replace(/,/g, '.');
                    }});
                
            $("#nbrdv").attr("data-value",rdv.length);  
            $('#nbrdv').counterUp({
                    delay: 10,
                    time: 1000,
                    offset: 70,
                    beginAt: 100,
                    formatter: function (n) {
                      return n.replace(/,/g, '.');
                    }});

            });
            
            
        
        $("#date").append(FUllDateString(GetDateServeur()));
   
        
        window.parent.$("div.backgrid-paginator ul").toggleClass("pagination");
    /*end*/
      
    /*commande*/
    
    $("#checkboxSalle").on('change',function (){
        if($('#checkboxSalle').prop('checked')) {
                $("#contents").empty();
                $("#rechercher").remove();
                createBackGridSalle();
            } 
            else
            {
                $("#contents").empty();
                $("#rechercher").remove();
                createBackGrid();
            }
    });
    
     $("#checkboxPartage").on('change',function (){
        if($('#checkboxPartage').prop('checked')) {
                $("#contents").empty();
                $("#rechercher").remove();
                createBackGridDossierPar();
            } 
            else
            {
                $("#contents").empty();
                $("#rechercher").remove();
                createBackGrid();
            }
    });
    
    $("#Addpatient").unbind("click");
    $("#Addpatient").bind("click", function (e)
    {
       localStorage.setItem("Consultation","false");
       localStorage.setItem("Update","false");
       window.location.href='AjPatient.jsp';
    });
      
    
                window.parent.$("#input-704").on('filepredelete', function(event, key, jqXHR, data) {
                    var aborted = !window.confirm('Êtes-vous sûr de vouloir supprimer ce fichier?');
                    var url = "../js/bootstrap-toastr/toastr.min.js";
                        $.getScript( url, function() {
                          if (aborted)
                            window.parent.toastr.error("Attention, Suppression annulée. !!!.",'Error',option);
                        else
                            window.parent.toastr.success("Attention, Image supprimer avec Succès!.",'success',option);
                        });
                        return aborted;
                        
                    });


                
                window.parent.$("#input-704").on("fileloaded", function(event, file, previewId, index, reader){   
                    
                    $.ajax({
                            url: "../Consultation?type=update&function=AjFile&patient="+numpt+"&img="+encodeURIComponent(reader.result.toString().replace(" ","")),
                            type: 'POST',
                            async: false,
                            dataType: "json",
                            error: function (jqXHR, textStatus, errorThrown)
                            {
                            },
                            success: function (data, texStatus, jqXHR)
                            {
                                if(data.toString()==="true"){
                                    FileRefresh(numpt);
                                    window.parent.toastr.success("Image ajouté Avec Succès. ","success",option);
                                }else
                                    window.parent.toastr.error("Erreur lors de l'insertion de l'image?",'Error',option);
                                    }
                        });
                        
                        
                }); 
          
    /*end*/
});
