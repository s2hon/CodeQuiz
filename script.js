//variables
var que = document.getElementById ("question");
var ans = document.getElementById ("answer");
var tf = document.getElementById ("results");
var time = document.getElementById ("time");
var button = document.getElementsByTagName ("button");

var secondsLeft = 60;

//question+answers
var allq = [q1, q2]

var q1 = {
    question: "What is the DOM?",
    answer: ["a", "b", "c", "d"],
    correctAnswer: 2
}

var q2 = {
    question: "What is a JS?",
    answer: ["a", "b", "c", "d"],
    correctAnswer: 1
}

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
    ans.removeChild(liButton);
    
    //set answers
    for (i=0; i<thisOption.length; i++) {
        var liButton = document.createElement("button");
        liButton.textContent = thisOption[i];
        liButton.setAttribute ("class", "btn btn-success");
        ans.appendChild(liButton);
    }
    
    answer.addEventListener("click", chooseAnswer)

    function chooseAnswer(event) {
        if ()
    
    }
    

    
        
}
