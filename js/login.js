//logi登录验证

function $(id){
					return document.getElementById(id);
				};
//function emailBlur(){
//	var x=document.forms["myForm"]["email"].value;
//	var atpos=x.indexOf("@");
//	var dotpos=x.lastIndexOf(".");
//	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
//		alert("不是有效的用户名");
//		return false;
//	}
//}
			$("email").onblur=function(){
				var Uservalue=this.value;
				if(Uservalue==''){
					alert("用户名不能为空！");
//					$("userNamespan").innerHTML="用户名不能为空！";
					return false;
				}
				else{
					for(var i=0;i<Uservalue.length;i++){
						var  c=Uservalue.charAt(i);
						if((c>='a'&&c<='z')||(c>=0&&c<=9)||(c=='_')){
							
						}else{
						alert('用户名只包含a-z,0-9和_');
							return false;
						}
					}
				}	
			}
			$("email").onfocus=function(){
				$("email").innerHTML="";
			};