  //ui functions

var introBtn = document.getElementById("about-btn-nav");

introBtn.addEventListener('click', toIntro);


  function toIntro() {
    introBtn.className = "1";
    console.log("OI");
  }
