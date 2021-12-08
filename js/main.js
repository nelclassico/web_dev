$(document).ready(function(){
    var toque = $("#menu-resp");
    var menu = $(".menu");

    $(toque).on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 780 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });
});