/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function (){
    
    $(document).ready(function() {
		treeRefresh();
		});
                
   Consults = JSON.parse(localStorage.getItem("Consults"));
   RemplirTreeHisSoins(Consults);
   
   $("#Search").on("change",function (){
      RechConsult(Consults,$("#Search").val()) ;
   });
   
});
