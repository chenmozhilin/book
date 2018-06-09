
document.getElementsByTagName("body")[0].onload=function(){
	window.open("open.html","","width=530,height=340,left=330,top=220");
}

function dd_close() {
	document.getElementById("right").style.display = "none";
}
var dome = document.getElementById("dome");
var dome1 = document.getElementById("dome1");
var dome2 = document.getElementById("dome2");
dome2.innerHTML = dome1.innerHTML;
function gun() {
	if(dome.scrollTop <= dome1.scrollHeight) {
		dome.scrollTop++;
	} else {
		dome.scrollTop = 0;
	}
}
var id = setInterval("gun()", 10);

dome.onmouseover = function() {
	clearInterval(id);
}
dome.onmouseout = function() {
	id = setInterval("gun()", 10);
}

var img=document.getElementById("dd_scroll");
var img_index=1;
document.getElementById("scroll_number_2").style.backgroundColor="#ccc";
function rotatorAd(){
	img_index++;
	if(img_index==7){
		img_index=1;
	}
	img.src="images/dd_scroll_"+img_index+".jpg";
	document.getElementById("scroll_number_"+img_index).style.backgroundColor="#ccc";
	for(var t=1;t<=6;t++){
		if(t!=img_index){
			document.getElementById("scroll_number_"+t).style.backgroundColor="#F2F2F3";
		}
	}
}
var timeCn=setInterval("rotatorAd()",1000);
function showNumber(i){
	document.getElementById("scroll_number_"+i).style.backgroundColor="#ccc";
	for(var s=1;s<=6;s++){
		if(s!=i){
			document.getElementById("scroll_number_"+s).style.backgroundColor="#F2F2F3";
		}		
	}
}
function loopShow(i){	
	img.src="images/dd_scroll_"+i+".jpg";
	clearInterval(timeCn);
	img_index=i;
	showNumber(i);	
	timeCn=setInterval("rotatorAd()",1000);
}
img.onmouseover=function(){
	clearInterval(timeCn);
}
img.onmouseout=function(){
	timeCn=setInterval("rotatorAd()",1000);
}

//table切换
var p=document.getElementsByClassName("book_new")[0].children;
p[1].className="book_type_out";
function bookPutUp(i){
	p[i+1].className="book_type_out";
	for(var t=0;t<4;t++){
		if(t!=i){
			p[t+1].className="book_type";
		}
	}
	var q=document.getElementsByClassName("book_class")[0].children;
	q[i].className="book_show";
	for(var t=0;t<4;t++){
		if(t!=i){
			q[t].className="book_none";
		}
	}
}
