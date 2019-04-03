//改变注册和登录的样式
$(".dl>div>a.active").click(function(e){
    var $a=$(e.target);
    if($a.is("a")){
      $a.addClass("active").css({color:#ff6767,textDecoration: none,})
      .siblings().removeClass("active");
    }
})