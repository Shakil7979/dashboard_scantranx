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


$(document).on('click', '.job_edit_delete_btn', function (e) {
  e.stopPropagation(); 
   
  $('.job_edit_delete_box').not($(this).siblings('.job_edit_delete_box')).slideUp();
 
  $(this).siblings('.job_edit_delete_box').slideToggle();
});
 
$(document).on('click', function () {
  $('.job_edit_delete_box').slideUp();
});


$(document).on('click','.close_modal, .modal_close_overlay', function(){
  $('.modal_main_create_job').hide();
  $('.modal_close_overlay').hide();  
  return false;
})

$(document).on('click','.add_new_btn', function(){
  $('.modal_close_overlay').show(); 
  $('.modal_main_create_job').show(); 
  return false;
})
