$(document).ready(function(){    
    
        /*모바일 메뉴 클릭*/
        $(".menu_icon").click(function(){
           
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
    
           /*스크롤 탑 생성*/
        $(window).scroll(function(){

            var sc_top = $(window).scrollTop(); // 스크롤바 위치 받아오기

            if(sc_top > 0) {

                $("#header").addClass("on");
                $(".scroll_top").fadeIn(1000);
                
                $(".main_wrap").addClass("on");
            }
            else {

                $("#header").removeClass("on");
                $(".scroll_top").hide();
                
                $(".main_wrap").removeClass("on");
            }

        $(".scroll_top").click(function(){

                $("html,body").stop().animate({"scrollTop":0});

        });


    });
    
 });