"use strict";

let message = document.querySelector(".message");
let number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

checkBtn.addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    message.textContent = "You did not insert a guess!";
  } else if (guess == randomNumber) {
    message.textContent = "Correct Number!";
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = "Try a lower number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      message.textContent = "Try a higher number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  console.log(guess);
});
