

$(function (){
    /*init*/
    if(!window.parent.$("#menubackRc").hasClass('hide'))
        window.parent.$("#menubackRc").toggleClass('hide');
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    var paramater = JSON.parse(localStorage.getItem("paramater"));
    var Medic =GetListMedicament();
    var dci=GetListDci();
    remplir_MedicamentDci(dci);
    $(window).on('load', function(){
            $("#nbpatient").attr("data-value",Medic.length);  
            $('#nbpatient').counterUp({
                    delay: 10,
                    time: 1000,
                    offset: 70,
                    beginAt: 100,
                    formatter: function (n) {
                      return n.replace(/,/g, '.');
                    }});

         });
    createBackGridMedic();
    /*end*/
    
    /*commande*/
    $("#AddMedic").click(function (){
        window.parent.$("#confirmeemodal").attr("data-target","#medicmodal");
        window.parent.$("#confirmeemodal").trigger("click");
    });
    
    /*end*/
});

