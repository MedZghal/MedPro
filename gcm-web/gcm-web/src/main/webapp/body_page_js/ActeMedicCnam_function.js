


function RemplirActesNonRemb(Actes, element){
    var tree_html="";
   tree_html+='<div class="row">';
   $.each(Actes, function (i){
       if(Actes[i] !== null){
            tree_html+='<div class="col-md-12" >';
            
            if(update==="false")
                tree_html+='<div class="pull-right" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicauxNonRemb('+Actes[i].acte.numActe.toString()+',0);"><i class="icon-trash"></i></a></div>';
            else
                tree_html+='<div class="pull-right" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicauxNonRemb('+Actes[i].acte.numActe.toString()+','+Actes[i].consultation.numConsult.toString()+');"><i class="icon-trash"></i></a></div>';
        
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem" >';
            tree_html+=' <span  style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+DateMM_DD_YYYY(Actes[i].date)+"  ("+GenerateCode(Actes[i].acte.numActe.toString())+")"+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem">';
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


function RemplirActes(Actes){
    var tree_html="";
   tree_html+='<div class="row">';
   $.each(Actes, function (i){
       if(Actes[i] !== null){
            tree_html+='<div class="col-md-12" >';
            
            if(update==="false")
                tree_html+='<div class="pull-right" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicaux('+Actes[i].acte.numActe.toString()+',0);"><i class="icon-trash"></i></a></div>';
            else
                tree_html+='<div class="pull-right" style="margin-left: -10px;margin-top: 4px;"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;"><i class="icon-wrench"></i></a> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:DeleteActeMedicaux('+Actes[i].acte.numActe.toString()+','+Actes[i].consultation.numConsult.toString()+');"><i class="icon-trash"></i></a></div>';
        
            tree_html+='<div class="tree" style="overflow:hidden;">';
            tree_html+='<ul role="tree">';
            tree_html+='<li class="parent_li" role="treeitem" >';
            tree_html+=' <span  style="width: 95%;"><i class="fa fa-lg fa-calendar"></i>'+DateMM_DD_YYYY(Actes[i].date)+"  ("+GenerateCode(Actes[i].acte.numActe.toString())+")"+'</span>';
            tree_html+='<ul role="group">';
            tree_html+='<li class="parent_li" role="treeitem">';
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

function GetActeNonRemborsablebyLibelle(libelle)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetActeNonRemborsablebyLibelle&libelle="+libelle,
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

function GetMaxActe()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetMaxActe",
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

function GetListActeNonRemborsable()
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListActeNonRemborsable",
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

function remplir_ActeNOnRemb(Acte,element){
    
    var select_html="";
    $.each(Acte , function(i){
        select_html+="<option value='"+Acte[i].numActe+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+Acte[i].libelle+"</option>";
    });
    element.empty().append(select_html);
    
}

function  remplirActeMedical(update,num_consult){
    var  actes;
    if(update==="true")
        actes=GetListActeMedicauxByNumConsult(num_consult);
 
    $("#nbActeMedic").empty().append(actes.length);
    
    RemplirActes(actes);
    
    if(actes.length===0)
        $('.alert-danger').show();
      
}

function  remplirActeMedicalNonRemb(update,num_consult){
    var  actes;
    if(update==="true")
        actes=GetListActeMedicauxNonRembByNumConsult(num_consult);
 
    $("#nbActeMedic").empty().append(actes.length);
    
    RemplirActesNonRemb(actes,$("#listeActes"));
    
    if(actes.length===0)
        $('.alert-danger').show();
      
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
                                        remplirActeMedical(localStorage.getItem("UpdateConsult"),num_consult);
                                        window.parent.swal("Notification !", "Acte Médical Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}

function DeleteActeMedicauxNonRemb(num_acte, num_consult){
      window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Suppression de Cette Acte",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var Err =SuppActeMedicaux(num_acte, num_consult);
                                     if(Err.toString()==="true"){
                                        remplirActeMedicalNonRemb(localStorage.getItem("UpdateConsult"),num_consult);
                                        window.parent.swal("Notification !", "Acte Médical Supprimé Avec Succès", "success");
                                }else
                                    window.parent.swal("Notification !!! ", "Suppression erroné", "error");
                                        
                                }
                            });
    
}

function AjActeMedicaux(num_acte, num_consult, date_acte, nb_pr_chg)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjActeMedicaux&num_acte="+num_acte+"&num_consult="+num_consult+"&date_acte="+date_acte+"&nb_pr_chg="+nb_pr_chg,
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

function GetActe(Acte,code_Acte){
    var acteObj=[];
    $.each(Acte,function (i){
       if(Acte[i].numActe.toString()===code_Acte.toString()){
           acteObj=Acte[i];
           return false;
       } 
    });
    
    return acteObj;
}



function handleValidation() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#FormVAL');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);
        jQuery.validator.addMethod(
            "australianDate",
            function (value, element) {
              // put your own logic here, this is just a (crappy) example 
              return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
            },
            "Please enter a date in the format dd/mm/yyyy"
          );
        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                Montant: {
                    number: true,
                    required: true
                },
                Tiket: {
                    number: true,
                    required: true
                },
                date_Acte: {
                    required: true,
                    australianDate: true
                },
                price: {
                    required: true,
                    number: true
                },
                Cotation: {
                    required: true
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }
    
    function handleValidationActe() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#FormVALacte');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);
        jQuery.validator.addMethod(
            "australianDate",
            function (value, element) {
              // put your own logic here, this is just a (crappy) example 
              return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
            },
            "Please enter a date in the format dd/mm/yyyy"
          );
        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                dsgacte: {
                    required: true
                },
                Montant: {
                    number: true,
                    required: true
                },
                date_Acte: {
                    required: true,
                    australianDate: true
                },
                dspacte: {
                    required: true,
                    minlength: 5
                }
            },

            invalidHandler: function(event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -1000);
            },

            errorPlacement: function(error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function(element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function(form) {
                success1.show();
                error1.hide();
            }
        });
    }