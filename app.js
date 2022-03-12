// Elements Selections
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const holes = document.querySelectorAll(".holes");
const message = document.querySelector(".msg");
const btn = document.querySelector(".btn");
let score = 0;
let hitPosition = null;
let time = 60;
let moveInt = null;
let countDownId;

function randomHole() {
  holes.forEach((hole) => {
    hole.classList.remove("mole");
  });

  let randomHole = holes[Math.floor(Math.random() * 12)];
  randomHole.classList.add("mole");

  hitPosition = randomHole.id;
}

holes.forEach((hole) => {
  hole.addEventListener("click", () => {
    if (hitPosition == hole.id) {
      score++;
      scoreEl.innerHTML = score;
      hitPosition = null;
    }
  });
});

function moveMole() {
  moveInt = setInterval(randomHole, 1000);
}

function countDown() {
  time--;
  timeEl.innerHTML = time;
  if (time === 0) {
    clearInterval(countDownId);
    clearInterval(moveInt);
    message.innerHTML = `Game Over!!`;
  }
}

btn.addEventListener("click", playGame);

function playGame() {
  score = 0;
  time = 60;
  timeEl.innerHTML = time;
  scoreEl.innerHTML = score;
  clearInterval(moveInt);
  clearInterval(countDownId);
  moveMole();
  countDownId = setInterval(countDown, 1000);
}
