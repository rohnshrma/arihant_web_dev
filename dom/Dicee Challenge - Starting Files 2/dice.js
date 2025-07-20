// Selecting the first element with class "img1" (dice 1 image)
var dice1 = document.getElementsByClassName("img1")[0];

// Selecting the first element with class "img2" (dice 2 image)
var dice2 = document.getElementsByClassName("img2")[0];

// Selecting the element with ID "head" (heading displaying game results)
var head = document.getElementById("head");

// Adding an event listener for the "keydown" event on the document
document.addEventListener("keydown", function (event) {
  // Checking if the pressed key is the spacebar (" ")
  if (event.key == " ") {
    // Generating a random number between 1 and 6 for dice 1
    var num_1 = Math.floor(Math.random() * 6) + 1;

    // Generating a random number between 1 and 6 for dice 2
    var num_2 = Math.floor(Math.random() * 6) + 1;
    console.log(num_1, num_2);

    // Adding a "roll" class to both dice images for animation
    dice1.classList.add("roll");
    dice2.classList.add("roll");

    // Updating the `src` attribute of dice1 to display the corresponding dice image
    dice1.setAttribute("src", `./images/dice${num_1}.png`);

    // Updating the `src` attribute of dice2 to display the corresponding dice image
    dice2.setAttribute("src", `./images/dice${num_2}.png`);

    // Determining the winner and updating the heading text
    if (num_1 > num_2) {
      head.innerText = "Player 1 Wins ✅";
    } else if (num_2 > num_1) {
      head.innerText = "Player 2 Wins ✅";
    } else {
      head.innerText = "Draw ❌";
    }

    // Removing the "roll" class from both dice after 300 milliseconds to stop animation
    setTimeout(function () {
      dice1.classList.remove("roll");
      dice2.classList.remove("roll");
    }, 300);
  }
});

/*
Summary of Code Flow:
1. Selects dice images (`dice1`, `dice2`) and the heading element (`head`).
2. Listens for a keydown event on the document.
3. If the spacebar is pressed:
   - Generates random numbers (1-6) for both dice.
   - Updates the dice images accordingly.
   - Adds a rolling animation class.
   - Determines and displays the winner or a draw.
   - Removes the rolling animation after a short delay.
*/
