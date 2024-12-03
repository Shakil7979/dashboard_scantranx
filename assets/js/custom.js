$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

$(document).on('click','.bars_icon',function(){
    $('.sidebar-area').css({'left':'0'});
});

$(document).on('click','.sidebar_close',function(){
    $('.sidebar-area').css({'left':'-100%'});
});

$(document).on('click','.noti_btn',function(){
    $('.noti-toggle').slideToggle();
});

$(document).on('click','.search_btn',function(){
    $('.search-field-box').slideToggle();
});