
/* global option, scheduler, dataService */
var listeAttend=[];
$(function() {
    if(!window.parent.$("#menuback").hasClass('hide'))
                window.parent.$("#menuback").toggleClass('hide');
    if(!window.parent.$("#menubackRc").hasClass('hide'))
            window.parent.$("#menubackRc").toggleClass('hide');
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var rdv=GetListRdvByNumMedecin(paramater.codeMedTrit.codeMedTrit);
    
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    scheduler.config.multi_day = true;
    scheduler.config.all_timed = false;
    scheduler.config.details_on_create=true;
    scheduler.config.details_on_dblclick=true;
    scheduler.config.occurrence_timestamp_in_utc = true;
    scheduler.config.prevent_cache = true;
    scheduler.config.include_end_by = true;
    scheduler.config.repeat_precise = true;
    scheduler.config.event_duration = 30;
    scheduler.config.auto_end_date = true;
    scheduler.config.first_hour = 8;
    scheduler.config.last_hour = 19;
    //scheduler.config.time_step = 60;
    scheduler.config.max_month_events = 3;
    scheduler.ignore_week = function(date){
    if ( date.getDay() === 0) 
        return true;
    };
    
    var menu1;
        menu1 = new dhtmlXMenuObject();
        menu1.setSkin("dhx_terrace");
        menu1.renderAsContextMenu();
        menu1.contextAutoHide = false;                
        menu1.setIconsPath("../img/");
        menu1.addNewChild(menu1.topId, 0, "Presente", "Arrivé", false, "check.png");
        menu1.addNewChild(menu1.topId, 1, "payer", "Payé", false, "icons8-Parking payant-50.png");
        
    
    var listePatient =GetListPatientByMedecin(paramater.codeMedTrit.codeMedTrit);
    
        if(listePatient.length===0)
            scheduler.config.readonly_form = true;
        
            var patients=[];
           // patients.push({key:"0", label:""});
            $.each(listePatient, function (i){
                patients.push({key:listePatient[i].prenom+" "+listePatient[i].nom+" ("+listePatient[i].numFichPatient+")", label: listePatient[i].prenom+" "+listePatient[i].nom+" ("+listePatient[i].numFichPatient+")"});
            });
			var TypeConsult = [
				{ key: "Consultation", label: '  Consultation' },
				{ key: "Personnel", label: '  Personnel' },
				{ key: "Séminaire", label: '  Séminaire' }
			];

			scheduler.locale.labels.section_text = 'Description';
			scheduler.locale.labels.section_checkbox = 'Alert';
			scheduler.locale.labels.section_radiobutton = 'Type de RDV';
			scheduler.locale.labels.section_select = 'Patient';

			scheduler.config.lightbox.sections = [
				{ name: "text", height: 100, map_to: "text", type: "textarea", focus: true },
				{ name: "checkbox", map_to: "single_checkbox", type: "checkbox", checked_value: "registrable", unchecked_value: "unchecked" },
				{ name: "radiobutton", height: 65, options: TypeConsult, map_to: "radiobutton_option", type: "radio", vertical: true },
				{ name: "select", height: 40, map_to: "type", type: "select", options: patients },
                                { name: "recurring", type: "recurring", map_to: "rec_type", button: "recurring"},
				{ name: "time", height: 72, type: "calendar_time", map_to: "auto" }
				//{ name: "time", height: 72, type: "time", map_to: "auto"}
			];

			scheduler.config.full_day = true;
    var eventObjMenu;
    scheduler.attachEvent("onContextMenu", function(event_id, native_event_object) {
				if (event_id) {
					var posx = 0;
					var posy = 0;
					if (native_event_object.pageX || native_event_object.pageY) {
						posx = native_event_object.pageX;
						posy = native_event_object.pageY;
					} else if (native_event_object.clientX || native_event_object.clientY) {
						posx = native_event_object.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						posy = native_event_object.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
					menu1.showContextMenu(posx, posy);
                                        eventObjMenu= scheduler.getEvent(event_id);
					return false; // prevent default action and propagation
				}
				return true;
			});
                        
    menu1.attachEvent("onClick", function(id, zoneId, cas){
				if(id==="Presente"){
                                    if(listeAttend.indexOf(eventObjMenu.id)=== -1 && eventObjMenu.type!=="0"){
                                        listeAttend.push(eventObjMenu.id);
                                        
                                        var num__patient =eventObjMenu.type.toString().substr(eventObjMenu.type.toString().indexOf('(')+1,8);
                                        
                                        var Err=AjSalle_Attente(num__patient,eventObjMenu.id,paramater.codeMedTrit.codeMedTrit,eventObjMenu.type);
                                        if(Err.toString()==="true"){
                                            window.parent.toastr.success("Attention, Patient Ajouter Avec Succès dans la liste d'attente!.",'success',option);
                                            console.log(dataService.create('Salle_Attente_ADD'+paramater.codeMedTrit.codeMedTrit));
                                            RefreshListeAttente();
                                        }else
                                            window.parent.toastr.error("Attention,Ce patient est déjà arrivée!.",'Error',option);
                                        
                                    }else{
                                        if(listeAttend.indexOf(eventObjMenu.id)!== -1)
                                            window.parent.toastr.error('Ce patient est déjà arrivée!.','Error',option);
                                        else
                                            window.parent.toastr.error("Ce rendez-vous ne considère pas une consultation!.",'Error',option);
                                    }
                                }else
                                    if(id==="payer"){
                                        var num__patient =eventObjMenu.type.toString().substr(eventObjMenu.type.toString().indexOf('(')+1,8);
                                        window.parent.$("#confirmeemodal").attr("data-target","#payermodal");  
                                        window.parent.$("#prixapayer").val(parseFloat(paramater.montantConsult));
                                        window.parent.$("#confirmeemodal").trigger("click");
                                        localStorage.setItem("PatientPaiement",num__patient);
                                    }
                                        
			});
                        
    scheduler.attachEvent("onTemplatesReady", function() {
			var highlight_step = 60; // we are going to highlight 30 minutes timespan

			var highlight_html = "";
			var hours = scheduler.config.last_hour - scheduler.config.first_hour; // e.g. 24-8=16
			var times = hours*60/highlight_step; // number of highlighted section we should add
			var height = scheduler.config.hour_size_px*(highlight_step/60);
			for (var i=0; i<times; i++) {
				highlight_html += "<div class='highlighted_timespan' style='height: "+height+"px;'></div>";
			}
			scheduler.addMarkedTimespan({
				days: "fullweek",
				zones: "fullday",
				html: highlight_html
			});
		});
                
                
    scheduler.init('scheduler_here',new Date(),"week");
    var listeRDV=[];
    $.each(rdv,function (i){
        if(rdv[i].typeRDV.toString()==="Consultation")
        listeRDV.push({id:rdv[i].numRDV ,start_date: dateCal(rdv[i].startDate), end_date: dateCal(rdv[i].endDate),text: rdv[i].descpRDV, event_pid: "", event_length: "", rec_pattern: "", rec_type: "", single_checkbox: "unchecked", radiobutton_option: rdv[i].typeRDV, type: rdv[i].descpRDV.substr(rdv[i].descpRDV.indexOf("Mr(s) ")+6)});
    else
        listeRDV.push({id:rdv[i].numRDV ,start_date: dateCal(rdv[i].startDate), end_date: dateCal(rdv[i].endDate),text: rdv[i].descpRDV, event_pid: "", event_length: "", rec_pattern: "", rec_type: "", single_checkbox: "unchecked", radiobutton_option: rdv[i].typeRDV, type: "0"});
    });
    
    scheduler.parse(listeRDV,"json");
    
    $("[name='agenda_tab']").click(function (){
       show(); 
    });
    
    $(document).on('change', '.select2-bootstrap-append', function (e) {
            $(document).find('.decsprdv')[0].value=" Pour Mr(s) "+$(e.currentTarget).val();
        });
        
    $(document).on('change', '[name="radiobutton"]', function (e) {
            var type =$(e.currentTarget)[0].value;
            if(type.toString() ==="Personnel" || type.toString() ==="Séminaire")
                $(document).find('.select2-bootstrap-append').attr("disabled",true);
            else
                $(document).find('.select2-bootstrap-append').attr("disabled",false);
            $(document).find('.select2-bootstrap-append').val('').trigger('change');
        });

    scheduler.attachEvent("onLightbox", function (){
            $(document).find('.select2-bootstrap-append').select2({
                placeholder: "Sélectionnez Un Patient ",
                dropdownAutoWidth: true,
                width: "100%"
            });
            $(document).find('.select2-bootstrap-append').attr("disabled",true);
            $(document).find('.select2-bootstrap-append').val('').trigger('change');
            
    });
    
    scheduler.attachEvent("onEventSave",function(id,data,mode){
        console.log(data);
        
            if(mode !== undefined && mode !== null){
                 if (data.radiobutton_option === undefined || (data.type === "0" && data.radiobutton_option==="Consultation" )) {
                     if(data.radiobutton_option === undefined)
                     window.parent.toastr.error('Il faut choisir le type de consultation!.','Error',option);
                 else
                     window.parent.toastr.error('Il faut choisir le Patient!.','Error',option);
                 
                     return false;
                 }else
                 {
                     var Err;
                     scheduler.changeEventId(id,GetCptParamByCode("CptRdv"));
                     if(data.radiobutton_option==="Consultation"){
                            data.text= "Consultation Pour Mr(s) "+data.type;
                            Err=AjRdv(data.start_date.toLocaleString().replace(' à ',' '),data.radiobutton_option,data.text,0,data.type.substr(data.type.indexOf('(')+1,8),paramater.codeMedTrit.codeMedTrit,data.end_date.toLocaleString().replace(' à ',' '));
                         }else if(data.radiobutton_option==="Personnel"){
                            var ch=data.text;
                            data.text="RDV Personnel "+ch;
                            Err =AjRdv(data.start_date.toLocaleString().replace(' à ',' '),data.radiobutton_option,data.text,0,listePatient[0].numFichPatient,paramater.codeMedTrit.codeMedTrit,data.end_date.toLocaleString().replace(' à ',' '));
                         }else{
                            var ch=data.text;
                            data.text="Séminaire "+ch;
                            Err =AjRdv(data.start_date.toLocaleString().replace(' à ',' '),data.radiobutton_option,data.text,0,listePatient[0].numFichPatient,paramater.codeMedTrit.codeMedTrit,data.end_date.toLocaleString().replace(' à ',' '));
                         }
                         
                     
                      
                    if ( Err!=="true") {
                            window.parent.toastr.error('Error lors de l insertion!.','Error',option);
                            return false;
                        }else{
                            window.parent.swal("Notification !", "Rendez-Vous ajouté Avec Succès. ", "success");
                            RefreshListeRdvAujourdHui();
                        }
                    }
                
            }else
            {
                var Err;
                if(data.radiobutton_option==="Consultation")
                    Err=UpdateRdv(id,data.start_date.toLocaleString().replace(' à ',' '),data.radiobutton_option,data.text,"0",data.type.substr(data.type.indexOf('(')+1,8),data.end_date.toLocaleString().replace(' à ',' '));
                else
                    Err=UpdateRdv(id,data.start_date.toLocaleString().replace(' à ',' '),data.radiobutton_option,data.text,"0",listePatient[0].numFichPatient,data.end_date.toLocaleString().replace(' à ',' '));
                
                RefreshListeRdvAujourdHui();
                
                if ( Err!=="true") {
                            window.parent.toastr.error('Error lors de Modification!.','Error',option);
                            return false;
                        }
                    
            }
            return true;
        });
    //scheduler.checkEvent("onEventSave"); //returns 'true'
    scheduler.attachEvent("onEventDeleted",function(id){
       var Err=SuppRdv(id);
        if(Err===true){
            window.parent.swal("Notification !", "Rendez-Vous Supprimé Avec Succès. ", "success");
            RefreshListeRdvAujourdHui();
            RefreshListeAttente();
        }else
            window.parent.toastr.error("Rendez vous annulé !.",'Error',option);
        });
    //scheduler.checkEvent("onEventDeleted"); //returns 'true'
    var event_obj;
    scheduler.attachEvent("onBeforeDrag", function (id, mode, e){
        event_obj=scheduler.getEvent(id); //use it to get the object of the dragged event
        return true;
    });
    
    scheduler.attachEvent("onDragEnd", function (id, mode, e){
        //alert(mode);
        if(mode.toString()!=="new-size"){
            var dragged_event = event_obj;
            if(dragged_event.radiobutton_option==="Consultation")
                UpdateRdv(dragged_event.id,dragged_event.start_date.toLocaleString().replace(' à ',' '),dragged_event.radiobutton_option,dragged_event.text,"0",dragged_event.type.substr(dragged_event.type.indexOf('(')+1,8),dragged_event.end_date.toLocaleString().replace(' à ',' '));
            else
                UpdateRdv(dragged_event.id,dragged_event.start_date.toLocaleString().replace(' à ',' '),dragged_event.radiobutton_option,dragged_event.text,"0",listePatient[0].numFichPatient,dragged_event.end_date.toLocaleString().replace(' à ',' '));
            
            RefreshListeRdvAujourdHui();
        }
    });
    

 
});


