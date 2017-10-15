

function SuppMedic(num_Medic)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppMedic&num_Medic="+num_Medic,
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

function remplir_MedicamentDci(data){
    
    var select_html="";
    $.each(data , function(i){
        select_html+="<option value='"+data[i].numDci+"'>"+data[i].libelle+"</option>";
    });
    window.parent.$('#medicdci').empty().append(select_html);
    
}

function createBackGridMedic() {

            App.startPageLoading({animate: true});

            window.setTimeout(function() {
                App.stopPageLoading();
            }, 2000);
        
    var Territory = Backbone.Model.extend({});
    var Territories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "../Gestion_Patient?type=consult&function=GetListMedicament",
        mode:"client",
         state: {
             firstPage:1,
                pageSize: 11
              }
    });

    var territories = new Territories();
    
      
    var columns = [
        {
            name: "numMedic",
            label: "",
            editable: false,
             cell: Backgrid.Cell.extend({
             className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( "<img src='../img/pills.png' style='width: 30px;' >&nbsp; N°"+this.model.get("numMedic"));
		return this;
	  }  
            })
           
        },
        {
            name: "desgMedic", // The key of the model attribute
            label: "Désignation", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but ID shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.Cell.extend({
                render: function (e) {
		this.$el.empty();
		this.$el.html(this.model.get("desgMedic"));
                    
		return this;
            }
            })
        }, 
        {
            name: "prix",
            label: "Prix HT",
            editable: false,
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.NumberCell.extend({
               render: function (e) {
                    
		this.$el.empty();
		this.$el.append(parseFloat(this.model.get("prix")).toFixed(3) +" DT");
                    
		return this;
            }
            }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        },
        {
            name: "generique",
            label: "Génerique",
            editable: false,
            cell: Backgrid.StringCell.extend({
                render: function (e) {
                    
		this.$el.empty();
		this.$el.append(this.model.get("generique"));
                    
		return this;
            }
           })
       },
        {
           name:"catgCnam",
            label: "Catégorie CNAM",
            editable: false,
           
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
            cell: Backgrid.StringCell.extend({
                    render: function (e) {
                    
		this.$el.empty();
                this.$el.append(this.model.get("catgCnam"));
                    
		return this;
            }
    
            }) 
        },
        {
            name: "dci.libelle",
            label: "Dénomination commune internationale",
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
                className: 'action-cell',
                template: _.template('<div class="btn-group">'+
                    '<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                    '<i class="fa fa-gear fa-lg"></i> <span class="caret"></span>'+
                    '</button>'+
                        '<ul class="dropdown-menu" style="right: 0; left: auto;">'+
                            '<li><a id="delete" ><i ><img style=" margin-top: -4px;width:25px;margin-left: -10px;" src="../img/if_folder_delete_48768.png" ><div style=" margin-top: -22px; margin-left: 22px; "> Supprimer </div></i></a></li>'+
                            
                        '</ul></div>'),
                events: {
//                    "click a#edit": "ClickEdit",
                    "click a#delete": "ClickDelete"
                        },
                render: function () {
                    this.$el.html(this.template());
                    this.delegateEvents();
                    return this;
                        },
//            ClickEdit: function () {
//                
//            },
            ClickDelete: function () {
                var Model =this.model;
                var numMedic = this.model.get("numMedic");
                window.parent.$.SmartMessageBox({
                    title : "<img src='../img/ERR.png'></img>  Attention!",
                    content : "Etes Vous Sûre De La Suppression de Cette Médicament",
                    buttons : '[Annuler][Valider]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed === "Valider") {
                              var Err = SuppMedic(numMedic);
                              
                                  if(Err.toString()==="true"){
                                    window.location.reload();
                                    window.parent.swal("Notification !", "Médicament Supprimé Avec Succès", "success");
                                    Model.collection.remove(Model);
                                }else
                                    window.parent.swal("Notification !!! ", "Error lors de la supprission!!", "error");
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
        className: 'backgrid table-hover table-bordered full-height-content full-height-content-scrollable table-editable no-margin'
        //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });
    
     var MedicSideFilter = new Backgrid.Extension.ClientSideFilter({
        
        collection: territories,
        placeholder: "Recherche Par Médicament",
        id: "rechercher",
        fields: ['numMedic','desgMedic','generique','dci.libelle'],
        wait: 150
    });
    $(MedicSideFilter.el).css({float: "right", margin: "0 0 10px 0"});
    
    
 
   
    $("#contents").before(MedicSideFilter.render().el);
    document.getElementById("search").focus();
    
// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);
    
            var paginator = new Backgrid.Extension.Paginator({
                       collection: territories
                     });
        $("#contents").append(paginator.render().el);
        
   
   


    territories.fetch({reset: true});
      return columns.length;
  }