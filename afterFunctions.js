

function writeHTML(){
	/*Creating HTML*/
	newPage = "<html lang='en'>";
	newPage += "<head>";
	newPage += "<body onload='window.opener.focus();'>";
	newPage += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
	newPage += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>";
	newPage += "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>";
	newPage += "</head>";
	newPage += "<div class='container well'>";
	newPage += "<b>Tested page: " + window.jQuery(location).attr('href') + "</b>";
	newPage += finalReportBody;
	newPage += "<br><br><br>";
	newPage += "Counters:";
	newPage += finalCounters;
	newPage += "<br>";
	newPage += "Duplicated IDs: ";
	newPage += finalDuplicatedIDs;
	newPage += "</div>";
	newPage += "</body>";
	newPage += "</html>";

	var w = window.open();
	window.jQuery(w.document.body).html(newPage);

}




	/*window.jQuery('input[name=markThis]').change(function(){
		if(window.jQuery(this).prop('checked') == true){
			 //eval(window.jQuery(this).val() + '();');
			 //if(elementsIDs != ""){
			 //}
			 markElements(window.jQuery(this).val());
		}
		else{
			unmarkElements(window.jQuery(this).val());
		}
	});*/


	function changechkbox(chkbox){
		if(window.jQuery('#'+chkbox).prop('checked') == false){
			window.jQuery('#'+chkbox).prop('checked', true);
			markElements(window.jQuery('#'+chkbox).val());
		}
		else{
			window.jQuery('#'+chkbox).prop('checked', false);
			unmarkElements(window.jQuery('#'+chkbox).val());
		}
	}

	function markElements(variaveis){
		parsedimg = variaveis.split(',');

		for(var i = 0; i < parsedimg.length; i++) {
			window.jQuery("#" + parsedimg[i]).each(function(){
				window.jQuery(this).css({border: "5px solid red"});
				window.jQuery(this).show();
			});
		}
	}

	function unmarkElements(variaveis){
		parsedimg = variaveis.split(',');

		for(var i = 0; i < parsedimg.length; i++) {
			window.jQuery("#" + parsedimg[i]).each(function(){
				window.jQuery(this).css({border: "none"});
			});
		}
	}
