javascript:(function(e,a,g,h,f,c,b,d,p,k,l,m){

	if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){

		c=a.createElement("script");
		c.type="text/javascript";
		c.src="//ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";
		c.onload=c.onreadystatechange=function(){

			if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){

				p=a.createElement("script");
				p.type="text/javascript";
				p.src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
				p.onload=p.onreadystatechange=function(){

					if(!k&&(!(l=this.readyState)||l=="loaded"||l=="complete")){


						h((f=e.jQuery).noConflict(1), b=1, k = 1);
						a.documentElement.childNodes[0].removeChild(c);
						a.documentElement.childNodes[0].removeChild(p);
						p.onload=p.onreadystatechange=null;
						c.onload=c.onreadystatechange=null;

					}
				}
				a.documentElement.childNodes[0].appendChild(p);
			}
		};
		a.documentElement.childNodes[0].appendChild(c);
		}
})

(window,document,"3.1.1",function($, N, O){
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
			markElements($('#'+chkbox).val());
		}
		else{
			$('#'+chkbox).prop('checked', false);
			unmarkElements($('#'+chkbox).val());
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
})
