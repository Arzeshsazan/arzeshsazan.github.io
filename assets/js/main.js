//Contact Form

$('#submit').click(function(){
$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {   
 $('#success').html(response);
});
return false;
});

var aspect_ratio = 0.45;

// Store the jQuery object for future reference
var $my_div = $("#hero-area");

// Within your document ready function,
// Do an initial resize of #my_div
$(document).ready(function(){
  $my_div.css("min-height", $my_div.width() * aspect_ratio );
});

// Resize #my_div on browser resize
$(window).resize(function() {
  $my_div.css("min-height", $my_div.width() * aspect_ratio );
});
