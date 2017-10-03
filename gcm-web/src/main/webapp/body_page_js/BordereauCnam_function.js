

/* global App, Backbone, Backgrid, paramater, codeConv, output, typer, MIME_TYPE, container, DateServeur, bourdereauCnamtxt, bourdereauCnamtxt, recettetoday, dd, tiketModérateur, recette */

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
    var codeConv = ch.substr(0,2)+"/"+ch.substr(2,8)+"/"+ch.substr(8,2);
    
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
    var bourdereauCnamtxt1 =$("<p></p>").text("I-");
    var bourdereauCnamtxt2 =$("<p></p>").text("II-");
    var bourdereauCnamtxt3 =$("<p></p>").text("III-");
    var Territory = Backbone.Model.extend({});
    var dd =($("#datedebutp").val()+$("#datedebutf").val()+DateServeur).toString().replace(/\//g, '') ;
    bourdereauCnamtxt1.append('1'+paramater.codeConvent+dd+"00000000000000000000"+numberX(recette.length,5)+numberX(recettetoday,10)+numberX(tiketModérateur,10)+numberX((recettetoday-tiketModérateur),10));
        
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
                bourdereauCnamtxt2.append("2-201703");    
		return this;
            }
           })
       },
        {
            name: "dateTrans",
            label: "Date Prescription",
            editable: false,
//              cell: Backgrid.DateCell.extend({
//    })
            cell: Backgrid.DateCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                var date =this.model.get("dateTrans");
		this.$el.append(VerifDateDD_MM_YYYY(date));
                    
		return this;
            }
           })
       }
       ,
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
                    bourdereauCnamtxt2.append("2");
                }else
                    if(caisse.toString() === "CNSS"){
                     this.$el.html('<strong>1</strong>');
                     bourdereauCnamtxt2.append("1");
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
                                bourdereauCnamtxt2.append("0");
                                break;
                            }
                        case "Conjoint":
                            {
                                this.$el.html('<strong>1</strong>');
                                bourdereauCnamtxt2.append("1");
                                break;
                            }
                        case "Enfant à charge":
                            {
                                this.$el.html('<strong>2</strong>');
                                bourdereauCnamtxt2.append("2");
                                break;
                            }
                        case "Pére à charge":
                            {
                                this.$el.html('<strong>3</strong>');
                                bourdereauCnamtxt2.append("3");
                                break;
                            }
                        case "Mére à charge":
                            {
                                this.$el.html('<strong>4</strong>');
                                bourdereauCnamtxt2.append("4");
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
                    bourdereauCnamtxt2.append("01");
                }else{
                    this.$el.html('<strong>00</strong>');
                    bourdereauCnamtxt2.append("00");
                }
                var Patient =this.model.get("numPatient");
                    bourdereauCnamtxt2.append(textX(Patient.nom +" "+Patient.prenom ,60)+ Patient.datenaiss.year + Patient.datenaiss.month + Patient.datenaiss.day+this.model.get("numConsult").numPatient.assurCnam.codCnam.toString().replace("/","")+this.model.get("numConsult").dateConsult.year+this.model.get("numConsult").dateConsult.month+this.model.get("numConsult").dateConsult.day +numberX(recette.length,5)+this.model.get("total")+numberX(recettetoday,10)+numberX(tiketModérateur,10)+numberX((recettetoday-tiketModérateur),10)+Patient.codeApci);
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
                template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="modifier" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/if_document_edit_48757.png" ><div style=" margin-top: -22px; margin-left: 22px; "> Modifier </div></i></a></li>'+
                            '<li><a id="delete" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/if_folder_delete_48768.png" ><div style=" margin-top: -22px; margin-left: 22px; "> Supprimer </div></i></a></li>'+
                            
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
                    content : "Etes Vous Sûre De La Suppression de Cette Dépense",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                              var Err = SuppRecette(numTrans);
                              
                                  if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Dépense Supprimé Avec Succès", "success");
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
              this.el.innerHTML = '<tr colspan="10"><td colspan="8" style="color:#23527c;">Mnt Total Factures</td><td colspan="1">'+(recettetoday).toFixed(3)+' DT</td><td></td></tr>';
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
        className: 'table table-bordered  table-editable no-margin table-hover full-height-content full-height-content-scrollable',
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
    $('#contextbrtxt').empty().append(bourdereauCnamtxt1);
    $('#contextbrtxt').append(bourdereauCnamtxt2);
    $('#contextbrtxt').append(bourdereauCnamtxt3);
      return columns.length;
  }
