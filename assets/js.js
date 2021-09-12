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
var checkAnswerElement = document.getElementById("check-answer");
var viewHighScores = document.getElementById("look-at-scores");
var submitButton = document.getElementById("submit");
var clearScoreButton = document.getElementById("clear");
var initials = document.getElementById("player-name");
var restartButton = document.getElementById("restart");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

var shuffledQuestions, currentQuestionIndex;

//start button
beginButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    NextQuestion()
});

//time function
function timeCountdown() {
    timeLeft--;
    timerElement.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}

//Start Quiz
function startGame() {
    timerID = setInterval(timeCountdown, 1000);
    startContainerElement.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionElement.classList.remove("hide");

    // Timer will start as soon as start button is clicked
    timeCountdown();
    NextQuestion();
};

// click to next question
function NextQuestion() {
    resetStateOfQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// show questions
function showQuestion(question) {
    question.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};

//reset
function resetStateOfQuestion() {

    nextButton.classList.add ("hide")
    checkAnswerElement.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

};

//function to select answer
function selectAnswer (event) {
var selectedAnswer = event.target;
//check if answer is correct
var correct = selectedAnswer.dataset.correct;
checkAnswerElement.classList.remove("hide")
if (correct) {
    checkAnswerElement.innerHTML = "right!";
} else {
    checkAnswerElement.innerHTML = "Sorry that was wrong.";
    if (timeLeft <= 10) {
        timeLeft = 0;
    } else {
        // If the aswer is wrong, deduct time by 10
        timeLeft -= 10;
    }
}

Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})

if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    checkAnswerElement.classList.remove("hide")
} else {
    beginButton.classList.remove("hide")
    saveScore();
}
};

// Check and show the correct answer by set the buttons colors
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
};


// Remove all the classes
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
};