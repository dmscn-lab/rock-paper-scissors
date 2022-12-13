import './../css/index.css';
import { status, showStatus, closeStatus } from './utils.js';

const options = document.querySelectorAll('.option');
const response = document.getElementById('response');
const score = document.querySelectorAll('.score');

const scoreboard = [0, 0];
const cases = ["rock", "paper", "scissors"];

function updateScore(index) {
  scoreboard[index]++;
  score[index].innerText = scoreboard[index];
}

function game(userChoice) {
  const computer = Math.floor(Math.random() * 3);

  if (userChoice === cases[computer]) {
    status.updateStatus('won', 'lose', true);
    response.innerText = 'Draw!';

    showStatus();
  }

  else if (userChoice === "rock" && cases[computer] === "paper") {
    status.updateStatus('lose', 'won');
    response.innerText = `You lose! Computer chose ${cases[computer]}.`;

    showStatus();
    updateScore(1);
  }

  else if (userChoice === "paper" && cases[computer] === "scissors") {
    status.updateStatus('lose', 'won');
    response.innerText = `You lose! Computer chose ${cases[computer]}.`;

    showStatus();
    updateScore(1);
  }

  else if (userChoice === "scissors" && cases[computer] === "rock") {
    status.updateStatus('lose', 'won');
    response.innerText = `You lose! Computer chose ${cases[computer]}.`;

    showStatus();
    updateScore(1);
  }

  else {
    status.updateStatus('won', 'lose');
    response.innerText = `You won! Computer chose ${cases[computer]}.`;

    showStatus();
    updateScore(0);
  }
}

options.forEach((option, index) => {
  option.addEventListener('click', () => game(cases[index]));
})

status.addEventListener('animationend', closeStatus);