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


/* var myModal = document.getElementById('feature-one')
var myInput = document.getElementById('f1')

myInput.addEventListener('mouseover', function () {
  myModal.show()
}) */


/* $(document).ready(function(){
	$( "#f1" ).hover('shown.bs.modal', function() {
		
	   $('#feature-one').modal({
		show: true
	});
  });  
}); */

/* $(function() {

  $('#f1').hover(function() {
    var modalId = $('#feature-one').data('target');
    $(modalId).modal('show');

  });

}); */