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
var viewHighScores = document.getElementById("");
var submitButton = document.getElementById("");
var clearScoreButton = document.getElementById("");
var initialsField = document.getElementById("");
var restartButton = document.getElementById("");
var scoreField = document.getElementById("");
var scores = JSON.parse(localStorage.getItem("")) || [];
