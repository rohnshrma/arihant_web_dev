var heading = document.getElementById("head");

var age = parseInt(prompt("Enter your age : "));
console.log(age >= 18);
if (age >= 18) {
  heading.innerText = "Eligible to Drive";
} else {
  heading.innerText = "Not Eligible to Drive";
}
