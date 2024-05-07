// Custom Driver.js library code to highlight scoreboard when page is loaded
const driver = window.driver.js.driver;

const driverObj = driver();

var timeDelay = 5700;

setTimeout(function() {
driverObj.highlight = driver({
  showProgress: false,
  steps: [
    { element: '#p-score', popover: { title: 'Your Score is here!', side: "bottom", } },
    { element: '#com-score', popover: { title: 'Your opponents score.', side: "left" } },
  ]
});
driverObj.drive();
}, timeDelay);

// Custom Typed.js library code for typing out rules of rock, paper, scissors
var typed = new Typed('.rock', {
  strings: ["Rock beats Paper"],
  typeSpeed: 35,
  showCursor: false
});
var typed = new Typed('.paper', {
  strings: ["^1200 Scissors beats Paper"],
  typeSpeed: 35,
  showCursor: false
});
var typed = new Typed('.scissors', {
  strings: ["^2500 Paper beats Rock"],
  typeSpeed: 35,
  showCursor: false,
});
var typed = new Typed('.points', {
  strings: ["^3700 First to reach 5 points wins!"],
  typeSpeed: 35,
  showCursor: false,
  onComplete: (self) => {}
});


// ====================================================================================

// getting html elements for the game
const loader = document.querySelector('.loader');
const title = document.querySelector('.result-title');
const winResult = document.querySelector('.win-result');
const loseResult = document.querySelector('.lose-result');
const drawResult = document.querySelector('.draw-result');
const gameOver1 = document.querySelector('.game-over1');
const gameOver2 = document.querySelector('.game-over2');

const playAgain = document.querySelector('.play-again');

let timeout1, timeout2;

// required to show and hide elements in bootstrap modal
function displayResult(resultElement) {
  winResult.style.display = 'none';
  loseResult.style.display = 'none';
  drawResult.style.display = 'none';
  gameOver1.style.display = 'none';
  gameOver2.style.display = 'none';

  timeout1 = setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    title.style.display = 'none';

    resultElement.style.display = 'block';

    playAgain.style.display = 'block';

    timeout2 = setTimeout(() => {
      resultElement.style.opacity = 1;
      playAgain.style.opacity = 1;
    }, 50);
  }, 1700);
}

playAgain.addEventListener('click', () => {
  // setting these elements back to default values so they look the same next time modal pops up
  loader.style.opacity = 1;
  loader.style.display = 'block';
  title.style.display = 'block';

  playAgain.style.display = 'none';
  playAgain.style.opacity = 0;

  gameOver1.style.display = 'none'
  gameOver2.style.display = 'none'
  gameOver1.style.opacity = '1'
  gameOver2.style.opacity = '1'

});

// setting vars for computing who wins/loses/draws
var playerScore = document.getElementById('player-score');
var compScore = document.getElementById('computer-score');

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

var computer = ['r', 'p', 's'];

"use-strict";

// run the game and select the rock,papoer or scissors as a parameter
rock.addEventListener('click', function () {
  runRPS(rock);
});

paper.addEventListener('click', function () {
  runRPS(paper);
});

scissors.addEventListener('click', function () {
  runRPS(scissors);
});


// Main part of logic using if statements
function runRPS(item) {
  var compChoice= computer[Math.floor(Math.random() * 3)];
  var playerChoice = item.id;

  if (playerChoice == 'rock') {
      if (compChoice== 's') {
        displayResult(winResult);
        setTimeout(function() {
        playerScore.textContent = Number(playerScore.textContent) + 1;
      }, 3000);
      } else if (compChoice== 'p') {
        displayResult(loseResult);
        setTimeout(function() {
          compScore.textContent = Number(compScore.textContent) + 1;
        }, 3000);
      } else {
        displayResult(drawResult);
      }
  }
  if (playerChoice == 'paper') {
      if (compChoice== 's') {
        displayResult(loseResult);
        setTimeout(function() {
          compScore.textContent = Number(compScore.textContent) + 1;
        }, 3000);
      } else if (compChoice== 'p') {
          displayResult(drawResult);
      } else {
        displayResult(winResult);
        setTimeout(function() {
          playerScore.textContent = Number(playerScore.textContent) + 1;
        }, 3000);
      }
  }
  if (playerChoice == 'scissors') {
      if (compChoice== 's') {
        displayResult(drawResult);
      } else if (compChoice== 'p') {
        displayResult(winResult);
        setTimeout(function() {
          playerScore.textContent = Number(playerScore.textContent) + 1;
        }, 3000);
      } else {
        displayResult(loseResult);
        setTimeout(function() {
          compScore.textContent = Number(compScore.textContent) + 1;
        }, 3000);
      }
  }
  endRPS();
}

// Stop above loop if the score equals 5 then somebody wins and scores are reset
function endRPS() {
  if (playerScore.innerText == 5) {
      displayResult(gameOver1)
      playerScore.innerText = 0;
      compScore.innerText = 0;
  } else if (compScore.innerText == 5) {
      displayResult(gameOver2)
      compScore.innerText = 0;
      playerScore.innerText = 0;
  }
}