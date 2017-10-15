var widthdoc=0;
var numFichPatient=0;
var TraitmentApci =  [];
var Gouvernorats;
var CodeVille;
var CptAssurCnam =0;
var Err ="true";
var paramater;
$(function(){
    
            paramater = JSON.parse(localStorage.getItem("paramater"));
            $("#date").append(FUllDateString(GetDateServeur()));
                    
            var ville =GetListVilleDistinct();
            remplir_VILLE(ville);

            var Medic =GetListMedicament();
            remplir_Medicament(Medic);
            $("#codecnam").inputmask({"mask": "99/99999999/99"});
            $("#ident_unique").inputmask({"mask": "99/99999999/99"});
            
            
/*commande*/
          $("#hidecnam").click( function (){
              if(!$("#collapse_2").hasClass('in') )
                    $("#hideapci").removeClass('hide');
                else
                {
                    if(!$("#hideapci").hasClass('hide')){
                         $("#collapse_1").removeClass('in');
                         $("#collapse_1").attr('aria-expanded',false);
                         $("#collapse_1").css('height: 0px;');
                         $("#hideapci").toggleClass('hide');
                }
                }
            });
    
    
            $(this.width).change(function() {
            var x =$(document).width();
            alert(x);
            if( x !== widthdoc )
                {
                    console.log(x);
                    widthdoc = x;
                    if( parseInt(widthdoc) <= 1057)
                        $("#submit").css("margin-left","310");
                    else
                        $("#submit").css("margin-left","390px");
                }
        });
    
        
        
//            Ladda.bind( '.mt-ladda-btn', { timeout: 2000 } );
//            Ladda.bind( '.mt-ladda-btn.mt-progress-demo ', {
//                callback: function( instance ) {
//                    var progress = 0;
//                    var interval = setInterval( function() {
//                        progress = Math.min( progress + Math.random() * 0.1, 1 );
//                        instance.setProgress( progress );
//
//                        if( progress === 1 ) {
//                            instance.stop();
//                            clearInterval( interval );
//                        }
//                    }, 200 );
//                }
//            });
            
            
            $("#code_apci").inputmask('99-99', {
                    numericInput: true,
                    rightAlignNumerics: true,
                    greedy: false
                });
            
            $('#SuppCnam').on('click', function () {
                window.parent.$.SmartMessageBox({
                                        title : "<img src='../img/ERR.png'></img>  Attention!",
                                        content : "Êtes-vous Sûr de Supprimer l'assurance CNAM de ce Patient",
                                        buttons : '[No][Yes]'
                                        }, function(ButtonPressed) {
                                            if (ButtonPressed === "Yes") {
                                                if(Object.keys(TraitmentApci).length===0){
                                                $("#collapse_2").removeClass('in');
                                                $("#collapse_2").attr('aria-expanded',false);
                                                $("#collapse_2").css('height: 0px;');
                                                $("#SuppCnam").removeClass('hide');
                                                Err =SuppAssuranceCNAM(CptAssurCnam);
                                                if(Err.toString() ==="true"){
                                                    window.parent.swal("Notification !", "Assurance CNAM Supprimé Avec Succès ", "success");
                                                    $("#SuppCnam").toggleClass('hide');
                                                }else
                                                    window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
                                                }else
                                                    window.parent.toastr.error('Ce patient a des traitements APCI ?','Error',option);
                                            }

                                            if (ButtonPressed === "No") {
                                                
                                            }

                                    });
                
                     });
                     
            $('#SuppApci').on('click', function () {
                            window.parent.$.SmartMessageBox({
                                        title : "<img src='../img/ERR.png'></img>  Attention!",
                                        content : "Êtes-vous Sûr de Supprimer les Traitements APCI de ce Patient",
                                        buttons : '[No][Yes]'
                                        }, function(ButtonPressed) {
                                            if (ButtonPressed === "Yes") {
                                                $("#collapse_1").removeClass('in');
                                                $("#collapse_1").attr('aria-expanded',false);
                                                $("#collapse_1").css('height: 0px;');
                                                $("#SuppApci").removeClass('hide');
                                                
                                                if(Object.keys(TraitmentApci).length>0)
                                                Err =SuppTraitementAPCIByPatient(numFichPatient);
                                                
                                                
                                                if(Err.toString() ==="true"){
                                                    
                                                    UpdatePatientAPCI(numFichPatient,"","","");
                                                    $("#type_apci").val('');
                                                    $("#date_valid_apci").val('');
                                                    $("#code_apci").val('');
                                                    window.parent.swal("Notification !", "Traitements APCI Supprimé Avec Succès ", "success");
                                                    $("#SuppApci").toggleClass('hide');
                                                    TraitmentApci =  [];
                                                    //window.location.reload();
                                                }else
                                                    window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);

                                            }

                                            if (ButtonPressed === "No") {
                                                
                                            }

                                    });
                
                     });
                     
            
            $('#submit').on('click', function () {
                $('#FormVAL').data('validator', null);
                
             /*  jQuery('.mt-repeater-item').each(function(i){
                        $("[name='group-c["+i+"][medic]']").prop("required", false);
                        });*/
                        
                if($("#collapse_1").hasClass('in') && $("#collapse_2").hasClass('in')){
                     handleValidation4();  
                     /*jQuery('.mt-repeater-item').each(function(i){
                        $("[name='group-c["+i+"][medic]']").prop("required", true);
                        });*/
                }else
                    if($("#collapse_2").hasClass('in'))
                     handleValidation2();  
                else
                     if($("#collapse_1").hasClass('in')){
                     handleValidation3();
                     /*jQuery('.mt-repeater-item').each(function(i){
                        $("[name='group-c["+i+"][medic]']").prop("required", true);
                        });*/
                 }else
                     handleValidation1();
                     
                
                
                    if( $('#FormVAL').valid() && VerifMedicAPCI() ==="true"){
                            
                            
                            var codeapci =RemoveCaractere($("#code_apci").val());
                            
                                if(localStorage.getItem('Update')==="false")
                                { 
                                   CptAssurCnam =0;
                                   var cptPatient =GetCptParamByCode("CptFich");
                                   

                                   if($("#collapse_2").hasClass('in')){
                                           CptAssurCnam = GetCptParamByCode("CptAssurCnam");   
                                           Err = AjAssuranceCNAM($("#regime_affi").val(),$("#qualite").val(),$("#ident_unique").val().toString().split(' ')[0].replace(new RegExp('/', 'g'),""),$("#rang_Assur").val(),$("#date_valid_cnam").val(),$("#type_cnam").val(),$("#medfamille").val(),$("#codecnam").val());
                                       }
                                       else
                                           Err="true";



                                    if(Err.toString()=== "true")
                                           {
                                               Err =AjPatient($("#nom").val(),$("#prenom").val(),$("#sexse").val(),$("#datnaiss").val(),$("#sutfam").val(),$("#prof").val(),$("#adr").val(),$("#fixe").val(),$("#gsm").val(),$("#poid").val(),CodeVille,$('#fich').val(),$("#autreAssur").val(),codeapci,$("#type_apci").val(),$("#date_valid_apci").val(),CptAssurCnam);
                                                if(Err.toString()=== "true")
                                                    Err=AjPatientByMedecin(paramater.codeMedTrit.codeMedTrit,cptPatient,"");
                                               if(Err.toString()=== "true" && $("#collapse_1").hasClass('in'))
                                               {   
                                                       jQuery('.mt-repeater-item').each(function(i)
                                                           {
                                                               var medic=$(this).find('[name="group-c['+i+'][medic]"]').val();
                                                               var posologie = $(this).find('[name="group-c['+i+'][p1]"]').val()+" "+$(this).find('[name="group-c['+i+'][p2]"]').val() +" * "+$(this).find('[name="group-c['+i+'][p3]"]').val()+" / "+$(this).find('[name="group-c['+i+'][p4]"]').val()+" * "+$(this).find('[name="group-c['+i+'][p5]"]').val()+" "+$(this).find('[name="group-c['+i+'][p6]"]').val();
                                                               if(Err.toString()=== "true" && medic.toString() !=="" ){
                                                                   Err = AjTraitementAPCI(cptPatient,medic,posologie);
                                                               }


                                                           });
                                                   }

                                               if(Err.toString()=== "true")
                                               {
                                                   window.parent.swal("Notification !", "Patient inséré Avec Succès ", "success");
                                                   
                                                    window.location.href="AjPatient.jsp";
                                               }
                                                 else
                                                  window.parent.swal("Notification !!!", "Erreur lors de l'insertion du APCI", "error");
                                           }
                                           else
                                               window.parent.swal("Notification !!!", "Erreur lors de l'insertion du Patient", "error");

                                }
                                else{
                                    
                                    if($("#collapse_2").hasClass('in')){   
                                        if(!$('#SuppCnam').hasClass('hide'))
                                           Err = UpdateAssuranceCNAM(CptAssurCnam,$("#regime_affi").val(),$("#qualite").val(),$("#ident_unique").val().toString().split(' ')[0].replace(new RegExp('/', 'g'),""),$("#rang_Assur").val(),$("#date_valid_cnam").val(),$("#type_cnam").val(),$("#medfamille").val(),$("#codecnam").val());
                                       else{
                                           CptAssurCnam = GetCptParamByCode("CptAssurCnam");   
                                           Err = AjAssuranceCNAM($("#regime_affi").val(),$("#qualite").val(),$("#ident_unique").val().toString().split(' ')[0].replace(new RegExp('/', 'g'),""),$("#rang_Assur").val(),$("#date_valid_cnam").val(),$("#type_cnam").val(),$("#medfamille").val(),$("#codecnam").val());
                                       }
                                           
                                       }
                                       else{
                                           Err="true";
                                           CptAssurCnam=0;
                                       }
                                       
                                       if(Err.toString()=== "true"){
                                          Err =UpdatePatient(numFichPatient,$("#nom").val(),$("#prenom").val(),$("#sexse").val(),$("#datnaiss").val(),$("#sutfam").val(),$("#prof").val(),$("#adr").val(),$("#fixe").val(),$("#gsm").val(),$("#poid").val(),CodeVille,$('#fich').val(),$("#autreAssur").val(),codeapci,$("#type_apci").val(),$("#date_valid_apci").val(),CptAssurCnam);
                                            
                                            if(Err.toString()=== "true" && $("#collapse_1").hasClass('in') )
                                               {
                                                   if(Object.keys(TraitmentApci).length>0)
                                                        Err =SuppTraitementAPCIByPatient(numFichPatient);
                                                    
                                                        jQuery('.mt-repeater-item').each(function(i)
                                                            {
                                                                var medic=$(this).find('[name="group-c['+i+'][medic]"]').val();
                                                                var posologie = $(this).find('[name="group-c['+i+'][p1]"]').val()+" "+$(this).find('[name="group-c['+i+'][p2]"]').val() +" * "+$(this).find('[name="group-c['+i+'][p3]"]').val()+" / "+$(this).find('[name="group-c['+i+'][p4]"]').val()+" * "+$(this).find('[name="group-c['+i+'][p5]"]').val()+" "+$(this).find('[name="group-c['+i+'][p6]"]').val();
                                                                if(Err.toString()=== "true" && medic.toString() !=="" ){
                                                                    Err = AjTraitementAPCI(numFichPatient,medic,posologie);
                                                                }


                                                            });
                                                      
                                                   }
                                                   
                                            if(Err.toString()=== "true")
                                                   {
                                                       window.parent.swal("Notification !", "Patient Modifié Avec Succès ", "success");
                                                       window.location.href="AjPatient.jsp";
                                                   }
                                                     else
                                                      window.parent.swal("Notification !!!", "Erreur lors de l'insertion du APCI", "error");
                                              } else
                                                   window.parent.swal("Notification !!!", "Erreur lors de l'insertion du Patient", "error");
                                }
                            }
                            else
                               {
                                if(VerifMedicAPCI() !=="true" && $('#FormVAL').valid())
                                   window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement (APCI)?','Error',option);
                               else
                                   window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
                               }
                   

              });
              
            $("#datnaiss").change(function (){
                  var d =new Date().toJSON().slice(0, 10);
                  var age = parseInt(d.toString().substr(0,4))-parseInt($("#datnaiss").val().substring($("#datnaiss").val().lastIndexOf('/')+1)) ;
                  
                  if(age === 0)
                      age++;
                  
                 $("#age").val(age);
             });
             
             
             
            $("#ville").change(function (){
                 Gouvernorats = GetListGouvernorat($("#ville").val());
                 remplir_Gouvernorat(Gouvernorats);
             });
             
            $("#Gouvernorat").change(function (){
                 
                         $.each(Gouvernorats, function(i){
                            if(Gouvernorats[i].gouvernorat === $("#Gouvernorat").val())
                                CodeVille = Gouvernorats[i].codeVille;
                        });
             
             });
             
            $('.mt-repeater').each(function(){
                            $(this).repeater({
                                    show: function () {
                                            $(this).slideDown();

                                },

                                hide: function (deleteElement) {
                                    var el =$(this);
                                    window.parent.$.SmartMessageBox({
                                        title : "<img src='../img/ERR.png'></img>  Attention!",
                                        content : "Etes Vous Sûre De La Suppression de Cette element",
                                        buttons : '[Non][Oui]'
                                        }, function(ButtonPressed) {
                                            if (ButtonPressed === "Oui") {
                                                    el.slideUp(deleteElement);
                                                    window.parent.swal("Notification !", "Element supprimé Avec Succès ", "success");
                                                   // window.parent.toastr.success('Element supprimer !','Notification',option);

                                            }

                                            if (ButtonPressed === "Non") {
                                                
                                            }

                                    });
                                   /* if(confirm('Are you sure you want to delete this element?')) {
                                        $(this).slideUp(deleteElement);
                                    }*/
                                },

                                ready: function (setIndexes) {

                                }

                            });
                    });
                    
            $("#reset").click(function (){
                         if(localStorage.getItem('Consultation')==="true")
                         {
                              window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/ERR.png'></img>  Attention!",
                                    content : "Etes Vous Sûre De La Annulation de Cette Consultation",
                                    buttons : "[Annuler][Valider]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                        window.location.href='../body_page/Patient.jsp';
                                }
                            });
                         }
                         else
                             window.location.href='../body_page/Patient.jsp';
                     });

            if(localStorage.getItem('Update')==="true")
            {
                            $("#fichelog").attr("src","../img/userUp.png");
                            numFichPatient =localStorage.getItem("numFichPatient");
                            var patient =GetPatientByNumFichPatient(parseInt(numFichPatient));

                            $('#nom').val(patient.nom);
                            $('#prenom').val(patient.prenom);
                            $('#fich').val(patient.fichpapier);
                            var datenaiss =patient.datenaiss;
                            $('#datnaiss').val(VerifDateDD_MM_YYYY(datenaiss));
                            $('#sexse').val(patient.sexe);
                            $('#sutfam').val(patient.sutFam);

                            var age =GetAge(datenaiss);
                                    if(age === 0)
                                          age++;

                            $('#age').val(age);
                            $('#poid').val(patient.poids);
                            $('#prof').val(patient.profession);
                            $('#adr').val(patient.adresse);
                            CodeVille=patient.ville.codeVille;
                            $('#ville').val(patient.ville.ville);
                            Gouvernorats = GetListGouvernorat($("#ville").val());
                            remplir_Gouvernorat(Gouvernorats);
                            $('#Gouvernorat').val(patient.ville.gouvernorat);
                            $('#fixe').val(patient.fixe);
                            $('#gsm').val(patient.gsm);

                            if(patient.assurCnam !== null){
                                $("#SuppCnam").removeClass('hide');
                                $("#collapse_2").toggleClass('in');
                                $("#collapse_2").attr('aria-expanded',true);
                                $("#collapse_2").removeAttr('style');
                                CptAssurCnam=patient.assurCnam.numAssur;
                                $('#regime_affi').val(patient.assurCnam.regimeAffi);
                                $('#ident_unique').val(patient.assurCnam.identUnique);
                                $('#qualite').val(patient.assurCnam.qualite);
                                $('#medfamille').val(patient.assurCnam.nomMedc);
                                $('#codecnam').val(patient.assurCnam.codCnam);
                                var D_valid_cnam=patient.assurCnam.dateValid;
                                $('#date_valid_cnam').val(VerifDateDD_MM_YYYY(D_valid_cnam));
                                $('#type_cnam').val(patient.assurCnam.type);
                                $('#rang_Assur').val(patient.assurCnam.rangAssur);
                            }
                            //Object.keys(TraitmentApci).length
                            if(patient.codeApci !== ""){
                                $("#SuppApci").removeClass('hide');
                                TraitmentApci =GetTraitementAPCIByNumPatient(parseInt(numFichPatient));

                                $("#collapse_1").toggleClass('in');
                                $("#collapse_1").attr('aria-expanded',true);
                                $("#collapse_1").removeAttr('style');
                                $('#type_apci').val(patient.typeApci);
                                $('#code_apci').val(patient.codeApci);
                                 var D_valid_apci=patient.dateValid;
                                $('#date_valid_apci').val(VerifDateDD_MM_YYYY(D_valid_apci));

                                    $.each(TraitmentApci,function(i){
                                            $("[name='group-c["+i+"][medic]']").val(TraitmentApci[i].medicament.numMedic);
                                            var TraApciDescp =TraitmentApci[i].description.toString().split(' ');

                                            $("[name='group-c["+i+"][p1]']").val(TraApciDescp[0].trim());
                                            $("[name='group-c["+i+"][p2]']").val(TraApciDescp[1].trim());
                                            $("[name='group-c["+i+"][p3]']").val(TraApciDescp[3].trim());
                                            $("[name='group-c["+i+"][p4]']").val(TraApciDescp[5].trim());
                                            $("[name='group-c["+i+"][p5]']").val(TraApciDescp[7].trim());
                                            $("[name='group-c["+i+"][p6]']").val(TraApciDescp[8].trim());
                                            $("#addMedic").trigger("click");
                                           });
                            }

                            if(patient.autreAssur !== ""){
                                $("#collapse_4").toggleClass('in');
                                $("#collapse_4").attr('aria-expanded',true);
                                $("#collapse_4").removeAttr('style');
                                $('#autreAssur').val(patient.autreAssur);
                            }
                        }else
                            $("#fichelog").attr("src","../img/useradd.png");
              
/*end*/
});