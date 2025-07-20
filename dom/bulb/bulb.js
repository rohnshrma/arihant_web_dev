// Select the bulb image from the HTML document
var bulb = document.getElementById("bulb");

// Function to turn the bulb ON
function on() {
  // Change the image source to the "ON" bulb image
  bulb.setAttribute("src", "./images/light-bulb-on.png");

  // Change the background color when the bulb is ON
  document.body.style.background =
    "linear-gradient(180deg, tomato, skyblue 50%)";
}

// Function to turn the bulb OFF
function off() {
  // Change the image source to the "OFF" bulb image
  bulb.setAttribute("src", "./images/light-bulb-off.png");

  // Change the background color when the bulb is OFF
  document.body.style.background =
    "linear-gradient(180deg, black, rgb(20, 20, 58) 50%)";
}
