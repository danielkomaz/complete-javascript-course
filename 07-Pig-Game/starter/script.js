'use strict';

const players = document.querySelectorAll('.player');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

function resetGame() {
  for (let i = 0; i < players.length; i++) {
    resetPlayerScore(players[i]);
    resetCurrentScore(players[i]);
  }
  dice.style.display = 'none';

  getActivePlayer().classList.remove('player--winner');
  getActivePlayer().classList.remove('player--active');
  player1.classList.add('player--active');
}

function resetPlayerScore(player) {
  player.querySelector('.score').textContent = 0;
}
function resetCurrentScore(player) {
  player.querySelector('.current-score').textContent = 0;
}

function getActivePlayer() {
  return document.querySelector('.player--active');
}

function rollDice() {
  let rolledNum = Math.trunc(Math.random() * 6) + 1;
  const activePlayer = getActivePlayer();
  let activeScore = activePlayer.querySelector('.current-score').textContent;

  dice.style.display = 'flex';
  dice.src = `dice-${rolledNum}.png`;

  if (rolledNum === 1) {
    activePlayer.querySelector('.current-score').textContent = 0;
    switchPlayer();
  } else {
    activePlayer.querySelector('.current-score').textContent =
      Number(activeScore) + rolledNum;
  }
}

function holdScore() {
  const activePlayer = getActivePlayer();

  let activeScore = Number(
    activePlayer.querySelector('.current-score').textContent
  );
  let playerScore =
    Number(activePlayer.querySelector('.score').textContent) + activeScore;
  activePlayer.querySelector('.score').textContent = playerScore;

  resetCurrentScore(activePlayer);
  if (playerScore >= 100) {
    activePlayer.classList.add('player--winner');
    btnHold.disabled = true;
    btnRoll.disabled = true;
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  const activePlayer = getActivePlayer();
  if (activePlayer.querySelector('.name').textContent === 'Player 1') {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
}

resetGame();

btnNew.addEventListener('click', resetGame);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
