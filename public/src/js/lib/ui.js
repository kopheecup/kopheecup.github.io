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

document.addEventListener('keydown', (event) => {
	if (event.keyCode == 27) {
    as.submitBox.classList.remove("overlay-active");
  }
}
)


ui.homeBtn.addEventListener('click', goHome);
ui.toufoofah.addEventListener('click', goHome);
ui.introBtn.addEventListener('click', showIntro);
// ui.galleryBtn.addEventListener('click', showGallery);
// ui.contactBtn.addEventListener('click', showContact);
ui.menuBtn.addEventListener('click', toggleMenu);

  //initialisation

function bindUIs() {
  var ui = {};

	ui.pagebody = document.getElementById("body");
  ui.content = document.getElementById("content");
	ui.home = document.getElementById("home-box");
	ui.intro = document.getElementById("intro-box");
	ui.gallery = document.getElementById("gallery-box");
	ui.contact = document.getElementById("contact-box");

  ui.homeBtn = document.getElementById("home-btn")
  ui.introBtn = document.getElementById("about-btn-nav");
  ui.galleryBtn = document.getElementById("gallery-btn-nav");
  ui.contactBtn = document.getElementById("contact-btn-nav");
  ui.closeBtns = document.getElementsByClassName("close-btn");

  ui.navLinks = document.getElementById("nav-link");

  ui.menuBtn = document.getElementById("menu-btn");

	ui.header = document.getElementById("header");
	ui.headtitle = document.getElementById("headtitle");
	ui.toufoofah = document.getElementById("name");

  return ui;
}

for (var i = 0; i < ui.closeBtns.length; i++) {
	ui.closeBtns[i].addEventListener('click', closeOverlay);

}

  //functions

const HomeColour ="rgb(030, 068, 126)" ;

const GalColour = "rgb(105, 057, 086)";
const ConColour = "rgb(108, 108, 108)";

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


function showIntro() {
	const IntColour = "rgb(156, 109, 097)";

	if (ui.introBtn.classList.contains("active")) {
		return;
	}
	else {
		ui.introBtn.classList.add("active");
		ui.pagebody.style.backgroundColor = IntColour;
		closeAll();
		show(ui.intro);

		// change header
		ui.header.classList.remove("home");
		ui.header.style.backgroundColor = "#FFF";
		ui.header.style.backgroundImage = "url('')";
		ui.headtitle.classList.remove("home");
		ui.homeBtn.innerHTML = "(Toufoofah)";

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

function toContact() {
  if (ui.contactBtn.classList.contains("active")) {
    return;
  }
  else if (ui.introBtn.classList.contains("active")) {
    window.location.href = "./contact.html";
  }
  else if (ui.galleryBtn.classList.contains("active")) {
    window.location.href = "./contact.html";
  } else {
    window.location.href = "./public/contact.html";
  }

}

function goHome() {
  if (ui.headtitle.classList.contains("home")) {
    return;

  } else {
		ui.introBtn.classList.remove("active");
		ui.pagebody.style = {};
		closeAll();
		show(ui.home);

		// change header
		ui.header.style = {};
		ui.headtitle.classList.add("home");
		ui.homeBtn.innerHTML = "<br>(Toufoofah)<br><br>Stress fueled doodler";
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

function closeAll() {

	for (var i = 0; i < ui.content.children.length; i++) {
		if (ui.content.children[i].classList.contains("hide")) {

		} else {
			hide(ui.content.children[i]);
		}

	}

}

function hide(element) {
	element.classList.add("hide");
}

function show(element) {
	element.classList.remove("hide");
}
