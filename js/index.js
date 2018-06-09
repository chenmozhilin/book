//加载时弹出窗口/广告
//document.getElementsByTagName("body")[0].onload=function(){
//	window.open("open.html","","width=530,height=340,left=330,top=220");
//}
//right广告
function dd_close() {
	document.getElementById("right").style.display = "none";
}
//header locad time
 function datetimes(){
			var dates=new Date();
			var year=dates.getFullYear();
			var month=dates.getMonth()+1;
			var day=dates.getDate();
			var h=dates.getHours();
			var m=dates.getMinutes();
			if (m<=9){
				m="0"+m;
			}
			var s=dates.getSeconds();
			if (s<=9){
				s="0"+s;
			}
			var datetimes=year+"/"+month+"/"+day+" "+h+":"+m+":"+s;
			document.getElementById("date").innerHTML=datetimes;
			window.setTimeout("datetimes()",1000);
			};
			datetimes();
//我的当当下拉列表
// onmouseover="myddang_show('dd_menu_top_down')" onmouseout="myddang_hidden('dd_menu_top_down')
	function myddang_show(){
		document.getElementById("dd_menu_top_down").style.display="block";
	}
	function myddang_hidden(){
		document.getElementById("dd_menu_top_down").style.display="none";
	}
//图片轮播



//新闻滚动列表
function $(id){
 return document.getElementById(id);
 }
 var dome=$("dome");
 var dome1=$("dome1");
 var dome2=$("dome2");
 var speed=20;
 var myTimer;
dome2.innerHTML=dome1.innerHTML;
   function upScoll(){
   	 if(dome1.offsetHeight<=dome.scrollTop){
   	   		dome.scrollTop=0;
   	   }else{
   	   	dome.scrollTop++;
   	   } 	
   }
	myTimer=setInterval("upScoll()",speed);
	dome.onmouseout=function(){
	myTimer=setInterval("upScoll()",speed);
}
	dome.onmouseover=function(){
	clearInterval(myTimer);
}
//
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

//form验证

				function $(id){
					return document.getElementById(id);
				};
			$("userName").onblur=function(){
				var Uservalue=this.value;
				if(Uservalue==''){
//					alert("用户名不能为空！");
					$("userNamespan").innerHTML="用户名不能为空！";
					return false;
				}
				else{
					for(var i=0;i<Uservalue.length;i++){
						var  c=Uservalue.charAt(i);
						if((c>='a'&&c<='z')||(c>=0&&c<=9)||(c=='_')){
							
						}else{
							$("userNamespan").innerHTML='用户名只包含a-z,0-9和_';
							return false;
						}
					}
				}	
			}
			$("userName").onfocus=function(){
				$("userNamespan").innerHTML="";
			};
			//检测密码长度是否符合要求
			$("userPwd").onblur=function(){
//				alert(this.value.length);
				if(this.value.lenght<8){
					$("userPwdspan").innerHTML="密码的长度不能小于8位";
					return false;
				}
				return true;
			};
			$("userPwd").onfocus=function(){
				$("userPwdspan").innerHTML="";
			};
			$("userPwdcheck").onblur=function(){
				if(this.value!=$("userPwd").value){
					$("userPwdcheckspan").innerHTML="输入密码不一致！";
				}
				
			}
			$("userPwd").onfocus=function(){
				$("userPwdcheckspan").innerHTML="";
			};
			//身份证验证
			$("userID").onblur=function(){

				if(userID.length!=18){
					$("userIDspan").innerHTML="身份证号码只能是18位！";
					return false;
				}else{
					for(var t=0; t<17;t++){
						if(isNaN(userid[t])){
							//有一个非数字
							$("userIDspan").innerHTML="身份证号码前17位只能是由数字构成！";
							return false;
						}
					}
					if(userid[17]!='X'||isNaN(userid[17])){
						$("userIDspan").innerHTML="身份证号码第18位只能是由数字或者X构成！";
						return false;
					}
				}
				return true;
			}
			$("userID").onfocus=function(){
				$("userIDspan").innerHTML="";
			};			
			//email验证
			$("userEmail").onblur=function(){
				var email=this.value;
				if (email.indexof('@')>-1&&email.indeof('.')>-1){
					
				}
				else{
					$("userEmailspan").innerHTML="邮箱地址格式不正确！请检查书写";
					return false;
				}
				return true;
			}
			$("userEmail").onfocus=function(){
				$("userEmailspan").innerHTML="";
			}
