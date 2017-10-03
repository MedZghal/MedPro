
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
    select_html+="<option value></option>";
    $.each(data , function(i){
        select_html+="<option value='"+data[i]+"'>"+data[i]+"</option>";
    });
    
    $("#ville").empty().append(select_html);
    
}

function remplir_Gouvernorat(data){
    
    var select_html="";
    select_html+="<option value> </option>";
    $.each(data , function(i){
        select_html+="<option value='"+data[i].gouvernorat+"'>"+data[i].gouvernorat+"</option>";
    });
    $("#Gouvernorat").empty().append(select_html);
}
