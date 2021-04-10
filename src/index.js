"use strict";
<<<<<<< HEAD
// DOM elements
const startButton = document.querySelector('#start-button');
const quizTerminal = document.querySelector('#quiz-terminal');
=======
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
>>>>>>> a32b2911586312a3ac2aa1350fa4b69202249fcf

console.log(startButton);
console.log(quizTerminal);


// Hide & show the terminal


// Operating the quiz
const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");