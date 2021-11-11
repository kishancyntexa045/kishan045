
$("#ham").on('click', function (event) { 
    event.preventDefault();
    console.log('nav-bar');
    // var menu = $('collection-mobile-nav').getFirst('ul');
    var menu = $('#collection-mobile-nav ul:first-child');
    ($(this).hasClass('active')) ? $(this).removeClass('active'): $(this).addClass('active');
    ($(this).hasClass('active')) ? menu.addClass('active'): menu.removeClass('active');
})