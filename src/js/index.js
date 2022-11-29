import './../css/index.css';
import { status, showStatus, closeStatus } from './utils.js';

const options = document.querySelectorAll('.option');
const response = document.getElementById('response');
const score = document.querySelectorAll('.score');

const scoreboard = [0, 0];
const cases = ["rock", "paper", "scissors"];

function game(userChoice) {
  const computer = Math.floor(Math.random() * 3);

  if (userChoice === cases[computer]) {
    status.classList.remove('lose');
    status.classList.remove('won');

    response.innerText = 'Draw!';
    showStatus();
  }

  if (userChoice === "rock" && cases[computer] === "paper") {
    status.classList.add('lose');
    status.classList.remove('won');

    response.innerText = 'You lose! Computer chose paper.';
    showStatus();

    scoreboard[1]++;
    score[1].innerText = scoreboard[1];
  }

  if (userChoice === "rock" && cases[computer] === "scissors") {
    status.classList.add('won');
    status.classList.remove('lose');

    response.innerText = 'You won! Computer chose scissors.';
    showStatus();

    scoreboard[0]++;
    score[0].innerText = scoreboard[0];
  }

  if (userChoice === "paper" && cases[computer] === "rock") {
    status.classList.add('won');
    status.classList.remove('lose');

    response.innerText = 'You won! Computer chose rock.';
    showStatus();

    scoreboard[0]++;
    score[0].innerText = scoreboard[0];
  }
  if (userChoice === "paper" && cases[computer] === "scissors") {
    status.classList.add('lose');
    status.classList.remove('won');

    response.innerText = 'You lose! Computer chose scissors.';
    showStatus();

    scoreboard[1]++;
    score[1].innerText = scoreboard[1];
  }

  if (userChoice === "scissors" && cases[computer] === "rock") {
    status.classList.add('lose');
    status.classList.remove('won');

    response.innerText = 'You lose! Computer chose rock.';
    showStatus();

    scoreboard[1]++;
    score[1].innerText = scoreboard[1];
  }

  if (userChoice === "scissors" && cases[computer] === "paper") {
    status.classList.add('won');
    status.classList.remove('lose');

    response.innerText = 'You won! Computer chose paper.';
    showStatus();

    scoreboard[0]++;
    score[0].innerText = scoreboard[0];
  }
}

options.forEach((option, index) => {
  option.addEventListener('click', () => game(cases[index]));
})

status.addEventListener('animationend', closeStatus);