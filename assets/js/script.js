var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var finishedPage = document.getElementById("finished-page");
var highschorePage = document.getElementById("highscore-page");

var timer = document.getElementById("timer");
var timerObject;
var timeCounter = 100;

var questionBank = [
    {
        question: "insert question 1",
        answers: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice1"
    },
    {
        question: "insert question 2",
        answers: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice1"
    },
    {
        question: "insert question 3",
        answers: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice1"
    },
    {
        question: "insert question 4",
        answers: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice1"
    }
];

var currentQuestion = 0; 
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var feedback = document.getElementById("feedback");

var startButton = document.getElementById("start-quiz");

var score = 0;

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
            endGame();
        }
    }, 1000)
    displayCurrentQuestion();
});

function displayCurrentQuestion() {
    question.textContent = questionBank[currentQuestion].question;
    answer1.textContent = questionBank[currentQuestion].answers[0];
    answer2.textContent = questionBank[currentQuestion].answers[1];
    answer3.textContent = questionBank[currentQuestion].answers[2];
    answer4.textContent = questionBank[currentQuestion].answers[3];

}

function checkAnswer(event) {
    var userAnswer = event.target.textContent;
    if (userAnswer === questionBank[currentQuestion].correctAnswer) {
        score ++;
        feedback.textContent = "Congrats! You got that correct!";
    } else {
        feedback.textContent = "Sorry, that's not correct";
        timeCounter -= 5; 
    }

    if (currentQuestion < questionBank.length - 1) {
        currentQuestion++;
        displayCurrentQuestion();
    } else {
        endGame();
    }
};

var finalScore = document.getElementById("final-score");

function endGame() {
    questionPage.style.display = "none";
    finishedPage.style.display = "block";
    clearInterval(timerObject);
    finalScore.textContent = "Your score is: " + (timeCounter + score);
}

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

var submitInitials = document.getElementById("submit-initials");

submitInitials.addEventListener("click", function() {
    var user
})




