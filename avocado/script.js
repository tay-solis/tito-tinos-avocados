$('.dropdown').click(function(){
  $(this).children('.dropdown-content').slideToggle('fast');
});

$('.hamburger').click(function(){
  $('.navCollapse').slideToggle();
});
