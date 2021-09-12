//all my variables listed
//get elements

var timeLeft = 75
var timerID;
var timerElement = document.getElementById("timer")
var beginButton = document.getElementById("begin")
var nextButton = document.getElementById("nxt-btn");
var containerQuestionElement = document.getElementById("quest-container");
var startContainerElement = document.getElementById("start-container");
var questionElement = document.getElementById("quest");
var answerButtonsElement = document.getElementById("answer-btns");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores = document.getElementById("look-at-scores");
var submitButton = document.getElementById("submit");
var clearScoreButton = document.getElementById("clear");
var initials = document.getElementById("player-name");
var restartButton = document.getElementById("restart");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

//var shuffledQuestions, currentQuestionIndex;

//start button
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    //setNextQuestion()
});

//time function
function timeCountdown() {
    timeLeft--;
    timerElement.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}

