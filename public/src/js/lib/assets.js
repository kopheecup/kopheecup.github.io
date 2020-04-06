  // assets functions

var assets = [];
var user = {};

var as = bindAssets();

  //actions

as.submitBtn.addEventListener('click', addWork);
as.pwBtn.addEventListener('click', checkPw);
as.pw.addEventListener('keypress', (ev) => (ev.code === "Enter") ? checkPw() : null);
as.submitArt.addEventListener('click', tmpPost);

  //initialisation

function bindAssets() {
  var as = {};

  as.submitBtn = document.getElementById("submit-btn");
  as.submitBox = document.getElementById("submit-box");
  as.pw = document.getElementById("password");
  as.pwBtn = document.getElementById("pw-submit");
  as.pwErrMsg = document.getElementById("pw-info");
  as.submission = document.getElementById("submission");

  as.artTitle = document.getElementById("artname");
  as.artDate = document.getElementById("artdate");
  as.artInfo = document.getElementById("description");
  as.art = document.getElementById("art").files[0];
  as.submitArt = document.getElementById("art-submit");

  return as;
}


  // functions

function addWork() {
  as.submitBox.classList.add("overlay-active");

}

function checkPw(event) {
	var password = as.pw.value;

	if (password != "0214") {
		as.pwErrMsg.innerHTML = "Wrong password IMPOSTER ᕕ( ᐛ )ᕗ";

    if (!as.submission.classList.contains("hide")) {
      as.submission.classList.add("hide");
    }

	} else {
    as.submission.classList.remove("hide");
    as.pwErrMsg.innerHTML = "";
  }
}

function tmpPost(e) {

  e.preventDefault();
  const file = document.getElementById('art').files;
  const formData = new FormData();

  formData.append('img', file[0]);

  fetch('http://localhost:3000/', {
    method: 'POST',
    body: formData,
  }).then(r => {
    console.log(r);
  })
  console.log(file[0]);
}

function addAsset(event) {
  var name = as.artTitle.value;
  var date = as.artDate.value;
  var description = as.artInfo;
  var path = window.URL.createObjectURL(as.art);
  var artData = as.art; //??
  var artType = as.art.file.type;

  var xhr = new XMLHttpRequest();
	var url = API.server + API.assets;

	var data = {
		name: as.artTitle.value,
    date: as.artDate.value,
		description: as.artInfo,
    path: window.URL.createObjectURL(as.art),
    img: {
      data: as.art,
      contentType: as.art.file.type
    }

	};

}
