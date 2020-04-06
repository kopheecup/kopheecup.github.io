  // assets functions

var as = bindAssets();

  //actions

as.submitBtn.addEventListener('click', addWork);
as.pwBtn.addEventListener('click', checkPw);
as.pw.addEventListener('keypress', (ev) => (ev.code === "Enter") ? checkPw() : null);

  //initialisation

function bindAssets() {
  var as = {};

  as.submitBtn = document.getElementById("submit-btn");
  as.submitBox = document.getElementById("submit-box");
  as.pw = document.getElementById("password");
  as.pwBtn = document.getElementById("pw-submit");
  as.pwErrMsg = document.getElementById("pw-info");
  as.submission = document.getElementById("submission");

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
