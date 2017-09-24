/* global option, App */

function TriggerPatient(){
     RemplirAntecedents($("#select2-patient").val());
       var patient =GetPatientByNumFichPatient($("#select2-patient").val());
            if(patient.codeApci !== ""){
                 $("#traitementbody").removeClass("hide");
                 /***Traitements APCI ***/
                 var traitapci = GetTraitementAPCIByNumPatient($("#select2-patient").val());
                        if(Object.keys(traitapci).length>0){
                            $.each(traitapci, function (i){
                                $("#triApci").tagsinput('add',traitapci[i].medicament.desgMedic);
                            });
                        }
             }else{
                 if(!$("#traitementbody").hasClass("hide"))
                     $("#traitementbody").toggleClass("hide");
             }
              if(patient.assurCnam !== null){
                                $('#regime_affi').val(patient.assurCnam.regimeAffi);
                                $('#ident_unique').val(patient.assurCnam.identUnique);
                                $('#qualite').val(patient.assurCnam.qualite);
                                var D_valid_cnam=patient.assurCnam.dateValid;
                                $('#date_valid_cnam').val(DateMM_DD_YYYY(D_valid_cnam));
                                $('#type_cnam').val(patient.assurCnam.type);
                                $('#rang_Assur').val(patient.assurCnam.rangAssur);
                            }else
                            {
                               $('#regime_affi').val("");
                                $('#ident_unique').val("");
                                $('#qualite').val("");
                                $('#date_valid_cnam').val("");
                                $('#type_cnam').val("");
                                $('#rang_Assur').val(""); 
                            }
            $("#Poids").val(patient.poids);               
            RemplirConsultation($("#select2-patient").val());
            $("#select2-select2-consult-container").css("margin-left","15px");
            $("[role='combobox']").css("padding-left","20px");
            $("[role='combobox']").css("background-color","#eef1f5");
}

function RemplirPatients(){
    var data=GetListAllPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
    var patientTAB=[];
    $.each(data , function (i){
        patientTAB.push({
            id: data[i].numFichPatient,
            text:data[i].numFichPatient +" "+data[i].nom+" "+data[i].prenom,
            adresse: data[i].adresse,
            assurCnam:data[i].assurCnam,
            autreAssur:data[i].autreAssur,
            codeApci:data[i].codeApci,
            dateValid:data[i].dateValid,
            datenaiss:data[i].datenaiss,
            fixe:data[i].fixe,
            gsm:data[i].gsm,
            nom:data[i].nom,
            numFichPatient:data[i].numFichPatient,
            prenom:data[i].prenom,
            profession:data[i].profession,
            sexe:data[i].sexe,
            typeApci:data[i].typeApci
        });
    });
 $("#select2-patient").select2({
            placeholder: "Enter id du Patient",
            width: "100%",
            data :patientTAB,
            allowClear: true,
//            ajax: {
//                url: "http://"+GetUrl()+"/gcm-web/Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
//                dataType: 'json',
//                delay: 250,
//                data: function(params,data) {
//                    return {
//                        q: params.term, // search term
//                        page: params.page
//                    };
//                },
//                processResults: function(data, page) {
//                    // parse the results into the format expected by Select2.
//                    // since we are using custom formatting functions we do not need to
//                    // alter the remote JSON data
//                    localStorage.setItem("ListePatient",JSON.stringify(data));
//                    _.each(data, function (item) {item.id = item.numFichPatient; });
//                    return {
//                        results: data
//                    };
//                },
//                cache: true
//            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });
    $("#select2-patient").val('').trigger('change');
    }
function  ModiferPatient(num_patient){
    localStorage.setItem("Update","true");
               localStorage.setItem("Consultation","false");
               localStorage.setItem("numFichPatient",num_patient);
               window.location.href='../body_page/AjPatient.jsp';
}

function DeletePatient_(num_patient){
  window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Êtes-Vous Sûr de Supprimer ce Patient?.",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                                
                               var Err= SuppPatient(num_patient);
                               
                                if(Err.toString()==="true")
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                else
                                    toastr.error("Attention, Ce patient à des consultations!.",'Error',option);
                                  
                        }
                        
                            
                });   
}

function ModifierConsult(numConsult){
    var conslt =GetConsultationByNum(numConsult);
    var Consults =GetListConsultationByPatient(conslt.numPatient.numFichPatient);
        localStorage.setItem("Consults",JSON.stringify(Consults));
        localStorage.setItem("num_conslt",conslt.numConsult);
        localStorage.setItem("numFichPatient",conslt.numPatient.numFichPatient);
        localStorage.setItem("Prescp",JSON.stringify([]));
        localStorage.setItem("typeConsult","Consultation");
        localStorage.setItem("conslt",JSON.stringify(conslt));
        localStorage.setItem("UpdateConsult","true");
        window.location.href="Consultation.jsp";
}

function DeleteActeMedicaux(num_acte, num_consult){
      window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Acte",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppActeMedicaux(num_acte, num_consult);
                                     if(Err.toString()==="true"){
                                        remplirActeMedical(num_consult);
                                        window.parent.swal("Notification !", "Consultation Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}

 
 function RemplirActesNonRemb(Actes, element){
    var tree_html="";
   tree_html+='<div class="row"> Liste des Actes Non Remborsée';
   $.each(Actes, function (i){
       if(Actes[i] !== null){
            tree_html+='<div class="col-md-12" > ';
            
            tree_html+='<div class="pull-right hide" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicaux('+Actes[i].acte.numActe.toString()+','+Actes[i].consultation.numConsult.toString()+');"><i class="icon-trash"></i></a></div>';
        
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem"  >';
            tree_html+=' <span  style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+DateMM_DD_YYYY(Actes[i].date)+"  ("+GenerateCode(Actes[i].acte.numActe.toString())+")"+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem" style="display:none;">';
            tree_html+='<span class="label label-success" ><i class="fa fa-lg fa-minus-circle"></i> Code Acte : '+GenerateCode(Actes[i].acte.numActe.toString())+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Montant Acte : '+Actes[i].acte.montant+'</span> </li>';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Description : '+Actes[i].acte.description+' </span> </li>';
          
            tree_html+='</ul></li></ul></li></ul></li></ul></div></div>';    
        }
   });
   tree_html+='</div>';
   element.empty().append(tree_html); 
}

 function RemplirTableArch(Patient){
            
     if(Patient!== null){
            var Consults =GetListConsultationByPatient(Patient); 
            Consults.reverse();
            var tree_html="";

           $.each(Consults, function (i){
                    tree_html+='<tr><td>'+DateDD_MM_YYYY(Consults[i].dateConsult)+'</td>';
                    tree_html+='<td> <strong>Type :</strong>'+Consults[i].typeConsult+'</br>';
                    tree_html+='<strong> N° :</strong>'+Consults[i].numConsult+'</br>';
                    tree_html+='<strong> Diagnostic :</strong> '+Consults[i].diagconsult.libelle+'</br>';
                    var motifs = GetListMotifConsultByNumConsult(Consults[i].numConsult);
                    if(Object.keys(motifs).length>0){
                        tree_html+='<strong> Motifs : </strong></br>';
                        $.each(motifs , function (i){
                           tree_html+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-'+motifs[i].motif.libelle+'</br>'; 
                        });
                    }
                    tree_html+='</td>';
                    tree_html+='<td>';
                    if(Consults[i].numOrd !== null){
                        tree_html+='<strong> Ordonnance :</strong>'+Consults[i].numOrd.numOrd+'</br>';
                        var medicament =GetListPrescriptionOrdByNumOrd(Consults[i].numOrd.numOrd);
                        if(Object.keys(medicament).length>0){
                            tree_html+='<strong> Médicaments : </strong></br>';
                            $.each(medicament , function (i){
                               tree_html+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-'+medicament[i].medicament.desgMedic+'</br>'; 
                            });
                         }
                    }
                        var Actess =GetListActeMedicauxAllByNumConsult(Consults[i].numConsult);
                        if(Object.keys(Actess).length>0){
                            tree_html+=' <strong>Actes Médicaux :</strong> </br>';
                            $.each(Actess , function (i){
                               tree_html+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-'+Actess[i].acte.libelle+'</br>'; 
                            });
                         }
                    tree_html+='</td>';
                    tree_html+='<td><strong> </strong></td>';
                    tree_html+='<td><strong> </strong> </td>';
                    tree_html+='</tr>';
                     });
   
            $("#TABARCH").empty().append(tree_html); 
          
            
     }
}


function RemplirActes(Actes){
    var tree_html="";
   tree_html+='<div class="row"> Liste des Actes Remborsée';
   $.each(Actes, function (i){
       if(Actes[i] !== null){
            tree_html+='<div class="col-md-12" >';
            
                tree_html+='<div class="pull-right hide" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicaux('+Actes[i].acte.numActe.toString()+','+Actes[i].consultation.numConsult.toString()+');"><i class="icon-trash"></i></a></div>';
        
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem" >';
            tree_html+=' <span  style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+DateMM_DD_YYYY(Actes[i].date)+"  ("+GenerateCode(Actes[i].acte.numActe.toString())+")"+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem" style="display:none;">';
            tree_html+='<span class="label label-success" ><i class="fa fa-lg fa-minus-circle"></i> Code Acte : '+GenerateCode(Actes[i].acte.numActe.toString())+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Montant Acte : '+Actes[i].acte.montant+'</span> </li>';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Tiket Modérateur : '+Actes[i].acte.tiketModer+' </span> </li>';
            if(Actes[i].acte.accord.toString()=== "1")
                tree_html+='<li><span><i class="fa fa-clock-o"></i> Avec Accord CNAM </span> </li>';
            else
                tree_html+='<li><span><i class="fa fa-clock-o"></i> Sans Accord CNAM </span> </li>';
            tree_html+='</ul></li></ul></li></ul></li></ul></div></div>';    
        }
   });
   tree_html+='</div>';
   $("#listeActes").empty().append(tree_html); 
}

 
 function  remplirActeMedical(num_consult){
    var  actes,actescnam;
    actescnam=GetListActeMedicauxByNumConsult(num_consult);
    actes=GetListActeMedicauxNonRembByNumConsult(num_consult);
    
    $("#nbactemedic").empty().append(actes.length+actescnam.length);
    
    RemplirActes(actescnam);
    RemplirActesNonRemb(actes,$("#listeActesCnam"));
    treeRefresh();  
}

 function DeleteConsult(Consult){
      window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Consultation",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppConsultation(Consult);
                                     if(Err.toString()==="true")
                                        window.parent.swal("Notification !", "Consultation Supprimé Avec Succès", "success");
                                    else
                                        window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}
 
 function SuppOrdConFirmation(num_ord){
    window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Ordonnance .",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppOrdonnance(num_ord);
                                     if(Err.toString()==="true"){
                                        localStorage.setItem("Prescp",JSON.stringify([]));
                                        var PrOrd=GetConsultationByNum(localStorage.getItem("num_conslt"));
                                        if(PrOrd.length>0)
                                            Remplir_Ord(PrOrd);
                                        else{
                                                $("#tab_7_2").empty();
                                                $("#nbordonn").empty().append("0");
                                            }
                                        window.parent.swal("Notification !", "Consultation Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}

 function Remplir_Ord(Ord){
     var Ord_html="";
    
       if(Ord !== null){
            var medicament =GetListPrescriptionOrdByNumOrd(Ord.numOrd.numOrd);     
         
            Ord_html+='<div class="mt-comments">';
            Ord_html+='<div class="mt-comment">';
            Ord_html+='<div class="">';
            Ord_html+='<img src="../img/pills.png"  alt=""/> N° : '+Ord.numOrd.numOrd+' </div>';
            Ord_html+='<div class="mt-comment-body" style="margin-left: 30px;">';
            Ord_html+='<div class="mt-comment-info">';
            Ord_html+='<span class="mt-comment-author"> Ordonnance Pour la Consultation N° :'+Ord.numConsult+'</span>';
            Ord_html+='<span class="mt-comment-date">'+FUllDate(Ord.numOrd.date)+' <img src="../img/padlock.png" alt="e" style="width: 20px;margin-top: -2px;"/></span> </div>';
            Ord_html+='<div class="mt-comment-text">';
            $.each(medicament, function (i){
                Ord_html+='<img src="../img/pill_s.png" alt="e" style="width: 10px;margin-top: -5px;margin-left:5px;"/> '+medicament[i].medicament.desgMedic+'<br/>';
            });
            Ord_html+='</div>';
            Ord_html+='<div class="mt-comment-details">';
            
            Ord_html+='<ul class="mt-comment-actions hide">';
            Ord_html+='<li><a href="javascript:SuppOrdConFirmation('+Ord.numConsult+');"><img src="../img/dustbin.png" alt="e" style="width: 15px;margin-top: -5px;"/>Supprimer</a></li>';
            Ord_html+=' </ul></div></div> </div></div>';
        }
                    
      $("#tab_7_2").empty().append(Ord_html);              
               

}
 
 function formatRepo(repo) {
//     console.log(repo);
            if (repo.loading) return repo.text;
            var markup='<div class="pull-right hide" style="overflow-x:visible;"><a class="btn btn-circle btn-icon-only btn-default" id="modifPatientArch_" ><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default info" id="suppPatientArch_"  ><i class="icon-trash"></i></a></div>';
             markup += "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__avatar'><img src='" + ImgProfile(repo.datenaiss,repo.sexe) + "' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>"+repo.numFichPatient+ "</div>";

            if (repo.numFichPatient) {
                markup += "<div class='select2-result-repository__description'>" + repo.nom  +" "+ repo.prenom;
                 if(repo.assurCnam !== null)
                        markup +="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(repo.codeApci !== "")
                        markup +="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(repo.autreAssur !== "")
                        markup +=AutreAssurImg(repo.autreAssur);
                markup += "</div>";
            }

            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> Fixe : " + repo.fixe + " </div>" +
                "<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> Gsm : " + repo.gsm + " </div>" +
                "<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> Profession : " + repo.profession + " </div>" +
                "</div>" +
                "</div></div>";

            return markup;
}

function formatRepoSelection(repo) {
            return repo.numFichPatient || repo.text;
        }
var paramater = JSON.parse(localStorage.getItem("paramater"));


    
    
    
    function formatRepoConsult(repo) {
            if (repo.loading) return repo.text;
            
            
        var   markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__avatar'><img src='../img/consult.png' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div id="+repo.numConsult+" class='select2-result-repository__title'>"+repo.numConsult+ "</div>";

            if (repo.diagconsult) {
                markup += "<div class='select2-result-repository__description' >" + repo.diagconsult.libelle;
                 if(repo.numOrd !== null)
                        markup +="&nbsp;<img src='../img/pill_s.png' style='width: 20px;' >&nbsp;Ordonnance N°"+repo.numOrd.numOrd;
      
                markup += "</div>";
            }

            markup += "<div class='select2-result-repository__statistics' >" +
                "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> Patient N° " + repo.numPatient.numFichPatient + " </div>" ;
                if(repo.typeConsult.includes("Contrôle"))
                    markup +="<div class='select2-result-repository__stargazers' style='color: red;'><span class='glyphicon glyphicon-star'></span> " + repo.typeConsult + " </div>" ;
                else
                    markup +="<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> " + repo.typeConsult + " </div>" ;
                
                markup +="<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> " + FUllDate(repo.dateConsult) + " </div>" +
                "</div></div></div>" ;
            markup+='<div class="pull-right hide" style="margin-top:-35px;overflow-x:visible;"><a class="btn btn-circle btn-icon-only btn-default" id="modifConsultArch"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default info" id="suppConsultArch"  ><i class="icon-trash"></i></a></div>';
            
            return markup;
}

function formatRepoSelectionConsult(repo) {
            return repo.numConsult  || repo.text;
        }
    var select2    ;
function RemplirConsultation(num_patient){    
     select2 =  $("#select2-consult").select2({
              placeholder: "Enter id du Consultation",
              width: "100%",
              ajax: {
                  url: "http://"+GetUrl()+"/gcm-web/Consultation?type=consult&function=GetListConsultationByPatient&NumFichPatient="+num_patient,
                  dataType: 'json',
                  delay: 250,
                  data: function(params) {
                      return {
                          q: params.term, // search term
                          page: params.page
                      };
                  },
                  processResults: function(data, page) {
                      // parse the results into the format expected by Select2.
                      // since we are using custom formatting functions we do not need to
                      // alter the remote JSON data
                      $("#nbconsultt").empty().append(data.length);
                      _.each(data, function (item) {item.id = item.numConsult; });
                      return {
                          results: data
                      };
                  },
                  cache: true
              },
              escapeMarkup: function(markup) {
                  return markup;
              }, // let our custom formatter work
              templateResult: formatRepoConsult,
              templateSelection: formatRepoSelectionConsult
  });
  
}

        