let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  console.log(`Move: ${randomNumber}`);
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

function playRound(humanChoice, computerChoice) {
  humanChoice = capitalize(humanChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      console.log(`It's a loss! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "Scissors") {
      console.log(`It's a win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      console.log(`It's a loss! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "Rock") {
      console.log(`It's a win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      console.log(`It's a loss! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "Paper") {
      console.log(`It's a win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
    }
  }
}

function capitalize(string) {
  const firstCharacter = string.substr(0, 1).toUpperCase();
  const restOfString = string.substr(1).toLowerCase();
  return firstCharacter + restOfString;
}

playRound("Rock", getComputerChoice());