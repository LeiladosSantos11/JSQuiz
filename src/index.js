"use strict";
/*import "../.package.json/";
var readlineSync = require("readline-sync"); */

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

while (true) {
  command = readlineSync.prompt();
  console.log("hello");
}

// HIGH LEVEL
// Stories:

// I want to see a welcome page with a button to
// start the quiz

// (opt) If I have JS disabled in my browser I want to see a warning

// The button press will clear the greeting & the button & replace with the quiz

// The quiz will be in a form of a terminal

// Once the game is complete you see your score (clear screan + display score)

// -------

// Have a layout for the greeting
// implement buton onclick behaviour
// install readline-sync
// require readline-sync in index.js
// display the terminal
// loads a list of questions and display one by one
// for reach question
//   use readline to ask a question and store the answer somewhere
//   evaluate & update the score
// close readline
