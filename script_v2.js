const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");

const playButtons = document.querySelectorAll(".btn");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

startBtn.addEventListener("click", startPlaying);

function startPlaying() {
  resetPlaying();
}

function resetPlaying() {
  playButtons.forEach((btn) => btn.removeAttribute("disabled"));
}
