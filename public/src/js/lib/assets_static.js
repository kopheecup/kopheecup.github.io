var as = bindAssets();


function bindAssets() {
  var as  = {};

  as.preview = document.getElementById("thumbnail-box");
  as.col = document.getElementsByClassName("col");
  as.fullFrame = document.getElementById("full-frame");

  return as;
}

function fillGallery() {
  var col_len = 3;
  var j = 0;

  for (var i = 0; 0 < as.preview.children.length; i++) {
    as.preview.removeChild(as.preview.children[0]);

  }

  for (var i = 0; i < col_len; i++) {
    var col = document.createElement("div");
    col.className = "col";
    col.id = `col_${i}`;
    as.preview.appendChild(col);
    as.col[i] = document.getElementById(`col_${i}`);

  }

	ARTWORKS.forEach(art => {

      var thumb = document.createElement("div");
      var wrapper = document.createElement("div");
      var title = document.createElement("div");
      var img = document.createElement("img");
      var id = art.id;

      wrapper.setAttribute("id", id);
      title.setAttribute("id", id);
      thumb.className = "thumb";
      wrapper.className = "overlay";
      title.className = "art-title";
      img.src = `./public/assets/artworks/${art.name}.${art.fileType}`;
      title.innerHTML = `${art.title}`;

      wrapper.appendChild(title);
      thumb.appendChild(wrapper);
      thumb.appendChild(img);

      as.col[j % col_len].appendChild(thumb);
      wrapper.addEventListener('click', openInArt);

      j++

    });

	return;
}

function openFeatured(id) {
  getArtById(id, fillArtDeets);
}

function openInArt(event) {
  var id = event.target.getAttribute("id");
  getArtById(id, fillArtDeets);

}

function openExArt(event){
  var id = event.target.getAttribute("id");
  getArtById(id, redirect);
}

function getArtById(id, callback) {
  var art = ARTWORKS.find(a => a.id == id);
  callback(art);

  return;
}

function redirect(art) {
  var page = window.open(`./public/assets/artworks/${art.name}.${art.fileType}`);

}

function fillArtDeets(art) {
  as.fullFrame.classList.add("full-frame-active");
  ui.body.classList.add("lock");
  var img = document.createElement("img");
  var br = document.createElement("br");
  var title = document.createElement("p");
  var date = document.createElement("p");
  var description = document.createElement("p");
  var full = document.createElement("button");

  full.className = "open-btn";
  full.setAttribute("id", art.id);
  full.innerHTML = "View full image"
  img.className = "asset-preview";
  img.src = `./public/assets/artworks/${art.name}.${art.fileType}`;
  title.className = "title";
  title.innerHTML = art.title;
  date.innerHTML = toDate(art.date);
  description.innerHTML = art.description;
  description.className = "preview-desc";

  full.addEventListener('click', openExArt);

  as.fullFrame.appendChild(title);
  as.fullFrame.appendChild(img);
  as.fullFrame.appendChild(br);
  as.fullFrame.appendChild(full);
  as.fullFrame.appendChild(date);
  as.fullFrame.appendChild(description);

}

function toDate(str) {
  var dd = str.split("/")[0];
  var mm = str.split("/")[1];
  var yy = str.split("/")[2];

  if (dd == "0") {
    dd = "";
  }

  if (mm == "0") {
    mm = "";
  }

  return dd + " " + mm + " " + yy;
}
