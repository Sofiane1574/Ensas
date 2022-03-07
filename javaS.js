
     /*---------------------------------JAVASCRIPT1----------------------------------*/
var k=1;
	function funhide(){
		var x=document.getElementById("pow");
		if(k%2==0){
	   x.style.left="0vw";
	   x.style.margin="0";
	   document.getElementById("z").style.filter="blur(0px)";
	   
	}else {
		x.style.left="92.5vw";
		x.style.width="7.5vw";
		document.getElementById("z").style.filter="blur(8px)";
	}
	k++;
	}
	var c=1;
	function fun2hide(){
		var b=document.getElementById("pow");
		if(c%2==0){
	   b.style.left="0vw";
	   document.getElementById("z_2").style.filter="blur(0px)";

	}else {
		b.style.left="92.5vw";
		document.getElementById("z_2").style.filter="blur(8px)";
	b.style.width="7.5vw";
	}
	c++;
	} 
	/*---------------------------------JAVASCRIPT2----------------------------------*/

function hideheader(x1) {
  if (x1.matches) { // If media query matches
  	var y1=document.getElementsByClassName("a_header");
    for (var i = y1.length - 1; i >= 0; i--) {
	y1[i].style.display = "none";
	 }
	document.getElementById("pow").style.display="inline";
	document.getElementById("powxx").style.display="inline";
}}
function showheader(x2) {
  if (x2.matches) { // If media query matches
  	var y2=document.getElementsByClassName("a_header");
    for (var i = y2.length - 1; i >= 0; i--) {
	y2[i].style.display = "inline";
	 }
    document.getElementById("pow").style.display="none";
    document.getElementById("powxx").style.display="none";

}}
var x1 = window.matchMedia("(max-width: 768px)")
hideheader(x1) // Call listener function at run time
x1.addListener(hideheader) // Attach listener function on state changes
var x2 = window.matchMedia("(min-width: 769px)")
showheader(x2) // Call listener function at run time
x2.addListener(showheader) // Attach listener function on state changes
