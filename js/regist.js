$(document).ready(function(){
    
    
     $(window).scroll(function(){
        
        var sc_top = $(window).scrollTop(); // 스크롤바 위치 받아오기
         
        var ap3 = $(".last").offset().top-250;
         
        if(sc_top >= ap3) {
            $(".last").children("p").animate({"padding-top":"25px" , "opacity":"1"},400,function(){
                    $(".last").children(".btn").animate({"opacity":"1"},20);
                });
            
        }
        
    });
    
    /*탭메뉴*/
    $(".app_intro_list li").click(function(){

        $(".app_intro_list li").children("span").removeClass("on");
        $(this).children("span").addClass("on");

        var list = $(this).index();

        $(".ail li").hide();
        $(".ail li").eq(list).show();

    });
    
    /*자동 슬라이드*/
    var left = -220;
    
    var auto2 = setInterval(function(){
        
        left = left - 1;
        
        $(".react_list").css({"left":left});
        
        if(left == -221) {
            
            $(".react_list li").first().appendTo(".react_list");
            
        }
        
        else if(left < -440) {
            
            left = -220;
            
        }
        
    },20);
    
    $(".react_list").mouseenter(function(){
        
        clearInterval(auto2);
        
    });
    
    $(".react_list").mouseleave(function(){
        
        auto2 = setInterval(function(){
        
    
        
      left = left - 1;
        
        $(".react_list").css({"left":left});
        
        if(left == -221) {
            
            $(".react_list li").first().appendTo(".react_list");
            
        }
        
        else if(left < -440) {
            
            left = -220;
            
        }
        
        },20);
        
    });

});