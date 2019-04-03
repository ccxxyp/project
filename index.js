//轮播图片

//三块——第一块
document.getElementById("one1").style.zIndex=9;
var ones=document.querySelectorAll("[data-one=one]");
console.log(ones);
var n=10;
for(var one of ones){
  one.onclick=function(){
    var one=this;
    var id=one.getAttribute("data-jksy");           
    var one=document.getElementById(id);
    one.style.zIndex=n;
    n++;
  }
}
//第二块
document.getElementById("two1").style.zIndex=9;
var twos=document.querySelectorAll("[data-two=two]");
console.log(twos);
var n=10;
for(var two of twos){
  two.onclick=function(){
    var two=this;
    var id=two.getAttribute("data-hbzj");           
    var two=document.getElementById(id);
    two.style.zIndex=n;
    n++;
  }
}
//改变三块的字体颜色和下划线
$(".san>div>div:first-child").click(function(e){
    var $a=$(e.target);
    if($a.is("a")){
      $a.addClass("san-active")
      //return $当前li
      //将当前li之外的其余li去掉class active
      .siblings().removeClass("san-active");
    }
})


//新秀菜谱——多页标签效果
document.getElementById("content1").style.zIndex=9;
var xxcps=document.querySelectorAll("[data-toggle=xxcp]");
console.log(xxcps);
var n=10;
for(var xxcp of xxcps){
  xxcp.onclick=function(){
    var xxcp=this;
    var id=xxcp.getAttribute("data-target");           
    var content=document.getElementById(id);
    content.style.zIndex=n;
    n++;
  }
}
//改变新秀菜谱的字体颜色和下划线
$(".xinxiu-left").click(function(e){
    var $a=$(e.target);
    if($a.is("a")){
      $a.addClass("xx-active")
      //return $当前li
      //将当前li之外的其余li去掉class active
      .siblings().removeClass("xx-active");
    }
})

$("#uname").blur(function(){
  $.ajax({
    url:"http://localhost:3000/login",
    type:"get",
		dataType:"json"
  })
})
