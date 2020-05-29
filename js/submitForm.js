// Code realting to the content submission page.

//checking to see if it is a video or an image. if image we want to give option to upload a gallery of images.
function isGallery() {
  if (document.getElementById("contentType").value == "video") {
    document.getElementById("imgAddBtn").style.display = "none";
  } else {
    document.getElementById("imgAddBtn").removeAttribute("style");
  }
}

// On clicking the submit button, we grab the url that they provided and see if it is from youtube or vimeo and then use that to create a preview and convert the url to a video embedding.
function submitClick() {
  let mediaURL = document.getElementById("mediaURL").value;
  let youtubeVid = mediaURL.search("watch");
  let vimeoVid = mediaURL.search("vimeo");
  let vidEmbedUrl = "";
  let submitterName = document.getElementById("userName").value;
  let submitterURL = document.getElementById("userURL").value;


// If URL is for VIDEO.
if (document.getElementById("contentType").value == "video") {
    if (document.getElementById("mediaURL").value != "") {
        if (youtubeVid < 0 && vimeoVid < 0) {
            window.alert("Invalid URL! Please try again using one of the following formats: \nhttps://vimeo.com/420397570 \nhttps://www.youtube.com/watch?v=nUUPedePJ4o");

        } else if (youtubeVid > 0) {
            vidEmbedUrl = `https://www.youtube.com/embed/${mediaURL.slice(youtubeVid+8, mediaURL.length)}?playsinline=0&rel=0`;

        } else if (vimeoVid > 0) {
            vidEmbedUrl = `https://player.vimeo.com/video/${mediaURL.slice(vimeoVid+10, mediaURL.length)}?playsinline=0&transparent=0`;

        }
      document.getElementById("videoSrc").src = vidEmbedUrl;
      document.getElementById("videoPreview").removeAttribute("style");
    }

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

  // else If the URL is for IMAGES.
  } else {

  }
}
//
// If only name/ no url - text, but not hyperlink
// if both name and url - text, with hyperlink
// if both name and url is "" - hide text



// for the url checker...could check to see if it is valid when the input is not active or tabbed out instead of at the submit button.


// https://vimeo.com/420397570
// https://www.youtube.com/watch?v=nUUPedePJ4o
