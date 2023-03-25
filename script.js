'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!!';
// document.querySelector('.number').textContent = 8;
// document.querySelector('.score').textContent = 10;
//
var bingoNo = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var hscore = [];
// document.querySelector('.highscore').textContent = bingoNo;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let nomer = Number(document.querySelector('.guess').value);
  if (!nomer) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else {
    if (nomer === bingoNo) {
      document.querySelector('.number').textContent = bingoNo;
      displayMessage('BINGO !!!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      score += 5;
      hscore.push(Number(score));
      console.log(hscore);
      let hscoretemp =
        score <= Math.max(...hscore) ? Math.max(...hscore) : score;
      console.log(hscoretemp);
      document.querySelector('.highscore').textContent = hscoretemp;
      document.querySelector('.score').textContent = score;
    } else {
      if (score > 1) {
        displayMessage(nomer < bingoNo ? 'Too Low' : 'Too High!!!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        score = 0;
        displayMessage('YOU LOSE!!!');
        document.querySelector('.score').textContent = score;
      }
      // } else if (nomer > bingoNo) {
      //   if (score > 1) {
      //     document.querySelector('.message').textContent = 'your Number is lower';
      //     score--;
      //     document.querySelector('.score').textContent = score;
      //   } else {
      //     score = 0;
      //     document.querySelector('.message').textContent = 'YOU LOSE!!!';
      //     document.querySelector('.score').textContent = score;
      //   }
      // }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  bingoNo = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  // document.querySelector('.highscore').textContent = bingoNo;
});
// function guestNumber(nomerUndi) {
//   let nomer = Number(nomerUndi);
//   if (nomer === bingoNo) {
//     document.querySelector('.number').textContent = bingoNo;
//     document.querySelector('.message').textContent = 'BINGO !!!';
//     document.querySelector('body').style.backgroundColor = 'green';
//     score += 20;
//     document.querySelector('.highscore').textContent = score < 0 ? 0 : score;
//   } else if (nomer < bingoNo) {
//     document.querySelector('.message').textContent = 'your Number is lower';
//     score -= 2;
//     document.querySelector('.highscore').textContent = score < 0 ? 0 : score;
//   } else if (nomer > bingoNo) {
//     document.querySelector('.message').textContent = 'your Number is higher';
//     score -= 2;
//     document.querySelector('.highscore').textContent = score < 0 ? 0 : score;
//   } else {
//     document.querySelector('.message').textContent = 'incorrect number';
//     score -= 2;
//     document.querySelector('.highscore').textContent = score < 0 ? 0 : score;
//   }
// }
// function again() {
//   bingoNo = getRandomInt(1, 20);
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.highscore').textContent = score < 0 ? 0 : score;
// }
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
