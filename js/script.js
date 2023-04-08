$('.mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu_active');
    $('.menu-wrap').toggleClass('menu_active');
    // $('body').toggleClass('hidden')

});