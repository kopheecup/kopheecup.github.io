const API = {
	server: window.location.origin + "/api",
	guestLogin: "/users/guest",
	users: "/users",
	heartbeat: "/users/heartbeat",
	assets: "/assets"
}

  //ui functions

var ui = bindUIs();

  // actions

// document.addEventListener('keydown', (event) => {
// 	if (event.keyCode == 27) {
//     as.submitBox.classList.remove("overlay-active");
//   }
// }
// )


ui.homeBtn.addEventListener('click', goHome);
ui.introBtn.addEventListener('click', toIntro);
ui.galleryBtn.addEventListener('click', toGallery);
ui.menuBtn.addEventListener('click', toggleMenu);

  //initialisation

function bindUIs() {
  var ui = {};

  ui.content = document.getElementsByClassName("content");
  ui.homeBtn = document.getElementById("home-btn")
  ui.introBtn = document.getElementById("about-btn-nav");
  ui.galleryBtn = document.getElementById("gallery-btn-nav");
  ui.contactBtn = document.getElementById("contact-btn-nav");
  // ui.closeBtns = document.getElementsByClassName("close-btn");

  ui.navLinks = document.getElementById("nav-link");

  ui.menuBtn = document.getElementById("menu-btn");

  return ui;
}

// for (var i = 0; i < ui.closeBtns.length; i++) {
// 	ui.closeBtns[i].addEventListener('click', closeOverlay);
//
// }

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

function toGallery() {
  if (ui.galleryBtn.classList.contains("active")) {
    return;
  }
  else if (ui.introBtn.classList.contains("active")) {
    window.location.href = "./gallery.html";
  }
  else if (ui.contactBtn.classList.contains("active")) {
    window.location.href = "./gallery.html";
  } else {
    window.location.href = "./public/gallery.html";
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


function closeOverlay(element) {
  var target = event.currentTarget;

	while (target.parentElement) {
		if (target.parentElement.classList.contains("overlay-active")) {
			target.parentElement.classList.remove("overlay-active");
		}
		target = target.parentElement;
  }
}
