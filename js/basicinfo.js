$(document).ready(function() {
  $('.tab-links li').on('click', function(e) {
    var addressVar = $('a', this).attr('href');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-content ' + addressVar).show().siblings().hide();
  
    e.preventDefault;
  });

});
