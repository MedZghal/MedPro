
function GetParemetrebyCodeMedTrit(codeMedTrit)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Acces?type=consult&function=GetParemetrebyCodeMedTrit&codeMedTrit="+codeMedTrit,
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

function handleValidation() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation
        var FormVAL = $('#FormVAL');
        var error1 = $('.alert-danger', FormVAL);
        var success1 = $('.alert-success', FormVAL);

        FormVAL.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                Salutation: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                ville: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
                ,
                Sépecialité: {
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
                    date: true
                },
                Inscription: {
                    required: true,
                    number: true
                },
                adr: {
                    required: true,
                    minlength: 10
                },
                Titre: {
                    required: true,
                    minlength: 10
                },
                Salutation: {
                    required: true
                },
                Sépecialité: {
                    required: true
                },
                ville: {
                    required: true
                },
                Gouvernorat: {
                    required: true
                },
                fixe: {
                    required: true,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                gsm: {
                    required: true,
                    number: true,
                    maxlength :8,
                    minlength :8
                },
                Code: {
                    number: true,
                    minlength: 10,
                    maxlength:10,
                    required: true
                },
                TVA: {
                    required: true,
                    number: true
                },
                Tiket: {
                    required: true,
                    number: true
                },
                Type: {
                    required: true
                },
                Montant: {
                    required: true,
                    number: true
                },
                email: {
                    required: true,
                    email: true
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
    
    
function AjParametre(nom_medecin, prenom_medecin, date_naiss, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv, code_Med_Trit)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjParametre&nom_medecin="+nom_medecin+"&prenom_medecin="+prenom_medecin+"&date_naiss="+date_naiss+"&salutation="+salutation+"&num_inscp_ord_med="+num_inscp_ord_med+"&adresse="+adresse+"&ville="+ville+"&Fixe="+Fixe+"&GSM="+GSM+"&email="+email+"&titre="+titre+"&specialite="+specialite+"&gouvernorat="+gouvernorat+"&code_convent="+code_convent+"&tiket_moder="+tiket_moder+"&tva_consult="+tva_consult+"&montant_consult="+montant_consult+"&type_consult="+type_consult+"&mnt_consultSansConv="+mnt_consultSansConv+"&code_Med_Trit="+code_Med_Trit,
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

function UpdateParametre(num_cab,nom_medecin, prenom_medecin, date_naiss, salutation, num_inscp_ord_med, adresse, ville, Fixe, GSM, email, titre, specialite, gouvernorat, code_convent, tiket_moder, tva_consult, montant_consult, type_consult, mnt_consultSansConv)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateParametre&num_cab="+num_cab+"&nom_medecin="+nom_medecin+"&prenom_medecin="+prenom_medecin+"&date_naiss="+date_naiss+"&salutation="+salutation+"&num_inscp_ord_med="+num_inscp_ord_med+"&adresse="+adresse+"&ville="+ville+"&Fixe="+Fixe+"&GSM="+GSM+"&email="+email+"&titre="+titre+"&specialite="+specialite+"&gouvernorat="+gouvernorat+"&code_convent="+code_convent+"&tiket_moder="+tiket_moder+"&tva_consult="+tva_consult+"&montant_consult="+montant_consult+"&type_consult="+type_consult+"&mnt_consultSansConv="+mnt_consultSansConv,
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