  // assets functions

var assets = [];
var user = {};

var as = bindAssets();

  //actions

as.submitBtn.addEventListener('click', addWork);
as.pwBtn.addEventListener('click', checkPw);
as.pw.addEventListener('keypress', (ev) => (ev.code === "Enter") ? checkPw() : null);
as.submitArt.addEventListener('click', addAsset);

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
  as.art = document.getElementById("art");
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


function addAsset(event) {

  var xhr = new XMLHttpRequest();
	var url = API.server + API.assets;

	var data = {
		name: as.artTitle.value,
    date: as.artDate.value,
		description: as.artInfo.value,
    imgURL: as.art.value
	};

  xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				as.pw.value = "";
				as.pwErrMsg.innerHTML = "Submission successful.";
			} else {
				as.pwErrMsg.innerHTML = "o nuuuuuu something went wrong :(";
			}
		}
	}

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(data));
}
