/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function GetListVille()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListVille",
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

function GetListVilleDistinct()
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListVilleDistinct",
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

function GetListGouvernorat(ville)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetListGouvernorat&Ville="+ville,
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

function remplir_VILLE(data){
    
    var select_html="";
    select_html+="<option value>sélectionnez Ville </option>";
    $.each(data , function(i){
        select_html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
    });
    $("#ville").empty().append(select_html);
    
}

function remplir_Gouvernorat(data){
    
    var select_html="";
    select_html+="<option value>sélectionnez Gouvernorat </option>";
    $.each(data , function(i){
        select_html+="<option value='"+data[i].gouvernorat+"'>"+data[i].gouvernorat+"</option>";
    });
    $("#Gouvernorat").empty().append(select_html);
}

function remplir_Medicament(data){
    
       $('[name="group-c[0][medic]"]').select2({
            data :data,
            placeholder: "Sélectionnez Un Médicament ",
            width: '100%'
        });
    
//    var select_html="";
//    select_html+="<option value>&nbsp;&nbsp;&nbsp;&nbsp;sélectionnez </option>";
//    $.each(data , function(i){
//        select_html+="<option value='"+data[i].numMedic+"'>&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].desgMedic+"</option>";
//    });
//    
//    $('[name="group-c[0][medic]"]').empty().append(select_html);
    
}

function AjPatient(nom,prenom,sexse,datnaiss,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier, AutreAssur, code_apci, type_apci, date_valid,AssurCnam)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjPatient&nom="+nom+"&prenom="+prenom+"&sexse="+sexse+"&datnaiss="+datnaiss+"&sutfam="+sutfam+"&prof="+prof+"&adr="+adr+"&fixe="+fixe+"&gsm="+gsm+"&poid="+poid+"&ville="+ville+"&fichpapier="+fichpapier+"&AutreAssur="+AutreAssur+"&code_apci="+code_apci+"&type_apci="+type_apci+"&date_valid="+date_valid+"&AssurCnam="+AssurCnam,
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



function UpdatePatient(num,nom,prenom,sexse,datnaiss,sutfam,prof,adr,fixe,gsm,poid,ville,fichpapier, AutreAssur, code_apci, type_apci, date_valid,AssurCnam)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=UpdatePatient&num="+num+"&nom="+nom+"&prenom="+prenom+"&sexse="+sexse+"&datnaiss="+datnaiss+"&sutfam="+sutfam+"&prof="+prof+"&adr="+adr+"&fixe="+fixe+"&gsm="+gsm+"&poid="+poid+"&ville="+ville+"&fichpapier="+fichpapier+"&AutreAssur="+AutreAssur+"&code_apci="+code_apci+"&type_apci="+type_apci+"&date_valid="+date_valid+"&AssurCnam="+AssurCnam,
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

function AjAssuranceCNAM(regime_affi,qualite,ident_unique,rang_Assur,date_valid,type_cnam,nom_medc,cod_cnam)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjAssuranceCNAM&regime_affi="+regime_affi+"&qualite="+qualite+"&ident_unique="+ident_unique+"&rang_Assur="+rang_Assur+"&date_valid="+date_valid+"&type_cnam="+type_cnam+"&nom_medc="+nom_medc+"&cod_cnam="+cod_cnam,
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

function UpdateAssuranceCNAM(num_Assur,regime_affi,qualite,ident_unique,rang_Assur,date_valid,type_cnam,nom_medc,cod_cnam)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=UpdateAssuranceCNAM&num_Assur="+num_Assur+"&regime_affi="+regime_affi+"&qualite="+qualite+"&ident_unique="+ident_unique+"&rang_Assur="+rang_Assur+"&date_valid="+date_valid+"&type_cnam="+type_cnam+"&nom_medc="+nom_medc+"&cod_cnam="+cod_cnam,
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

function SuppAssuranceCNAM(idpatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppAssuranceCNAM&num="+idpatient,
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

function AjTraitementAPCI(num_patient,num_medic,posologie)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=AjTraitementAPCI&num_patient="+num_patient+"&num_medic="+num_medic+"&posologie="+posologie,
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
}function SuppTraitementAPCIByPatient(num_patient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=SuppTraitementAPCIByPatient&num_patient="+num_patient,
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

function UpdatePatientAPCI(num_patient,code_apci,type_apci,datnaiss)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=update&function=UpdatePatientAPCI&num_patient="+num_patient+"&code_apci="+code_apci+"&type_apci="+type_apci+"&datnaiss="+datnaiss,
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


    function handleValidation1() {
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
            messages: {
                sutfam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                ville: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                nom: {
                    minlength: 3,
                    required: true
                },
                prenom: {
                    required: true,
                    minlength: 3
                },
                datnaiss: {
                    required: true,
                    australianDate: true
                },
                age: {
                    required: true,
                    number: true
                },
                poid: {
                    required: true,
                    number: true
                },
//                prof: {
//                    required: true,
//                    minlength: 5
//                },
                adr: {
                    required: true,
                    minlength: 10
                },
                sexe: {
                    required: true
                },
                sutfam: {
                    required: true
                },
                ville: {
                    required: true
                },
                Gouvernorat: {
                    required: true
                },
                fixe: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                gsm: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
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
    
    function handleValidation2() {
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
            messages: {
                sutfam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                ville: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                },
                qualite: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                regime_affi: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                type_cnam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                nom: {
                    minlength: 3,
                    required: true
                },
                prenom: {
                    required: true,
                    minlength: 3
                },
                datnaiss: {
                    required: true,
                    australianDate: true
                },
                age: {
                    required: true,
                    number: true
                },
                poid: {
                    required: true,
                    number: true
                },
//                prof: {
//                    required: true,
//                    minlength: 5
//                },
                adr: {
                    required: true,
                    minlength: 10
                },
                sexe: {
                    required: true
                },
                sutfam: {
                    required: true
                },
                ville: {
                    required: true
                },
                Gouvernorat: {
                    required: true
                },
                fixe: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                gsm: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                ident_unique: {
//                    number: true,
//                    minlength: 12,
//                    maxlength:12,
                    required: true
                },
                date_valid_cnam: {
                    required: true,
                    australianDate: true
                },
                rang_Assur: {
                    required: true,
                    number: true
                },
                type_cnam: {
                    required: true
                },
                qualite: {
                    required: true
                },
                regime_affi: {
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
    
    function handleValidation3() {
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
            messages: {
                sutfam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                ville: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                nom: {
                    minlength: 3,
                    required: true
                },
                prenom: {
                    required: true,
                    minlength: 3
                },
                datnaiss: {
                    required: true,
                    australianDate: true
                },
                age: {
                    required: true,
                    number: true
                },
                poid: {
                    required: true,
                    number: true
                },
//                prof: {
//                    required: true,
//                    minlength: 5
//                },
                adr: {
                    required: true,
                    minlength: 10
                },
                sexe: {
                    required: true
                },
                sutfam: {
                    required: true
                },
                ville: {
                    required: true
                },
                Gouvernorat: {
                    required: true
                },
                fixe: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                gsm: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                type_apci: {
                    required: true
                },
                code_apci: {
                    required: true
                },
                date_valid_apci: {
                    required: true,
                    australianDate: true
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
    
    function handleValidation4() {
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
            messages: {
                sutfam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                ville: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                },
                qualite: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                regime_affi: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                type_cnam: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                nom: {
                    minlength: 3,
                    required: true
                },
                prenom: {
                    required: true,
                    minlength: 3
                },
                datnaiss: {
                    required: true,
                    australianDate: true
                },
                age: {
                    required: true,
                    number: true
                },
                poid: {
                    required: true,
                    number: true
                },
//                prof: {
//                    required: true,
//                    minlength: 5
//                },
                adr: {
                    required: true,
                    minlength: 10
                },
                sexe: {
                    required: true
                },
                sutfam: {
                    required: true
                },
                ville: {
                    required: true
                },
                Gouvernorat: {
                    required: true
                },
                fixe: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                gsm: {
                    required: false,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                ident_unique: {
//                     number: true,
//                    minlength: 12,
//                    maxlength:12,
                    required: true
                },
                date_valid_cnam: {
                    required: true,
                    australianDate: true
                },
                rang_Assur: {
                    required: true,
                    number: true
                },
                type_cnam: {
                    required: true
                },
                qualite: {
                    required: true
                },
                regime_affi: {
                    required: true
                },
                type_apci: {
                    required: true
                },
                code_apci: {
                    required: true
                },
                date_valid_apci: {
                    required: true,
                    australianDate: true
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
    
    function VerifMedicAPCI(){
        var Verif="true";
        var medic=[];
        jQuery('.mt-repeater-item').each(function(i)
            {
                if($(this).find('[name="group-c['+i+'][medic]"]').val()!=="")
                    medic.push($(this).find('[name="group-c['+i+'][medic]"]').val());
          });
          
          if(medic[0] !== null){
                $.each(medic,function (i){
                   if(jQuery.grep(medic, function(a){return a === medic[i];}).length >1)
                   {
                       Verif ="false";
                       return false;

                   }else
                       Verif ="true";

                });
            }else
                Verif ="false";
      
          return Verif;
    }
    
    function ViderChamps(){
        $("#nom").val("-----");
        $("#prenom").val("-----");
        $("#fich").val("-----");
        $("#poid").val("0");
        $("#age").val("0");
        $("#prof").val("-----");
        $("#adr").val("-----");
        $("#sexe").val("-----");
        $("#sutfam").val("-----");
        $("#ville").val("-----");
        $("#gsm").val("-----");
    }