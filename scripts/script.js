const btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const selection = e.target.textContent;
    switch (selection) {
      case "Rock":
        playRound("Rock", getComputerChoice());
        break;
      case "Paper":
        playRound("Paper", getComputerChoice());
        break;
      case "Scissors":
        playRound("Scissors", getComputerChoice());
        break;
    }
  });
});

const results = document.querySelector("#results");
const moves = document.querySelector("#moves");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let message;
  if (humanChoice === computerChoice) {
    message = "It's a draw!";
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      message = `It's a loss! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (computerChoice === "Scissors") {
      message = `It's a win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      message = `It's a loss! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (computerChoice === "Rock") {
      message = `It's a win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      message = `It's a loss! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (computerChoice === "Paper") {
      message = `It's a win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  }
  results.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
  moves.textContent = `${message}`;
  if (humanScore == 5 || computerScore == 5) {
    declareWinner();
  }
}

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return "Rock";
  } else if (randomNumber < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const human = prompt("Play a move");
  return human;
}



function capitalize(string) {
  const firstCharacter = string.substr(0, 1).toUpperCase();
  const restOfString = string.substr(1).toLowerCase();
  return firstCharacter + restOfString;
}

function declareWinner() {
  if (humanScore > computerScore) {
    results.textContent = "Human wins";
  } else if (humanScore < computerScore) {
    results.textContent = "Computer wins";
  } else {
    results.textContent = "It's a draw";
  }
}
