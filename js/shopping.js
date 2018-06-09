function productCount(){
	var sum=0,
		save=0,
		integralTotal=0;
	var nums=document.getElementsByClassName('shoping_product_list_5');
	var prices=document.getElementsByClassName('shoping_product_list_4');
	var oriPrices=document.getElementsByClassName('shoping_product_list_3');
	var intergras=document.getElementsByClassName('shoping_product_list_2');
	for(var i=0; i<nums.length; i++){
		var num=nums[i].getElementsByTagName("input")[0].value;
		var price=prices[i].getElementsByTagName("label")[0].innerHTML;
		var oriPrice=oriPrices[i].getElementsByTagName("label")[0].innerHTML;
		var integra=intergras[i].getElementsByTagName("label")[0].innerHTML;
		sum+=price*num;
		save+=(oriPrice-price)*num;
		intergralTotal+=intergra*num;
		}
		document.getElementById("product_total").innerHTML=sum;
		document.getElementById("product_save").innerHTML=sum;
		document.getElementById("product_integral").innerHTML=intergralTotal;
	}
	var dels=document.getElementsByClassName("shopping_product_list_6");
		for(var t=0;t<dels.length;t++){
			dels[t].onclick=function(){
				if(confirm("是否确定删除")){
					document.getElementById("myTableProduct").tBodies[0].removeChild(this.parentNode);
					productCount()
					}
			}
			document.getElementsByClassName("shopping_product_list_5")[t].getElementsByTagName("input")[0].onchange=getTotal;
			}
			if(dels.length==6){
				productCount();
				}
			
			