 /* global _, Backgrid */

var option=  toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

function AjFile(patient,img)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjFile&patient="+patient+"&img="+encodeURIComponent(img),
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

function GetListConsultationByPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetListConsultationByPatient&NumFichPatient="+NumFichPatient,
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


function GetPatientByNumFichPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetPatientByNumFichPatient&NumFichPatient="+NumFichPatient,
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

function GetAssuranceCNAMByPatient(NumFichPatient)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetAssuranceCNAMByPatient&NumFichPatient="+NumFichPatient,
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



/*Grid des patients*/
function createBackGrid() {
            App.startPageLoading({animate: true});

        
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 9
              }
    });

    var territories = new Territories();
    
    var partage;
    var columns = [
        {
            name: "sexe",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
//                partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,this.model.get("numFichPatient"));
                var data=this.model.get("sexe");
                var datenaiss =this.model.get("datenaiss");
                var age =GetAge(datenaiss);
                var IMG="";
                    if (data === "Femme" )
                    {

                        if(age < 12)
                            IMG= '<img src="../img/avatars/icon_girl-512.png" width="40" alt="" />';
                        else
                            if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/girl.png" width="40" alt="" />';
                       else
                            if(age>20 && age<=50)
                                IMG= '<img src="../img/avatars/034-user-6.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/019-social-1.png" width="40" alt="" />';
                    }
                    else
                         {
                          if(age < 12)
                            IMG= '<img src="../img/avatars/icon_boy-512.png" width="40" alt="" />';
                        else
                             if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/boy.png" width="40" alt="" />';
                            else
                                 if(age>20 && age<=50)
                                     IMG= '<img src="../img/avatars/043-man-1.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/042-man-2.png" width="40" alt="" />';
                    }
                 
//                 if(partage.toString().includes("partagé"))
//                     return IMG+'<img class="tooltips" data-tooltip="tooltip" title="'+partage+'" src="../img/BMR.gif" width="20" alt="" style=" margin-top: -91px; margin-left: -5px;cursor: pointer;" />';
//                 else
                     return IMG;
	  }
                 
            })
           
        },
        {
            name: "numFichPatient", // The key of the model attribute
            label: "Patient", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but ID shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.Cell.extend({
                render: function (e) {
                var cnam="", apci ="" , AutreAurr="";
		this.$el.empty();
                var nom =this.model.get("numFichPatient");
                
                 if(this.model.get("assurCnam") !== null)
                        cnam ="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("codeApci") !== "")
                        apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("autreAssur") !== "")
                        AutreAurr =AutreAssurImg(this.model.get("autreAssur"));
                    
		this.$el.html(nom +"<br/> "+cnam +" "+apci+" "+AutreAurr);
                    
		return this;
            }
            })
        }, 
        {
            name: "",
            label: "Name et Prénom",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
               render: function (e) {
                    
		this.$el.empty();
                var nom =this.model.get("nom");
                var prenom =this.model.get("prenom");
		this.$el.append(nom +" "+prenom);
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "assurCnam.identUnique",
            label: "Identifiant Unique",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  render: function (e) {
                    var assurCNAM =this.model.get("assurCnam");
                    this.$el.empty();
                    if(assurCNAM !== null)
                        this.$el.append("N° "+assurCNAM.identUnique.toString().substr(0,2)+'/'+assurCNAM.identUnique.toString().substr(2,8)+'/'+assurCNAM.identUnique.toString().substr(8,2));
                    else
                        this.$el.append("");

                    return this;
                }
            }) 
        },
        {
            name: "datenaiss",
            label: "Date Naissance",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                var date =this.model.get("datenaiss");
		this.$el.append(VerifDateDD_MM_YYYY(date));
                    
		return this;
            }
           })
       },
        {
           name:"",
            label: "Age",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();
                var DateNaiss =this.model.get("datenaiss");
                var age =GetAge(DateNaiss);
                if(age === 0)
                    age++;
                
                this.$el.append(age +" ans");
                    
		return this;
            }
    
            }) 
        },
        {
            name: "poids",
            label: "Poids",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();    
                this.$el.append(this.model.get("poids") +" Kg");
                    
		return this;
            }
            })
        },
//        {
//            name: "profession",
//            label: "profession",
//            editable: false,
//           
//            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
//            cell: Backgrid.StringCell.extend({
//                  className: 'string-cell-2'
//    
//            }) 
//        },
        {
            name: "adresse",
            label: "Adresse",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "fixe",
            label: "Fixe",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "gsm",
            label: "Gsm",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                  className: 'string-cell-2'
    
            }) 
        },
        {
            name: "ville.ville",
            label: "Ville",
            editable: false,
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
//                render: function (e) {
//		this.$el.empty();
//                var Client =this.model.get("ville");
//		this.$el.append(Client.ville);
//		return this;
//            }
           })
       },
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
                //template: _.template('<ul class="social-icons"> <li><a id="edit" data-tooltip="tooltip" title="" href="javascript:void(0);" data-placement="top"  data-original-title="Modifier" class="tooltips myspace"> </a> </li><li><a id="Consult" href="javascript:;" data-original-title="Conultation" class="last-fm"> </a></li><li><a id="delete" href="javascript:;" data-original-title="Supprimer" class="dropbox"> </a></li><li><a id="File" href="#" data-original-title="File" class="last-fm"> </a></li><li><a id="Partage" href="#" data-original-title="Partage" class="last-fm"> </a></li></ul>'),
//                template: _.template('<ul class="action-icons"> <li><a id="edit"  data-tooltip="tooltip" title="Modifier" data-placement="top"   class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userM.png" ></i></a></li><li><a id="Consult" data-tooltip="tooltip" title="Observation" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userC.png" ></i></a></li><li><a id="delete" data-tooltip="tooltip" title="Supprimer" data-placement="top" class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userDel.png" ></i></a></li><li><a id="File" data-tooltip="tooltip" title="File" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userF.png" ></i></a></li><li><a id="Partage" data-tooltip="tooltip" title="Partager" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userP.png" ></i></a></li></ul>'),
            template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="Consult" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/ConsultIcon.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Consultation</div></a></li>'+
                            '<li><a id="Archive" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userC.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Archive</div></a></li>'+
                            '<li><a id="File" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userF.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Piece jointe</div></a></li>'+
                            '<li><a id="Partage" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userP.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Partager dossier</div></i></a></li>'+
                            '<li class="divider"></li>'+
                            '<li><a id="edit" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userM.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Modifier</div></a></li>'+
                            '<li><a id="delete" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userDel.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Supprimer</div></i></a></li>'+
                            '<li class="divider"></li>'+
                            '<li><a id="labo" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/bloc.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Demande labo</div></i></a></li>'+
                            '<li><a id="Radio" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/bilan.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Demande Radio</div></i></a></li>'+
                            '<li><a id="dicompacs" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/radio.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Demande Pacs </div></i></a></li>'+
                        '</ul></div>'),
//            template1: _.template('<div class="btn-group">'+
//                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
//                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
//                    '</button>'+
//                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
//                            '<li><a id="Archive" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userC.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Archive</div></a></li>'+
//                            
//                        '</ul></div>'),
                events: {
                    "click a#edit": "ClickEdit",
                    "click a#delete": "ClickDelete",
                    "click a#Consult": "ClickConsult",
                    "click a#File": "FileEdit",
                    "click a#Partage": "FilePartage",
                    "click a#Archive": "ArchiveConsult",
                    "click a#dicompacs": "DicomPacs"
                        },
                render: function () {
                    var numpt=this.model.get("numFichPatient");
//                    if(partage.toString().includes("partagé"))
//                        this.$el.html(this.template1());
//                    else
                        this.$el.html(this.template());
                    
                    this.delegateEvents();
                    return this;
                        },
            DicomPacs: function () {
                 var numpt=this.model.get("numFichPatient");
                 if(numpt.toString() !== "17000067")
                     window.parent.toastr.error("Attention, Le patient n'a pas d'images dans le serveur PACS !!!.",'Error',option);
                 else{
                    var urldicom="https://medproapp.ddns.net/weasis-pacs-connector/IHEInvokeImageDisplay?requestType=PATIENT&patientID="+numpt;
                    parent.window.location.href=urldicom;
                }
            },
            FilePartage: function () {
                 var numpt=this.model.get("numFichPatient");
                window.parent.$("#nomprenompatientPartage").empty().append(numpt);
                window.parent.$("#confirmeemodal").attr("data-target","#PartageModal");
                window.parent.$("#confirmeemodal").trigger("click");
                CreationTablepartage(numpt);
            },
            ClickEdit: function () {
               localStorage.setItem("Update","true");
               localStorage.setItem("Consultation","false");
               localStorage.setItem("numFichPatient",this.model.get("numFichPatient"));
               window.location.href='AjPatient.jsp';
            },
            ArchiveConsult: function () {
               localStorage.setItem("numFichPatient",this.model.get("numFichPatient"));
               window.location.href='ArchiveMedic.jsp';
            },
            FileEdit: function () {
                
                numpt=this.model.get("numFichPatient");
                window.parent.$("#nomprenompatientFile").empty().append(numpt);
                window.parent.$("#confirmeemodal").attr("data-target","#fileUpload");
                window.parent.$("#confirmeemodal").trigger("click");
           
                FileRefresh(numpt);
                    
            },
            ClickConsult: function () {
                var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var Model =this.model;
                Consults =GetListConsultationByPatient(Model.get("numFichPatient"));
                
                if(Object.keys(Consults).length>0){
                    window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/bloc.png'> Observation",
                                    content : "Sélectionner type de Demande!!",
                                    buttons : "[Annuler][Valider]",
                                    input : "select",
                                    options : "[ Consultation ][ Contrôle ]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var type= Value.toString().trim();
                                    
                                    if(type === "Contrôle"){
                                        var dateconsult =Consults[(Consults.length-1)].dateConsult;
                                        type="Contrôle Pour Consultation "+VerifDateDD_MM_YYYY(dateconsult);
                                        localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                                        localStorage.setItem("Prescp",JSON.stringify([]));
                                        localStorage.setItem("typeConsult",type);
                                        localStorage.setItem("Ordonnance","false");
                                        localStorage.setItem("UpdateConsult","false");
                                        localStorage.setItem("Consults",JSON.stringify(Consults));
                                        localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
                                        window.location.href='../body_page/Consultation.jsp';
                                    }
                                    else
//                                        if(Consults[0].numPatient.codeApci)
//                                    {
//                                       window.parent.$.SmartMessageBox({
//                                            title : "<img src='../img/apci_logo_600w.png' style='width: 80px;'>  Type Ordonnance!",
//                                            content : "Le Patient "+Consults[0].numPatient.nom+" "+Consults[0].numPatient.prenom+" à un APCI Remboursement. <br/> Voulez vous utilisez l'ordonnance APCI(OUI) ou Normal(NON)",
//                                            buttons : '[OUI][NON]'
//                                            }, function(ButtonPressed) {
//                                                if (ButtonPressed === "OUI") {
//                                                     type="Consultation APCI";
//                                                }
//                                                localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
//                                                localStorage.setItem("Prescp",JSON.stringify([]));
//                                                localStorage.setItem("typeConsult",type);
//                                                localStorage.setItem("Ordonnance","false");
//                                                localStorage.setItem("UpdateConsult","false");
//                                                localStorage.setItem("Consults",JSON.stringify(Consults));
//                                                localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
//                                                window.location.href='../body_page/Consultation.jsp';
//                                        }); 
//                                    }else
                                    {
                                        localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                                        localStorage.setItem("Prescp",JSON.stringify([]));
                                        localStorage.setItem("Ordonnance","false");
                                        localStorage.setItem("UpdateConsult","false");
                                        localStorage.setItem("Consults",JSON.stringify(Consults));
                                        localStorage.setItem("typeConsult","Consultation");
                                        localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
                                        window.location.href='../body_page/Consultation.jsp';
                                    }
                                    
                                }
                            });
                        }else{
                            localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                            localStorage.setItem("Prescp",JSON.stringify([]));
                            localStorage.setItem("Ordonnance","false");
                            localStorage.setItem("UpdateConsult","false");
                            localStorage.setItem("Consults",JSON.stringify([]));
                            localStorage.setItem("typeConsult","Consultation");
                            localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
                            window.location.href='../body_page/Consultation.jsp';
                        }
                    	
                }
            },
            ClickDelete: function () {
                var Model =this.model;
                var idpatient = this.model.get("numFichPatient");
                window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Patient",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                            
                                
                               var Err= SuppPatient(idpatient.toString());
                               
                                if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                    Model.collection.remove(Model);
                                }else
                                    window.parent.swal("Notification !!! ", "Patient à des consultations", "error");
                                    
                                 
                                  
                        }
                            
                });

                     
            }
            
            }) 
            
                    
            
        }
    ];
    
    
    var FocusableRow = Backgrid.Row.extend({
        highlightColor:'#BAD2E4',
        events:{
            click :'Click',
            mouseover :'mouseovercard'
        },
        rowFocused:function (){
          $('tbody.table-editable tr').removeAttr('style');
          this.$el.css('background-color',this.highlightColor);
        },
        Click : function(){
            var patient =this.model.get("numFichPatient");
            console.log(patient);
        },
        mouseovercard: function() {
        console.log('hello world');
        /*var template='<button class="btn btn-default btn-xs item_button_remove"><span class="glyphicon glyphicon-trash"></span> <span data-i18n="Hide">Hide</span></button>';
          this.$el.append(template);*/
    }
    });
    
    /*var ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    var grid = new Backgrid.Grid({
        
        columns: columns,
        collection: territories,
        //row: FocusableRow,
        className: 'table table-bordered  table-editable no-margin table-hover full-height-content full-height-content-scrollable'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
    
//    Backgrid.ClientSideFilterWithPickFilter = Backgrid.Extension.ClientSideFilter.extend({
//        pickFilter: null,
//        setPickFilter: function (attrs) {
//            this.pickFilter = attrs;
//            this.search();
//            return this;
//        },
//        makeMatcher: function (query) {
//            var regexp = this.makeRegExp(query);
//            return function (model) {
//                var json = model.toJSON();
//
//                // Test the pick filter (if set)
//                if (this.pickFilter) {
//                    var match = _.find(this.pickFilter, function (value, key) {
//                        return json[key] === value;
//                    });
//                    if (match === undefined) return false;
//                }
//
//                // Test the search filter
//                var keys = this.fields || model.keys();
//                for (var i = 0, l = keys.length; i < l; i++) {
//                    if (regexp.test(json[keys[i]] + "")) return true;
//                }
//                return false;
//            };
//            }
//        });

     var patientSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche Par Patient",
        id: "rechercher",
        fields: ['numFichPatient','nom','prenom','datenaiss.year','adresse','ville.ville'],
        wait: 150
    });
    $(patientSideFilter.el).css({float: "left", margin: "0 0 10px 0"});
    
//    var filter = new Backgrid.ClientSideFilterWithPickFilter({
//        collection: territories,
//        placeholder: "Recherche Par Patient x"
//    });
    
//    $('input[name=valid]').change(function(e) {
//	filter.setPickFilter(e.target.checked ? {Valid: true} : null);
//    });
 
   
    $("#contents").before(patientSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
    App.stopPageLoading();
      return columns.length;
 }
  
 
  
  function SuppFile(id)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppFile&id="+id,
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

/*Grid des patients Salle d'attente*/
function createBackGridDossierPar() {

            App.startPageLoading({animate: true});

        
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Patient?type=consult&function=GetListDossierParByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 9
              }
    });

    var territories = new Territories();
    
    var partage; 
    
    var columns = [
        {
            name: "sexe",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model.get("numPatient") ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
                partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,this.model.get("numFichPatient"));
                var data=this.model.get("sexe");
                var datenaiss =this.model.get("datenaiss");
                var age =GetAge(datenaiss);
                var IMG="";
                    if (data === "Femme" )
                    {

                        if(age < 12)
                            IMG= '<img src="../img/avatars/icon_girl-512.png" width="40" alt="" />';
                        else
                            if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/girl.png" width="40" alt="" />';
                       else
                            if(age>20 && age<=50)
                                IMG= '<img src="../img/avatars/034-user-6.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/019-social-1.png" width="40" alt="" />';
                    }
                    else
                         {
                          if(age < 12)
                            IMG= '<img src="../img/avatars/icon_boy-512.png" width="40" alt="" />';
                        else
                             if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/boy.png" width="40" alt="" />';
                            else
                                 if(age>20 && age<=50)
                                     IMG= '<img src="../img/avatars/043-man-1.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/042-man-2.png" width="40" alt="" />';
                    }
                 
                 
                    return IMG+'<img class="tooltips" data-tooltip="tooltip" title="'+partage+'" src="../img/BMR.gif" width="20" alt="" style=" margin-top: -91px; margin-left: -5px;cursor: pointer;" />';
               
		
	  }
                 
            })
           
        },
        {
            name: "numFichPatient", // The key of the model attribute
            label: "Patient", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but ID shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.Cell.extend({
                render: function (e) {
                var cnam="", apci ="" , AutreAurr="";
		this.$el.empty();
                var nom =this.model.get("numFichPatient");
                
                 if(this.model.get("assurCnam") !== null)
                        cnam ="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("codeApci") !== "")
                        apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("autreAssur") !== "")
                        AutreAurr =AutreAssurImg(this.model.get("autreAssur"));
                    
		this.$el.html(nom +"<br/> "+cnam +" "+apci+" "+AutreAurr);
                    
		return this;
            }
            })
        }, 
        {
            name: "",
            label: "Name et Prénom",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
               render: function (e) {
                    
		this.$el.empty();
                var nom =this.model.get("nom");
                var prenom =this.model.get("prenom");
		this.$el.append(nom +" "+prenom);
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "numPatient.assurCnam",
            label: "Identifiant Unique",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                   render: function (e) {
                    var assurCnam =this.model.get("assurCnam");
                    this.$el.empty();
                    if(assurCnam !== null)
                        this.$el.append("N° "+assurCnam.identUnique);
                    else
                        this.$el.append("");

                    return this;
                }
    
            }) 
        },
        {
            name: "",
            label: "Date Naissance",
            editable: false,
            cell: Backgrid.DateCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                var date =VerifDateDD_MM_YYYY(this.model.get("datenaiss"));
		this.$el.append(date);
                    
		return this;
            }
           })
       },
        {
           name:"",
            label: "Age",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();
                var DateNaiss =this.model.get("datenaiss");
                var age =GetAge(DateNaiss);
                if(age === 0)
                    age++;
                
                this.$el.append(age +" ans");
                    
		return this;
            }
    
            }) 
        },
        {
            name: "",
            label: "Poids",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();    
                this.$el.append(this.model.get("poids") +" Kg");
                    
		return this;
            }
            }) 
        },
        {
            name: "adresse",
            label: "Adresse",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                   className: 'string-cell-2'
            }) 
        },
        {
            name: "fixe",
            label: "Fixe",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
            })
        },
        {
            name: "gsm",
            label: "Gsm",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
            })
        },
        {
            name: "ville.ville",
            label: "Ville",
            editable: false,
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
           })
       },
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
            template1: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="Archive" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userC.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Archive</div></a></li>'+
                            
                        '</ul></div>'),
                events: {
                    "click a#Archive": "ArchiveConsult"
                        },
                render: function () {
                    var numpt=this.model.get("numFichPatient");
                    this.$el.html(this.template1());
                    
                    this.delegateEvents();
                    return this;
                        },
            ArchiveConsult: function () {
               localStorage.setItem("numFichPatient",this.model.get("numFichPatient"));
               window.location.href='ArchiveMedic.jsp';
            }
        })
                    
            
        }
    ];
    
   
    
    /*var ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    var grid = new Backgrid.Grid({
        
        columns: columns,
        collection: territories,
        //row: FocusableRow,
        className: 'table table-striped table-bordered table-hover'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
  
     var patientSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche Par Patient",
        id: "rechercher",
        fields: ['numFichPatient','nom','prenom','adresse','ville.ville','datenaiss.year'],
        wait: 150
    });
    $(patientSideFilter.el).css({float: "left", margin: "0 0 10px 0"});
 
    $("#contents").before(patientSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
    App.stopPageLoading();
      return columns.length;
  }
  
  
  function FileRefresh(numpt){
      
      var imgs =GetListFile(numpt);
                var img=[];
                var config=[];
                $.each(imgs , function (i){
                    img.push(imgs[i].img.toString().replace(" ", ""));
                    config.push({
                        caption: VerifDateDD_MM_YYYY(imgs[i].dateUplode)+".jpg",
                        type:"image", 
                        size: 930321, 
                        width: "120px", 
                        key: imgs[i].id,
                        url:"../Consultation?type=update&function=SuppFile&id="+imgs[i].id
                    });
                    
                });     
                window.parent.$("#input-704").fileinput('destroy');
                window.parent.$("#input-704").fileinput('refresh',{
                    initialPreview:  img,
                    initialPreviewConfig:config,
                    validateInitialCount: true,
                    showUpload: false,
                    showRemove: false,
                    browseOnZoneClick: true,
                    language: 'fr', // utilise le js de traduction
                    overwriteInitial: false, // conserve les preview si vous ajoutez d'autres images
                    allowedFileTypes: ['image'], // type de fichiers autorisés
//                    allowedFileExtensions : ['jpeg','jpg','png'], // extensions autorisées
                    uploadUrl: "../Gestion_Acces?type=consult&function=GetDateServeur",
                    initialPreviewAsData: true
                
                    });  
                window.parent.$("#input-704").fileinput('enable');
  }
  
  
  function CreationTablepartage(numpt){
      
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Acces?type=consult&function=GetParemetre&codeMedTrit="+paramater.codeMedTrit.codeMedTrit,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 9
              }
    });

    var territories = new Territories();
    var partage;
      
    var columns = [
        {
            name: "",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
                partage = GetListPatientByFichPatient(this.model.get("codeMedTrit").codeMedTrit,numpt);
		this.$el.empty();
		this.$el.html('<img src="../img/nurse_male_light_48.png" width="40" alt="" />');
		this.delegateEvents();
		return this;
	  }
           
        })
    },
        {
            name: "",
            label: "Name et Prénom",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
               render: function (e) {
                    
		this.$el.empty();
                var nom =this.model.get("nomMedecin");
                var prenom =this.model.get("prenomMedecin");
		this.$el.append("Dr ."+nom +" "+prenom);
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "specialite",
            label: "Spécialite",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                 className: "string-cell"
    
            }) 
        },
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
            className: "image-cell",
                //template: _.template('<ul class="social-icons"> <li><a id="edit" data-tooltip="tooltip" title="" href="javascript:void(0);" data-placement="top"  data-original-title="Modifier" class="tooltips myspace"> </a> </li><li><a id="Consult" href="javascript:;" data-original-title="Conultation" class="last-fm"> </a></li><li><a id="delete" href="javascript:;" data-original-title="Supprimer" class="dropbox"> </a></li><li><a id="File" href="#" data-original-title="File" class="last-fm"> </a></li><li><a id="Partage" href="#" data-original-title="Partage" class="last-fm"> </a></li></ul>'),
//                template: _.template('<ul class="action-icons"> <li><a id="edit"  data-tooltip="tooltip" title="Modifier" data-placement="top"   class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userM.png" ></i></a></li><li><a id="Consult" data-tooltip="tooltip" title="Observation" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userC.png" ></i></a></li><li><a id="delete" data-tooltip="tooltip" title="Supprimer" data-placement="top" class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userDel.png" ></i></a></li><li><a id="File" data-tooltip="tooltip" title="File" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userF.png" ></i></a></li><li><a id="Partage" data-tooltip="tooltip" title="Partager" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userP.png" ></i></a></li></ul>'),
            template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="PartageOui" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/sharing.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Partager dossier </div></a></li>'+
                        '</ul></div>'),
            template1: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="PartageNon" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/sharingN.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Annuler partage </div></a></li>'+
                        '</ul></div>'),
                events: {
                    "click a#PartageOui": "ClickPartageOui",
                    "click a#PartageNon": "ClickPartageNon"
                        },
                render: function () {
                    if(partage === null)
                        partage="";
                    if(partage.toString().includes("partagé"))
                        this.$el.html(this.template1());
                    else
                        this.$el.html(this.template());
                    this.delegateEvents();
                    return this;
                        },
            ClickPartageOui: function () {
                var codeMedTrit =this.model.get("codeMedTrit").codeMedTrit;
                var partage =GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,numpt);
                var partageUp =codeMedTrit+"/"+partage;
                var Err =AjPatientByMedecin(codeMedTrit,numpt,"Dossier partagé par Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin);
                if(Err.toString()==="true"){
                    Err =UpdateMedecinPartage(paramater.codeMedTrit.codeMedTrit,numpt,partageUp);
                    window.parent.toastr.success("Attention, Patient partagé avec succès!.",'success',option);
                    CreationTablepartage(numpt);
                }else
                    window.parent.toastr.error("Attention, Le patient a déjà partagé !!!.",'Error',option);
                                    
            },
            ClickPartageNon: function () {
                var codeMedTrit =this.model.get("codeMedTrit").codeMedTrit;
                var partage =GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,numpt);
                console.log(partage +"   par "+codeMedTrit);
                var par =partage.toString().split("/");
                console.log(par);
                partage="";
                $.each(par , function (i){
                    console.log(par[i]);
                    if(par[i].toString() !== codeMedTrit.toString() && par[i].toString() !==""){
                        partage+=par[i]+"/";
                    }
                });
                
                console.log(partage);
                var Err = SuppPartage(codeMedTrit,numpt);
                if(Err.toString()==="true"){
                    Err =UpdateMedecinPartage(paramater.codeMedTrit.codeMedTrit,numpt,partage);
                    window.parent.toastr.success("Attention, Partage supprimé avec succès!.",'success',option);
                    CreationTablepartage(numpt);
                }else
                    window.parent.toastr.error("Attention, Suppression interdite !!!.",'Error',option);
            }
            
            }) 
            
                    
            
        }
    ];
    
   
    
    /*var ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    window.parent.$("#MedcinPartager").empty().append('<div id="listeMedcinPartager" ></div>');
    var grid = new Backgrid.Grid({
        
        columns: columns,
        collection: territories,
        //row: FocusableRow,
        className: 'table table-striped table-bordered table-hover'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
  

     var patientSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche Par Médecin",
        id: "rechercherPMed",
        wait: 150
    });
    $(patientSideFilter.el).css({float: "left", margin: "0 0 10px 0"});
  
    window.parent.$("#listeMedcinPartager").before(patientSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    window.parent.$("#listeMedcinPartager").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        window.parent.$("#listeMedcinPartager").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
      return columns.length;
  }
  
  function createBackGridSalle() {

            App.startPageLoading({animate: true});

        
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Patient?type=consult&function=GetListSallebyCodeMedTrit&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 9
              }
    });

    var territories = new Territories();
    
    var partage; 
    var columns = [
        {
            name: "sexe",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model.get("numPatient") ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
                partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,this.model.get("numPatient").numFichPatient);
                var data=this.model.get("numPatient").sexe;
                var datenaiss =this.model.get("numPatient").datenaiss;
                var age =GetAge(datenaiss);
                var IMG="";
                    if (data === "Femme" )
                    {

                        if(age < 12)
                            IMG= '<img src="../img/avatars/icon_girl-512.png" width="40" alt="" />';
                        else
                            if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/girl.png" width="40" alt="" />';
                       else
                            if(age>20 && age<=50)
                                IMG= '<img src="../img/avatars/034-user-6.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/019-social-1.png" width="40" alt="" />';
                    }
                    else
                         {
                          if(age < 12)
                            IMG= '<img src="../img/avatars/icon_boy-512.png" width="40" alt="" />';
                        else
                             if(age>=12 && age<=20)
                               IMG= '<img src="../img/avatars/boy.png" width="40" alt="" />';
                            else
                                 if(age>20 && age<=50)
                                     IMG= '<img src="../img/avatars/043-man-1.png" width="40" alt="" />';
                       else
                           IMG= '<img src="../img/avatars/042-man-2.png" width="40" alt="" />';
                    }
                 
                 if(partage.toString().includes("partagé"))
                     return IMG+'<img class="tooltips" data-tooltip="tooltip" title="Patient partagé" src="../img/BMR.gif" width="20" alt="" style=" margin-top: -91px; margin-left: -5px;cursor: pointer;" />';
                 else
                     return IMG;
		
	  }
                 
            })
           
        },
        {
            name: "numFichPatient", // The key of the model attribute
            label: "Patient", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but ID shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.Cell.extend({
                render: function (e) {
                var cnam="", apci ="" , AutreAurr="";
		this.$el.empty();
                var nom =this.model.get("numPatient").numFichPatient;
                
                 if(this.model.get("numPatient").assurCnam !== null)
                        cnam ="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("numPatient").codeApci !== "")
                        apci ="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(this.model.get("numPatient").autreAssur !== "")
                        AutreAurr =AutreAssurImg(this.model.get("numPatient").autreAssur);
                    
		this.$el.html(nom +"<br/> "+cnam +" "+apci+" "+AutreAurr);
                    
		return this;
            }
            })
        }, 
        {
            name: "",
            label: "Name et Prénom",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
               render: function (e) {
                    
		this.$el.empty();
                var nom =this.model.get("numPatient").nom;
                var prenom =this.model.get("numPatient").prenom;
		this.$el.append(nom +" "+prenom);
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "numPatient.assurCnam",
            label: "Identifiant Unique",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                   render: function (e) {
                    var assurCnam =this.model.get("numPatient").assurCnam;
                    this.$el.empty();
                    if(assurCnam !== null)
                        this.$el.append("N° "+assurCnam.identUnique);
                    else
                        this.$el.append("");

                    return this;
                }
    
            }) 
        },
        {
            name: "datenaiss",
            label: "Date Naissance",
            editable: false,
            cell: Backgrid.DateCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                var date =VerifDateDD_MM_YYYY(this.model.get("numPatient").datenaiss);
		this.$el.append(date);
                    
		return this;
            }
           })
       },
        {
           name:"",
            label: "Age",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();
                var DateNaiss =this.model.get("numPatient").datenaiss;
                var age =GetAge(DateNaiss);
                if(age === 0)
                    age++;
                
                this.$el.append(age +" ans");
                    
		return this;
            }
    
            }) 
        },
        {
            name: "",
            label: "Poids",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();    
                this.$el.append(this.model.get("numPatient").poids +" Kg");
                    
		return this;
            }
            }) 
        },
        {
            name: "numPatient.adresse",
            label: "Adresse",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                   className: 'string-cell-2'
            }) 
        },
        {
            name: "numPatient.fixe",
            label: "Fixe",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
            })
        },
        {
            name: "numPatient.gsm",
            label: "Gsm",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
            })
        },
        {
            name: "numPatient.ville.ville",
            label: "Ville",
            editable: false,
            cell: Backgrid.StringCell.extend({
                className: 'string-cell-2'
           })
       },
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
                //template: _.template('<ul class="social-icons"> <li><a id="edit" data-tooltip="tooltip" title="" href="javascript:void(0);" data-placement="top"  data-original-title="Modifier" class="tooltips myspace"> </a> </li><li><a id="Consult" href="javascript:;" data-original-title="Conultation" class="last-fm"> </a></li><li><a id="delete" href="javascript:;" data-original-title="Supprimer" class="dropbox"> </a></li><li><a id="File" href="#" data-original-title="File" class="last-fm"> </a></li><li><a id="Partage" href="#" data-original-title="Partage" class="last-fm"> </a></li></ul>'),
//                template: _.template('<ul class="action-icons"> <li><a id="edit"  data-tooltip="tooltip" title="Modifier" data-placement="top"   class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userM.png" ></i></a></li><li><a id="Consult" data-tooltip="tooltip" title="Observation" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userC.png" ></i></a></li><li><a id="delete" data-tooltip="tooltip" title="Supprimer" data-placement="top" class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userDel.png" ></i></a></li><li><a id="File" data-tooltip="tooltip" title="File" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userF.png" ></i></a></li><li><a id="Partage" data-tooltip="tooltip" title="Partager" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="../img/userP.png" ></i></a></li></ul>'),
            template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="Consult" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/ConsultIcon.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Consultation</div></a></li>'+
                            '<li><a id="Archive" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userC.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Archive</div></a></li>'+
                            '<li><a id="File" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userF.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Piece jointe</div></a></li>'+
                            '<li><a id="Partage" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userP.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Partager dossier</div></i></a></li>'+
                            '<li class="divider"></li>'+
                            '<li><a id="edit" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userM.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Modifier</div></a></li>'+
                            '<li><a id="delete" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userDel.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Supprimer</div></i></a></li>'+
                            '<li class="divider"></li>'+
                            '<li><a id="labo" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/bloc.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Demande labo</div></i></a></li>'+
                            '<li><a id="Radio" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/bilan.png" ><div style=" margin-top: -18px; margin-left: 20px; "> Demande Radio</div></i></a></li>'+
                        '</ul></div>'),
            template1: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="Archive" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/userC.png" ></i><div style=" margin-top: -18px; margin-left: 20px; "> Archive</div></a></li>'+
                            
                        '</ul></div>'),
                events: {
                    "click a#edit": "ClickEdit",
                    "click a#delete": "ClickDelete",
                    "click a#Consult": "ClickConsult",
                    "click a#File": "FileEdit",
                    "click a#Partage": "FilePartage",
                    "click a#Archive": "ArchiveConsult"
                        },
                render: function () {
                    var numpt=this.model.get("numFichPatient");
                    if(partage.toString().includes("partagé"))
                        this.$el.html(this.template1());
                    else
                        this.$el.html(this.template());
                    
                    this.delegateEvents();
                    return this;
                        },
            FilePartage: function () {
                var numpt=this.model.get("numPatient").numFichPatient;
                window.parent.$("#nomprenompatientPartage").empty().append(numpt);
                window.parent.$("#confirmeemodal").attr("data-target","#PartageModal");
                window.parent.$("#confirmeemodal").trigger("click");
                CreationTablepartage(numpt);
            },
            ClickEdit: function () {
               localStorage.setItem("Update","true");
               localStorage.setItem("Consultation","false");
               localStorage.setItem("numFichPatient",this.model.get("numPatient").numFichPatient);
               window.location.href='AjPatient.jsp';
            },
            ArchiveConsult: function () {
               localStorage.setItem("numFichPatient",this.model.get("numPatient").numFichPatient);
               window.location.href='ArchiveMedic.jsp';
            },
            FileEdit: function () {
                numpt=this.model.get("numPatient").numFichPatient;
                window.parent.$("#nomprenompatientFile").empty().append(numpt);
                window.parent.$("#confirmeemodal").attr("data-target","#fileUpload");
                window.parent.$("#confirmeemodal").trigger("click");
                FileRefresh(numpt);    
            },
            ClickConsult: function () {
                var Secretaire =JSON.parse(localStorage.getItem("Secretaire"));
        if(Object.keys(Secretaire).length>0)
            toastr.error("L'accés n'est autorisé  !!!.",'Error',option);
        else
            {
                var Model =this.model.get("numPatient");
                Consults =GetListConsultationByPatient(Model.numFichPatient);
                
                if(Object.keys(Consults).length>0){
                    window.parent.$.SmartMessageBox({
                                    title : "<img src='../img/bloc.png'> Observation",
                                    content : "Sélectionner type de Demande!!",
                                    buttons : "[Annuler][Valider]",
                                    input : "select",
                                    options : "[ Consultation ][ Contrôle ]"
                            }, function(ButtonPress, Value) {
                                if (ButtonPress === "Valider") {
                                    var type= Value.toString().trim();
                                    
                                    if(type === "Contrôle"){
                                        var dateconsult =Consults[(Consults.length-1)].dateConsult;
                                        type="Contrôle Pour Consultation "+VerifDateDD_MM_YYYY(dateconsult);
                                        localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                                        localStorage.setItem("Prescp",JSON.stringify([]));
                                        localStorage.setItem("typeConsult",type);
                                        localStorage.setItem("Ordonnance","false");
                                        localStorage.setItem("UpdateConsult","false");
                                        localStorage.setItem("Consults",JSON.stringify(Consults));
                                        localStorage.setItem("numFichPatient",Model.numFichPatient);
                                        window.location.href='../body_page/Consultation.jsp';
                                    }
                                    else
//                                        if(Consults[0].numPatient.codeApci)
//                                    {
//                                       window.parent.$.SmartMessageBox({
//                                            title : "<img src='../img/apci_logo_600w.png' style='width: 80px;'>  Type Ordonnance!",
//                                            content : "Le Patient "+Consults[0].numPatient.nom+" "+Consults[0].numPatient.prenom+" à un APCI Remboursement. <br/> Voulez vous utilisez l'ordonnance APCI(OUI) ou Normal(NON)",
//                                            buttons : '[OUI][NON]'
//                                            }, function(ButtonPressed) {
//                                                if (ButtonPressed === "OUI") {
//                                                     type="Consultation APCI";
//                                                }
//                                                localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
//                                                localStorage.setItem("Prescp",JSON.stringify([]));
//                                                localStorage.setItem("typeConsult",type);
//                                                localStorage.setItem("Ordonnance","false");
//                                                localStorage.setItem("UpdateConsult","false");
//                                                localStorage.setItem("Consults",JSON.stringify(Consults));
//                                                localStorage.setItem("numFichPatient",Model.get("numFichPatient"));
//                                                window.location.href='../body_page/Consultation.jsp';
//                                        }); 
//                                    }else
                                    {
                                        localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                                        localStorage.setItem("Prescp",JSON.stringify([]));
                                        localStorage.setItem("Ordonnance","false");
                                        localStorage.setItem("UpdateConsult","false");
                                        localStorage.setItem("Consults",JSON.stringify(Consults));
                                        localStorage.setItem("typeConsult","Consultation");
                                        localStorage.setItem("numFichPatient",Model.numFichPatient);
                                        window.location.href='../body_page/Consultation.jsp';
                                    }
                                    
                                }
                            });
                        }else{
                            localStorage.setItem("num_conslt",GetCptParamByCode("CptConsult"));
                            localStorage.setItem("Prescp",JSON.stringify([]));
                            localStorage.setItem("Ordonnance","false");
                            localStorage.setItem("UpdateConsult","false");
                            localStorage.setItem("Consults",JSON.stringify([]));
                            localStorage.setItem("typeConsult","Consultation");
                            localStorage.setItem("numFichPatient",Model.numFichPatient);
                            window.location.href='../body_page/Consultation.jsp';
                        }
                    	
                }
            },
            ClickDelete: function () {
                var Model =this.model;
                var idpatient = this.model.get("numPatient").numFichPatient;
                window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Patient",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                            
                                
                               var Err= SuppPatient(idpatient.toString());
                               
                                if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Patient Supprimé Avec Succès", "success");
                                    Model.collection.remove(Model);
                                }else
                                    window.parent.swal("Notification !!! ", "Patient à des consultations", "error");
                                    
                                 
                                  
                        }
                            
                });

                     
            }
            
            }) 
            
                    
            
        }
    ];
    
    
    var FocusableRow = Backgrid.Row.extend({
        highlightColor:'#BAD2E4',
        events:{
            click :'Click',
            mouseover :'mouseovercard'
        },
        rowFocused:function (){
          $('tbody.table-editable tr').removeAttr('style');
          this.$el.css('background-color',this.highlightColor);
        },
        Click : function(){
            var patient =this.model.get("numPatient").numFichPatient;
            console.log(patient);
        },
        mouseovercard: function() {
        console.log('hello world');
        /*var template='<button class="btn btn-default btn-xs item_button_remove"><span class="glyphicon glyphicon-trash"></span> <span data-i18n="Hide">Hide</span></button>';
          this.$el.append(template);*/
    }
    });
    
    /*var ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    var grid = new Backgrid.Grid({
        
        columns: columns,
        collection: territories,
        //row: FocusableRow,
        className: 'table table-striped table-bordered table-hover'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
    
//    Backgrid.ClientSideFilterWithPickFilter = Backgrid.Extension.ClientSideFilter.extend({
//        pickFilter: null,
//        setPickFilter: function (attrs) {
//            this.pickFilter = attrs;
//            this.search();
//            return this;
//        },
//        makeMatcher: function (query) {
//            var regexp = this.makeRegExp(query);
//            return function (model) {
//                var json = model.toJSON();
//
//                // Test the pick filter (if set)
//                if (this.pickFilter) {
//                    var match = _.find(this.pickFilter, function (value, key) {
//                        return json[key] === value;
//                    });
//                    if (match === undefined) return false;
//                }
//
//                // Test the search filter
//                var keys = this.fields || model.keys();
//                for (var i = 0, l = keys.length; i < l; i++) {
//                    if (regexp.test(json[keys[i]] + "")) return true;
//                }
//                return false;
//            };
//            }
//        });

     var patientSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche Par Patient",
        id: "rechercher",
        fields: ['numPatient.numFichPatient','numPatient.nom','numPatient.prenom','numPatient.datenaiss.year','numPatient.adresse','numPatient.ville.ville'],
        wait: 150
    });
    $(patientSideFilter.el).css({float: "left", margin: "0 0 10px 0"});
    
//    var filter = new Backgrid.ClientSideFilterWithPickFilter({
//        collection: territories,
//        placeholder: "Recherche Par Patient x"
//    });
    
//    $('input[name=valid]').change(function(e) {
//	filter.setPickFilter(e.target.checked ? {Valid: true} : null);
//    });
 
   
    $("#contents").before(patientSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
    App.stopPageLoading();
      return columns.length;
  }