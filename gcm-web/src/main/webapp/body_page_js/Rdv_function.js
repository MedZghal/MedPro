

function addListeAttende(eventObjMenu){
    listeAttende="";
    listeAttende+='<li class="media">';
    listeAttende+='<div class="pull-right">';
    listeAttende+='<img class="media-object" src="../img/delete.png" style="width: 20px; position: relative; " alt="..."></div>';
    listeAttende+='<img class="media-object" src="../img/avatars/male.png" alt="...">';
    listeAttende+='<div class="media-body">';                                          
    listeAttende+='<h4 class="media-heading"> Rendez-Vous N°'+eventObjMenu.id+'</h4> ';                                       
    listeAttende+='<div class="media-heading-sub">'+eventObjMenu.text+'</div>';                                        
    listeAttende+='</div></li>';  
    
    
    window.parent.$("#listeDattende").append(listeAttende);
                                        
}
function show_minical(){
		if (scheduler.isCalendarVisible())
			scheduler.destroyCalendar();
		else
			scheduler.renderCalendar({
				position:"dhx_minical_icon",
				date:scheduler._date,
				navigation:true,
				handler:function(date,calendar){
					scheduler.setCurrentView(date);
					scheduler.destroyCalendar();
				}
			});
	}
        
function show() {
		console.log(scheduler.toJSON());
	}



  function show_minical(){
		if (scheduler.isCalendarVisible())
			scheduler.destroyCalendar();
		else
			scheduler.renderCalendar({
				position:"dhx_minical_icon",
				date:scheduler._date,
				navigation:true,
				handler:function(date,calendar){
					scheduler.setCurrentView(date);
					scheduler.destroyCalendar();
				}
			});
  }
  
  function AjRdv(start_date,typeRDV,descpRDV,presence,num_patient,num_medecin_trait,end_date)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=AjRdv&start_date="+start_date+"&typeRDV="+typeRDV+"&descpRDV="+descpRDV+"&presence="+presence+"&num_patient="+num_patient+"&num_medecin_trait="+num_medecin_trait+"&end_date="+end_date,
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
  function UpdateRdv(numRdv, start_date, typeRDV, descpRDV, presence, num_patient, end_date)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=UpdateRdv&start_date="+start_date+"&typeRDV="+typeRDV+"&descpRDV="+descpRDV+"&presence="+presence+"&num_patient="+num_patient+"&numRdv="+numRdv+"&end_date="+end_date,
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

function dateCal(date){
   return date.year+"-"+date.month+"-"+date.day+" "+date.hour+":"+date.minute;
}

function SuppRdv(num_RDV)
{
    var reponse;
    $.ajax({
        url: "../Consultation?type=update&function=SuppRdv&num_RDV="+num_RDV,
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
