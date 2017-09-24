/* Shivving (IE8 is not supported, but at least it won't look as awful)
/* ========================================================================== */

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

function generateTableRow() {
    var Medicaments = JSON.parse(localStorage.getItem("Medicaments"));  
	var emptyColumn = document.createElement('tr');
        var MedColunm;
        $.each(Medicaments , function(i){
                   MedColunm +="<option value='"+Medicaments[i].numMedic+"' selected>"+Medicaments[i].desgMedic+"</option>";
                })  ;
	emptyColumn.innerHTML = '<td style="padding: 0px 0px 0px 10px;"><a class="cut">-</a><select id="select'+(index)+'" style="width:100%;" contenteditable>'+MedColunm+
             
                '</select></td>' +
		'<td>'+
                '<span class="row" >'+
                ' <input type="number" name="group-c[0][p1]" placeholder="1" max="99"  value="1" style="width: 50px;text-align: right;" >'+
                '<select name="group-c[0][p2]" class="select2" style="width: 80px;text-align: right;">'+
                '<option value="amp" selected> amp </option>'+
                 '<option value="appl">appl</option>'+
                '<option value="cachet"> cachet </option>'+
                '<option value="c à c"> c à c </option>'+
                '<option value="c à m"> c à m </option>'+
                '<option value="c à s"> c à s </option>'+
                '<option value="dose"> dose </option>'+
                '<option value="géllule"> géllule </option>'+
                '<option value="goutte"> goutte </option>'+
                '<option value="granule"> granule </option>'+
                '<option value="injection"> injection </option>'+
                '<option value="ml"> ml </option>'+
                '<option value="nébulisati">nébulisati</option>'+
                '<option value="ovule"> ovule </option>'+
                '<option value="comp"> comp </option>'+
                '<option value="disp"> disp </option>'+
                '<option value="panseme"> panseme </option>'+
                '<option value="pastille"> pastille </option>'+
                '<option value="patch"> patch </option>'+
                '<option value="pulv"> pulv </option>'+
                '<option value="sachet"> sachet </option>'+
                '<option value="suppo"> suppo </option>'+
                '<option value="tablette"> tablette </option>'+
                '<option value="timbre"> timbre </option>'+
            '</select>'+
            '  '+
             '* <input type="number" name="group-c[0][p3]" placeholder="1" max="99"  value="1" style="width: 50px;text-align: right;">'+

                                ' /  '+
                                '<select name="group-c[0][p4]" class="select2" style="width: 100px;text-align: right;">'+
                                   '<option value="jour" selected> jour </option>'+
                                   '<option value="semaine">semaine</option>'+
                                   '<option value="mois"> mois </option>'+
                               '</select>'+

                                    '<br/> <span>Pendant : </span> <br/> <input type="number" name="group-c[0][p5]" placeholder="1" max="99"  value="1" style="width: 100px;text-align: right;margin-left: 20px;">'+

                               '<select name="group-c[0][p6]" class="select2" style="width: 167px;text-align: right;margin-left: 20px;">'+
                                   '<option value="jour" selected> jour </option>'+
                                   '<option value="semaine">semaine</option>'+
                                   '<option value="mois"> mois </option>'+
                               '</select>'+
                                '</span> '+

            '</td>';
    
    /*$("#select").select2({ 
                            width:'100%'
                          });
    var x="#select"+index;
    alert(x);
                $(x).select2({ 
                            width:'100%'
                          });*/
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
	var total = 0;
	var cells, price, total, a, i;

	// update inventory cells
	// ======================
/*
	for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
		// get inventory row cells
		cells = a[i].querySelectorAll('span:last-child');


		// set row total
		
	}*/
    //alert(index);
    var cpt ="select"+(++index);
       // document.getElementById(cpt).select2();
/*
	// update balance cells
	// ====================

	// get balance cells
	cells = document.querySelectorAll('table.balance td:last-child span:last-child');

	// set total
	cells[0].innerHTML = total;

	// set balance and meta balance
	cells[2].innerHTML = document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(total - parseFloatHTML(cells[1]));

	// update prefix formatting
	// ========================

	var prefix = document.querySelector('#prefix').innerHTML;
	for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

	// update price formatting
	// =======================

	for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i) if (document.activeElement != a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));*/
}

/* On Content Load
/* ========================================================================== */

function onContentLoad() {
	

	var
	input = document.querySelector('input'),
	image = document.querySelector('img');

	function onClick(e) {
		var element = e.target.querySelector('[contenteditable]'), row;

		element && e.target != document.documentElement && e.target != document.body && element.focus();

		if (e.target.matchesSelector('.add')) {
			document.querySelector('table.inventory tbody').appendChild(generateTableRow());
                        updateInvoice();
		}
		else if (e.target.className == 'cut') {
			row = e.target.ancestorQuerySelector('tr');

			row.parentNode.removeChild(row);
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

		input.addEventListener('focus', onEnterCancel);
		input.addEventListener('mouseover', onEnterCancel);
		input.addEventListener('dragover', onEnterCancel);
		input.addEventListener('dragenter', onEnterCancel);

		input.addEventListener('blur', onLeaveCancel);
		input.addEventListener('dragleave', onLeaveCancel);
		input.addEventListener('mouseout', onLeaveCancel);

		input.addEventListener('drop', onFileInput);
		input.addEventListener('change', onFileInput);
	}
        
}

window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);