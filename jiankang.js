//浏览所有文章
$(function(){
	$("[data-llsywz=llsywz]").parent().mouseover(function(){
		$(this).children().last().show();
	})
	.mouseout(function(){
		$(this).children().last().hide();
	})
})

//最新推荐——多页标签效果
document.getElementById("zx1").style.zIndex=9;
var zxtjs=document.querySelectorAll("[data-zxtj=zxtj]");
console.log(zxtjs);
var n=10;
for(var zxtj of zxtjs){
	zxtj.onclick=function(){
    var zxtj=this;
    var id=zxtj.getAttribute("data-zx");           
    var zx=document.getElementById(id);
    zx.style.zIndex=n;
    n++;
}
}
//改变字体颜色和下划线
$(".zx-left>div:first-child").click(function(e){
    var $a=$(e.target);
    if($a.is("a")){
      $a.addClass("active")
      //return $当前li
      //将当前li之外的其余li去掉class active
      .siblings().removeClass("active");
    }
})