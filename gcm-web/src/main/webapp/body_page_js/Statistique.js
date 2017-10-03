

$(function (){
    
/*init*/
    if(!window.parent.$("#menuback").hasClass('hide'))
        window.parent.$("#menuback").toggleClass('hide');
    if(!window.parent.$("#menubackRc").hasClass('hide'))
         window.parent.$("#menubackRc").toggleClass('hide');
    $('body').scrollTop(0);
    $("#date").append(FUllDateString(GetDateServeur()));
    var paramater = JSON.parse(localStorage.getItem("paramater"));        
    var consult = [GetConsultStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];
    var consultapci = [GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];
    var rdvs = [GetRdvStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];

    $('.datepicker').datepicker({
        autoclose: true,
        format: " yyyy",
        viewMode: "years", 
        minViewMode: "years",
        startDate: '2014',
        endDate: new Date()
    }).on('changeDate', function(e){
        console.log($(this).val());
        consult = [GetConsultStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetConsultStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];
        consultapci = [GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetConsultAPCIStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];
        rdvs = [GetRdvStats(paramater.codeMedTrit.codeMedTrit,1,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,2,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,3,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,4,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,5,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,6,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,7,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,8,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,9,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,10,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,11,$('.datepicker').val().toString().trim()),GetRdvStats(paramater.codeMedTrit.codeMedTrit,12,$('.datepicker').val().toString().trim())];
        StatsAll(consult,consultapci,rdvs);
    });
    
    $('.datepicker').datepicker('setDate', new Date().getFullYear().toString());


          
    StatsAll(consult,consultapci,rdvs);
    
    Highcharts.chart('containerP', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Statistiques des Patients'
    },
    subtitle: {
        text: 'Par Age'
    },
    xAxis: {
        categories: ['De 0 à 10 ans', 'De 10 à 20 ans', 'De 20 à 30 ans', 'De 30 à 40 ans', 'De 40 à 50 ans', 'De 50 à 60 ans', 'De 60 à 70 ans', 'De 70 à 80 ans', 'De 80 à 90 ans', 'Plus que 90 ans'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre de patients (Par age)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' Patients'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -20,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'HOMME',
        data: [17,31,35,23,2,10,0,5,12,6,10]
    }, {
        name: 'FEMME',
        data: [13,16,47,8,6,7,31,6,3,2,5]
    }]
});
/*end*/







});