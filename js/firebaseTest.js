let fireBaseRef = firebase.database().ref();
let posts;

//function to create an IMG element and post to the mediaContainer;
function createImgElement(link) {
  let imgTag = document.createElement("IMG");
  imgTag.src = link;
  document.getElementById("mediaContainer").appendChild(imgTag);
}

//function to create an IMG element and post to the mediaContainer;
function createVidElement(link) {
  let videoTag = document.createElement("iframe");
  videoTag.src = link;
  videoTag.width = "896";
  videoTag.height="504";
  document.getElementById("mediaContainer").appendChild(videoTag);
}

// on clicking the submit button, push the values into the firebase database.
function submitClick() {
  let theURL = document.getElementById("theURL").value;
  let mediaType = document.getElementById("mediaType").value;

  fireBaseRef.push().set({
    mediaType: mediaType,
    mediaURL: theURL,
    totalImgs: 10
  });
}

// get the object data from fireBase, loop through the objects, get the values and allocate to elements!
function getData() {
  fireBaseRef.on('value', function(snapshot) {
    posts = snapshot.val();

    for (let data in posts) {
      if (posts[data].mediaType == "image") {
        let mediaURL = `${posts[data].mediaURL}`;
        createImgElement(mediaURL);

      } else {
        let videoTag = document.createElement("iframe");
        let mediaURL = `${posts[data].mediaURL}`;
        createVidElement(mediaURL);
      }
    }
  });
}
