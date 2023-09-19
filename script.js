function getComputerChoice() {
  // Rock : 1
  // Paper : 2
  // Scissors : 3
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand == 1) {
    return "rock";
  } else if (rand == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // winner ---- user : 1 , computer : 2 , draw : 3 , incorrect input (game over) : 0
  let winner = 0;
  playerSelection = playerSelection.toLowerCase();

  if (
    !(
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    )
  ) {
    winner = 0;
  } else {
    /* user win conditions */
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      winner = 1;
    }
    // cpu win conditions
    else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      winner = 2;
    }
    // other conditions are draw
    else {
      winner = 3;
    }
  }

  switch (winner) {
    case 0:
      return "Incorrect input";
      break;
    case 1:
      roundCount++;
      return (
        playerSelection +
        " beats " +
        computerSelection +
        " ! The Winner is User"
      );
      break;
    case 2:
      roundCount++;
      return (
        computerSelection + " beats " + playerSelection + " ! The Winner is CPU"
      );
    case 3:
      roundCount++;
      return "It Was a Draw!";
      break;
    default:
      break;
  }
}

let roundCount = 1;
let cpuChoice = getComputerChoice();
console.log(cpuChoice);
console.log(
  playRound(prompt(`Round ${roundCount} - Please enter your choice`), cpuChoice)
);
