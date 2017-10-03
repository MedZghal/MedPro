

function GetConsultStats(codeMedTrit,month,year)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetConsultStats&codeMedTrit="+codeMedTrit+"&month="+month+"&year="+year,
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

function GetConsultAPCIStats(codeMedTrit,month,year)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=consult&function=GetConsultAPCIStats&codeMedTrit="+codeMedTrit+"&month="+month+"&year="+year,
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

function GetRdvStats(codeMedTrit,month,year)
{
    var reponse;
    $.ajax({
        url: "../Gestion_Patient?type=consult&function=GetRdvStats&codeMedTrit="+codeMedTrit+"&month="+month+"&year="+year,
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


function StatsAll(consult,consultapci,rdvs){
    Highcharts.chart('containerC', {

        title: {
            text: 'Statistiques des Consultation'
        },

        subtitle: {
            text: 'par Mois'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            
        },

        yAxis: [{ // left y axis
            title: {
                text: null
            },
            labels: {
                align: 'left',
                x: 3,
                y: 16,
                format: '{value:.,0f}'
            },
            showFirstLabel: false
        }, { // right y axis
            linkedTo: 0,
            gridLineWidth: 0,
            opposite: true,
            title: {
                text: null
            },
            labels: {
                align: 'right',
                x: -3,
                y: 16,
                format: '{value:.,0f}'
            },
            showFirstLabel: false
        }],

        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },

        tooltip: {
            shared: true,
            crosshairs: true
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            hs.htmlExpand(null, {
                                pageOrigin: {
                                    x: e.pageX || e.clientX,
                                    y: e.pageY || e.clientY
                                },
                                headingText: this.series.name,
                                maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                    this.y + ' visits',
                                width: 200
                            });
                        }
                    }
                },
                marker: {
                    lineWidth: 1
                }
            }
        },

        series: [{
            name: 'Consultation Normale',
            lineWidth: 4,
            data:consult,
            marker: {
                radius: 4
            }
        }, {
            name: 'Consultation APCI',
            data:consultapci
        }, {
            name: 'Rendez-Vous',
            data:rdvs
        }]
    });
    
}