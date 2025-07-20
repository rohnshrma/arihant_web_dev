// ================= Introduction to jQuery =================

// jQuery is a fast and lightweight JavaScript library that simplifies HTML document manipulation, event handling, and animations.

// Why use jQuery?
// - Simplifies DOM manipulation
// - Provides easier event handling
// - Includes built-in animations
// - Supports AJAX for dynamic content loading
// - Ensures cross-browser compatibility

// ================= How to Use jQuery =================

// First, you need to include the jQuery library in your HTML file.
// You can use a CDN (Recommended):
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// Basic jQuery Syntax:
// $(selector).action();
// - $(selector) selects an element (e.g., ID, class, tag).
// - .action() performs an operation (e.g., hide, show, change text).

// ================= Example: Selecting and Changing Text in jQuery =================

// JavaScript Selection:
// var head = document.getElementById("head"); // Selects the element with id "head"
// head.innerText = "Hello Arihant"; // Changes the text of the selected element
// console.log(head); // Logs the updated element to the console

// jQuery Selection:
// var heading = $("#head"); // Selects the element with id "head" using jQuery
// heading.text("Hello Arihant"); // Changes the text of the selected element

// ================= jQuery Selectors =================

// Selecting an element by ID:
var head = $("#head"); // Selects an element with the ID "head"

// Selecting elements by class name:
// var para = $(".para"); // Selects all elements with the class "para"
// console.log(para); // Logs the selected elements to the console

// Selecting elements by tag name:
// var heading = $("h1"); // Selects all <h1> elements
// console.log(heading); // Logs the selected elements to the console

// ================= Event Handling in jQuery =================

// JavaScript event listener (without jQuery)
// document.getElementById("head").addEventListener("click", () => {
//   console.log("clicked"); // Logs "clicked" when the element is clicked
// });

// jQuery event listeners:

// Click event
// $("#head").click(() => {
//   console.log("clicked"); // Logs "clicked" when the element is clicked
// });

// Double-click event
// $("#head").dblclick(() => {
//   console.log("double clicked"); // Logs "double clicked" when the element is double-clicked
// });

// Mouse enter event
// $("#head").mouseenter(() => {
//   console.log("mouse entered"); // Logs "mouse entered" when the mouse hovers over the element
// });

// Mouse leave event
// $("#head").mouseleave(() => {
//   console.log("mouse leave"); // Logs "mouse leave" when the mouse moves away from the element
// });

// ================= Summary =================
// jQuery makes JavaScript simpler by reducing code complexity for selecting elements, handling events, and modifying the DOM efficiently.

// console.log($("#head").text());
// console.log($("#head").html("good morning <u>arihant</u>"));
// console.log($("#head").text("good morning <u>arihant</u>"));

// append ()
// prepend ()
// after ()
// before ()

// head.append("this is rohan");
// head.prepend("my name is ");
// head.prepend("my name is ");

// head.after("<a href='https://www.google.com'>google</a>");
// head
//   .before("<a href='https://www.google.com'>google</a>")
//   .after("<a href='https://www.google.com'>google</a>");

// it removes the selected html element and its childrens
// $("#box").remove();

// it removes the childrens of the selected html element
// $("#box").empty();

// document.getElementById("box").classList.add("unique");

// add a new css class
// $("#box").addClass("unique");

// remove an existing css class
// $("#box").removeClass("unique");

// return the value of the specified property
// console.log($("#box").css("background-color"));
// console.log($("#box").css("width"));
// console.log($("#box").css("height"));

// var box = $("#box");
// var hideBtn = $("#hide");
// var showBtn = $("#show");

// hideBtn.click(() => {
//   box.hide();
// });

// showBtn.click(() => {
//   box.show();
// });

// $("#hide").click(() => $("#box").hide());
// $("#show").click(() => $("#box").show());

// var box = document.getElementById("box");
// var hideBtn = document.getElementById("hide");
// var showBtn = document.getElementById("show");

// hideBtn.addEventListener("click", () => (box.style.display = "none"));

// showBtn.addEventListener("click", () => (box.style.display = "block"));

// =============================== fade

// $("#fadeIn").click(() => {
//   //   $("#data").fadeIn();
//   //   $("#data").fadeIn("slow");
//   $("#data").fadeIn(4000);
// });
// $("#fadeOut").click(() => {
//   //   $("#data").fadeOut();
//   //   $("#data").fadeOut("slow");
//   $("#data").fadeOut(3000);
// });

// $("#toggleFade").click(() => {
//   $("#data").fadeToggle(3000);
// });

// $("#fadeTo").click(() => {
//   $("#data").fadeTo(3000, 0.1);
// });

// ============================== slide

var content = $("#data");

// $("#slideD").click(() => {
//   //   content.slideDown();
//   content.slideDown(3000);
// });

$("#slideU").click(() => {
  content.slideUp("3000");
});
