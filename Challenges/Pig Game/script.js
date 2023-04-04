'use strict';

// Variables
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let randomNumber = Math.trunc(Math.random() * 6) + 1;

// Element variables

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

// Starting conditions

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  current0El.classList.add('player--active');
  current1El.classList.remove('player--active');
};
init();

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Function to get a new random number
const randomNumberGenerator = () => {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
};

// Function to switch player

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// Event to roll the dice

rollBtn.addEventListener('click', () => {
  if (playing) {
    diceEl.classList.remove('hidden');
    randomNumberGenerator();

    diceEl.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', () => {
  init();
});
