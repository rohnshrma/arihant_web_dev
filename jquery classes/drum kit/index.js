// Select all elements with the class "drum" using jQuery and store them in a variable
var drums = $(".drum");

// Loop through each drum button and add a click event listener
drums.each(function () {
  $(this).click(function (event) {
    // Get the text inside the clicked button, trim whitespace, and convert it to lowercase
    var key = $(this).text().trim().toLowerCase();

    // Call the function to play sound based on the key
    playSound(key);

    // Call the function to animate the button when clicked
    animate(key);
  });
});

// Detect key press events anywhere in the document (keyboard input)
$(document).keydown((event) => {
  // Get the pressed key from the event object, convert it to lowercase
  var key = event.key.toLowerCase();

  // Call the function to play sound based on the key
  playSound(key);

  // Call the function to animate the button corresponding to the pressed key
  animate(key);
});

// Function to play the corresponding drum sound based on the key pressed or clicked
function playSound(key) {
  // Use a switch statement to check which key was pressed/clicked
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3"); // Load crash cymbal sound
      audio.play(); // Play the sound
      break;
    case "a":
      var audio = new Audio("./sounds/snare.mp3"); // Load snare drum sound
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/kick-bass.mp3"); // Load bass drum sound
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3"); // Load first tom drum sound
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3"); // Load second tom drum sound
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3"); // Load third tom drum sound
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3"); // Load fourth tom drum sound
      audio.play();
      break;
  }
}

// Function to animate the button when it is clicked or the corresponding key is pressed
function animate(key) {
  // Select the button with the class corresponding to the key (e.g., ".w", ".a", etc.)
  $(`.${key}`).addClass("pressed"); // Add the "pressed" class to create the animation effect

  // Remove the "pressed" class after 100 milliseconds to restore the original look
  setTimeout(() => {
    $(`.${key}`).removeClass("pressed");
  }, 100);
}

// Detailed Explanation of Key Concepts

// 1. Selecting Elements with jQuery
// 	•	$(".drum") selects all elements with the class drum and stores them in the drums variable.
// 	•	This is how jQuery makes it easy to work with multiple elements.

// 2. Adding a Click Event to Each Button
// 	•	.each(function () { ... }) is used to loop through each .drum button.
// 	•	$(this).click(function () { ... }) adds an event listener to handle button clicks.

// 3. Handling Keyboard Events
// 	•	$(document).keydown((event) => { ... }) listens for key presses anywhere on the page.
// 	•	event.key gets the key pressed (e.g., “w”, “a”, “s”).
// 	•	toLowerCase() ensures that uppercase and lowercase key presses are treated the same.

// 4. Playing Sound with Audio Object
// 	•	var audio = new Audio("path/to/sound.mp3"); creates a new audio object.
// 	•	.play() starts playing the sound.

// 5. Animating the Button
// 	•	$(.${key}).addClass("pressed") adds a CSS class to change the button’s appearance.
// 	•	setTimeout(() => { ... }, 100); waits 100 milliseconds before removing the class to create an animation effect.
