let gameSqe = [];
let userSqe = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

let startBtnEl = document.querySelector(".startBtn");
startBtnEl.addEventListener("click", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
  }
  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSqe = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 3);
  let randColor = btns[randInx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randInx);
  // console.log(randColor);
  // console.log(randBtn);

  gameSqe.push(randColor);
  console.log(gameSqe);
  gameFlash(randBtn);
}

function checkAns(idx) {
  // console.log (" curr level :" ,level);
  // let idx = level -1;
  if (userSqe[idx] === gameSqe[idx]) {
    if (userSqe.length == gameSqe.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over ! Your score is <b>${level}</b>  <br> Click Start Button Restart Game `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnPress() {
  // console.log(this);
  let btn = this;
  gameFlash(btn);

  userColor = btn.getAttribute("id");
  userSqe.push(userColor);

  checkAns(userSqe.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSqe = [];
  userSqe = [];

  started = false;
  level = 0;
}
