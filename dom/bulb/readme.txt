// Step 1: Create the HTML file (index.html)
// - Start with the basic HTML structure: <!DOCTYPE html>, <html>, <head>, and <body>
// - Add a <title> to the page inside <head>
// - Link the external CSS file using <link rel="stylesheet" href="style.css">
// - Inside <body>, create a <div> with an id="main" to hold everything
// - Inside the main div, add another div with id="image-area" to contain the bulb image
// - Insert an <img> tag with id="bulb" and set the default image as "light-bulb-off.png"
// - Add two <button> elements: one with id="on" and onclick="on()", another with id="off" and onclick="off()"
// - Finally, link the JavaScript file using <script src="./bulb.js"></script> before closing </body>

// Step 2: Create the CSS file (style.css)
// - Style the <body> to make it a flex container with display: flex
// - Use flex-direction: column to align items in a vertical stack
// - Center everything using align-items: center and justify-content: center
// - Set a gradient background from black to dark blue
// - Style the #main container with a semi-transparent background, box shadow, and border-radius
// - Add blur effect using backdrop-filter
// - Style the image: reduce its size and apply a shadow effect
// - Style the buttons with padding, rounded corners, and box shadows
// - Assign different background colors for the ON (green) and OFF (red) buttons

// Step 3: Create the JavaScript file (bulb.js)
// - First, get the bulb element from the DOM using document.getElementById("bulb")
// - Create a function named on()
//    - Change the bulb image to "light-bulb-on.png" using bulb.setAttribute("src", "path")
//    - Change the background color of the page to a bright gradient using document.body.style.background
// - Create another function named off()
//    - Change the bulb image back to "light-bulb-off.png"
//    - Reset the background color to dark
// - These functions will be triggered when the user clicks the ON or OFF buttons

// Step 4: Test the functionality
// - Open the HTML file in a browser
// - Click the "On" button and check if the bulb lights up and the background changes
// - Click the "Off" button and check if the bulb turns off and the background resets
// - If everything works as expected, the project is complete!