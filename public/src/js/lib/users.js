function getCookieValue(key) {
  var cookies = document.cookie;
  cookies = cookies.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].indexOf(key) == 0) {
      return cookies[i].split("=")[1];
    }
  }
  return null;
}

function doGuestLogin() {

  if (getCookieValue("sid")) {
    return;
  }

  var xhr = new XMLHttpRequest();
  var url = API.server + API.guestLogin;

  xhr.open("GET", url, true);
  xhr.send();
}
