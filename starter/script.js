'use strict';
//Getting All buttons
const reset = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

//Current Values
const displayUser0 = document.querySelector('.player--0');
const displayUser1 = document.querySelector('.player--1');

// Score Board Values
const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
//necessay initilisation
let random = 0;
let score = [0, 0];
let indicator = 0;
dice.classList.add('hidden');
let gameState = true;

//test st

//test end

//events
if (gameState) {
  roll.addEventListener('click', rollDice);
  hold.addEventListener('click', addScore);
}
reset.addEventListener('click', resetGame);

//Dice Roll
function rollDice() {
  dice.classList.remove('hidden');
  let diceRoll = ~~(Math.random() * 6) + 1;
  dice.src = `dice-${diceRoll}.png`;
  console.log(diceRoll);

  if (diceRoll === 1) {
    document.querySelector(`#current--${indicator}`).textContent = 0;
    random = 0;
    indicator ? (indicator = 0) : (indicator = 1);
    currentUser();
  } else {
    random += diceRoll;
    document.querySelector(`#current--${indicator}`).textContent = random;
  }
}

//ScoreBoard after hold
function addScore() {
  currentUser();
  dice.classList.add('hidden');
  score[indicator] += random;
  document.querySelector(`#score--${indicator}`).textContent = score[indicator];
  random = 0;
  document.querySelector(`#current--${indicator}`).textContent = random;
  //if (score[indicator] >= 50) {
  //gameState = !gameState;
  //   highlightWinner();
  //}
  indicator ? (indicator = 0) : (indicator = 1);
}

//Reset
function resetGame() {
  gameState = !gameState;
  // highlightWinner();
  displayUser0.classList.add('player--active');
  displayUser1.classList.remove('player--active');
  random = 0;
  for (let i = 0; i < score.length; i++) {
    score[i] = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
    document.querySelector(`#score--${i}`).textContent = 0;
  }
  indicator ? (indicator = 0) : (indicator = 1);
  dice.classList.add('hidden');
}

// current user css
function currentUser() {
  displayUser0.classList.toggle('player--active');
  displayUser1.classList.toggle('player--active');
}

function highlightWinner() {
  document
    .querySelector(`.player--${indicator}`)
    .classList.toggle('player--winner');
}
