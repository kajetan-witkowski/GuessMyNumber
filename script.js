'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//Math.random() returns value from 0 to 1 if we specify the multiply number we get random number from 0 to 20 in this case
//Math.trunc() change the returning value to integer 1,5 to 1
//We also adds 1 to the ending value to increase the value to 20 because we are ending with 19.99999999 at the end

document.querySelector('.check').addEventListener('click', function() {
  // const guess = document.querySelector('.guess').value;
  //returns value as a string
  //usully whenever we get a value from input interface typeof this value is string

  const guess = Number(document.querySelector('.guess').value);
  //returns typeof number using method Number()

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number!🚫 Please input value between 1 and 20';

    //when When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //when quess is to high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }

    //when guess is to low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});
// target.addEventListener(type, listener, useCapture)
//
// useCapture accepts True or False (OPTIONAL)
////////////////////////////////////////////////////////

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = 0;
});
