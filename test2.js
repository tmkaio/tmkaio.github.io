javascript: (function(){

	/*c=document.createElement("script");
	c.type="text/javascript";
	c.src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";

	document.documentElement.childNodes[0].appendChild(c);
*/
	$("#sair").click(function(){
		$("#coco").hide();
	});
})()

function cagando(variaveis){
	parsedimg = variaveis.split(',');

	for(var i = 0; i < parsedimg.length; i++) {
		document.getElementById(parsedimg[i]).style.border = "5px solid red";
	}
}
