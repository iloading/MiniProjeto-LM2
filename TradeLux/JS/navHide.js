var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.top = "0";
  } else {
    document.getElementById("scroll").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
