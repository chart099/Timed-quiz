// variables for each of the pages
var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var finishedPage = document.getElementById("finished-page");
var highscorePage = document.getElementById("highscore-page");

// variables for the timer elements
var timer = document.getElementById("timer");
var timerObject;
var timeCounter = 100;

// bank of questions for quiz
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

// variables for questions and answers
var currentQuestion = 0; 
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
// variable for feedback below questions
var feedback = document.getElementById("feedback");

// variable for start button
var startButton = document.getElementById("start-quiz");
// created score variable, start from zero
var score = 0;

// hiding the non-used pages from initially showing
questionPage.style.display = "none";
finishedPage.style.display = "none";
highscorePage.style.display = "none";

// event listener that acts on start button
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

// function that sets each question and answer as options from the question bank
function displayCurrentQuestion() {
    question.textContent = questionBank[currentQuestion].question;
    answer1.textContent = questionBank[currentQuestion].answers[0];
    answer2.textContent = questionBank[currentQuestion].answers[1];
    answer3.textContent = questionBank[currentQuestion].answers[2];
    answer4.textContent = questionBank[currentQuestion].answers[3];

}

// function that checks if the user selected the correct answer
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

// variable for displaying the final score
var finalScore = document.getElementById("final-score");


// function that ends the questions and displays the final score
function endGame() {
    questionPage.style.display = "none";
    finishedPage.style.display = "block";
    clearInterval(timerObject);
    finalScore.textContent = "Your score is: " + (timeCounter + score);
}

// event listeners for each answer button
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);


// variable and event listener for submitting user initials
var submitInitials = document.getElementById("submit-initials");

// function+event listener for storing the user data locally
submitInitials.addEventListener("click", function() {
    var userInitials = document.getElementById("enter-initials");
    var storeInitials = JSON.parse(localStorage.getItem("code-quiz")) || [];
    storeInitials.push({user: userInitials.value, score:(timeCounter+score)});
    localStorage.setItem("code-quiz", JSON.stringify(storeInitials));
    finishedPage.style.display = "none";
    highscorePage.style.display = "block";
    displayHighScore()
})



var goBack = document.getElementById("go-back");
var clearHS = document.getElementById("clear-hs");
var scores = document.getElementById("scores");

function displayHighScore() {
    var scoreList = JSON.parse(localStorage.getItem("code-quiz"));
    for (let i=0; i < scoreList.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = scoreList[i].score+ "   " + scoreList[i].user  ;
        
        scores.append(scoreItem);
    }
 }

goBack.addEventListener("click", function() {
    finishedPage.style.display = "block";
    highscorePage.style.display = "none";
    scores.style.display = "none";
})

clearHS.addEventListener("click", function() {
    localStorage.removeItem("code-quiz");
})




