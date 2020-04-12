$(document).ready(function(){
 
        $('.section').scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
 
        $('.scrollup').click(function(){
            $(".section").animate({ scrollTop: 0 }, 600);
            return false;
        });
 
});
