const number = document.querySelector(".number");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const scoreValue = document.querySelector(".score");
const highscoreValue = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = sentence => {
  message.textContent = sentence;
};

btnCheck.addEventListener("click", function (e) {
  e.preventDefault();
  const input = +guess.value;

  //if there is no input
  if (!input) displayMessage("no number");

  //if input there is input
  if (input === randomNum) {
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.textContent = randomNum;
    highscore = highscore > score ? highscore : score;
    highscoreValue.textContent = highscore;
    displayMessage("🎉 Correct score");
  } else if (input !== randomNum && input >= 1 && input <= 20) {
    if (score > 1) {
      input < randomNum
        ? displayMessage("Less than ?")
        : displayMessage("Greater than ?");
      score--;
      scoreValue.textContent = score;
    } else {
      displayMessage("💥 You lost the game");
      scoreValue.textContent = 0;
    }
  } else displayMessage("Choose from 1 to 20");
});

btnAgain.addEventListener("click", function (e) {
  e.preventDefault();
  displayMessage("Start guessing");
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  guess.value = "";
  score = 20;
  scoreValue.textContent = "20";
  randomNum = Math.trunc(Math.random() * 20) + 1;
});
