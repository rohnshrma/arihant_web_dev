// document object modal

// selectors

// select using id : html element
var heading = document.getElementById("heading");
// console.log(heading);

// select using class : htmlCollection (array)
// var paragraphs = document.getElementsByClassName("para");
// console.log(paragraphs);

// select using tagname : htmlCollection (array)
// var paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// getting and changing : inner text and html

// getting inner Text and html
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// setting inner text and html
// heading.innerText = "Bye world there was a heading";
// heading.innerText = "Bye world there was a <u>heading</u> ";

// heading.innerHTML = "Bye world there was a <u>heading</u> ";

// get id of an html element
// console.log(heading.id);

// set id of an html element
// heading.id = "india";

// console.log(heading.classList);

// var flag = document.getElementById("flag");

// gives us an map of attributes
// console.log(flag.attributes);

// setting an attributes value

// flag.setAttribute(
//   "src",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png"
// ) ;

var button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   button.style.backgroundColor = "teal";
//   button.style.color = "#fff";
//   button.style.padding = "10px 30px";
//   button.style.transition = "0.5s";

//   button.innerText = "Clicked";
// });

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "teal";
  button.style.color = "#fff";
  button.style.padding = "10px 30px";
  button.style.transition = "0.5s";

  button.innerText = "MouseOver";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "tomato";
  button.style.color = "#fff";
  button.style.padding = "10px 30px";
  button.style.transition = "0.5s";

  button.innerText = "MouseOut";
});
