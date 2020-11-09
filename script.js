'use strict';

// console.log(document.querySelector('.message').textContent);
// //returns Start quessing

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// //changing value of p with class message to 🎉 Correct Number!

// console.log(document.querySelector('.message').textContent);

// //returns ' 🎉 Correct Number! ' new value

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);
// //returns 23

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
//Math.random() returns value from 0 to 1 if we specify the multiply number we get random number from 0 to 20 in this case
//Math.trunc() change the returning value to integer 1,5 to 1
//We also adds 1 to the ending value to increase the value to 20 because we are ending with 19.99999999 at the end

document.querySelector('.check').addEventListener('click', function() {
  // const guess = document.querySelector('.guess').value;
  //returns value as a string
  //usully whenever we get a value from input interface typof this value is string

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //returns typeof number using method Number()

  if (!guess) {
    document.querySelector('.message').textContent =
      'No number!🚫 Please input value between 1 and 20';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});
// target.addEventListener(type, listener, useCapture)
//
// useCapture accepts True or False (OPTIONAL)
////////////////////////////////////////////////////////
