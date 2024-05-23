// Script that adds the class red to the HTML tag HEADER when clicked
$(document).ready(function(){
  $('#red_header').click(function() {
    $('header').addClass('red');
  });
});