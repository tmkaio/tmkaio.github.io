c=document.createElement("script");
c.type="text/javascript";
c.src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";
document.documentElement.childNodes[0].appendChild(c);

function cagando(variaveis){
	
	parsedimg = variaveis.split(',');

	for(var i = 0; i < parsedimg.length; i++) {
		document.getElementById(parsedimg[i]).style.border = "5px solid red";	
		
	}	

		
}

function writeHTML(reportBody, counters, duplicatedIDs){
		/*Creating HTML*/
		newPage = "<html lang='en'>";
		newPage += "<head>";
		newPage += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
		newPage += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>";
		newPage += "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>";
		newPage += "</head>";
		newPage += "<div class='container well'>";
		newPage += "<b>Tested page: " + $(location).attr('href') + "</b>";
		newPage += reportBody;
		newPage += "<br><br><br>";
		newPage += "Counters:";
		newPage += counters;
		newPage += "<br>";
		newPage += "Duplicated IDs: ";
		newPage += duplicatedIDs;
		newPage += "</div>";
		newPage += "</html>";

		/*Opening report on a new window*/
		var w = window.open();
		$(w.document.body).html(newPage);

	}

