  //ui functions

var ui = bindUIs();

  // actions
ui.introBtn.addEventListener('click', toIntro);
ui.menuBtn.addEventListener('click', toggleMenu);

  //initialisation

function bindUIs() {
  var ui = {};

  ui.content = document.getElementsByClassName("content");
  ui.introBtn = document.getElementById("about-btn-nav");

  ui.navLinks = document.getElementById("nav-link");

  ui.menuBtn = document.getElementById("menu-btn");

  return ui;
}

  //functions

function toIntro() {
    window.location.href = "./public/intro.html";

}

function toggleMenu() {
  if (ui.navLinks.classList.contains("show")) {
    ui.navLinks.classList.remove("show");
  }
  else {
    ui.navLinks.classList.add("show");
  }

}
