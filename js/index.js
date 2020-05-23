// Dark or Light Theme Based on Time.
if (new Date().getHours() < 7 || new Date().getHours() > 18 ) {
  document.getElementById("pageTheme").setAttribute("href","css/nightStyle.css");
} else {
  document.getElementById("pageTheme").setAttribute("href","css/dayStyle.css");
}

// Dark or Light Theme Based on Click.
function colorMode() {
  if (document.getElementById("pageTheme").getAttribute("href") == "css/dayStyle.css") {
    document.getElementById("pageTheme").setAttribute("href","css/nightStyle.css");
  } else {
    document.getElementById("pageTheme").setAttribute("href","css/dayStyle.css");
  }
}
