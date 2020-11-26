$( document ).ready(function() {

    new WOW().init();

$(window).scroll(function(){
        if( $(this).scrollTop() > 400 ){
            $('.btn-up').slideDown(100);
        } else{
            $('.btn-up').slideUp(100);
        } 
    });
});