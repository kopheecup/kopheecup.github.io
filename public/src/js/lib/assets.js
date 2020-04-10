  // assets functions

var assets = [];
var user = {};

var as = bindAssets();

if (assets.length == 0) {
    getAllAssets();
}

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

  as.gallery = document.getElementById("thumbnail-box");

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
        as.submission.classList.add("hide");

      } else {
        as.pwErrMsg.innerHTML = "o nuuuuuu something went wrong :(";
      }
    }
  }

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

function getAllAssets() {
  assets = [];

  var xhr = new XMLHttpRequest();
  var url = API.server + API.assets;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.response);
      res.forEach((asset) => {
        const { _id, name, date, description, imgURL } = asset;

        assets.push({
          id: _id,
          name: name,
          description: description,
          imgURL: imgURL
        });
      })
    }
  }

  xhr.open("GET", url, true);
  xhr.send();
}

function fillGallery(assets) {

  for (var i = 0; 0 < as.gallery.children.length; i++) {
    as.gallery.removeChild(as.gallery.children[i]);
  }

  assets.forEach((asset) => {
    var thumb = document.createElement("img");
    thumb.className = "preview";
    thumb.src = `${asset.imgURL}`;
    thumb.style.width = "200px";
    thumb.style.height = "auto";

    var id = asset.id ? asset.id: asset._id;
    thumb.setAttribute("id", id);
    //thumb.addEventListener('click', showInfo);

    as.gallery.appendChild(thumb);
  })
}

fillGallery(assets);
