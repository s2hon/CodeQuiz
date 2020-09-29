//question+answers
//all the questions are copied from https://quizlet.com/117039332/javascript-quiz-flash-cards/.
var queSet = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: ["<javascript>", "<head>", "<body>", "<script>"],
        correctAnswer: 3
    },
    {
        question: "What is the correct syntax for referring to an external script called \"script.js\"?",
        answer: ["<script src=\"script.js\">", "<script name=\"script.js\">", "<script src=\"href.js\">", "<script src=\"value.js\">"],
        correctAnswer: 0
    },
    {
        question: "How do you create a function?",
        answer: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function]"],
        correctAnswer: 2
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answer: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
        correctAnswer: 1
    },
    {
        question: "How many looping statements are there in JavaScript?",
        answer: ["1: for loop", "2: for loop, while loop", "3: for loop, while loop, do...while loop", "4: for loop, while loop, do...while loop", "do...until loop"],
        correctAnswer: 2
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answer: ["//comment", "<!--comment-->", "/*comment", "'comment"],
        correctAnswer: 3
    },
    {
        question: "How does a \"for\" loop start for var x?",
        answer: ["for (i=0;i=<x.length;i++)", "for (i=0;i<x.length;i++)", "for (i=0;i<x.length)", "for (i=0&&i<x.length&&i++)"],
        correctAnswer: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answer: ["font", "styles", "class", "style"],
        correctAnswer: 3
    },
    {
        question: "What is the most optimal solution to generate a random whole number between 1 -10?",
        answer: ["Math.floor(Math.random()*(10-1))+1", "Math.round(Math.random()*(10-1))+1", "Math.floor(Math.random()*10)+1", "Math.round(Math.random()*10)+1"],
        correctAnswer: 0
    },
    {
        question: "In JavaScript, which of the following is not a logical operator?",
        answer: ["||", "&&", "%", "!"],
        correctAnswer: 2
    }
    ]

//declared variables
var secondsLeft = 60;
var thisRoundIndex = 0;

const questions = document.getElementById ("question");
const choices = document.getElementById ("choices");
const results = document.getElementById ("results");
const time = document.getElementById ("time");
const buttonStart = document.getElementById ("startButton");

var currentSeconds = parseInt(time.textContent);
var fiveSec = 5;
var holdTime = 0;

var correctAnswer = queSet[thisRoundIndex].correctAnswer;


//start quiz Add Event Listener
buttonStart.addEventListener("click", startTimer)
function startTimer (event) {
        setInterval(function() {
            secondsLeft--;
            time.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                // quiz finish
                clearInterval(secondsLeft);
                allDone();
                time.textContent = "Time's Up!";
            }
        }, 1000);
    mainQuiz();
};

function mainQuiz() {
    questions.innerHTML="";
    choices.innerHTML="";
    results.innerHTML="";
    var userQuestion = queSet[thisRoundIndex].question;
    var userChoices = queSet[thisRoundIndex].answer;
    questions.textContent = userQuestion;
    

    for (i=0; i<userChoices.length; i++) {
            var liButton = document.createElement("button");

            liButton.textContent = queSet[thisRoundIndex].answer[i];
            liButton.setAttribute ("class", "btn btn-success");
            liButton.setAttribute ("data-index", i);
            liButton.addEventListener('click', userAnswer)
            choices.appendChild(liButton);
    };

    function userAnswer (event) {
        if (parseInt(this.dataset.index) === parseInt(correctAnswer)){
            secondsLeft = secondsLeft + 5;
            results.textContent = "Correct!";
            time.textContent = secondsLeft;
        }
        if (parseInt(this.dataset.index) !== parseInt(correctAnswer)){
            secondsLeft = secondsLeft - 5;
            results.textContent = "Incorrect!";
            time.textContent = secondsLeft;
        }
        thisRoundIndex++;
        setTimeout(mainQuiz,750)
}


};






        

