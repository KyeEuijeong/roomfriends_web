$(document).ready(function(){
    
    
     $(window).scroll(function(){
        
        var sc_top = $(window).scrollTop(); // 스크롤바 위치 받아오기
         
        var ch1 = $(".mongyi").offset().top-100;
        var ch2 = $(".roomi").offset().top-100;
        var ch3 = $(".alo").offset().top-100;
        var ch4 = $(".roompang").offset().top-100;
        var ch5 = $(".wootani").offset().top-100;
         
        if(sc_top >= ch1) {
             $(".c1").animate({"background-position":"70px 100px"},400);
            
        }
         
        else if(sc_top >= ch2) {
             $(".roomi").children(".circle").animate({"background-position":"70px 100px"},400);
            
        }
         
        else if(sc_top >= ch3) {
             $(".alo").children(".circle").animate({"background-position":"70px 100px"},400);
            
        }
         
        else if(sc_top >= ch4) {
             $(".roompang").children(".circle").animate({"background-position":"70px 100px"},400);
            
        }
         
        else if(sc_top >= ch5) {
             $(".wootani").children(".circle").animate({"background-position":"70px 100px"},400);
            
        }
        
    });
});