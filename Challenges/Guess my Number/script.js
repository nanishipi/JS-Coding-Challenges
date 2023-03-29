"use strict";

let message = document.querySelector(".message");
let number = document.querySelector(".number");

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector(".highscore");

checkBtn.addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    message.textContent = "You did not insert a guess!";
  } else if (guess == randomNumber) {
    message.textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    number.textContent = randomNumber;

    if (score > highScore.textContent) {
      highScore.textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > randomNumber ? "Try a lower number" : "Try a higher number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  message.textContent = "Start guessing...";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
