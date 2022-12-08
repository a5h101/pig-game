'use strict';
//Getting All buttons
const reset = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

//Current Values
const player0Current = document.querySelector('#current--0');
const player1Current = document.querySelector('#current--1');
const displayUser0 = document.querySelector('.player--0');
const displayUser1 = document.querySelector('.player--1');

// Score Board Values
const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');

//necessay initilisation
let random = 0;
let score = [0, 0];
let indicator = 1;
dice.classList.add('hidden');
let gameState = true;

//events
if (gameState) {
  roll.addEventListener('click', rollDice);
  hold.addEventListener('click', addScore);
}
reset.addEventListener('click', resetGame);

//Dice Roll
function rollDice() {
  dice.classList.remove('hidden');
  let tempPlayer;
  let diceRoll = ~~(Math.random() * 6) + 1;
  dice.src = `dice-${diceRoll}.png`;
  console.log(diceRoll);
  indicator ? (tempPlayer = player0Current) : (tempPlayer = player1Current);
  if (diceRoll === 1) {
    tempPlayer.textContent = 0;
    random = 0;
    indicator ? (indicator = 0) : (indicator = 1);
    currentUser();
  } else {
    random += diceRoll;
    tempPlayer.textContent = random;
  }
}

//ScoreBoard after hold
function addScore() {
  currentUser();
  dice.classList.add('hidden');
  if (indicator) {
    score[indicator] += random;
    player0Score.textContent = score[indicator];
    random = 0;
    player0Current.textContent = random;
    indicator ? (indicator = 0) : (indicator = 1);
  } else {
    score[indicator] += random;
    player1Score.textContent = score[indicator];
    random = 0;
    player1Current.textContent = random;
    indicator ? (indicator = 0) : (indicator = 1);
  }
}

//Reset
function resetGame() {
  displayUser0.classList.add('player--active');
  displayUser1.classList.remove('player--active');
  random =
    score[0] =
    score[1] =
    player0Current.textContent =
    player0Score.textContent =
    player1Current.textContent =
    player1Score.textContent =
      0;
  indicator ? (indicator = 0) : (indicator = 1);
  dice.classList.add('hidden');
}

// current user css
function currentUser() {
  displayUser0.classList.toggle('player--active');
  displayUser1.classList.toggle('player--active');
}
