let mainText = document.getElementById("mainText");
let submitBtn = document.getElementById("submitBtn");


function isVideo() {
  if (document.getElementById("contentType").value == "image") {
    document.getElementById("videoType").style.display = "none";
    document.getElementById("vimeoPreview").style.display = "none";
    document.getElementById("youtubePreview").style.display = "none";
  } else {
    document.getElementById("videoType").removeAttribute("style");
  }
}

function submitClick() {
  let videoURL = document.getElementById("videoURL").value;
  let youtubeVid = videoURL.search("watch");
  let vimeoVid = videoURL.search("vimeo");
  let vidEmbedUrl = "";

if (document.getElementById("videoURL").value != "") {
    if (youtubeVid < 0 && vimeoVid < 0) {
        window.alert("Invalid URL! Please try again using one of the following formats: \nhttps://vimeo.com/420397570 \nhttps://www.youtube.com/watch?v=nUUPedePJ4o");

    } else if (youtubeVid > 0) {
        vidEmbedUrl = `https://www.youtube.com/embed/${videoURL.slice(youtubeVid+8, videoURL.length)}?playsinline=0&rel=0`;
        document.getElementById("youtubeSrc").src = vidEmbedUrl;
        document.getElementById("youtubePreview").removeAttribute("style");
        document.getElementById("vimeoPreview").style.display = "none";

    } else if (vimeoVid > 0) {
        vidEmbedUrl = `https://player.vimeo.com/video/${videoURL.slice(vimeoVid+10, videoURL.length)}?playsinline=0&byline=0&transparent=0&portrait=0`;
        document.getElementById("vimeoSrc").src = vidEmbedUrl;
        document.getElementById("vimeoPreview").removeAttribute("style");
        document.getElementById("youtubePreview").style.display = "none";
    }
  }
}

// for the url checker...could check to see if it is valid when the input is not active or tabbed out instead of at the submit button.


// https://vimeo.com/420397570
// https://www.youtube.com/watch?v=nUUPedePJ4o