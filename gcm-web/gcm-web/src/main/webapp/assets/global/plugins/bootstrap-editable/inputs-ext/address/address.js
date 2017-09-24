/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
           this.$select = this.$tpl.find('select');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
          
            var html = $('<div>').text(value.nb1).html() + '  ,  ' + $('[name="p1"] option:selected').text(value.p1).html() + '  *  ' + $('<div>').text(value.nb2).html()+ '    ' + $('[name="d1"] option:selected').text(value.d1).html()+ '  Pendant   ' + $('<div>').text(value.nb3).html()+ '    ' + $('[name="d2"] option:selected').text(value.d2).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    city: "Moscow", 
                    street: "Lenina", 
                    building: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
           this.$input.filter('[name="nb1"]').val(value.nb1);
           this.$select.filter('[name="p1"]').val(value.p1);
           this.$input.filter('[name="nb2"]').val(value.nb2);
           this.$select.filter('[name="d1"]').val(value.d1);
           this.$input.filter('[name="nb3"]').val(value.nb3);
           this.$select.filter('[name="d2"]').val(value.d2);
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
              nb1: this.$input.filter('[name="nb1"]').val(), 
              p1: this.$select.filter('[name="p1"]').val(), 
              nb2: this.$input.filter('[name="nb2"]').val(),
              d1: this.$select.filter('[name="d1"]').val(),
              nb3: this.$input.filter('[name="nb3"]').val(),
              d2: this.$select.filter('[name="d2"]').val()
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            this.$input.filter('[name="nb1"]').focus();
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><input type="number" name="nb1" class="form-control input-small" placeholder="1" value="1"></label>'+
             '<label><select name="p1" class="form-control input-small" style="width: 80px;text-align: right;"> '+
                        ' <option value="amp" selected> amp </option>'+
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
                         '<option value="nébulisati"> nébulisati </option>'+
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
                     '</select></label>'+
                     '<label> * <input type="number" name="nb2" class="form-control input-small" placeholder="1" value="1"></label>'+
                     '<label> / <select name="d1" class="form-control input-small" style="width: 80px;text-align: right;">'+
                       '<option value="jour" selected> jour </option>'+
                       '<option value="semaine">semaine</option>'+
                       '<option value="mois"> mois </option>'+
                     '</select></label>'+
                '<div class="editable-address" style="margin-top: 5px;"><label><span>Pendant</span><input type="number" name="nb3" placeholder="1" value="1" class="form-control input-small"></label>'+
                '<label> / <select name="d2" class="form-control input-small" style="width: 80px;text-align: right;">'+
                       '<option value="jour" selected> jour </option>'+
                       '<option value="semaine">semaine</option>'+
                       '<option value="mois"> mois </option>'+
                     '</select></label></div>'+
             '</div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

}(window.jQuery));