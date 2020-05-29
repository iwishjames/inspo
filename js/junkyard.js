// was checking onChange if it was video..then to reveal a url box.
function isVideo() {
  if (document.getElementById("contentType").value == "image") {
    document.getElementById("mediaURL").style.display = "none";
    document.getElementById("videoPreview").style.display = "none";
  } else {
    document.getElementById("mediaURL").removeAttribute("style");
  }
}
