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
    document.getElementById(a).src='./Imagens/preenchido.png'; /*./Imagens/preenchido_preto.png*/ /*NOVAS IMAGENS*/
  } else {
    document.getElementById(a).src='./Imagens/aberto.png';  /*./Imagens/aberto_preto.png */ /*NOVAS IMAGENS*/
  }
}

/*MÁQUINA DE ESTADOS para coração preto*//*Feito pelo professor Hélder Caixinha*/
var estado = 0;

function slt2(a) {
  console.log(a);

  var x =  document.getElementById(a).src
  console.log (document.getElementById(a).src);

  var ult12 =  x.substr(x.length - 12);
  console.log(ult12);

  if (ult12 == 'to_preto.png') {
    document.getElementById(a).src='./Imagens/preenchido_preto.png'; /*./Imagens/preenchido_preto.png*/ /*NOVAS IMAGENS*/
  } else {
    document.getElementById(a).src='./Imagens/aberto_preto.png';  /*./Imagens/aberto_preto.png */ /*NOVAS IMAGENS*/
  }
}

/*Carousel*/



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

/*FIX PARA SHIFT DA PÁGINA QUANDO SE ABRE O MODAL */
$(document).ready(function () {
   $('.modal').on('show.bs.modal', function () {
       if ($(document).height() > $(window).height()) {
           // no-scroll
           $('body').addClass("modal-open-noscroll");
       }
       else {
           $('body').removeClass("modal-open-noscroll");
       }
   });
   $('.modal').on('hide.bs.modal', function () {
       $('body').removeClass("modal-open-noscroll");
   });
})
