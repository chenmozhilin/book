var img=document.getElementById("dd_scroll");
var img_index=1;
document.getElementById("scroll_number_2").style.backgroundColor="red"; 
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

			
