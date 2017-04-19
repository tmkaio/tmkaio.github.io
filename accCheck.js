javascript:(function(e,a,g,f,c,b,d,p,k,l,m){

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

						jq((f=e.jQuery).noConflict(1));
						b=1;
						k = 1;
						a.documentElement.childNodes[0].removeChild(c);
						a.documentElement.childNodes[0].removeChild(p);
						p.onload=p.onreadystatechange=null;
						c.onload=c.onreadystatechange=null;

					}
				};
				a.documentElement.childNodes[0].appendChild(p);
			}
		};
		a.documentElement.childNodes[0].appendChild(c);
		}
})(window,document,"3.1.1");
function jq(jq){
	$ = jq;
	application("html");
}
/*Function to find the closes tag parent with ID*/
function findFirstParentwithID(item){
	var firsParent = "";
	var numberOfParents = $(item).parents().length;
	for (i=0; i<numberOfParents; i++){

		firsParent += ".parent()";
		levelParent = "$( item )"+ firsParent +".attr('id')";
		address = eval(levelParent);
		if(address){
			break;
		}

	}
	return address;
}

function checkExistingID(checkID, checkTag, checkCounter){

	if(!$(checkID).attr("id")){
		$(checkID).attr("id", "accCheck_"+checkTag+checkCounter);

		if(checkCounter == 0){
			idList += $(checkID).attr("id");
		}
		else{
			idList += "," + $(checkID).attr("id");
		}
	}
	else{
		if(checkCounter == 0){
			idList += $(checkID).attr("id");
		}
		else{
			idList += "," + $(checkID).attr("id");
		}
	}
	return idList;
}

/*Function to find missing attr on tags*/
function findMissinAttr(tag, missingAttr, obligAttr, optAttr){

	if(obligAttr == undefined) {
	 obligAttr = false;
	}
	if(optAttr == undefined) {
	 optAttr = false;
	}

	totalItemsCounter = 0;
	elementsIDs = "";
	idList = "";
	itemsCounter = 0;
	fullTag = "";

	reportBody += "<b><hr style='background:grey; height: 2px;'>" + tag + " missing " + missingAttr + ":</b><hr style='background:grey; height: 2px;'><pre> ";

	$(place).find(tag).each(function (){

		if(!$(this).attr(missingAttr)){


			if(tag != "html"){
				fullTag += '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
				var fullTagReport = '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
				reportBody += "<br>" + fullTagReport;
				/*Calling function to get the first parent with id*/
				findFirstParentwithID(this);
				reportBody += "First parent with id found: " + address;
			}

			checkExistingID(this, tag, itemsCounter);
			elementsIDs = idList;


			/*Check if parameter optAttr was sent*/
			if(optAttr != false || optAttr != ""){
				if($(this).attr(optAttr)){
					statusOptAttr = "<span class='text-success'>" + $(this).attr(optAttr) + "</span>";
				}
				else{
					statusOptAttr = "<span class='text-danger'>No " + optAttr + "</span>";
				}
				reportBody += "<br>" + optAttr + ": " + statusOptAttr + "";
			}

			/*Check if parameter obligAttr was sent*/
			if(obligAttr != false || obligAttr != ""){
				reportBody += "<br>" + obligAttr + ": " + $(this).attr(obligAttr);
			}

			/*Check if current element has id*/
			if($(this).attr("id")){
				reportBody += "<br>ID: " + $(this).attr("id");
			}
			reportBody += "<br><br>";


			attrFound = idList;
			itemsCounter++;
			counterAll++;
		}
		else{
			if(tag != "html"){
				elemRect = $(this).position();
				$("<div class='successTag' style='top:"+elemRect.top+"px; left:"+elemRect.left+"px;'>" + $(this).attr(missingAttr) + "</div>").insertBefore(this);
			}
			else{
				$(this).prepend("<div class='successTag'>" + $(this).attr(missingAttr) + "</div>");
			}

			attrFound = idList;
		}
		totalItemsCounter++;
	});

	reportBody += "<b>Total of " + tag + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
	reportBody += "<br>Number of " + tag + " missing " + missingAttr + " <span class='text-danger'>" + itemsCounter + "</span></b></pre>";

	return reportBody;
}

function findPrevTag(firstTag, secondTag, obligAttr, optAttr){
	if(obligAttr == undefined) {
	 obligAttr = false;
	}
	if(optAttr == undefined) {
	 optAttr = false;
	}
	totalItemsCounter = 0;
	itemsCounter = 0;

	reportBody += "<b><hr style='background:grey; height: 2px;'>" + firstTag + " missing " + secondTag + ":</b><hr style='background:grey; height: 2px;'><pre> ";

	$(firstTag).each(function (){
		if($(this).prev().prop("tagName") != secondTag){
			reportBody += "ID: " + $(this).attr("id");

			/*Calling function to get the first parent with id*/
			findFirstParentwithID(this);
			reportBody += "First parent with id found: " + address;

			/*Check if parameter optAttr was sent*/
			if(optAttr != false || optAttr != ""){
				if($(this).attr(optAttr)){
					statusOptAttr = "<span class='text-success'>" + $(this).attr(optAttr) + "</span>";
				}
				else{
					statusOptAttr = "<span class='text-danger'>No " + optAttr + "</span>";
				}
				reportBody += "<br>" + optAttr + ": " + statusOptAttr + "";
			}

			/*Check if parameter obligAttr was sent*/
			if(obligAttr != false || obligAttr != ""){
				reportBody += "<br>" + obligAttr + ": " + $(this).attr(obligAttr);
			}
			reportBody += "<br><br>";
			itemsCounter++;
		}
		totalItemsCounter++;
	});

	reportBody += "<b>Total of " + firstTag + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
	reportBody += "<br>Number of " + firstTag + " missing " + secondTag + " <span class='text-danger'>" + itemsCounter + "</span></b></pre>";

}
function findLinkedTag(tag1, attr1, tag2, attr2){

	totalItemsCounter = 0;
	itemsCounter = 0;
	elementsIDs = "";
	idList = "";

	reportBody += "<b><hr style='background:grey; height: 2px;'>" + tag1 + " missing " + tag2 + ":</b><hr style='background:grey; height: 2px;'><pre> ";

	$(place).find(tag1).each(function(){

		labelString = "$('" + tag2 + "[" + attr2 + "=" + $(this).attr(attr1) + "]')";
		exlabelString = eval(labelString);

		if(exlabelString.attr(attr2) != $(this).attr(attr1)){
			checkExistingID(this,tag1,itemsCounter);
			elementsIDs = idList;

			fullTag += '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
			fullTagReport = '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
			reportBody += "<br>" + fullTagReport;

			reportBody += "<br>ID: " + $(this).attr(attr1);

			/*Calling function to get the first parent with id*/
			findFirstParentwithID(this);
			reportBody += "<br>First parent with id found: " + address;
			reportBody += "<br><br>";
			itemsCounter++;
		}
		else{
			labelString = "$('" + tag2 + "[" + attr2 + "=" + $(this).attr(attr1) + "]')";
			exlabelString = eval(labelString);

			if(tag1 != "html"){
				elemRect = $(this).position();
				$("<div class='successTag' style='top:"+elemRect.top+"px; left:"+elemRect.left+"px;'>" + exlabelString.text() + "</div>").insertBefore(this);
			}
			else{
				$(this).prepend("<div class='successTag'>" + exlabelString.text() + "</div>");
			}
		}
		totalItemsCounter++;
	});

	reportBody += "<b>Total of " + tag1 + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
	reportBody += "<br>Number of " + tag1 + " missing " + tag2 + " <span class='text-danger'>" + itemsCounter + "</span></b></pre>";

}

/*Function to find duplicated IDs*/
function findDuplicatedIDs(){

	elementsIDs = "";
	itemsCounter = 0;
	reportBody += "<b><hr style='background:grey; height: 2px;'>Duplicated IDs:</b><hr style='background:grey; height: 2px;'><pre> ";

	$(place).find('[id]').each(function(){
		var ids = $('[id="'+this.id+'"]');
		if(ids.length>1 && ids[0]==this){

			if(itemsCounter == 0){
				elementsIDs += this.id;
			}
			else{
				elementsIDs += "," + this.id;
			}

			fullTag += '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
			fullTagReport = '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
			reportBody += "<br>" + fullTagReport;

			reportBody += "ID: " + $(this).attr("id");
			findFirstParentwithID(this);
			reportBody += "<br>First parent with id found: " + address;
			reportBody += "<br><br>";
			itemsCounter++;
		}
	});
	reportBody += "<b>Total of DuplicatedIds found: <span class='text-danger'>" + itemsCounter + "</span></pre>";
}

/*Function to count the total number of tag*/
function countTag(tag){
	itemsCounter = 0;
	idList = "";

	$(place).find(tag).each(function(){
		checkExistingID(this,tag,itemsCounter);
		elementsIDs = idList;
		itemsCounter++;
	});
	counters += "<br>Number of " + tag + ": " + itemsCounter;
	return counters;
}

function accCheck(){

	if(!$("#accCheckDiv").length){

		var accCheckAppend = $("<div id='accCheckDiv' class='well'><a class='pull-left' href='javascript:enableSrolling();'>Scroll</a> | <a href='javascript:selectIFrame();'>iframe</a> <a class='pull-right' href='#' id='sair' style='color: white'><i class='fa fa-power-off fa-lg'></i></a><br><br><div id='accNav' style='height: 90%'></div></div>");
		$("html").append(accCheckAppend);
		$("#accCheckDiv").css({bottom: "0px", right: "20px", position:'fixed', width:"350px", height:"360px", background: "#909090"});
		$("#accCheckDiv").addClass("text-danger");
		$("#accCheckDiv").resizable({minHeight: 360, minWidth: 300});
		$("#accCheckDiv").draggable({ cancel: "#accNav", scroll: false});
						$('#accCheckDiv').css('z-index', 9999);
		$("#sair").click(function(){
			$("#accCheckDiv").hide();
		});
		$("#refresh").click(function(){
			unmarkElements(imglink);
			unmarkElements(htmllink);
			unmarkElements(tablelink);
			unmarkElements(dupliatedlink);
			unmarkElements(selectlink);
			$('#accNav').html(sidenav);
		});

		sidenav = '<nav class="navbar navbar-inverse accCheckNav" style="height: 100%;">';
		sidenav +=     '<ul class="nav sidebar-nav" style="background-color: #292929; margin-left: 0px;">';
		sidenav +=         '<li>';
		sidenav +=          	'<a href="javascript: changechkbox(\'imgtag\')"><span class="badge">' + imgcounter + '</span> Images/Icons without alt <input id="imgtag" type="radio" class="pull-right" name="imgtag" value="' + imglink + '"></a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=             '<a href="javascript: changechkbox(\'htmllang\')"><span class="badge">' + htmlcounter + '</span> &lthtml&gt without lang <input id="htmllang" type="radio" class="pull-right" name="htmllang" value="' + htmllink + '"></a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=             '<a href="javascript: changechkbox(\'tablesum\')"><span class="badge">' + tablecounter + '</span> &lttable&gt without summary <input id="tablesum" type="radio" class="pull-right" name="tablesum" value="' + tablelink + '"></a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=          	'<a href="javascript: changechkbox(\'dupid\')"><span class="badge">' + duplicatedcounter + '</span> Duplicated IDs <input id="dupid" type="radio" class="pull-right" name="dupid" value="' + duplicatedlink + '"></a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=          	'<a href="javascript: changechkbox(\'sellabel\')"><span class="badge">' + labelcounter + '</span> Labels <input id="sellabel" type="radio" class="pull-right" name="sellabel" value="' + labellink + '"></a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=             '<a href="#"><span class="badge">' + tablecountcounter + '</span> Number of tables</a>';
		sidenav +=         '</li>';
		sidenav +=         '<li>';
		sidenav +=             '<a href="javascript: writeHTML()"><i class="fa fa-bar-chart-o fa-lg"></i> General Report</a>';
		sidenav +=         '</li>';
		sidenav +=     '</ul>';
		sidenav += '</nav></div>';

		$('#accNav').append(sidenav);
	}
	else{
		$('#accCheckDiv').css('z-index', 9999);
		$("#accCheckDiv").show();
	}
}

function application(part){
	place = part;
	$(place).prop("tagName");
	if(!$("#accCheckDiv").length){

		$.fn.outerHTML = function (arg) {
			var ret;
			/* If no items in the collection, return */
			if (!this.length)
				return typeof val == "undefined" ? this : null;
			/* Getter overload (no argument passed) */
			if (!arg) {
				return this[0].outerHTML ||
					(ret = this.wrap('<div>').parent().html(), this.unwrap(), ret);
			}
			/* Setter overload */
			$.each(this, function (i, el) {
				var fnRet,
					pass = el,
					inOrOut = el.outerHTML ? "outerHTML" : "innerHTML";

				if (!el.outerHTML)
					el = $(el).wrap('<div>').parent()[0];

				if (jQuery.isFunction(arg)) {
					if ((fnRet = arg.call(pass, i, el[inOrOut])) !== false)
						el[inOrOut] = fnRet;
				}
				else
					el[inOrOut] = arg;

				if (!el.outerHTML)
					$(el).children().unwrap();
			});
			return this;
		}

		if(!$("link[href*='bootstrap']").length){

			var bootlink = $("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>");
			$(place).append(bootlink);     // Append new elements

			var bootscript = $("<script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>'>");
			$(place).append(bootscript);     // Append new elements

		}

		//var afterFunctions = $("<script src='//tmkaio.github.io/afterFunctions.js' type='text/javascript'></script>'>");
		//$("head").append(afterFunctions);
		$(place).prop("tagName");
		var bordas = $('<link rel="stylesheet" type="text/css" href="//tmkaio.github.io/css/style.css">');
		$(place).append(bordas);
		$(place).prop("tagName");
		var font_aw = $("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>");
		$(place).append(font_aw);     // Append new elements
		$(place).prop("tagName");
		var UITheme = $("<link rel='stylesheet' href='//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'>");
		$(place).append(UITheme);     // Append new elements
		$(place).prop("tagName");
		totalItemsCounter= "";
		itemsCounter = "";
		testt = "";
		address = "";
		totalCounter = "";
		counter = "";
		counterAll = 0;
		reportBody = "";
		counters = "";
		duplicatedIDs = "";
		elementsIDs = "";
		fullTag = "";
		elementsIDs = "";
		htmlcounter = 0;
		imgcounter = 0;
		tablecounter = 0;
		tablecountcounter = 0;
		labelcounter = 0;
		duplicatedcounter = 0
		attrFound = "";
		idList = "";
		labellink = "";

		/*Calling function to check HTML with lang*/
		findMissinAttr("html", "lang");
		htmllink = elementsIDs;
		htmlcounter = itemsCounter;
		htmlTag = fullTag;
		htmlFound = attrFound;

		/*Calling function to check IMG with alt*/
		findMissinAttr("img", "alt", "src", "title");
		imglink = elementsIDs;
		imgcounter = itemsCounter;
		imgTag = fullTag;
		imgFound = attrFound;
		findMissinAttr("i", "alt", "src", "title");

		if(imglink != "" && elementsIDs != ""){
			imglink += ","+elementsIDs;
		}
		else if(elementsIDs != ""){
			imglink = elementsIDs;
		}

		/*Calling function to check TABLE with summary*/
		findMissinAttr("table", "summary");
		tablelink = elementsIDs;
		tablecounter = itemsCounter;
		tableTag = fullTag;
		tableFound = attrFound;

		/*Calling function to count number TABLE on page*/
		countTag("table");
		tablecountlink = elementsIDs;
		tablecountcounter = itemsCounter;

		/*Calling function to check for select without label*/
		findLinkedTag("select", "id", "label", "for");
		labellink = elementsIDs;
		labelcounter = itemsCounter;

		findLinkedTag("input", "id", "label", "for");

		if(labellink != "" && elementsIDs != ""){
			labellink += ","+elementsIDs;
		}
		else{
			labellink = elementsIDs;
		}
		labelcounter = labelcounter+itemsCounter;

			/*Calling function to check for duplicated IDs*/
		findDuplicatedIDs();
		duplicatedcounter = itemsCounter;
		duplicatedlink = elementsIDs;

		/*Calling function to write HTML*/
		finalReportBody = reportBody;
		finalCounters = counters;
		finalDuplicatedIDs = duplicatedcounter;

	}
	$(place).find("div:hidden").show();
	accCheck();

}
function newFun($){
	alert("Hey! I am new");
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

function enableSrolling(){
		$("body").css({"height":$(window).height()+"px", "overflow":"auto"});
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

			$(place).find("#" + parsedimg[i]).each(function(){

				if(!$("#"+parsedimg[i]+"_warning").length){
					elemRect = $(this).position();
					if($(this).prop("tagName") != "HTML"){
						$("<div id='"+parsedimg[i]+"_warning' class='warningTag' style='top:"+elemRect.top+"px; left:"+elemRect.left+"px;'>"+$(this).prop("tagName")+"</div>").insertBefore(this);
					}
					else{
						$(this).prepend("<div id='"+parsedimg[i]+"_warning' class='warningTag' style='top:"+elemRect.top+"px; left:"+elemRect.left+"px;'>"+$(this).prop("tagName")+"</div>");
					}
				}
				else{
					$("#"+parsedimg[i]+"_warning").show();
				}
				$(this).css({border: "5px solid red"});
				$(this).show();
			});
		}
	}

	function unmarkElements(variaveis){
		if(variaveis != ""){
			parsedimg = variaveis.split(',');

			for(var i = 0; i < parsedimg.length; i++) {
				$(place).find("#" + parsedimg[i]).each(function(){
					$("#"+parsedimg[i]+"_warning").hide();
					$(this).css({border: "none"});
				});
			}
		}

	}

function selectIFrame(){
	$('iframe').hover(function(){
		$(this).css({border: "5px solid red"});

	},function(){
			$(this).css({border: "none"});
	});

	$('iframe').contents().click(function(){

		unmarkElements($("#imgtag").val());
		unmarkElements($("#htmllang").val());
		unmarkElements($("#tablesum").val());
		unmarkElements($("#dupid").val());
		unmarkElements($("#sellabel").val());

		$("#accCheckDiv").remove();
		finalReportBody = "";
		finalCounters = "";
		finalDuplicatedIDs = "";
		application(this);
		//$(this).append(accCheckAppend);
	});
}
