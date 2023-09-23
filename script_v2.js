const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const notificationBar = document.querySelector(".notification>p");
const cpuPlayInfo = document.querySelector("#cpu-info>.info-container");

const playButtons = document.querySelectorAll(".btn"); // play buttons Rock Paper ....

startBtn.addEventListener("click", startPlaying); // Start button will start the game
resetBtn.addEventListener("click", resetPlaying); // Reset button will reset game state

let firstRun = true;

let userScore = 0;
let cpuScore = 0;

function resetPlaying() {
  // reset scores and info
  const resetElements = document.querySelectorAll(".empty-first");
  resetElements.forEach((element) => (element.textContent = "-"));
  userScore = 0;
  cpuScore = 0;
  // if its first running of the game reset btn wont start the game after reset
  if (!firstRun) {
    startPlaying();
  }
}

function startPlaying() {
  // if its first run enable play buttons
  if (firstRun) {
    firstRun = false;
    // enable play button to play
    playButtons.forEach((btn) => btn.removeAttribute("disabled"));
  } // if its not first run reset game scores and infos
  else {
    // first reset game state before play
    resetPlaying();
  }

  notificationBar.textContent =
    "Game started! Choose Rock or Paper or Scissors";
  // play a round when a play button clicked
  playButtons.forEach((btn) => btn.addEventListener("click", playRound));
}

function playRound() {
  const handStates = ["rock", "paper", "scissors"];

  // generate random index between 0 and number of hand states-1
  const randomNumber = Math.floor(Math.random() * (handStates.length - 0.0001));

  const cpuChoice = handStates[randomNumber];
  const userChoice = this.id;

  //display cpu choice in info container
  cpuPlayInfo.textContent = cpuChoice;

  // check who is the winner of round
}
