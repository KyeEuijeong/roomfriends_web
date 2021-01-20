$(document).ready(function(){
    
    $(window).scroll(function(){
        
        var sc_top = $(window).scrollTop(); // 스크롤바 위치 받아오기
        
        var lastshow = $(".download").offset().top-250;
        var tabmenu = $(".merit").offset().top-100;
        
        if(sc_top >= lastshow) {
            $(".download").children(".dw_tx").animate({"padding-top":"25px" , "opacity":"1"},400,function(){
                $(".download").children(".down_btn").animate({"opacity":"1"},300);
            });
            
        }
        
        else if(sc_top >= tabmenu) {
            
            $(".merit_btn li").removeClass("on");
            $(".merit_btn .lastchild").addClass("on");
                
            $(".cll_fc").fadeOut(100);
            $(".cll_lc").fadeIn(100).stop();
            
        }
        
    });
    
    /*탭메뉴*/
    $(".merit_btn li").click(function(){

        $(".merit_btn li").removeClass("on");
        $(this).addClass("on");

        var list = $(this).index();

        $(".calculate li").hide();
        $(".calculate li").eq(list).show();

    });

});