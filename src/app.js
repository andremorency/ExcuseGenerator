import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys ", "the car "];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let WordPicker =
  window[
    ("who", "action", "what", "when".charAt(Math.floor(Math.random() * 4)))
  ];
document.write("The computer chose: " + WordPicker);

function wordPicker(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  let result =
    wordPicker(who) + wordPicker(action) + wordPicker(what) + wordPicker(when);
  document.getElementById("excuse").innerHTML = result;
  console.log(result);
};

//   let x = Math.floor(Math.random() * who.length);

//
//   console.log(" ");
