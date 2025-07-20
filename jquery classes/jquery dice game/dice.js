// Selecting the first dice image element using jQuery and storing it in the variable `dice1`
var dice1 = $(".img1");

// Selecting the second dice image element using jQuery and storing it in the variable `dice2`
var dice2 = $(".img2");

// Selecting the heading element (id="head") that will display the result (who wins or if it's a draw)
var head = $("#head");

// Adding an event listener to detect when a key is pressed anywhere on the webpage
$(document).keydown((event) => {
  // Checking if the pressed key is the spacebar (" ")
  if (event.key === " ") {
    // Generating a random number between 1 and 6 for the first dice
    var num_1 = Math.floor(Math.random() * 6) + 1;
    // Explanation:
    // - Math.random() generates a decimal between 0 and 1 (e.g., 0.723)
    // - Math.random() * 6 scales it to a number between 0 and 5.999
    // - Math.floor(...) rounds it down to an integer (0 to 5)
    // - Adding 1 shifts the range to 1 to 6, simulating a dice roll

    // Generating a random number between 1 and 6 for the second dice
    var num_2 = Math.floor(Math.random() * 6) + 1;

    // Adding a CSS class named "roll" to both dice images to trigger a rolling animation
    dice1.addClass("roll");
    dice2.addClass("roll");

    // Updating the image source of the first dice to reflect the randomly generated number
    dice1.attr("src", `./images/dice${num_1}.png`);
    // If num_1 = 3, the image path becomes "./images/dice3.png"

    // Updating the image source of the second dice
    dice2.attr("src", `./images/dice${num_2}.png`);

    // Checking which player wins and updating the heading text accordingly
    if (num_1 > num_2) {
      head.text("Player 1 Wins ✅"); // If Player 1 rolls a higher number, they win
    } else if (num_2 > num_1) {
      head.text("Player 2 Wins ✅"); // If Player 2 rolls a higher number, they win
    } else {
      head.text("Draw ❌"); // If both players roll the same number, it's a draw
    }

    // Removing the "roll" class from both dice images after 300 milliseconds
    // This resets the animation so it can play again on the next key press
    setTimeout(function () {
      dice1.removeClass("roll");
      dice2.removeClass("roll");
    }, 300);
  }
});
