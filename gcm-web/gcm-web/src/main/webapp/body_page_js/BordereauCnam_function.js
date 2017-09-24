

/* global App, Backbone, Backgrid */

function createBackGridRecette(d1,d2) {

            App.startPageLoading({animate: true});

            window.setTimeout(function() {
                App.stopPageLoading();
            }, 2000);
        
    var Territory = Backbone.Model.extend({});
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Consultation?type=consult&function=GetRecettebyMedecinDate&code_med_trait="+paramater.codeMedTrit.codeMedTrit+"&dateAu="+d1+"&datedu="+d2,
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
                    
		return this;
            }
           })
       },
        {
            name: "dateTrans",
            label: "Date",
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
       },
        {
            name: "tiers",
            label: "Tiers",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                    
		this.$el.empty();
                if(this.model.get("tiers")!=="")
                    this.$el.append("<span class='label label-sm label-info'>"+this.model.get("tiers")+" </span>");
                else
                     this.$el.append();
                    
		return this;
            }
           })
       },
        {
            name: "",
            label: "Mt Débit",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
		this.$el.empty();
                if(this.model.get("type")!=="AT" && this.model.get("type")!=="CS")
//                    this.$el.css({background:"repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px"});
                    this.$el.append(parseFloat("0").toFixed(3));
                else
                    this.$el.append(parseFloat(this.model.get("total")).toFixed(3));
		return this;
            }
           })
       },
        {
            name: "",
            label: "Mt Crédit",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
		this.$el.empty();
                if(this.model.get("type")!=="AT" && this.model.get("type")!=="CS")
//                    this.$el.css({background:"repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px"});
                    this.$el.append(parseFloat(this.model.get("total")).toFixed(3));
                    
                else
                    this.$el.append(parseFloat("0").toFixed(3));
		return this;
            }
           })
       },
        {
            name: "",
            label: "Solde",
            editable: false,
            cell: Backgrid.NumberCell.extend({
                render: function (e) {
                this.$el.empty();
                var tt=parseFloat(this.model.get("total"));
                
                if(this.model.get("type")==="AT" || this.model.get("type")==="CS")
                    Somme=tt;
                else
                    Somme=-tt;
                
		this.$el.html('<strong>'+Somme.toFixed(3)+'</strong>');
                return this;
            }
           })
       },
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
                            '<li><a id="delete" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/delete.png" ><div style=" margin-top: -22px; margin-left: 22px; "><strong>Supprimer</strong></div></i></a></li>'+
                            
                        '</ul></div>'),
                events: {
                    "click a#delete": "ClickDelete"
                        },
                render: function () {
                    this.$el.html(this.template());
                    this.delegateEvents();
                    return this;
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
              this.el.innerHTML = '<tr colspan="7"><td colspan="4" style="color:#23527c;">Mnt Total Factures</td><td>'+(recettetoday-depense).toFixed(3)+' DT</td><td>'+depense.toFixed(3)+' DT</td></td><td>'+((recettetoday-depense)-depense).toFixed(3)+' DT</td></tr>';
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
   
      return columns.length;
  }
