'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 8;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When guess is empty
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No Number!';

    // When guessed number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🎲 Too High!' : '🎲 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too high
  // } else if (guess > secretNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '🎲 Too High!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '🧨 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }
  //
  // When guess is too low
  // } else if (guess < secretNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '🎲 Too Low!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '🧨 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }
  // }
});
