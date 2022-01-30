/**************
Resure JS
**************/
$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 74) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 75) {
    $('.navbar').removeClass('navbar-fixed');
  }
});



/* $(document).ready(function(){
    $( "#b1" ).hover(function() {
           $('#feature-one').modal({
        show: true
    });
  });  
}); */

/* $(function() {

  $('#b1').hover(function() {
    var modalId = $('#feature-one').data('target');
    $(modalId).modal('show');

  });

}); */