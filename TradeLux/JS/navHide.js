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
/*MÁQUINA DE ESTADOS*/

var estado = 0;

function slt() {
  if (estado == 0) {
    document.getElementById('fav').src='../TradeLux/Imagens/preenchido.png';
    estado = 1;
  } else {
    document.getElementById('fav').src='../TradeLux/Imagens/aberto.png';
    estado = 0;
  }
}
