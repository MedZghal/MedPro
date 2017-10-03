/* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

/* global patient */

var canvas;
var iframe;
function get_Medicament_Prix(id_medic){
    
    var prix=0;
    $.each(Medicaments , function(i){
        if(Medicaments[i].numMedic.toString()===id_medic.toString()){
            prix=Medicaments[i].prix;
            return false;
        }
    });
    return prix;
}

function get_Medicament_PrixbyDsg(dsg_medic){
    
    var prix=0;
    $.each(Medicaments , function(i){
        if(Medicaments[i].desgMedic.toString()===dsg_medic.toString()){
            prix=Medicaments[i].prix;
            return false;
        }
    });
    return prix;
}

              
//create pdf
function createPDF(form,cache_width,a4){
        getCanvas(form,a4).then(function(canvas){
        form.width(cache_width);
        });
}

// create canvas object
function getCanvas(form,a4){
        form.width((a4[0]*1.33333) -80).css('max-width','none');
        return html2canvas(form,{background:'#fff',
        onrendered: function(canvas) {
         var doc = new jsPDF();
         var marginLeft=0;
         var marginRight=0;
         var ctx = canvas.getContext('2d');
         ctx.scale(2,2);

         doc.addImage(canvas.toDataURL("image/jpeg"),"jpeg",marginLeft,marginRight);

                 document.body.appendChild(iframe);
                 iframe.src = doc.output('datauristring'); 
}	
});
}

function demoFromHTML() {
       var pdf = new jsPDF('p', 'pt', 'letter');
        var canvas = pdf.canvas;
        canvas.height = 72 * 11;
        canvas.width=72 * 8.5;;
        // var width = 400;
        html2pdf($("#container"), pdf, function(pdf) {
                iframe = document.getElementById('result');
                
                document.body.appendChild(iframe);
                iframe.src = pdf.output('datauristring');

               //var div = document.createElement('pre');
               //div.innerText=pdf.output();
               //document.body.appendChild(div);
            }
        );
}

function  DemandeOrdonnance(Prescp){
//    console.log(Prescp);
    var Ordonnance_html="";
        Ordonnance_html+='<table cellpadding="2" cellspacing="0" width="524" border="0">';
        Ordonnance_html+='<tbody><tr>';
        Ordonnance_html+='<td width="95" valign="top" style="font-size:12px;font-family:Courier;">';
        Ordonnance_html+='<strong>&nbsp;&nbsp;&nbsp;Docteur :</strong>	</td>';
        Ordonnance_html+='<td width="333" align="center" style="font-size:14px;font-family:Courier;" >';
        Ordonnance_html+='<strong>'+"Dr."+paramater.prenomMedecin+" "+paramater.nomMedecin+'</strong>';
        Ordonnance_html+='</td>';
        Ordonnance_html+='<td width="84" align="right" valign="middle" style="font-size:15px">';
        Ordonnance_html+='<strong>: (الدكتور(ة&nbsp;&nbsp;&nbsp;</strong>	</td>';
        Ordonnance_html+='</tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='  <td valign="top" style="font-size:12px;font-family:Courier;">';
        Ordonnance_html+='<strong>&nbsp;&nbsp;&nbsp;Spécialité:</strong>';
        Ordonnance_html+='</td>';
        Ordonnance_html+='<td width="333" align="center" style="font-size:14px;font-family:Courier;" ><strong>'+paramater.specialite+'</strong></td>';
        Ordonnance_html+='<td width="84" align="right" valign="middle" style="font-size:15px">';
        Ordonnance_html+='<strong>: الإختصاص &nbsp;&nbsp;&nbsp;</strong>	</td>';
        Ordonnance_html+='</tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td valign="top" style="font-size:12px;font-family:Courier;">';
        Ordonnance_html+='	<strong>&nbsp;&nbsp;&nbsp;Adresse :</strong>';
        Ordonnance_html+='</td>';
        Ordonnance_html+='<td width="333" align="center" style="font-size:14px;font-family:Courier;" >';
        Ordonnance_html+='<strong> '+paramater.ville.gouvernorat+','+paramater.adresse+','+paramater.ville.ville+'</strong>	</td>';
        Ordonnance_html+='<td width="84" align="right" valign="middle" style="font-size:15px">';
        Ordonnance_html+='<strong>:  العنوان&nbsp;&nbsp;&nbsp;</strong>	</td>';
        Ordonnance_html+='</tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td valign="top" style="font-size:12px;font-family:Courier;">';
        Ordonnance_html+='<strong>&nbsp;&nbsp;&nbsp;Tél :</strong>	</td>';
        Ordonnance_html+='<td width="333" align="center" style="font-size:14px;font-family:Courier;" >';
        Ordonnance_html+='<strong>'+paramater.fixe+' / '+paramater.gsm+'</strong>	</td>';
        Ordonnance_html+='<td width="84" align="right" valign="middle" style="font-size:15px">';
        Ordonnance_html+='<strong>: الهاتف  &nbsp;&nbsp;&nbsp;</strong>	</td>';
        Ordonnance_html+='</tr>';
        Ordonnance_html+='</tbody></table>';
//        Ordonnance_html+='<table width="526" border="0">';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='<td width="134" align="right" style="font-size:14px;font-family:Courier;">';
//        Ordonnance_html+='<strong>Code conventionnel</strong>';
//        Ordonnance_html+='<td width="284" align="center" valign="top">';
//        Ordonnance_html+='<table width="212px" border="1">';
//        Ordonnance_html+='<tr style="font-size:14px;font-family:Courier;">';
//        Ordonnance_html+='<td width="15px" align="center"><strong>0</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>1</strong></td> ';
//        var tab=paramater.codeConvent.toString();
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[0]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[1]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[2]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[3]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[4]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[5]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[6]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[7]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[8]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab[9]+'</strong></td> ';
//        
//        Ordonnance_html+='   </tr>';
//        Ordonnance_html+='</table></td>';
//        Ordonnance_html+='<td width="94" align="left" style="font-size:15px"><strong>&nbsp; الرمز التعاقدي</strong></td>';
//        Ordonnance_html+='</tr></table>';
        Ordonnance_html+='<table width="531">';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td width="523" align="center" style="font-size:5px; font-family:Courier">&nbsp;</td></tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td align="center" style="font-size:20px; font-family:Courier">';
        var apci=patient.codeApci;
        Ordonnance_html+='<p><strong> ORDONNANCE MÉDICALE </strong></p></td>';
//        if(apci!=="")
//            Ordonnance_html+='<p><strong>ORDONNANCE MÉDICALE POUR APCI</strong></p></td>';
//        else
//            Ordonnance_html+='<p><strong>ORDONNANCE MÉDICALE POUR MALADIE ORDINAIRE</strong></p></td>';
        Ordonnance_html+='</tr></table>';
        Ordonnance_html+='<table width="529" cellspacing="0" border="0">';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='<td colspan="3" style="font-size:15px">&nbsp;</td>';
//        Ordonnance_html+='</tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td width="152" style="font-size:14px;font-family:Courier;"><p><strong>&nbsp;&nbsp;&nbsp;&nbsp;Bénéficiaire :</strong></p></td>';
//        Ordonnance_html+='<p style="font-size:1px">&nbsp;</p>';
        Ordonnance_html+='<td width="230" align="left" style="font-size:16px;font-family:Courier;">';
        Ordonnance_html+='<strong>Mr(s) '+patient.prenom+" "+patient.nom+'</strong></td>';
//        Ordonnance_html+='<td width="134" align="right" style="font-size:15px"><strong>: المنتفع&nbsp;&nbsp;</strong></td>';
        Ordonnance_html+='</tr>';
        Ordonnance_html+='<tr>';
        Ordonnance_html+=' <td width="40%" style="font-size:14px;font-family:Courier;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;Identifiant unique: </strong></td>';
        
        var assurCNAM=patient.assurCnam;
        if(assurCNAM !== null)
        Ordonnance_html+='<td width="230" align="left" style="font-size:14px;font-family:Courier;"><strong>'+assurCNAM.identUnique.toString().substr(0,2)+'/'+assurCNAM.identUnique.toString().substr(2,8)+'/'+assurCNAM.identUnique.toString().substr(8,2)+'</strong></td>';
//        Ordonnance_html+='<table width="212px" border="1">';
//        Ordonnance_html+='<tr style="font-size:14px;font-family:Courier;">';
        
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[0]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[1]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[2]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[3]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[4]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[5]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[6]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[7]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[8]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab2[9]+'</strong></td> ';
//        Ordonnance_html+='</tr>';
//        Ordonnance_html+='</table>	</td>';
//        Ordonnance_html+='<td width="134" align="right" style="font-size:15px"><strong>: المعرف الوحيد&nbsp;&nbsp;</strong></td>';
        Ordonnance_html+='</tr></table>';
        
        Ordonnance_html+='<table width="529" cellspacing="3" cellpadding="3" style="font-family:Courier;">';
        Ordonnance_html+='<tr>';
        
        Ordonnance_html+='<td width="25%" style="font-size:14px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;Code APCI :</strong></td>';
        if(apci!=="")
        Ordonnance_html+='<td width="95" style="font-size:14px;font-family:Courier;"><strong> '+apci+' </strong> </td>';
//        Ordonnance_html+='<table width="50px" height="20px" border="1" align="center">';
//        Ordonnance_html+='<tr style="font-size:14px;font-family:Courier;">';
//        
//        
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+apci+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[1]+'</strong></td> ';
//        Ordonnance_html+='</tr></table></td>';
//        Ordonnance_html+='<td width="99"><table width="50px" height="20px" border="1" align="center">';
//        Ordonnance_html+='<tr style="font-size:14px">';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[2]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[3]+'</strong></td> ';
//        Ordonnance_html+='</tr></table></td>';
//        Ordonnance_html+='<td width="95"><table width="50px" height="20px" border="1" align="center">';
//        Ordonnance_html+='<tr style="font-size:14px">';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[4]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[5]+'</strong></td> ';
//        Ordonnance_html+='</tr></table></td>';
//        Ordonnance_html+='<td width="95"><table width="50px" height="20px" border="1" align="center">';
//        Ordonnance_html+='<tr style="font-size:14px">';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[6]+'</strong></td> ';
//        Ordonnance_html+='<td width="15px" align="center"><strong>'+tab3[7]+'</strong></td> ';
//        Ordonnance_html+='</tr></table></td>';
        Ordonnance_html+='</tr></table>';
        Ordonnance_html+='<table width="529" height="42" cellpadding="3" cellspacing="3">';
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td width="183" style="font-size:14px;font-family:Courier;padding-top: 42px;">&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>Presciption :</u></strong></td>';
        Ordonnance_html+='<td width="323" align="right" style="font-size:14px;font-family:Courier;">';
        Ordonnance_html+='<p><em><strong>'+paramater.adresse+', Le <em>'+dateServeur+'</em></strong></em><strong>&nbsp;&nbsp;</strong></p>';
        Ordonnance_html+='</td>';
        Ordonnance_html+='<td width="32" align="right" style="font-size:12px"></td></tr>';
        Ordonnance_html+='</table>';
        Ordonnance_html+='<p>';
        
        $.each(Prescp , function (i){
        
        Ordonnance_html+='<table width="520"  style="margin-left:10px;font-family:Courier;" cellpadding="2"  cellspacing="0"  border="0">';
        
        
        Ordonnance_html+='<tr>';
        Ordonnance_html+='<td width="484" style="font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;';
        Ordonnance_html+='<strong> '+Prescp[i].medc+'</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> '+Prescp[i].posologie+'</strong></td>    ';
        Ordonnance_html+='<td width="28" style="font-size:14px"><div ><strong>Qté :'+Prescp[i].quntite+'</strong></div></td>';
        Ordonnance_html+='</tr></table></br>';
        
//        Ordonnance_html+='<table width="520" style="margin-left:40px;font-family:Courier ;" cellpadding="2" cellspacing="0"  border="0">';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='<td width="178" style="font-size:14px">&nbsp;</td>';
//        Ordonnance_html+='<td width="334" style="font-size:14px">';
//        Ordonnance_html+='<strong> '+Prescp[i].posologie+'</strong></blockquote>	</td>    ';
//        Ordonnance_html+='</tr></table>';
       
        });
        Ordonnance_html+='</p>';
        Ordonnance_html+='<p>&nbsp;</p>';
         Ordonnance_html+='<table cellspacing="0" cellpadding="0" width="521" align="center" border="0" style=" position: absolute; bottom: 50px;transform: translate(-50%, -50%);left: 50%; ">';
        Ordonnance_html+='<tbody style=";font-family:Courier;"><tr>';
        Ordonnance_html+='<td>&nbsp;</td>';
        Ordonnance_html+='<tr><td width="197">&nbsp;</td>';
        Ordonnance_html+='<td style="FONT-SIZE: 10px" align="middle"><strong><font size="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cachet et Signature du médecin</font> </strong></td></tr></tbody></table>';
        Ordonnance_html+='<DIV style="transform: translate(-50%, -50%);bottom: 0px;left: 50%;POSITION: absolute;font-family:Courier;">';
        Ordonnance_html+='<table  width="510" border="0" cellspacing="0" cellpadding="0" ><hr noshade="noshade" align="center" width="auto"/>';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='<td colspan="2" bordercolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<hr noshade="noshade" align="left" width="auto"/></td>';
//        Ordonnance_html+='</tr>';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='  <td colspan="2" align="left" style="font-size:10px">';
//        Ordonnance_html+='<strong>&nbsp;&nbsp;&nbsp;- Cette ordonnace ne peut être utilisée que pour les prescriptions rentrant dans le cadre des APCI		</strong>  	</td>';
//        Ordonnance_html+='</tr>';
//        Ordonnance_html+='<tr>';
//        Ordonnance_html+='<td align="left" style="font-size:10px">';
//        Ordonnance_html+='<strong>&nbsp;&nbsp;&nbsp;- Précisez le(s) code(s) des (des) l"APCI justifiant votre prescription';
//        Ordonnance_html+='</strong>';
////        Ordonnance_html+='</td><td align="center" style="font-size:10px">&nbsp;</td></tr>';
//        Ordonnance_html+='<tr>';
        Ordonnance_html+='<tr>  <td width="401" align="left" style="font-size:10px"></td>';
        Ordonnance_html+='<td width="109" align="right" style="font-size:10px"><strong style="text-align:right; font:Arial, Helvetica, sans-serif; font-size:9px">Générée par MedPRO </strong></td></tr>';
        Ordonnance_html+='</table></DIV>';
        
        $('.click2edit').summernote('destroy');
        $("#result").empty().append(Ordonnance_html);
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
}
 
(function (document) {
	var
	head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
	elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
	elementsLength = elements.length,
	elementsIndex = 0,
	element;

	while (elementsIndex < elementsLength) {
		element = document.createElement(elements[++elementsIndex]);
	}

	element.innerHTML = 'x<style>' +
		'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
		'audio[controls],canvas,video{display:inline-block}' +
		'[hidden],audio{display:none}' +
		'mark{background:#FF0;color:#000}' +
	'</style>';

	return head.insertBefore(element.lastChild, head.firstChild);
})(document);

/* Prototyping
/* ========================================================================== */

(function (window, ElementPrototype, ArrayPrototype, polyfill) {
	function NodeList() { [polyfill]; }
	NodeList.prototype.length = ArrayPrototype.length;

	ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
	ElementPrototype.mozMatchesSelector ||
	ElementPrototype.msMatchesSelector ||
	ElementPrototype.oMatchesSelector ||
	ElementPrototype.webkitMatchesSelector ||
	function matchesSelector(selector) {
		return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
	};

	ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
	ElementPrototype.mozAncestorQuerySelectorAll ||
	ElementPrototype.msAncestorQuerySelectorAll ||
	ElementPrototype.oAncestorQuerySelectorAll ||
	ElementPrototype.webkitAncestorQuerySelectorAll ||
	function ancestorQuerySelectorAll(selector) {
		for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
			if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
		}

		return newNodeList;
	};

	ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
	ElementPrototype.mozAncestorQuerySelector ||
	ElementPrototype.msAncestorQuerySelector ||
	ElementPrototype.oAncestorQuerySelector ||
	ElementPrototype.webkitAncestorQuerySelector ||
	function ancestorQuerySelector(selector) {
		return this.ancestorQuerySelectorAll(selector)[0] || null;
	};
})(this, Element.prototype, Array.prototype);

/* Helper Functions
/* ========================================================================== */
var i=1;
var medic;
var posl;
var qunt;
function generateTableRow() {
    var Medicaments = JSON.parse(localStorage.getItem("Medicaments"));  
	var emptyColumn = document.createElement('tr');
        var MedColunm;
        $.each(Medicaments , function(i){
                   MedColunm +="<option value='"+Medicaments[i].numMedic+"' selected>"+Medicaments[i].desgMedic+"</option>";
                })  ;
	emptyColumn.innerHTML = '<td style="padding: 10px 0px 10px 10px;"><a class="cut">SUPP</a> <div><a href="javascript:;" class="tooltips" data-tooltip="tooltip" title="" id="medic'+i+'" data-type="select2"  data-original-title="Select Médicament"> </a> </div> '+
             
                '</td>' +
		'<td style="padding: 10px 0px 10px 10px;">'+
                '<div><a href="#" class="tooltips" data-tooltip="tooltip" title="" id="posologie'+i+'" data-type="address" data-original-title="Enter Posologie de Médicament"> </a> </div>'+

                '</td>'+
                '<td style="padding: 10px 0px 10px 10px; " >'+
                    '<div>'+
                        '<a href="#" class="tooltips" data-tooltip="tooltip" title="" id="quntite'+i+'" data-type="number" data-original-title="Enter Quantité de Médicament">1</a>'+
                '</div>'+
                '</td>';
    medic= "#medic"+i;
    posl= "#posologie"+i;
    qunt="#quntite"+i;
   
	return emptyColumn;
}

function parseFloatHTML(element) {
	return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
}

function parsePrice(number) {
	return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
}

/* Update Number
/* ========================================================================== */

function updateNumber(e) {
	var
	activeElement = document.activeElement,
	value = parseFloat(activeElement.innerHTML),
	wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

	if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
		e.preventDefault();

		value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
		value = Math.max(value, 0);

		activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
	}

	//updateInvoice();
}

/* Update Invoice
/* ========================================================================== */

function updateInvoice() {
   
     $(medic).editable({
        placement: 'right',
        select2:{
          width:'600px'  
        },
     inputclass: 'form-control input-medium',
            source: medics
    });
    
    $(medic).on('save', function(e, params) {
            prix_+=parseInt(get_Medicament_Prix(params.newValue));
            $("#mntOrd").empty().append(prix_.toFixed(2));
        });
        
    $(posl).editable({
        title: 'Enter Posologie de Médicament :'
    });
    $(qunt).editable();
    i++;
    
      
}

/* On Content Load
/* ========================================================================== */

function onContentLoad() {
	

	var
	input = document.querySelector('input'),
	image = document.querySelector('img');

	function onClick(e) {
            
            if(!$(this).find("[data-type='select2']").hasClass("editable-empty") && !$(this).find("[data-type='address']").hasClass("editable-empty") && !$(this).find("[data-type='number']").hasClass("editable-empty"))
                {
		var element = e.target.querySelector('[contenteditable]'), row;

		element && e.target != document.documentElement && e.target != document.body && element.focus();

		if (e.target.matchesSelector('.add')) {
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
                    document.querySelector('table.inventory tbody').appendChild(generateTableRow());
                    updateInvoice();
		}
                
                
            }
            if (e.target.className == 'cut') {
			row = e.target.ancestorQuerySelector('tr');

			row.parentNode.removeChild(row);
//                        prix_ =0;
//                        $('#preOrd > tbody  > tr').each(function(tr) {
//                           $this = $(this);
//                           prix_+=parseInt(get_Medicament_PrixbyDsg($this.find("[data-type='select2']").text()));
//                        });
//                        $("#mntOrd").empty().append(prix_.toFixed(2));
                        
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
		}
		
	}

	function onEnterCancel(e) {
		e.preventDefault();

		image.classList.add('hover');
	}

	function onLeaveCancel(e) {
		e.preventDefault();

		image.classList.remove('hover');
	}

	function onFileInput(e) {
		image.classList.remove('hover');

		var
		reader = new FileReader(),
		files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
		i = 0;

		reader.onload = onFileLoad;

		while (files[i]) reader.readAsDataURL(files[i++]);
	}

	function onFileLoad(e) {
		var data = e.target.result;

		image.src = data;
	}

	if (window.addEventListener) {
		document.addEventListener('click', onClick);

		document.addEventListener('mousewheel', updateNumber);
		document.addEventListener('keydown', updateNumber);

		document.addEventListener('keydown', updateInvoice);
		document.addEventListener('keyup', updateInvoice);

		/*input.addEventListener('focus', onEnterCancel);
		input.addEventListener('mouseover', onEnterCancel);
		input.addEventListener('dragover', onEnterCancel);
		input.addEventListener('dragenter', onEnterCancel);

		input.addEventListener('blur', onLeaveCancel);
		input.addEventListener('dragleave', onLeaveCancel);
		input.addEventListener('mouseout', onLeaveCancel);

		input.addEventListener('drop', onFileInput);
		input.addEventListener('change', onFileInput);*/
	}
        
}

window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);