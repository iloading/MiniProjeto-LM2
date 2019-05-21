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
