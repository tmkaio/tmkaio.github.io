javascript:(function (b, a, d, g){
	 
	
	
var s1=window.document.createElement('script');
  s1.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js');
 document.getElementsByTagName('head')[0].appendChild(s1);
  var s2=window.document.createElement('script');
  s2.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.7/jquery-ui.min.js');
  document.getElementsByTagName('head')[0].appendChild(s2);
  s1.onload=s1.onreadystatechange=function(){
    if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){
      s2.onload=s2.onreadystatechange=function(){
        if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){
          a((f=window.jQuery).noConflict(1), d=1, g=1);
		  f(s1).remove();
		  f(s2).remove();
        }
      }
      ;
    }
  }
  ;
})

(window, function($, L, K){
	
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

	function writeHTML(){
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
	}

	/*Function to find missing attr on tags*/
	function findMissinAttr(tag, missingAttr, obligAttr = false, optAttr = false){
		elementsIDs = "";
		totalItemsCounter = 0;
		itemsCounter = 0;

		reportBody += "<b><hr style='background:grey; height: 2px;'>" + tag + " missing " + missingAttr + ":</b><hr style='background:grey; height: 2px;'> ";
		$(tag).each(function (){
			
			if(!$(this).attr(missingAttr)){
				if(itemsCounter != 0){
					reportBody += "<br><br>";
				}
				



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


				var teste = '<pre>' + this.outerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
				
				reportBody += "<br>" + teste;

				//$(this).css("cssText", "border: 5px solid red");
				
				if(!$(this).attr("id")){
					$(this).attr("id", tag+itemsCounter);
					
					if(itemsCounter == 0){
						elementsIDs += $(this).attr("id");
					}
					else{
						elementsIDs += "," + $(this).attr("id");
					}
				}
				else{
					if(itemsCounter == 0){
						elementsIDs += $(this).attr("id");
					}
					else{
						elementsIDs += "," + $(this).attr("id");
					}
				}
				
				/*Calling function to get the first parent with id*/
				findFirstParentwithID(this);
				reportBody += "<br>First parent with id found: " + address;
				
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

				itemsCounter++;
				counterAll++; 

				message = tag + " missing " + missingAttr;
				

				/*document.write("<div id='error" + counterAll + "' style='position: absolute; background: #ffffcc; border: 1px solid black'>" + message + "</div>");
				
				$(this).on('mousemove', function(e){
					
					$("#error" + counterAll).show();
					$("#error" + counterAll).css({
						
						left:  e.pageX,
						top:   e.pageY,
					});
				});
				$(this).on('mouseleave', function(e){
					$("#error" + counterAll).hide();
				});*/

			}
			totalItemsCounter++;
		});

		reportBody += "<br><br><b>Total of " + tag + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
		reportBody += "<br>Number of " + tag + " missing " + missingAttr + " <span class='text-danger'>" + itemsCounter + "</span></b>";
		
		return reportBody;
	}

	/*Function to count the total number of tag*/
	function countTag(tag){
		itemsCounter = 0;
		
		$(tag).each(function(){
			itemsCounter++;
		});
		counters += "<br>Number of " + tag + ": " + itemsCounter;
		return counters;
	}
	
	/*Function to find duplicated IDs*/
	function findDuplicatedIDs(){
		var count = 0;
		$('[id]').each(function(){
			var ids = $('[id="'+this.id+'"]');
			if(ids.length>1 && ids[0]==this){
				if(count == 0){
					duplicatedIDs += this.id;
					$(this).css("cssText", "border: 5px solid red");
				} 
				else{
					duplicatedIDs += ", " + this.id;
					$(this).css("cssText", "border: 5px solid red");
				}
				count++;
			}
		});
	}

	function findPrevTag(firstTag, secondTag, obligAttr = false, optAttr = false){

		totalItemsCounter = 0;
		itemsCounter = 0;

		reportBody += "<b><hr style='background:grey; height: 2px;'>" + firstTag + " missing " + secondTag + ":</b><hr style='background:grey; height: 2px;'> ";

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

				itemsCounter++;
			}
			totalItemsCounter++;
		});

		reportBody += "<br><br><b>Total of " + firstTag + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
		reportBody += "<br>Number of " + firstTag + " missing " + secondTag + " <span class='text-danger'>" + itemsCounter + "</span></b>";
		
	}

	function findLinkedTag(tag1, attr1, tag2, attr2){

		totalItemsCounter = 0;
		itemsCounter = 0;

		reportBody += "<b><hr style='background:grey; height: 2px;'>" + tag1 + " missing " + tag2 + ":</b><hr style='background:grey; height: 2px;'> ";

		$(tag1).each(function(){
			
			labelString = "$('" + tag2 + "[" + attr2 + "=" + $(this).attr(attr1) + "]')";
			exlabelString = eval(labelString);
			
			if(exlabelString.attr(attr2) != $(this).attr(attr1)){
				if(itemsCounter != 0){
					reportBody += "<br><br>";
				}
				/*Calling function to get the first parent with id*/
				findFirstParentwithID(this);
				reportBody += "First parent with id found: " + address;
				
				$(this).css("cssText", "border: 5px solid red");

				reportBody += "<br>ID: " + $(this).attr(attr1);
				itemsCounter++;
			}
			totalItemsCounter++;
		});

		reportBody += "<br><br><b>Total of " + tag1 + " found: <span class='text-success'>" + totalItemsCounter + "</span>";
		reportBody += "<br>Number of " + tag1 + " missing " + tag2 + " <span class='text-danger'>" + itemsCounter + "</span></b>";
		
	}

	var testt;
	var address;
	var totalCounter;
	var counter;
	var counterAll = 0;
	var reportBody = "";
	var counters = "";
	var duplicatedIDs = "";
	var elementsIDs;
	
	
	/*Calling function to check HTML with lang*/
	findMissinAttr("html", "lang");
	htmllink = elementsIDs;
	/*Calling function to check IMG with alt*/
	findMissinAttr("img", "alt", "src", "title");
	imglink = elementsIDs;
	/*Calling function to check TABLE with summary*/
	findMissinAttr("table", "summary");
	tablelink = elementsIDs;
	//findMissinAttr("select", "id");
	/*Calling function to count number TABLE on page*/
	countTag("table");
	/*Calling function to check for select without label*/
	//findLinkedTag("select", "id", "label", "for");
	/*Calling function to check for duplicated IDs*/
	findDuplicatedIDs();
	/*Calling function to write HTML*/
	//writeHTML();

		/*var txt3 = $("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>"); 
		$("html").append(txt3);     // Append new elements

		var txt4 = $("<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>'>"); 
		$("html").append(txt4);     // Append new elements*/
		
		var txt4 = $("<script src='http://tmkaio.co.nf/test2.js' type='text/javascript'></script>'>"); 
		$("html").append(txt4);
		
		if(!$("#coco").length){

			var txt2 = $("<div id='coco' class='well'></div>"); 
			$("html").append(txt2);     
			$("#coco").css({bottom: "0px", right: "20px", position:'fixed', width:"20%", height:"40%", background: "grey"});	
			$("#coco").addClass("text-danger");
			$("#coco").draggable();
			$('#coco').css('z-index', 9999);
		}
		else{
			$('#coco').css('z-index', 9999);
			$("#coco").show();
		}
				
		reportBody = reportBody.replace(/\"/g,"%22");
		reportBody = reportBody.replace(/\>/g,"%3E");
		reportBody = reportBody.replace(/\</g,"%3C");
		counters = counters.replace(/\>/g,"%3E");
		counters = counters.replace(/\</g,"%3C");

		sidenav = '<a href="#" id="sair" style="font-size:13px;">X</a><br><br><nav class="navbar navbar-inverse">';
        sidenav +=     '<ul class="nav sidebar-nav">';
        sidenav +=         '<li>';
        sidenav +=          	'<a href="javascript: cagando(\'' + imglink + '\')"><i class="fa fa-fw fa-home"></i>IMG without alt</a>';
        sidenav +=         '</li>';
        sidenav +=         '<li>';
        sidenav +=             '<a href="javascript: cagando(\'' + htmllink + '\')"><i class="fa fa-fw fa-home"></i>HTML without lang</a>';
        sidenav +=         '</li>';
        sidenav +=         '<li>';
        sidenav +=             '<a href="javascript: cagando(\'' + tablelink + '\')"><i class="fa fa-fw fa-home"></i>table without summary</a>';
        sidenav +=         '</li>';
        sidenav +=         '<li>';
        sidenav +=           '<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i> Dropdown <span class="caret"></span></a>';
        sidenav +=           '<ul class="dropdown-menu" role="menu">';
        sidenav +=             '<li class="dropdown-header">Dropdown heading</li>';
        sidenav +=             '<li><a href="#">Action</a></li>';
        sidenav +=            '<li><a href="#">Another action</a></li>';
        sidenav +=            '<li><a href="#">Something else here</a></li>';
        sidenav +=             '<li><a href="#">Separated link</a></li>';
        sidenav +=             '<li><a href="#">One more separated link</a></li>';
        sidenav +=           '</ul>';
		sidenav +=         '<li>';
        sidenav +=          	'<a href="javascript: cagando(\'' + imglink + '\')"><i class="fa fa-fw fa-home"></i>IMG without alt</a>';
        sidenav +=         '</li>';
        sidenav +=         '<li>';
        sidenav +=             '<a href="javascript: cagando(\'' + htmllink + '\')"><i class="fa fa-fw fa-home"></i>HTML without lang</a>';
        sidenav +=         '</li>';
        sidenav +=         '<li>';
        sidenav +=             '<a href="javascript: cagando(\'' + tablelink + '\')"><i class="fa fa-fw fa-home"></i>table without summary</a>';
        sidenav +=     '</ul>';
        sidenav += '</nav>';

		$('#coco').html(sidenav);





		
	
	/*Opening report on a new window*/
	
	//var w = window.open();
	//$(w.document.body).html(newPage);
});