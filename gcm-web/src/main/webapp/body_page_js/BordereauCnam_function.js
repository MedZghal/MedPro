

/* global App, Backbone, Backgrid, paramater, codeConv, output, typer, MIME_TYPE, container, DateServeur, bourdereauCnamtxt, bourdereauCnamtxt, recettetoday, dd, tiketModérateur, recette, option */

function UpdateRecetteDate(num_trans, date_trans)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateRecetteDate&num_trans="+num_trans+"&date_trans="+date_trans,
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

function numberX(nb,lengh){
    var lenghnb =nb.toString().length;
    var ch="";
    if( lenghnb < lengh){
        for(i=0;i<(lengh-lenghnb);i++){
            ch+="0";
        }
    }
    return ch+nb;
}

function textX(chn,lengh){
    var lenghch =chn.toString().length;
    var ch="";
    if( lenghch < lengh){
        for(i=0;i<(lengh-lenghch);i++){
            ch+="X";
        }
    }
    return ch+chn;
}
function downloadFile() {
var container = document.querySelector('#container');
var typer = container.querySelector('[contenteditable]');
var output = container.querySelector('output');

var MIME_TYPE = 'text/plain';
 window.URL = window.webkitURL || window.URL;

  var prevLink = output.querySelector('a');
  if (prevLink) {
    window.URL.revokeObjectURL(prevLink.href);
    output.innerHTML = '';
  }

  var bb = new Blob([typer.textContent], {type: MIME_TYPE});

  var a = document.createElement('a');
  a.id="BRTXT";
  a.download = container.querySelector('input[type="text"]').value;
  a.href = window.URL.createObjectURL(bb);
  a.textContent = 'Download ready';

  a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
  a.draggable = true; // Don't really need, but good practice.
  a.classList.add('dragout');

  output.appendChild(a);
  $("#BRTXT")[0].click();

}

function GetPrintBC()
{
    var dateStart = $("#datedebutp").val();
    var dateEnd = $("#datedebutf").val();
    var medecin ="Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin;
    var ch =paramater.codeConvent.toString();
    var codeConv = format2_8_2(ch);
    
    var html ='<embed width="100%" height="750px" name="plugin" id="plugin" src="/'+GetUrl()+'/gcm-web/BordereauCnam?codeMed='+paramater.codeMedTrit.codeMedTrit+'&amp;dateStart='+dateStart+'&amp;dateEnd='+dateEnd+'&amp;codeConv='+codeConv+'&amp;medecin='+medecin+'" type="application/pdf" internalinstanceid="96">';
    $('#firebrtxt')[0].click();
    window.parent.$('#iframe_cloturee').contents().find("#BCPage").empty().append(html);
    var target =window.parent.$('#iframe_cloturee').contents().find("#BCPage");
     App.blockUI({
                target: window.parent.$('#iframe_cloturee').contents().find("#BCPage"),
                boxed: true
            });
            
    window.setTimeout(function() {
                window.parent.$("#menubackBc").removeClass('hide');
                App.unblockUI(window.parent.$('#iframe_cloturee').contents().find("#BCPage"));
            }, 4000);
    
}

function createBackGridRecetteCnam(d1,d2) {
    
            App.startPageLoading({animate: true});

            window.setTimeout(function() {
                App.stopPageLoading();
            }, 2000);
    
    var Territory = Backbone.Model.extend({
//       initialize: function () {
//            Backbone.Model.prototype.initialize.apply(this, arguments);
//            this.on("change", function (model, options) {
//                console.log("Saving change " + JSON.stringify(options) );
//                if (options && options.save === false) return;
//                model.save();
//            });
//          } 
    });
     
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Consultation?type=consult&function=GetRecetteCnambyMedecinDate&code_med_trait="+paramater.codeMedTrit.codeMedTrit+"&dateAu="+d1+"&datedu="+d2,
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 11
              }
    });

    var territories = new Territories();
    var Somme=0;
    var tab=[];
    // Editor for the datetime picker cell.
    var DatetimePickerCellEditor = Backgrid.InputCellEditor.extend({
    events: {},
    initialize: function() {
        
        Backgrid.InputCellEditor.prototype.initialize.apply(this, arguments);
        var input = this;
        
        var timezone = 'America/Lima',
            format = 'DD/MM/YYYY';

        this.$el.datetimepicker({
            format: format,
            timeZone: timezone,
            showClose: true,
            showTodayButton: true,
            focusOnShow: true,
            keepOpen: true,
            showClear: true,
            allowInputToggle: true
        }).on('dp.show', function(event) {
            event.stopPropagation();
            var column = input.column.get('name'),
            date = input.model.get(column);
            input.$el.data("DateTimePicker").date(moment(date));
        }).on('dp.hide', function(event) {
            event.preventDefault();
            
            var aborted = !window.confirm('Êtes-vous sûr de vouloir modifier ce date ?');
            var column = input.column.get("name"),
            date = input.model.get(column),
            dateLocal = null,
            dateObj;
    
            if(!aborted){
                dateObj = event.date;
                
                if (dateObj) {
                    var dateString = dateObj.format(format);
                    dateLocal = moment.tz(dateString, timezone);
                }
                
                input.model.set(column, dateLocal._i);
                
                var err = UpdateRecetteDate(input.model.get("numTrans"),dateLocal._i);
                if(err)
                    window.parent.toastr.success('Date de ligne facture mise à jour !!','Notification',option);
                else
                    window.parent.toastr.error('Vérifiez que tous les champs sont remplis correctement?','Error',option);
            }else
                input.model.set(column,date);
           
            
            var command = new Backgrid.Command({});  
               
            // Save date in model as string in local time.
            
            
            input.model.trigger("backgrid:edited",
                                input.model,
                                input.column,
                                command);
            command = input = null;
            
        }).on('dp.error', function(error) {
            console.log(error);
        });
    }
    ,

    render: function () {
        this.$el.empty();
        var rawValue = this.model.get(this.column.get("name"));
        var formattedValue = this.formatter.fromRaw(rawValue, this.model);
        this.$el.append(formattedValue);
        this.delegateEvents();
        return this;
    }
});
    var DatetimePickerCell = Backgrid.Cell.extend({
        className: 'date-cell',
        editor: DatetimePickerCellEditor
        ,
            render: function () {
                this.$el.empty();
                var date =this.model.get("dateTrans");
                var formattedValue = this.formatter.fromRaw(date, this.model);
                if(typeof(date) ==='string')
                    this.$el.append(formattedValue);
                else
                    this.$el.append(VerifDateDD_MM_YYYY(formattedValue));
                
                this.delegateEvents();
                return this;
            }
    });
    var columns = [
        {
            name: "type",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
                if(this.model.get("type")==="CS")
                    this.$el.html( "<img src='../img/observation.png' style='width: 40px;' > N°"+this.model.get("numTrans"));
                  else
                    if(this.model.get("type")==="AT")
                    this.$el.html( "<img src='../img/bloc.png' style='width: 40px;' > N°"+this.model.get("numTrans"));
            else
                this.$el.html( "<img src='../img/increase.png' style='width: 40px;' > N°"+this.model.get("numTrans"));
		return this;
	  }  
            })
           
        },
        {
            name: "libelle",
            label: "Libellé",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                var lib="";
		this.$el.empty();
                if(this.model.get("numPatient")!==null){
                    if(this.model.get("type")==="CS")
                        lib+="Consultation N° :"+this.model.get("numConsult").numConsult ;
                else
                    if(this.model.get("type")==="AT")
                        lib+="Acte N° :"+this.model.get("codeActe") ;
                
                    var Patient =this.model.get("numPatient");
                        lib+='<br> Patint : '+Patient.nom +" "+Patient.prenom ;
                    this.$el.append(lib);
                } 
                else
                    this.$el.append(this.model.get("type"));
                  
		return this;
            }
           })
       } ,
        {
            name: "",
            label: "I.U de l'assuré",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var caisse =this.model.get("numConsult").numPatient.assurCnam.identUnique;
                
                    this.$el.html('<strong>'+format2_8_2(caisse.toString())+'</strong>');
                return this;
            }
           })
       },
       {
            name: "dateTrans",
            label: "Date Prescription",
            cell: DatetimePickerCell
          },
     
        {
            name: "",
            label: "C.Caisse",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var caisse =this.model.get("numConsult").numPatient.assurCnam.regimeAffi;
                
                if(caisse.toString() === "CNRPS"){
                    this.$el.html('<strong>2</strong>');
                }else
                    if(caisse.toString() === "CNSS"){
                     this.$el.html('<strong>1</strong>');
                 }
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "L.Parenté",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var qualite =this.model.get("numConsult").numPatient.assurCnam.qualite;
                
                    switch (qualite) {
                        case "Assuré":
                            {
                                this.$el.html('<strong>0</strong>');
                                break;
                            }
                        case "Conjoint":
                            {
                                this.$el.html('<strong>1</strong>');
                                break;
                            }
                        case "Enfant à charge":
                            {
                                this.$el.html('<strong>2</strong>');
                                break;
                            }
                        case "Pére à charge":
                            {
                                this.$el.html('<strong>3</strong>');
                                break;
                            }
                        case "Mére à charge":
                            {
                                this.$el.html('<strong>4</strong>');
                                break;
                            }
                        default:
                            break;
                     }
             
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "Rang",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var qualite =this.model.get("numConsult").numPatient.assurCnam.qualite;
                
                if(qualite.toString() === "Enfant à charge"){
                    this.$el.html('<strong>01</strong>');
                }else{
                    this.$el.html('<strong>00</strong>');
                }
               
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "Code Médecin",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var qualite =this.model.get("numConsult").numPatient.assurCnam.codCnam;
                this.$el.html('<strong>'+qualite+'</strong>');
                
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "C.APCI",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                this.$el.empty();
                var codeApci =this.model.get("numConsult").numPatient.codeApci;
                this.$el.html('<strong>'+codeApci+'</strong>');
                
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "Montant",
            editable: false,
            cell: Backgrid.NumberCell.extend({
                render: function (e) {
                this.$el.empty();
                var tt=parseFloat(this.model.get("total"));
                
                if(this.model.get("type")==="AT" || this.model.get("type")==="CS")
                    Somme=tt;
                else
                    Somme=-tt;
                
		this.$el.html('<strong>'+Somme.toFixed(3)+' DT</strong>');
                return this;
            }
           })
       }
       ,
        {
            name: "",
            label: "Action",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.Cell.extend({
                className: 'action-cell',
                template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li style=" margin-top: -10px; " ><a id="modifier" ><i><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/if_document_edit_48757.png" ><div style=" margin-top: -22px; margin-left: 22px; "> Modifier </div></i></a></li>'+
                            '<li style=" margin-top: -10px; " ><a id="delete" ><i><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/if_folder_delete_48768.png" ><div style=" margin-top: -22px; margin-left: 22px; "> Supprimer </div></i></a></li>'+
                            
                        '</ul></div>'),
                events: {
                    "click a#modifier": "ClickModifier",
                    "click a#delete": "ClickDelete"
                        },
                render: function () {
                    this.$el.html(this.template());
                    this.delegateEvents();
                    return this;
                        },
            ClickModifier: function () {
                var numFichPatient =this.model.get("numConsult").numPatient.numFichPatient;
                    localStorage.setItem("Update","true");
                    localStorage.setItem("Consultation","true");
                    localStorage.setItem("numFichPatient",numFichPatient);
                    window.parent.$("#menubackBc").removeClass('hide');
                    window.location.href='AjPatient.jsp';
            },
            ClickDelete: function () {
                var Model =this.model;
                var numTrans = this.model.get("numTrans");
                window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Facture",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                              var Err = SuppRecette(numTrans);
                              
                                  if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Facture Supprimé Avec Succès", "success");
                                    Model.collection.remove(Model);
                                }else
                                    window.parent.swal("Notification !!! ", "Error lors de la supprission!!", "error");
                        }
                            
                });

                     
            }
            
            }) 
            
                    
            
        }
    ];
    
    
    
    var CaptionFooter = Backgrid.Footer.extend({

            render: function () {
              this.el.innerHTML = '<tr colspan="11"><td colspan="9" style="color:#23527c;">Mnt Total Factures</td><td colspan="1">'+(recettetoday).toFixed(3)+' DT</td><td></td></tr>';
              return this;
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
//        row: FocusableRow,
//        row: window.Backgrid.SummedRow.extend({ columnsToSum: ['total'], multiplier: 'total' }),
        className: 'backgrid table-hover table-bordered',
//        body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['total'] })
    footer: CaptionFooter 
    });
   
   var FactureSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche....",
        id: "rechercher",
        fields: ['numTrans','type','tiers','libelle','numConsult.numConsult','numPatient.numFichPatient'],
        wait: 150
    });
    $(FactureSideFilter.el).css({float: "left", margin: "0 0 10px 0"});
    
    $("#contents").before(FactureSideFilter.render().el);
    document.getElementById("search").focus();
    
    
// Render the grid and attach the root to your HTML document
    $("#contents").empty().append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
    
      return columns.length;
  }
