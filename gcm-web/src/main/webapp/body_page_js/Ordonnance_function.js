/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function GetListOrdonnanceByNum_Consult(num_consult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListOrdonnanceByNum_Consult&num_consult="+num_consult,
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



function Remplir_Ord(Ord){
     var Ord_html="";
    
       if(Ord.numOrd !== null){
            var medicament =GetListPrescriptionOrdByNumOrd(Ord.numOrd.numOrd);     
         
            Ord_html+='<div class="mt-comments">';
            Ord_html+='<div class="mt-comment">';
            Ord_html+='<div class="mt-comment-img">';
            Ord_html+='<img src="../img/medical-kit.png"  alt=""/> N° : '+Ord.numOrd.numOrd+' </div>';
            Ord_html+='<div class="mt-comment-body">';
            Ord_html+='<div class="mt-comment-info">';
            Ord_html+='<span class="mt-comment-author"> Ordonnance Pour la Consultation N° :'+Ord.numConsult+'</span>';
            Ord_html+='<span class="mt-comment-date">'+FUllDate(Ord.numOrd.date)+' <img src="../img/padlock.png" alt="e" style="width: 20px;margin-top: -2px;"/></span> </div>';
            Ord_html+='<div class="mt-comment-text">';
            $.each(medicament, function (i){
                Ord_html+='<img src="../img/pill_s.png" alt="e" style="width: 10px;margin-top: -5px;margin-left:5px;"/> '+medicament[i].medicament.desgMedic+'<span style="margin-left:20px;">Qt: '+medicament[i].quntMed+'</span><br/>';
                Ord_html+='<div style="margin-left:20px;"> Posologie : '+medicament[i].nbFoisUtil+'</div>';
            });
            Ord_html+='</div>';
            Ord_html+='<div class="mt-comment-details">';
            
            Ord_html+='<ul class="mt-comment-actions">';
            Ord_html+='<li> <a href="#">Modifier</a></li>';
            Ord_html+='<li><a href="#"><img src="../img/eye.png" alt="e" style="width: 20px;margin-top: -5px;"/>Vue</a></li>';
            Ord_html+='<li><a href="javascript:SuppOrdConFirmation('+Ord.numConsult+');"><img src="../img/dustbin.png" alt="e" style="width: 15px;margin-top: -5px;"/>Supprimer</a></li>';
            Ord_html+=' </ul></div></div> </div></div>';
        }
                    
      $("#portlet_comments_1").empty().append(Ord_html);              
               

}

function Remplir_OrdNotValide(Prescp,date,num_consult){
     var Ord_html="";
    
       if(Prescp !== null){
            var medicament =Prescp;     
         
            Ord_html+='<div class="mt-comments">';
            Ord_html+='<div class="mt-comment">';
            Ord_html+='<div class="mt-comment-img">';
            Ord_html+='<img src="../img/medical-kit.png"  alt=""/> N° :</div>';
            Ord_html+='<div class="mt-comment-body">';
            Ord_html+='<div class="mt-comment-info">';
            Ord_html+='<span class="mt-comment-author"> Ordonnance Pour la Consultation N° :'+num_consult+'</span>';
            Ord_html+='<span class="mt-comment-date">'+date+' <img src="../img/padlockr.png" alt="e" style="width: 20px;margin-top: -2px;"/></span> </div>';
            Ord_html+='<div class="mt-comment-text">';
            $.each(medicament, function (i){
                Ord_html+='<img src="../img/pill_s.png" alt="e" style="width: 10px;margin-top: -5px;margin-left:5px;"/> '+medicament[i].medc+'<br/>';
            });
            Ord_html+='</div>';
            Ord_html+='<div class="mt-comment-details">';
            
            Ord_html+='<ul class="mt-comment-actions">';
            Ord_html+='<li> <a href="#">Modifier</a></li>';
            Ord_html+='<li><a href="#"><img src="../img/eye.png" alt="e" style="width: 20px;margin-top: -5px;"/>Vue</a></li>';
            Ord_html+='<li><a href="#"><img src="../img/dustbin.png" alt="e" style="width: 15px;margin-top: -5px;"/>Supprimer</a></li>';
            Ord_html+=' </ul></div></div> </div></div>';
        }
                    
      $("#portlet_comments_1").append(Ord_html);              
               

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
                                        Remplir_Ord(PrOrd);
                                        window.parent.swal("Notification !", "Consultation Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}
