/* global option */
var url =window.location.href;

    
$(function () {
    
         
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    $("#patient").unbind("click");
    $("#patient").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Patient.jsp" width="100%" height="950px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    
    $("#Accueil").unbind("click");
    $("#Accueil").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Accueil.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#medicament").unbind("click");
    $("#medicament").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Medicament.jsp" width="100%" height="950px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#BordereauCNAM").unbind("click");
    $("#BordereauCNAM").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/BordereauCnam.jsp" width="100%" height="950px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#dicom").unbind("click");
    $("#dicom").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        //https://demo.leadtools.com/MedicalViewer
        //http://localhost:8383/ivmartel-dwv-31d2290/viewers/mobile/index.html
        //https://cloud.app.box.com/dicom_viewer/54037803765/study.boxdicom?sharedName=q9yc41p9w8jpezbi6weoafiw23cn08xs&version=1.2.18
        //http://localhost:8090/dwvViewier/viewers/mobile/index.html
        $("#content").empty();
        //$("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="https://demo.leadtools.com/MedicalViewer" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="//medproapp.ddns.net/oviyam/" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
         
    });
    
    $("#comptabilite").unbind("click");
    $("#comptabilite").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Recette.jsp" width="100%" height="950px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#Statistiques").unbind("click");
    $("#Statistiques").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Statistique.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#dwv").unbind("click");
    $("#dwv").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="//medproapp.ddns.net/dwvViewier/viewers/mobile/index.html" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#ArchiveMedic").unbind("click");
    $("#ArchiveMedic").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/ArchiveMedic.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        localStorage.setItem("numFichPatient","");
        }
    });
    
    
    $("#callog").unbind("click");
    $("#callog").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Rdv.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    $("#rdv").unbind("click");
    $("#rdv").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
        $("#content").empty();
        $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Rdv.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        
    });
    
    
    $("#paramlog").unbind("click");
    $("#paramlog").bind("click", function (e)
    {
       if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
            $("#content").empty();
            $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Parametre.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        }
    });
    
    $("#Cabinet").unbind("click");
    $("#Cabinet").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
            $("#content").empty();
            $("#content").append('<iframe class="full-height-content full-height-content-scrollable" id="iframe_cloturee" src="../body_page/Parametre.jsp" width="100%" height="700px" frameborder="0" style="margin-top:-10px" scrolling="auto"  onload="this.style.display = \'block\';"/>');
        }
    });
    
    $("#Acces").unbind("click");
    $("#Acces").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                $("#confirmeemodal").attr("data-target","#Accesmodal");
                $("#confirmeemodal").trigger("click");
            }
    });
    
      $("#Sécurité").unbind("click");
    $("#Sécurité").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                $("#confirmeemodal").attr("data-target","#Accesmodal");
                $("#confirmeemodal").trigger("click");
            }
    });
    
    $("#consultation").unbind("click");
    $("#consultation").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var data=GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
                
                var patientTAB=[];
                $.each(data , function (i){
                    var partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,data[i].numFichPatient);
                    if(!partage.toString().includes("partagé"))
                        patientTAB.push({
                            id: data[i].numFichPatient,
                            text:data[i].numFichPatient,
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
            $("#select2-patient2").select2({
                placeholder: "Enter id du Patient",
                width: "100%",
                data :patientTAB,
                allowClear: true,
//            ajax: {
//                url: "http://"+GetUrl()+"/gcm-web/Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
//                dataType: 'json',
//                delay: 250,
//                data: function(params) {
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
        $("#select2-patient2").val('').trigger('change');
        $("#select2-select2-patient2-container").css("margin-left","15px"); 
        $("[role='combobox']").css("padding-left","20px");
        $("[role='combobox']").css("background-color","#eef1f5");
        $("#confirmeemodal").attr("data-target","#consultpatientmodal");
        $("#confirmeemodal").trigger("click");
        }
    });
    
    
    $("#controle").unbind("click");
    $("#controle").bind("click", function (e)
    {
        if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
        if(!window.parent.$("#menubackRc").hasClass('hide'))
                window.parent.$("#menubackRc").toggleClass('hide');
        if(!window.parent.$("#menubackBc").hasClass('hide'))
                window.parent.$("#menubackBc").toggleClass('hide');
            
        var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var data=GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
                var patientTAB=[];
                $.each(data , function (i){
                    var partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,data[i].numFichPatient);
                    if(!partage.toString().includes("partagé"))
                    patientTAB.push({
                        id: data[i].numFichPatient,
                        text:data[i].numFichPatient,
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
            $("#select2-patient1").select2({
                placeholder: "Enter id du Patient",
                width: "100%",
                data :patientTAB,
                allowClear: true,
//            ajax: {
//                url: "http://"+GetUrl()+"/gcm-web/Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
//                dataType: 'json',
//                delay: 250,
//                data: function(params) {
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
        $("#select2-patient1").val('').trigger('change');
        $("#select2-select2-patient1-container").css("margin-left","15px"); 
        $("[role='combobox']").css("padding-left","20px");
        $("[role='combobox']").css("background-color","#eef1f5");
        $("#confirmeemodal").attr("data-target","#controlemodal");
        $("#confirmeemodal").trigger("click");
        }
    });
});