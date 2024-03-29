const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const notificationBar = document.querySelector(".notification>p");
const cpuPlayInfo = document.querySelector("#cpu-info>.info-container");
const userScoreboard = document.querySelector("#user-score .score");
const cpuScoreboard = document.querySelector("#cpu-score .score");
const endGame = document.querySelector(".end");
const endGameText = endGame.querySelector("p");
const endGameRestart = endGame.querySelector("#restart");

console.log(endGameText);
const playButtons = document.querySelectorAll(".btn"); // play buttons Rock Paper ....

startBtn.addEventListener("click", startPlaying); // Start button will start the game
resetBtn.addEventListener("click", resetPlaying); // Reset button will reset game state
endGameRestart.addEventListener("click", () => {
  endGame.style.opacity = "0";
  endGame.style.zIndex = "-1";
  resetPlaying();
  startPlaying();
});

let firstRun = true;

let userScore = 0;
let cpuScore = 0;

function resetPlaying() {
  // reset scores and info and disable buttons
  const resetElements = document.querySelectorAll(".empty-first");
  resetElements.forEach((element) => (element.textContent = "-"));
  startBtn.removeAttribute("disabled");
  startBtn.classList.remove("disable");
  playButtons.forEach((btn) => {
    btn.setAttribute("disabled", "");
    btn.classList.remove("active");
  });
  notificationBar.textContent = "Game Restarted! Press start for a new game.";
  userScore = 0;
  cpuScore = 0;
}

function startPlaying() {
  // disable start button
  startBtn.setAttribute("disabled", "");
  startBtn.classList.add("disable");
  // enable play button to play
  playButtons.forEach((btn) => btn.removeAttribute("disabled"));

  notificationBar.textContent =
    "Game started! Choose Rock or Paper or Scissors";

  // play a round when a play button clicked
  playButtons.forEach((btn) => {
    btn.addEventListener("click", playRound);
  });
}

function playRound() {
  playButtons.forEach((btn) => btn.classList.remove("active"));
  this.classList.add("active");
  const handStates = ["rock", "paper", "scissors"];

  // generate random index between 0 and number of hand states-1
  const randomNumber = Math.floor(Math.random() * (handStates.length - 0.0001));

  const cpuChoice = handStates[randomNumber];
  const userChoice = this.id;

  //display cpu choice in info container
  cpuPlayInfo.textContent = cpuChoice;

  // check who is the winner of round
  const winner = checkWinner(userChoice, cpuChoice);
  if (winner === "draw") {
    notificationBar.textContent = `You and CPU both choose ${userChoice}. This round was a draw and no one gets a score.`;
  } else if (winner === "player1") {
    notificationBar.textContent = "You won this round! 1 point for you";
    userScore++;
  } else if (winner === "player2") {
    notificationBar.textContent = "You lost this round! 1 point for cpu";
    cpuScore++;
  }

  updateScoreboard();

  if (userScore == 5 || cpuScore == 5) {
    showGameOver();
  }
}

function checkWinner(player1Hand, player2Hand) {
  if (player1Hand === player2Hand) {
    return "draw";
  } else if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "paper" && player2Hand === "rock") ||
    (player1Hand === "scissors" && player2Hand === "paper")
  ) {
    return "player1";
  } else if (
    (player1Hand === "rock" && player2Hand === "paper") ||
    (player1Hand === "paper" && player2Hand === "scissors") ||
    (player1Hand === "scissors" && player2Hand === "rock")
  ) {
    return "player2";
  }
}

function updateScoreboard() {
  userScoreboard.textContent = userScore.toString();
  cpuScoreboard.textContent = cpuScore.toString();
}

function showGameOver() {
  playButtons.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
  console.log(userScore, cpuScore);
  if (userScore > cpuScore) {
    endGameText.textContent =
      "Congratulations! You won against CPU. Want a rematch???";
  } else if (userScore < cpuScore) {
    endGameText.textContent = "You lose! Maybe next time???";
  }

  endGame.style.opacity = "1";
  endGame.style.zIndex = "1";
}
