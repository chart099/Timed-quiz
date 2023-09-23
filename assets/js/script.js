var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var finishedPage = document.getElementById("finished-page");
var highschorePage = document.getElementById("highscore-page");

var timer = document.getElementById("timer");
var timerObject;
var timeCounter = 60;

var startButton = document.getElementById("start-quiz");

questionPage.style.display = "none";
finishedPage.style.display = "none";
highschorePage.style.display = "none";

startButton.addEventListener("click", function(){
    questionPage.style.display = "block";
    startPage.style.display = "none";
    timerObject = setInterval(function() {
        timer.textContent = "Time left: " + timeCounter;
        if (timeCounter > 0) {
            timeCounter--;
        } else {
            console.log("game over");
        }
    }, 1000)
});



