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

////////////////////////
// 1. Event listener

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
  }
});

// target.addEventListener(type, listener, useCapture)
// useCapture accepts True or False (OPTIONAL)
