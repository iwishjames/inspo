// was checking onChange if it was video..then to reveal a url box.
function isVideo() {
  if (document.getElementById("contentType").value == "image") {
    document.getElementById("mediaURL").style.display = "none";
    document.getElementById("videoPreview").style.display = "none";
  } else {
    document.getElementById("mediaURL").removeAttribute("style");
  }
}


// btn to add existing onclick function.
    btn.onclick = function() { moreImgLinks() };


    if (galleryLimitReached == 0) {
      for (let i = 0; i < btnCounter; i++) {
        let imgElement = document.createElement("IMG");
        imgElement.className = "imageContraints scrollCard";
        imgElement.src = document.getElementById(`mediaURL${i}`).value;
        imgElement.id = `galleryImages${i}`
        document.getElementById("scrollerContainer").appendChild(imgElement);
      }
      galleryLimitReached = 1;

    } else if (galleryLimitReached == -1) {
      let lastImg = document.getElementById(`galleryImages${btnCounter}`);
      document.getElementById("scrollerContainer").removeChild(lastImg);
      galleryLimitReached = 0;
    }
