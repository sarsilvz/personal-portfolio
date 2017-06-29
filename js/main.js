// TEST //
$('h3').click(function() {
  console.log("boom");
});



$('.circleimg').first().addClass('shown');


$('.next').click(function () {

  if ($('.shown').is(':last-child')) {
    return;
  }

  else {
    $('.shown').removeClass('shown').next('.circleimg').addClass('shown');
  }
});


$('.prev').click(function () {

  if ($('.shown').hasClass('arial')) {
    return;
  }

  else {
    $('.shown').removeClass('shown').prev('.circleimg').addClass('shown');
  }
});
