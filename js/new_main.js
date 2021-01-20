$(document).ready(function(){
    $("h3").animate({"top":"0", "opacity":"1"},800,function(){
         $(".s1_wrap").children(".download_big").animate({"top":"0","opacity":"1"},800);

      });

    /*모바일 메뉴 클릭*/
    $(".menu").click(function(){

        $(".menu_bar").animate({"right":"0"});
        $(".bg").stop().fadeIn();


    });

    $(".x").click(function(){

        $(".menu_bar").animate({"right":"-350px"});
        $(".bg").stop().fadeOut();

    });

    $(".bg").click(function(){

        $(".menu_bar").animate({"right":"-350px"});
        $(".bg").stop().fadeOut();

    });

    $(".menu_list > li").click(function(){

       $(this).children("a").toggleClass("on");
       $(this).toggleClass("on");
       $(this).children(".sub_menu_list").stop().slideToggle();

    });

    /*마우스 휠 플러그인 사용*/
    
    var wheelNumber = 0;
    var isScrolling = false;

    function zoom(event) {
        event.preventDefault();
        if (isScrolling) { 
            return
         };
        isScrolling = true;
		//마우스 휠을 올렸을때	
          if (event.deltaY < 0) {  

            if ($(this).prev().offset() === undefined) { 
                isScrolling = false
                return
            } else {
                var prev = $(this).prev().offset().top;

                $("html,body").stop().animate({"scrollTop":prev},1000, function() {
                    isScrolling = false;
                });
            }
          }
    
        //마우스 휠을 내렸을때	
        else if (event.deltaY > 0) {  
            wheelNumber = $(this).index();
            if(wheelNumber == 5) {
                $("html,body").stop().animate({"scrollTop":$("#footer").offset().top},1000, function() {
                    isScrolling = false;
                });
            }
            else {
                var next = $(this).next().offset().top;
                
                $("html,body").stop().animate({"scrollTop":next},1000, function() {
                    isScrolling = false;
                });
            }
            
        }
    };
   

    document.querySelectorAll('.section').forEach(function(el){
       el.addEventListener('wheel', zoom);
    });


    /*오른쪽 메뉴 활성화*/
    
    $(".right_menu li").click(function(event,delta){    
		event.preventDefault();

        var btnNumber = $(this).index();

        var start = $("#container>div").eq(btnNumber).offset().top;
        $("html,body").animate({"scrollTop":start},1000);
    });

    /*스크롤 아이콘*/
    $(".scl1").click(function(){
        var s1 = $(".p1").next().offset().top; $("html,body").stop().animate({"scrollTop":s1},1000);
    });
    
    $(".scl2").click(function(){
        var s2 = $(".p2").next().offset().top; $("html,body").stop().animate({"scrollTop":s2},1000);
    });
    
    $(".scl3").click(function(){
        var s3 = $(".p3").next().offset().top; $("html,body").stop().animate({"scrollTop":s3},1000);
    });
    
    $(".scl4").click(function(){
        var s4 = $(".p4").next().offset().top; $("html,body").stop().animate({"scrollTop":s4},1000);
    });
    
    $(".scl5").click(function(){
        var s5 = $(".p5").next().offset().top; $("html,body").stop().animate({"scrollTop":s5},1000);
    });
    
    /*스크롤탑 버튼*/
    $(".scl_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1200);
            
    });
    
    $(window).scroll(function(){
        var sc_top = $(window).scrollTop();

        var sec1 = $(".p1").offset().top-250;
        var sec2 = $(".p2").offset().top-250;
        var sec3 = $(".p3").offset().top-250;
        var sec4 = $(".p4").offset().top-250;
        var sec5 = $(".p5").offset().top-250;
        var sec6 = $(".p6").offset().top-250;

        $(".right_menu li").removeClass("on");
        $(".scroll").fadeOut().stop();

        if(sc_top >= sec1 && sc_top < sec2){
            $(".right_menu li").eq(0).addClass("on");
           
            $(".sc1").stop().fadeIn(200);
            $(".download").stop().fadeOut(500);
            $(".scroll_top").stop().fadeOut(200);  
        }
        
        else if(sc_top >= sec2 && sc_top < sec3){
            $(".right_menu li").eq(1).addClass("on");
           
            $(".sc2").stop().fadeIn(200);
            $(".download").stop().fadeIn(800);
            $(".scroll_top").stop().fadeOut(200);  
            $(".s2_wrap").children("h4").animate({"top":"0", "opacity":"1"},800);
        }
        
         else if(sc_top >= sec3 && sc_top < sec4){
            $(".right_menu li").eq(2).addClass("on");
           
            $(".sc3").stop().fadeIn(200);
            $(".download").stop().fadeIn(200);
            $(".scroll_top").stop().fadeOut(200);
            $(".s3_wrap").children("h4").animate({"top":"0", "opacity":"1"},800);
        }
        
         else if(sc_top >= sec4 && sc_top < sec5){
            $(".right_menu li").eq(3).addClass("on");
           
            $(".sc4").stop().fadeIn(200);
            $(".download").stop().fadeIn(200);
            $(".scroll_top").stop().fadeOut(200); 
            $(".s4_wrap").children("h4").animate({"top":"0", "opacity":"1"},800);
        }
        
         else if(sc_top >= sec5 && sc_top < sec6){
            $(".right_menu li").eq(4).addClass("on");
           
            $(".sc5").stop().fadeIn(200);
            $(".download").stop().fadeIn(200);
            $(".scroll_top").stop().fadeOut(200);
            $(".s5_wrap").children("h4").animate({"top":"0", "opacity":"1"},800);
        }
        
         else if(sc_top >= sec6){
            $(".right_menu li").eq(5).addClass("on");
           
            $(".scl_top").stop().fadeIn(200);
            $(".scroll_top").stop().fadeIn(200);
             
            $(".download").stop().fadeOut(800);
             
            $("h5").animate({"top":"0", "opacity":"1"},800,function()           
                    {$(".s6_wrap").children(".download_big").animate({"top":"0","opacity":"1"},800);
                 
            });
        }
    });
 });