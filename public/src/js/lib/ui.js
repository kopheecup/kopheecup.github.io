const SOCIALURL = {
  "email": "kopheecup@gmail.com",
  "git": "https://github.com/kopheecup",
  "pixiv": "https://www.pixiv.net/en/users/12824167",
  "ig": "https://www.instagram.com/toufoofah/",
  "fb": "https://www.facebook.com/toufoofah/",
  "da": "https://www.deviantart.com/kopheecup"
}

  //ui functions

var ui = bindUIs();

  // actions

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 27) {
    closeFrame();
  }
}
)


ui.homeBtn.addEventListener('click', goHome);
ui.toufoofah.addEventListener('click', goHome);
ui.logo.addEventListener('click', goHome);
ui.introBtn.addEventListener('click', showIntro);
ui.galleryBtn.addEventListener('click', showGallery);
ui.contactBtn.addEventListener('click', showContact);
ui.menuBtn.addEventListener('click', toggleMenu);
ui.closeBtn.addEventListener('click', closeFrame);

ui.github.addEventListener('click', toGit);

window.addEventListener('scroll', stick);

for (var i = 0; i < ui.contactLink.length; i++) {
  ui.contactLink[i].addEventListener('click', toSocial);

}

  //initialisation

function bindUIs() {
  var ui = {};

  ui.pagebody = document.getElementById("body");
  ui.content = document.getElementById("content");
  ui.home = document.getElementById("home-box");
  ui.intro = document.getElementById("intro-box");
  ui.gallery = document.getElementById("gallery-box");
  ui.contact = document.getElementById("contact-box");
  ui.body = document.getElementById("body");
  ui.footer = document.getElementById("footer");

  ui.menuBtn = document.getElementById("menu-btn");
  ui.homeBtn = document.getElementById("home-btn")
  ui.introBtn = document.getElementById("about-btn-nav");
  ui.galleryBtn = document.getElementById("gallery-btn-nav");
  ui.contactBtn = document.getElementById("contact-btn-nav");
  ui.closeBtn = document.getElementById("close-btn");

  ui.navLinks = document.getElementById("nav-link");
  ui.navBar = document.getElementById("nav");
  ui.logo = document.getElementById("logo");

  ui.header = document.getElementById("header");
  ui.headtitle = document.getElementById("headtitle");
  ui.toufoofah = document.getElementById("name");

  ui.github = document.getElementById("cs");
  ui.contactLink = document.getElementsByClassName("contact-link");

  return ui;
}

function toGit() {

  window.open(SOCIALURL.git);
}

function toSocial(event) {
  id = event.target.getAttribute("id");

  switch (id) {
    case "email":
      return window.open("mailto:" + SOCIALURL.email);
    case "git":
      return window.open(SOCIALURL.git);

    case "pixiv":
      return window.open(SOCIALURL.pixiv);

    case "ig":
      return window.open(SOCIALURL.ig);

    case "fb":
      return window.open(SOCIALURL.fb);

    case "da":
      return window.open(SOCIALURL.da);

    default:
      return;
  }
}

function showIntro() {
  const IntColour = "rgb(156, 109, 097)";

  if (ui.navLinks.classList.contains("intro")) {
    return;
  }
  else {
    ui.menuBtn.src = "./public/assets/images/icons_br.png";
    ui.pagebody.style.backgroundColor = IntColour;
    intro(ui.navLinks);
    closeAll();
    show(ui.intro);
    ui.content.classList.remove("gallery-content");

    // change header
    ui.header.classList.remove("home");
    ui.header.style.backgroundColor = "#FFF";
    ui.header.style.backgroundImage = "url('')";
    ui.headtitle.classList.remove("home");
    ui.homeBtn.innerHTML = "(Toufoofah)";
    window.scrollTo(0, 0);

  }
}

function showGallery() {
  const GalColour = "rgb(105, 057, 086)";

  if (ui.navLinks.classList.contains("gallery")) {
    return;
  }
  else {
    ui.menuBtn.src = "./public/assets/images/icons_p.png";
    ui.pagebody.style.backgroundColor = GalColour;
    gall(ui.navLinks);
    closeAll();
    show(ui.gallery);
    fillGallery();

    // change header
    ui.content.classList.add("gallery-content");
    ui.header.classList.remove("home");
    ui.header.style.backgroundColor = "#FFF";
    ui.header.style.backgroundImage = "url('')";
    ui.headtitle.classList.remove("home");
    ui.homeBtn.innerHTML = "(Toufoofah)";
    window.scrollTo(0, 0);

  }
}

function showContact() {
  const ConColour = "rgb(108, 108, 108)";

  if (ui.navLinks.classList.contains("contact")) {
    return;
  }
  else {
    ui.menuBtn.src = "./public/assets/images/icons_g.png";
    ui.pagebody.style.backgroundColor = ConColour;
    con(ui.navLinks);
    closeAll();
    show(ui.contact);
    ui.content.classList.remove("gallery-content");

    // change header
    ui.header.classList.remove("home");
    ui.header.style.backgroundColor = "#FFF";
    ui.header.style.backgroundImage = "url('')";
    ui.headtitle.classList.remove("home");
    ui.homeBtn.innerHTML = "(Toufoofah)";
    window.scrollTo(0, 0);

  }
}

function goHome() {
  if (ui.headtitle.classList.contains("home")) {
    window.scrollTo(0, 0);

  } else {
    ui.menuBtn.src = "./public/assets/images/menu.png";
    ui.pagebody.style = {};
    reset(ui.navLinks);
    closeAll();
    show(ui.home);
    ui.content.classList.remove("gallery-content");

    // change header
    ui.header.style = {};
    ui.headtitle.classList.add("home");
    ui.homeBtn.innerHTML = "<br>(Toufoofah)<br><br>Stress fueled doodler";
    window.scrollTo(0, 0);
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


function closeFrame() {

  for (var i = 0; 1 < as.fullFrame.children.length; i++) {
   as.fullFrame.removeChild(as.fullFrame.children[1]);
  }

  ui.body.classList.remove("lock");
  ui.navLinks.classList.remove("lock");
  ui.navBar.classList.remove("lock");
  ui.footer.classList.remove("lock");
  as.fullFrame.classList.remove("full-frame-active");

}

function closeAll() {

  for (var i = 1; i < ui.content.children.length; i++) {
    if (ui.content.children[i].classList.contains("hide")) {

    } else {
      hide(ui.content.children[i]);
    }

  }

  closeFrame();

}

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}

function intro(element) {
  element.classList.remove("gallery");
  element.classList.remove("contact");
  element.classList.add("intro");
}

function gall(element) {
  element.classList.remove("intro");
  element.classList.remove("contact");
  element.classList.add("gallery");
}

function con(element) {
  element.classList.remove("gallery");
  element.classList.remove("intro");
  element.classList.add("contact");
}

function reset(element) {
  element.classList.remove("gallery");
  element.classList.remove("contact");
  element.classList.remove("intro");
}

function stick() {
  var sticky = ui.navBar.offsetTop;
  var threshold = 104;

  if (window.pageYOffset > sticky && window.pageYOffset > threshold) {
    ui.logo.classList.add("show");
    ui.navBar.classList.add("sticky");

  } else {
    ui.logo.classList.remove("show");
    ui.navBar.classList.remove("sticky");
  }
}
