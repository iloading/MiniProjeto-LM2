/*SCROLL NAV*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.top = "0";
  } else {
    document.getElementById("scroll").style.top = "-6rem";
  }
  prevScrollpos = currentScrollPos;
}

/*MÁQUINA DE ESTADOS*//*Feito pelo professor Hélder Caixinha*/
var estado = 0;

function slt(a) {
  console.log(a);

  var x =  document.getElementById(a).src
  console.log (document.getElementById(a).src);

  var ult6 =  x.substr(x.length - 6);
  console.log(ult6);

  if (ult6 == 'to.png') {
    document.getElementById(a).src='./Imagens/preenchido.png';
  } else {
    document.getElementById(a).src='./Imagens/aberto.png';
  }
}



/*Carousel*/
var $item = $('.carousel-item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});



/*MODAL LOGIN E REGISTO*/
function addImage(pk) {
    alert("addImage: " + pk);
}

$('#myModal .save').click(function (e) {
    e.preventDefault();
    addImage(5);
    $('#myModal').modal('hide');
    //$(this).tab('show')
    return false;
})
