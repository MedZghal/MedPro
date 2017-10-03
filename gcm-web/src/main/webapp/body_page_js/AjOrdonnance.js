/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *///
//$.fn.editable.defaults.mode = 'inline';
var Medicaments;
var prix_ =0;
var click=0;
var medics;
var paramater;
var dateServeur;
var patient;
var Prescp;
var iframe = document.getElementById('resultf');
$(function(){
    /*init*/
     var original = $.fn.editableutils.setCursorPosition;
      $.fn.editableutils.setCursorPosition = function() {
          try {
              original.apply(this, Array.prototype.slice.call(arguments));
          } catch (e) { /* noop */ }
      };
      
    patient=JSON.parse(localStorage.getItem('patient'));
    dateServeur=GetDateServeur();
    paramater = JSON.parse(localStorage.getItem("paramater"));
    var num_consult = localStorage.getItem("num_conslt");
         $("#numeroOrd").empty().append(num_consult);
        if(paramater!==null){
            $("#drname").empty().append("Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin);
            $("#adresse").empty().append(FUllDateString(dateServeur).toString().substr(0,24));
            $("#dateOrd").empty().append("le "+dateServeur);
            $("#sp").empty().append("Spécialité : "+paramater.specialite);
            $("#gcm").empty().append("Tel &nbsp;&nbsp; : "+paramater.gsm);
            $("#tel").empty().append("Fixe &nbsp;&nbsp; : "+paramater.fixe);
        }
        
        $("#medic").on('save', function(e, params) {
            prix_+=parseInt(get_Medicament_Prix(params.newValue));
            $("#mntOrd").empty().append(prix_.toFixed(2));
        });
        $("#date").append(FUllDateString(dateServeur));
        var form = $('#container'),cache_width = form.width(),a4  =[ 595.28,  841.89];  // for a4 size paper width and height
        /*end*/
        
        /*commande*/
        
//                $("#edit").click(function (){
                    

//                 });

//                $("#save").click(function (){
//                     var aHTML = $('.click2edit').summernote('code'); //save HTML If you need(aHTML: array).
//                     $('.click2edit').summernote('destroy');
//                   });
                   
               $('#create_pdf').on('click',function(){
                   
                   Prescp=[];
                   $('#preOrd > tbody  > tr').each(function(tr) {
                       $this = $(this);
                       if($this.find("[data-type='select2']").text()!=="Ajouter" && $this.find("[data-type='address']").text()!=="Ajouter" && $this.find("[data-type='number']").text()!=="Ajouter")
                       Prescp.push({
                           id:$this.find("[data-type='select2']").data('editable').value,
                            medc: $this.find("[data-type='select2']").text(),
                            posologie: $this.find("[data-type='address']").text(),
                            quntite: $this.find("[data-type='number']").text()
                        }); 
                    });
                    
                    localStorage.setItem("Prescp",JSON.stringify(Prescp));
                    DemandeOrdonnance(Prescp);
                    if(Prescp.length>0){
                        if(GetOrdonnanceByNum(num_consult) !== null){
                             SuppOrdonnance(num_consult);
                             //SuppPrescriptionOrdByNum_Ord(num_consult);
                             AjOrdonnance(dateServeur,num_consult);
                         }else
                             AjOrdonnance(dateServeur,num_consult);

                         $.each(Prescp, function (i){
                             AjPrescriptionOrd(Prescp[i].id,num_consult,"",Prescp[i].quntite,Prescp[i].posologie);
                         });
                         UpdateConsultationOrd(num_consult,num_consult);
                     }
//                       var form = $('#container'),
//                       cache_width = form.width(),
//                       a4  =[ 595.28,  841.89];  // for a4 size paper width and height
//
//                       $('body').scrollTop(0);
//                       createPDF(form,cache_width,a4);
               });	
               
            $('body').scrollTop(0);
            DemandeOrdonnance([]);
//            createPDF(form,cache_width,a4);
        /*end*/
    
		
                  
    /*remplir list medicament/posomogie*/
    Medicaments =GetListMedicament();
    localStorage.setItem("Medicaments",JSON.stringify(Medicaments));
    
    medics = [];
    $.each(Medicaments, function (i){
     medics.push({
                id: Medicaments[i].numMedic,
                text: Medicaments[i].desgMedic
            });   
    });
    
    $('#posologie').editable();
    $('#quntite').editable();
        
    $("#medic").editable({
        placement: 'right',
        select2:{
          width:'600px'
        },
        inputclass: 'input-xxlarge',
        source: medics
    });
    
    $('.click2edit').summernote({
                        focus: true,
                        toolbar: [
                         // [groupName, [list of button]]
                         ['style', ['bold', 'italic', 'underline', 'clear']],
                         ['font', ['strikethrough', 'superscript', 'subscript']],
                         ['fontsize', ['fontsize']],
                         ['color', ['color']],
                         ['para', ['ul', 'ol', 'paragraph']],
                         ['height', ['height']],
                         ['misc', ['print']]
                       ]

                    }); 
    /*end*/
    
    
                       
        
});