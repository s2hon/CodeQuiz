//variables
var que = document.getElementById ("question");
var ans = document.getElementById ("answer");
var tf = document.getElementById ("results");
var time = document.getElementById ("time");
var button = document.getElementsByTagName ("button");

var secondsLeft = 60;

//question+answers
//all the questions are copied from https://quizlet.com/117039332/javascript-quiz-flash-cards/.
var questions = [
{
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["<javascript>", "<head>", "<body>", "<script>"],
    correctAnswer: 4
},
{
    question: "What is the correct syntax for referring to an external script called \"script.js\"?",
    answer: ["<script src=\"script.js\">", "<script name=\"script.js\">", "<script src=\"href.js\">", "<script src=\"value.js\">"],
    correctAnswer: 1
},
{
    question: "How do you create a function?",
    answer: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function]"],
    correctAnswer: 3
},
{
    question: "How do you call a function named \"myFunction\"?",
    answer: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
    correctAnswer: 2
},
{
    question: "How many looping statements are there in JavaScript?",
    answer: ["1: for loop", "2: for loop, while loop", "3: for loop, while loop, do...while loop", "4: for loop, while loop, do...while loop", "do...until loop"],
    correctAnswer: 3
},
{
    question: "How can you add a comment in a JavaScript?",
    answer: ["//comment", "<!--comment-->", "/*comment", "'comment"],
    correctAnswer: 4
},
{
    question: "How does a \"for\" loop start for var x?",
    answer: ["for (i=0;i=<x.length;i++)", "for (i=0;i<x.length;i++)", "for (i=0;i<x.length)", "for (i=0&&i<x.length&&i++)"],
    correctAnswer: 2
},
{
    question: "Which HTML attribute is used to define inline styles?",
    answer: ["font", "styles", "class", "style"],
    correctAnswer: 4
},
{
    question: "What is the most optimal solution to generate a random whole number between 1 -10?",
    answer: ["Math.floor(Math.random()*(10-1))+1", "Math.round(Math.random()*(10-1))+1", "Math.floor(Math.random()*10)+1", "Math.round(Math.random()*10)+1"],
    correctAnswer: 1
},
{
    question: "In JavaScript, which of the following is not a logical operator?",
    answer: ["||", "&&", "%", "!"],
    correctAnswer: 3
}
]


//start quiz Add Event Listener
answer.addEventListener("click", startQuiz)

function startQuiz (event) {
    //clear
    que.innerHTML="";
    var thisQuestion = q1;
    //set timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
      
        if (secondsLeft === 0) {
          alert ("try again!");
          secondsLeft = 60;
          startQuiz ();
      }

      }, 1000);
    
    //set questions
    que.textContent=thisQuestion.question;

    var thisOption = q1.answer;
    ans.innerHTML="";
    
    //set answers
    for (i=0; i<thisOption.length; i++) {
        var liButton = document.createElement("button");
        liButton.textContent = thisOption[i];
        liButton.setAttribute ("class", "btn btn-success");
        liButton.setAttribute ("data-index", i);
        ans.appendChild(liButton);
    }
    
    answer.addEventListener("click", chooseAnswer)

    function chooseAnswer(event) {
        if (this.dataset.index === q1.correctAnswer) {
            secondsLeft = secondsLeft + 5;
            tf.textContent = "Correct!"
        }
        else {
            secondsLeft = secondsLeft - 5;
            tf.textContent = "Incorrect!"
        }
        startQuiz()
        }
    

    
        
}
