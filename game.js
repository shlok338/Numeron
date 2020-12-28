var score = 0;

var number1 = Math.round(Math.random() * 100);
var number2 = Math.round(Math.random() * 100);

var greaterThan = document.getElementById("greater-than");
var equalTo = document.getElementById("equal-to");
var lesserThan = document.getElementById("lesser-than");
var number1Box = document.getElementById("number1");
var number2Box = document.getElementById("number2");
var timer = document.getElementById("timer");

number1Box.innerHTML = number1;
number2Box.innerHTML = number2;

greaterThan.onclick = () => {
  if (number1 > number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html?score=" + score;
  }
  number1 = Math.round(Math.random() * 100);
  number2 = Math.round(Math.random() * 100);
  number1Box.innerHTML = number1;
  number2Box.innerHTML = number2;
};

equalTo.onclick = () => {
  if (number1 == number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html?score=" + score;
  }
  number1 = Math.round(Math.random() * 100);
  number2 = Math.round(Math.random() * 100);
  number1Box.innerHTML = number1;
  number2Box.innerHTML = number2;
};

lesserThan.onclick = () => {
  if (number1 < number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html?score=" + score;
  }
  number1 = Math.round(Math.random() * 100);
  number2 = Math.round(Math.random() * 100);
  number1Box.innerHTML = number1;
  number2Box.innerHTML = number2;
};

var timerId;
var time = 10;
function startTimer() {
  time = 10;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

