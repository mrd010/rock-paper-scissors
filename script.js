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

function playRound(playerSelection = "", computerSelection) {
  // winner ---- user : 1 , computer : 2 , draw : 3 , incorrect input (game over) : 0 , No Input (game over) : -1
  let winner = -1;
  if (!playerSelection) {
    roundCount++;
    console.log("No input from user");
    return winner;
  }

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
      console.log("Incorrect input");
      break;
    case 1:
      userScore++;
      console.log(
        playerSelection +
          " beats " +
          computerSelection +
          " ! The Winner is User"
      );
      break;
    case 2:
      cpuScore++;
      console.log(
        computerSelection + " beats " + playerSelection + " ! The Winner is CPU"
      );
    case 3:
      console.log("It Was a Draw!");
      break;
    default:
      break;
  }
  roundCount++;
  return winner;
}

function game() {
  let roundCount = 1;
  let userScore = 0;
  let cpuScore = 0;

  playRound(
    prompt(`Round ${roundCount} - Please enter your choice`),
    getComputerChoice()
  );
  playRound(
    prompt(`Round ${roundCount} - Please enter your choice`),
    getComputerChoice()
  );
  playRound(
    prompt(`Round ${roundCount} - Please enter your choice`),
    getComputerChoice()
  );
  playRound(
    prompt(`Round ${roundCount} - Please enter your choice`),
    getComputerChoice()
  );
  playRound(
    prompt(`Round ${roundCount} - Please enter your choice`),
    getComputerChoice()
  );

  if (userScore > cpuScore) {
    console.log(`The Winner is User with ${userScore} Scores!`);
  } else if (cpuScore > userScore) {
    console.log(`The Winner is CPU with ${cpuScore} Scores!!!`);
    console.log("Sorry! You didn't won");
  } else {
    console.log("It Was a Draw! Not bad");
  }
}

game();
