//浏览全部菜谱
$(function(){
	$("[data-llcbcp=llcbcp]").parent().mouseover(function(){
		$(this).children().last().show();
	})
	.mouseout(function(){
		$(this).children().last().hide();
	})
})

//最新推荐——多页标签效果
$(function(){
	document.getElementById("zx1").style.zIndex=9;
	var zxtjs=document.querySelectorAll("[data-toggle=zxtj]");
	console.log(zxtjs);
	var n=10;
	for(var zxtj of zxtjs){
	  zxtj.onclick=function(){
	    var zxtj=this;
	    var id=zxtj.getAttribute("data-target");           
	    var zx=document.getElementById(id);
	    zx.style.zIndex=n;
	    n++;
	  }
	}
})
//改变字体颜色和下划线
$(".zuixin-left").click(function(e){
    var $a=$(e.target);
    if($a.is("a")){
      $a.addClass("active")
      //return $当前li
      //将当前li之外的其余li去掉class active
      .siblings().removeClass("active");
    }
})
//显示更多
//$(function(){
//$("[data-xsgd=xsgd]").click(function(){
//  var $div=$(".zxtj-container>ul");
//  if($div.is(":has(:hidden)")){
//    $div.children().show();
//    $(this).html("显示完成");
//  }else{
//    $div.children("li:gt(19):not(:last)").hide();
//    $(this).html("显示更多");
//  }  
//})
//})  