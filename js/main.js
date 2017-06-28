// TEST //
$('h3').click(function() {
  console.log("boom");
});



$('.circleimg').first().addClass('shown');


var nextcircleimg = function () {

  if ($('.shown').is(':last-child')) {
    return;
  }

  else {
    $('.shown').removeClass('shown').next('.circleimg').addClass('shown');
  }
}

var prevcircleimg = function () {

  if ($('.shown').is(':first-child')) {
    return;
  }

  else {
    $('.shown').removeClass('shown').previous('.circleimg').addClass('shown');
  }
}


$('.next').click(nextcircleimg);
$('.prev').click(prevcircleimg);
