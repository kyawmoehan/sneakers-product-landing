$(function() {
    $('.menu-toggle, .fa-times').on('click',function() {
        $('nav').toggleClass('acitve');
        $('.overlay').toggleClass('menu-open');
    });
    $('.overlay').on('click',function() {
        $('nav').removeClass('acitve');
        $('.overlay').removeClass('menu-open');
    });
});