// script.js
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const endScreen = document.getElementById("endScreen");
const finalScore = document.getElementById("finalScore");

const totalCells = 15;
let score = 0;
let timeLeft = 30;
let bugIndexes = [];
let splatIndex = null;
let timer;

function createGrid() {
  grid.innerHTML = "";
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    grid.appendChild(cell);
  }
}

function randomEmptyCells(count) {
  const available = [...Array(totalCells).keys()].filter(i => !bugIndexes.includes(i));
  const result = [];
  while (result.length < count && available.length > 0) {
    const randIndex = Math.floor(Math.random() * available.length);
    result.push(available.splice(randIndex, 1)[0]);
  }
  return result;
}

function spawnBugs() {
  bugIndexes = randomEmptyCells(3);
  bugIndexes.forEach(index => {
    const cell = grid.children[index];
    const bug = document.createElement("div");
    bug.classList.add("bug");
    bug.addEventListener("click", () => handleBugClick(index));
    cell.appendChild(bug);
  });
}

function handleBugClick(index) {
  score++;
  scoreDisplay.textContent = score;

  if (splatIndex !== null) {
    const prev = grid.children[splatIndex];
    const splat = prev.querySelector(".splat");
    if (splat) splat.remove();
  }

  const cell = grid.children[index];
  cell.innerHTML = "";
  const splat = document.createElement("div");
  splat.classList.add("splat");
  cell.appendChild(splat);
  splatIndex = index;

  bugIndexes = bugIndexes.filter(i => i !== index);
  const newBug = randomEmptyCells(1)[0];
  if (newBug !== undefined) {
    bugIndexes.push(newBug);
    const newCell = grid.children[newBug];
    const bug = document.createElement("div");
    bug.classList.add("bug");
    bug.addEventListener("click", () => handleBugClick(newBug));
    newCell.appendChild(bug);
  }
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `0:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    endGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  splatIndex = null;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = "0:30";
  endScreen.style.display = "none";
  createGrid();
  spawnBugs();
  timer = setInterval(updateTimer, 1000);
}

function endGame() {
  endScreen.style.display = "flex";
  finalScore.textContent = score;
  grid.innerHTML = "";
}

startGame();
