var as = bindAssets();


function bindAssets() {
  var as  = {};

  as.preview = document.getElementById("thumbnail-box");
  as.col = document.getElementsByClassName("col");

  return as;
}

function fillGallery() {
  var col_len = 3;
  var j = 0;

  for (var i = 0; 0 < as.preview.children.length; i++) {
    as.preview.removeChild(as.preview.children[i]);
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
      var img = document.createElement("img");
      var id = art.id;
      thumb.className = "thumb";
      img.src = `./public/assets/artworks/${art.name}.${art.fileType}`;

      thumb.setAttribute("id", id);

      thumb.appendChild(img);

      as.col[j % col_len].appendChild(thumb);

      j++

    });

	return;
}
