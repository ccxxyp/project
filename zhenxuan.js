//浏览全部珍选
$(function(){
	$("[data-llcbzx=llcbzx]").parent().mouseover(function(){
		$(this).children().last().show();
	})
		.mouseout(function(){
			$(this).children().last().hide();
		})
})	

//发现尖货——多页标签效果
//document.getElementById("zx1").style.zIndex=9;
//var zxtjs=document.querySelectorAll("[data-toggle=zxtj]");
//console.log(zxtjs);
//var n=10;
//for(var zxtj of zxtjs){
//zxtj.onclick=function(){
//  var zxtj=this;
//  var id=zxtj.getAttribute("data-target");           
//  var zx=document.getElementById(id);
//  zx.style.zIndex=n;
//  n++;
//}
//}