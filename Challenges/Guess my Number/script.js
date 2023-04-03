"use strict";

// Variables
let number = document.querySelector(".number");

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector(".highscore");

// Changes text on the message field
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Changes text on the score field
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

// Check event
checkBtn.addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    displayMessage("You did not insert a guess!");
  } else if (guess == randomNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    number.textContent = randomNumber;

    if (score > highScore.textContent) {
      highScore.textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? "Try a lower number" : "Try a higher number"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game!");
      displayScore(0);
    }
  }
});

// Again event
againBtn.addEventListener("click", () => {
  displayMessage("Start guessing...");
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  displayScore(score);
  document.querySelector(".guess").value = "";
});
