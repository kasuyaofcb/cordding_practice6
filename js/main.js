function hamburger() {
  document.getElementById('line1').classList.toggle('linea');
  document.getElementById('line2').classList.toggle('lineb');
  document.getElementById('target').classList.toggle('slidex');
  document.getElementById('nav_f').classList.toggle('fadein');
  document.getElementById('nav_b').classList.toggle('fadein_bg');
}

document.getElementById('target').addEventListener('click', function () {
  hamburger();
});




$(function () {
  function toggleNav() {
    let body = document.body;
    var hamburger = document.getElementById("js-hamburger");
    var blackBg = document.getElementById("js-menu-bg");
    // クリックしたときにクラス付与
    hamburger.addEventListener("click", function () {
      body.classList.toggle("nav-open");
      hamburger.classList.toggle("active");
    });
    // クリックしたときにクラス付与
    blackBg.addEventListener("click", function () {
      body.classList.remove("nav-open");
      hamburger.classList.remove("active");
    });
  }
  toggleNav();
});



