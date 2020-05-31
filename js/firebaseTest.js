let fireBaseRef = firebase.database().ref();
let posts;

function submitClick() {
  let theURL = document.getElementById("theURL").value;
  let mediaType = document.getElementById("mediaType").value;

  fireBaseRef.push().set({
    mediaType: mediaType,
    mediaURL: theURL
  });
}

// get the Data and from the data, loop through the objects and get the value!
function getData() {
  fireBaseRef.on('value', function(snapshot) {
    posts = snapshot.val();

    for (let data in posts) {
      if (posts[data].mediaType == "image") {
        let imgTag = document.createElement("IMG");
        imgTag.src = `${posts[data].mediaURL}`;
        document.getElementById("mediaContainer").appendChild(imgTag);
      } else {
        let videoTag = document.createElement("iframe");
        videoTag.src = `${posts[data].mediaURL}`;
        videoTag.width = "896";
        videoTag.height="504";
        document.getElementById("mediaContainer").appendChild(videoTag);
      }
    }
  });
}
