const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");

const playButtons = document.querySelectorAll(".btn"); // play buttons Rock Paper ....

startBtn.addEventListener("click", startPlaying); // Start button will start the game

resetBtn.addEventListener("click", resetPlaying); // Reset button will reset game state

let userScore = 0;
let cpuScore = 0;

function resetPlaying() {
  // disable play buttons
  playButtons.forEach((btn) => btn.setAttribute("disabled", ""));
  // reset scores and info
  const resetElements = document.querySelectorAll(".empty-first");
  resetElements.forEach((element) => (element.textContent = "-"));
}

function startPlaying() {
  // first reset game state before play
  resetPlaying();

  // enable play button to play
  playButtons.forEach((btn) => btn.removeAttribute("disabled"));

  // play a round when a play button clicked
  playButtons.forEach((btn) => btn.addEventListener("click", playRound));
}

function playRound() {
  const handStates = ["rock", "paper", "scissors"];
  // generate random index between 0 and number of hand states-1
  const randomNumber = Math.floor(Math.random() * (handStates.length - 0.0001));

  const cpuChoice = handStates[randomNumber];
  const userChoice = this.id;

  // check who is the winner of round
}
