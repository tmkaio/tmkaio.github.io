v = "3.1.1";
if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
	var done = false;
	var script = document.createElement("script");
	script.type="text/javascript";
	script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
	document.getElementsByTagName("head")[0].appendChild(script);
}

function writeHTML(){
	/*Creating HTML*/
	newPage = "<html lang='en'>";
	newPage += "<head>";
	newPage += "<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>";
	newPage += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
	newPage += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>";
	newPage += "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>";
	newPage += "</head>";
	newPage += "<body>";
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
	w.document.write(newPage);

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

				tagPosition = $(this).offset();
				leftside = Math.round(tagPosition.left)+"px";
				topside = Math.round(tagPosition.top)+"px";
				appendWarning = $("<div id='"+parsedimg[i]+"_warning' style='position: absolute; top: "+topside+"; left: "+leftside+"; background-color: yellow; z-index: 9999;'>top: "+leftside+"; left: "+topside+";</div>");
				$("html").append(appendWarning);

				$(this).css({border: "5px solid red"});
				$(this).show();
			});
		}
	}

	function unmarkElements(variaveis){
		parsedimg = variaveis.split(',');

		for(var i = 0; i < parsedimg.length; i++) {
			$("#" + parsedimg[i]).each(function(){
				alert("#"+parsedimg[i]+"_warning");
				$("#"+parsedimg[i]+"_warning").hide();
				$(this).css({border: "none"});
			});
		}
	}
