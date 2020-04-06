  //ui functions

var ui = bindUIs();

  // actions
ui.homeBtn.addEventListener('click', goHome);
ui.introBtn.addEventListener('click', toIntro);
ui.menuBtn.addEventListener('click', toggleMenu);

  //initialisation

function bindUIs() {
  var ui = {};

  ui.content = document.getElementsByClassName("content");
  ui.homeBtn = document.getElementById("home-btn")
  ui.introBtn = document.getElementById("about-btn-nav");
  ui.galleryBtn = document.getElementById("gallery-btn-nav");
  ui.contactBtn = document.getElementById("contact-btn-nav");

  ui.navLinks = document.getElementById("nav-link");

  ui.menuBtn = document.getElementById("menu-btn");

  return ui;
}

  //functions

function toIntro() {
  if (ui.introBtn.classList.contains("active")) {
    return;
  }
  else if (ui.galleryBtn.classList.contains("active")) {
    window.location.href = "./intro.html";
  }
  else if (ui.contactBtn.classList.contains("active")) {
    window.location.href = "./intro.html";
  } else {
    window.location.href = "./public/intro.html";
  }

}


function goHome() {
  if (ui.homeBtn.classList.contains("home")) {
    return;
  } else {
    window.location.href = "../index.html";
  }

}


function toggleMenu() {
  if (ui.navLinks.classList.contains("show")) {
    ui.navLinks.classList.remove("show");
  }
  else {
    ui.navLinks.classList.add("show");
  }

}
