"use strict";
// DOM elements
const startButton = document.querySelector('#start-button');
const quizTerminal = document.querySelector('#quiz-terminal');

console.log(startButton);
console.log(quizTerminal);


// Hide & show the terminal


// Operating the quiz
const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");