/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ModifierConsult(numConsult){
    var conslt;
    $.each(Consults,function (i){
        if(Consults[i].numConsult.toString() === numConsult.toString())
        {
            conslt =Consults[i];
            localStorage.setItem("num_conslt",conslt.numConsult);
            localStorage.setItem("conslt",JSON.stringify(conslt));
            localStorage.setItem("UpdateConsult","true");
            window.location.href="Consultation.jsp";
            return false;
        }
    });
}

function RechConsult(data,motcle){
    var rech="false";
    if(motcle.toString().indexOf('/')!== -1)
    {
        $.each(data,function (i){
        if(VerifDateDD_MM_YYYY(data[i].dateConsult) === motcle.toString())
        {
            var conslt =data[i];
            RemplirItemTreeHisSoins(conslt);
            rech="true";
            return false;
        }
        });
    }
    else
    {
        $.each(data,function (i){
        if(data[i].numConsult.toString() === motcle.toString())
        {
            var conslt =data[i];
            RemplirItemTreeHisSoins(conslt);
            rech="true";
            return false;
        }
    });
    }
    if(rech ==="false")
        window.parent.toastr.error('Pas de Résultats pour Ce mot Clé','Error',option);
}

function DeleteJsonDataItemConsult(data,numConsult){
    $.each(data,function (i){
        if(data[i].numConsult===numConsult)
        {
            data.splice(i,1);
            return false;
        }
    });
    localStorage.setItem("Consults",JSON.stringify(Consults));
}



function DeleteConsult(Consult){
      window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Consultation",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppConsultation(Consult);
                                     if(Err.toString()==="true"){
                                        DeleteJsonDataItemConsult(Consults,Consult);
                                        //window.location.reload();
                                        var Consults = GetListConsultationByPatient(localStorage.getItem("numFichPatient"));
                                        RemplirTreeHisSoins(Consults);
                                        treeRefresh();
                                        window.parent.swal("Notification !", "Consultation Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}



function RemplirTreeHisSoins(Consults){
    var tree_html="";
   tree_html+='<div class="row">';
   $.each(Consults, function (i){
       if(Consults[i] !== null){
            var Num_Consult =Consults[i].numConsult;   
            var motifs = GetListMotifConsultByNumConsult(Num_Consult);
         
            tree_html+='<div class="col-md-6" >';
            tree_html+='<div class="pull-right"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:ModifierConsult('+Num_Consult+');"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteConsult('+Num_Consult+');"><i class="icon-trash"></i></a></div>';
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem" >';
            tree_html+=' <span title="'+Consults[i].typeConsult+'" style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+FUllDate(Consults[i].dateConsult)+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem" ">';
            tree_html+='<span class="label label-success" title="'+Consults[i].typeConsult+'"><i class="fa fa-lg fa-minus-circle"></i> '+Consults[i].typeConsult+' Numéro : '+Num_Consult+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Diagnostic </span> – <a href="javascript:void(0);">&nbsp; '+Consults[i].diagconsult.libelle+'</a></li>';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Motif de '+Consults[i].typeConsult+' </span> <ul role="group">';
            if(motifs.length>0){
            $.each(motifs, function (i){
                tree_html+='<li><a href="javascript:void(0);"> &nbsp;'+motifs[i].motif.libelle+'</a></li>';
            });}
            tree_html+='</ul></li>';
            
            var examens =Consults[i].numExamen;
            
            if(examens!== null){
                tree_html+='<li><span><i class="fa fa-clock-o"></i> Examen Clinique Numéro :'+examens.numExamen+' de '+Consults[i].typeConsult+' </span> <ul role="group">';
            
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; TA : '+examens.ta+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; POULS : '+examens.pouls+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; Témperature : ' +examens.temp+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; airesGangl :'+examens.airesGangl+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; auscuCardi :'+examens.auscuCardi+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; auscuPleuro : '+examens.auscuPleuro+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; etatGeneral : '+examens.etatGeneral+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; examPhy : '+examens.examPhy+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; examenAbdominal : '+examens.examenAbdominal+'</a></li>';
                tree_html+='<li style="display: none;"><a href="javascript:void(0);"> &nbsp; examenORL : '+examens.examenORL+'</a></li>';
            
            tree_html+='</ul></li>';}
        if(Consults[i].numOrd!== null)
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Ordonnance </span> – <a href="javascript:void(0);">&nbsp; N° '+Consults[i].numOrd.numOrd+'</a></li>';
        
            tree_html+='</ul></li></ul></li></ul></li></ul></div></div>';    
        }
   });
   tree_html+='</div>';
   $("#contentHis").empty().append(tree_html); 
}

function RemplirItemTreeHisSoins(Consult){
    var tree_html="";
   tree_html+='<div class="row">';
       if(Consult !== null){
         var motifs = GetListMotifConsultByNumConsult(Consult.numConsult);
            
            tree_html+='<div class="col-md-6" >';
            tree_html+='<div class="pull-right"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:ModifierConsult('+Consult.numConsult+');"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteConsult('+Consult.numConsult+');"><i class="icon-trash"></i></a></div>';
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem">';
            tree_html+=' <span title="'+Consult.typeConsult+'" style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+FUllDate(Consult.dateConsult)+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem">';
            tree_html+='<span class="label label-success" title="'+Consult.typeConsult+'"><i class="fa fa-lg fa-minus-circle"></i> '+Consult.typeConsult+' Numéro : '+Consult.numConsult+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Diagnostic </span> – <a href="javascript:void(0);">&nbsp; '+Consult.diagconsult.libelle+'</a></li>';
            tree_html+='<li><span><i class="fa fa-clock-o"></i> Motif de '+Consult.typeConsult+' </span> <ul role="group">';
            if(motifs.length>0){
            $.each(motifs, function (i){
                tree_html+='<li><a href="javascript:void(0);"> &nbsp;'+motifs[i].motif.libelle+'</a></li>';
            });}
            tree_html+='</ul></li>';
            
            var examens =Consult.numExamen;
            
            if(examens!== null){
                tree_html+='<li><span><i class="fa fa-clock-o"></i> Examen Clinique Numéro :'+examens.numExamen+' de '+Consult.typeConsult+' </span> <ul role="group">';
            
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; TA : '+examens.ta+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; POULS : '+examens.pouls+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; Témperature : ' +examens.temp+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; airesGangl :'+examens.airesGangl+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; auscuCardi :'+examens.auscuCardi+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; auscuPleuro : '+examens.auscuPleuro+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; etatGeneral : '+examens.etatGeneral+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; examPhy : '+examens.examPhy+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; examenAbdominal : '+examens.examenAbdominal+'</a></li>';
                tree_html+='<li><a href="javascript:void(0);"> &nbsp; examenORL : '+examens.examenORL+'</a></li>';
            
            tree_html+='</ul></li>';}
            
            tree_html+='</ul></li></ul></li></ul></li></ul></div></div>';    
        }
   tree_html+='</div>';
   $("#contentHis").empty().append(tree_html); 
}
  function GetExamenByNumConsult(NumConsult)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetExamenByNumConsult&NumFichPatient="+NumConsult,
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