// Code realting to the content submission page.

//checking to see if it is a video or an image. if image we want to give option to upload a gallery of images.
function isGallery() {
  if (document.getElementById("contentType").value == "video") {
    document.getElementById("btnContainer").style.display = "none";
    document.getElementById("sourceURL").style.display = "none";
    document.getElementById("URLcontainer").style.display = "none";
    document.getElementById("mediaURL").placeholder = "Youtube or Vimeo URL"
  } else {
    document.getElementById("btnContainer").removeAttribute("style");
    document.getElementById("sourceURL").removeAttribute("style");
    document.getElementById("URLcontainer").removeAttribute("style");
    document.getElementById("mediaURL").placeholder = "Image URL"
  }
}

// a counter to limit the amount of images posted.
let btnCounter = 0;

// Add Button for increasing amount of URL input boxes.
function moreImgLinks() {
  let newInput = document.createElement("INPUT");

// the limit is 6 images: the original first image + 5
  if (btnCounter < 5) {
    newInput.placeholder = `Image URL ${btnCounter+2}`;
    newInput.id = `mediaURL${btnCounter}`;
    document.getElementById("URLcontainer").appendChild(newInput);
    btnCounter ++;

  } else {
    window.alert("Woah, woah! Maximum is 6 images.");
  }
}

// Subtract Button for reducing amount of URL input boxes.
function lessImgLinks() {
  let lastInput = document.getElementById(`mediaURL${btnCounter-1}`);
  document.getElementById("URLcontainer").removeChild(lastInput);
  btnCounter --;
}


// On clicking the submit button, we grab the url that they provided and see if it is from youtube or vimeo and then use that to create a preview and convert the url to a video embedding.
function submitClick() {
  let mediaURL = document.getElementById("mediaURL").value;
  let youtubeVid = mediaURL.search("watch");
  let youtubeMob = mediaURL.search("youtu.be")
  let vimeoVid = mediaURL.search("vimeo");
  let vidEmbedUrl = "";
  let submitterName = document.getElementById("userName").value;
  let submitterURL = document.getElementById("userURL").value;
  let sourceURL = document.getElementById("sourceURL").value;


// If URL is for VIDEO.
if (document.getElementById("contentType").value == "video") {

    //don't show the ImagePreview div, but instead the video preview div.
    document.getElementById("imagePreview").style.display = "none";

    if (document.getElementById("mediaURL").value != "") {
        if (youtubeVid < 0 && vimeoVid < 0 && youtubeMob < 0) {
            window.alert("Invalid URL! Please try again using one of the following formats: \nhttps://vimeo.com/420397570 \nhttps://www.youtube.com/watch?v=nUUPedePJ4o \nhttp://youtu.be/nUUPedePJ4o");

        } else if (youtubeVid > 0) {
            vidEmbedUrl = `https://www.youtube.com/embed/${mediaURL.slice(youtubeVid+8, mediaURL.length)}?playsinline=0&rel=0`;

        } else if (vimeoVid > 0) {
            vidEmbedUrl = `https://player.vimeo.com/video/${mediaURL.slice(vimeoVid+10, mediaURL.length)}?playsinline=0&transparent=0`;

        } else if (youtubeMob > 0) {
            vidEmbedUrl = `https://www.youtube.com/embed/${mediaURL.slice(youtubeMob+9, mediaURL.length)}?playsinline=0&rel=0`;
        }
      document.getElementById("videoSrc").src = vidEmbedUrl;
      document.getElementById("videoPreview").removeAttribute("style");
    }

  // else If the URL is for IMAGES.
  } else {
      document.getElementById("videoPreview").style.display = "none";
      document.getElementById("imagePreview").removeAttribute("style");

      document.getElementById("sourceReference").href = sourceURL;
      document.getElementById("imgReference").src = mediaURL;

// Removeing the old contaier of gallery, so as a new container is created every time. Removes the bug of having duplicate images in the gallery!

      let removContainer = document.getElementById("scrollerContainer");
      removContainer.remove();

      let newContainer = document.createElement("SPAN");
      newContainer.id = "scrollerContainer";
      document.getElementById("sourceReference").appendChild(newContainer)

      for (let i = 0; i < btnCounter; i++) {
        let imgElement = document.createElement("IMG");
        imgElement.className = "imageContraints scrollCard";
        imgElement.src = document.getElementById(`mediaURL${i}`).value;
        imgElement.id = `galleryImages${i}`
        document.getElementById("scrollerContainer").appendChild(imgElement);
      }
  }


  // to display the preview container with the content. - we are removing the hide styling. 
  document.getElementById("previewContainer").removeAttribute("style");


// This is not connected to the above if condition, but is within the it is a video If condition.
  if (submitterURL != "" && submitterName != "") {
    document.getElementById("theURL").href = submitterURL;
    document.getElementById("theName").innerHTML = submitterName;
    document.getElementById("submitterContainer").removeAttribute("style");

  } else if (submitterName != "" && submitterURL == "") {
    document.getElementById("submitterContainer").removeAttribute("style");
    document.getElementById("theName").innerHTML = submitterName;
    document.getElementById("theURL").removeAttribute("href");

  } else {
    document.getElementById("submitterContainer").style.display = "none";
  }

  // Another if to see whether to put the dots on the images - only if it has gallery.
  if (btnCounter == 0) {
    document.getElementById("galleryDots").style.display = "none";
  } else {
    document.getElementById("galleryDots").removeAttribute("style");
  }

}






// for the url checker...could check to see if it is valid when the input is not active or tabbed out instead of at the submit button.


// https://vimeo.com/420397570
// https://www.youtube.com/watch?v=nUUPedePJ4o
// http://youtu.be/-wtIMTCHWuI
