javascript:(function(e,a,g,h,f,c,b,d,p,k,l,m){

	if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){

		c=a.createElement("script");
		c.type="text/javascript";
		c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";
		c.onload=c.onreadystatechange=function(){

			if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){

				p=a.createElement("script");
				p.type="text/javascript";
				p.src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
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
  alert('oi4');
  $("img").each(function(){
    alert($(this).attr("src"));
  });
}
