/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function (){
    var date =FUllDateString(GetDateServeur());
    $("#date").append(date);
    var num_consult = localStorage.getItem("num_conslt");
    var PrOrd=GetConsultationByNum(num_consult);
    if(PrOrd!== null){
            if(PrOrd.numOrd!== null){
                $('.alert-success', FormVAL).show();
                Remplir_Ord(PrOrd);
            }
//                Prescp=JSON.parse(localStorage.getItem("Prescp"));
//                if(Prescp.length>0 && localStorage.getItem("Ordonnance")==="true")
//                    Remplir_OrdNotValide(Prescp,date,num_consult);
        
                    
        
    }else{
        Prescp=JSON.parse(localStorage.getItem("Prescp"));
        if(Prescp.length>0 && localStorage.getItem("Ordonnance")==="true"){
            Remplir_OrdNotValide(Prescp,date,num_consult);
        }else
            $('.alert-danger', FormVAL).show();
    }
});