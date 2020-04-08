var as = bindAssets();


function bindAssets() {
  var as  = {};

  as.preview = document.getElementById("thumbnail-box");

  return as;
}

function fillGallery() {

  for (var i = 0; 0 < as.preview.children.length; i++) {
    as.preview.removeChild(as.preview.children[i]);
  }

	ARTWORKS.forEach(art => {

      var thumb = document.createElement("img");
      var id = art.id;
      thumb.className = "thumb";
      thumb.src = `./public/assets/artworks/${art.name}.${art.fileType}`;
      thumb.style.width = "200px";
      thumb.style.height = "auto";

      thumb.setAttribute("id", id);
      //thumb.addEventListener('click', showInfo);

      as.preview.appendChild(thumb);
    });

	return;
}

fillGallery();
