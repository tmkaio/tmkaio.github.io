v = "3.1.1";
if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
	var done = false;
	var script = document.createElement("script");
	script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
	document.getElementsByTagName("head")[0].appendChild(script);
}

function writeHTML(){
	/*Creating HTML*/
	newPage = "<html lang='en'>";
	newPage += "<head>";
	newPage += "<body onload='window.opener.focus();'>";
	newPage += "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
	newPage += "<script src='//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>";
	newPage += "<script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>";
	newPage += "</head>";
	newPage += "<div class='container well'>";
	newPage += "<b>Tested page: " + $(location).attr('href') + "</b>";
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
	$(w.document.body).html(newPage);

}




	/*$('input[name=markThis]').change(function(){
		if($(this).prop('checked') == true){
			 //eval($(this).val() + '();');
			 //if(elementsIDs != ""){
			 //}
			 markElements($(this).val());
		}
		else{
			unmarkElements($(this).val());
		}
	});*/


	function changechkbox(chkbox){
		if($('#'+chkbox).prop('checked') == false){
			$('#'+chkbox).prop('checked', true);
			if($('#'+chkbox).val() != ""){
				markElements($('#'+chkbox).val());
			}
		}
		else{
			$('#'+chkbox).prop('checked', false);
			if($('#'+chkbox).val() != ""){
				unmarkElements($('#'+chkbox).val());
			}
		}
	}

	function markElements(variaveis){

		parsedimg = variaveis.split(',');

		for(var i = 0; i < parsedimg.length; i++) {
			$("#" + parsedimg[i]).each(function(){
				$(this).css({border: "5px solid red"});
				$(this).show();
			});
		}
	}

	function unmarkElements(variaveis){
		parsedimg = variaveis.split(',');

		for(var i = 0; i < parsedimg.length; i++) {
			$("#" + parsedimg[i]).each(function(){
				$(this).css({border: "none"});
			});
		}
	}
