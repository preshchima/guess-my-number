const number = document.querySelector(".number");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const scoreValue = document.querySelector(".score");
const highscoreValue = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");

/* Pseudocode 
set random number from 1 to 20;
get input from user when btnCheck is clicked
if input is < random number, display message too low, reduce score by 1;
if input is > random number, display message too high, reduce score by 1;
else, change background of body to green, dispaly random number, message = correct number, set highscore to score
if score = 0, message = you lost the game
reset game? set message to start guessing, clear input field, display ?, set background to black 
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
btnCheck.addEventListener("click", function (e) {
  e.preventDefault();
  const input = +guess.value;

  if (input > 20 || !input) {
    message.textContent = "Input numbers between 1 and 20";
    return;
  }
  if (input < randomNum) {
    score--;
    message.textContent =
      score > 0 ? "Less than number" : "💥 You lost the game";
    scoreValue.textContent = score > 0 ? score : 0;
  } else if (input > randomNum) {
    score--;
    message.textContent =
      score > 0 ? "greater than number" : "You lost the game";
    scoreValue.textContent = score > 0 ? score : 0;
  } else {
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.textContent = randomNum;
    highscore = highscore > score ? highscore : score;
    highscoreValue.textContent = highscore;
    message.textContent = "🎉 Correct score";
  }
});

btnAgain.addEventListener("click", function (e) {
  e.preventDefault();
  message.textContent = "Start guessing";
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  guess.value = "";
  score = 20;
  scoreValue.textContent = "20";
  randomNum = Math.trunc(Math.random() * 20) + 1;
});
