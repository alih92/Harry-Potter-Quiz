/*Harry Potter quiz pseudocode
Which elements of the HTML do I need to target? Need to have these in variables to be able to reference and manipulate later on

1. Quiz starts only when user clicks on the start button -> need an eventlistener for this with a function being called to display the questions
  a. once the button is clicked, it, and any other text, disappears. How can i do this? hide? 
2. Question title and choices need to show up after the start button is clicked and disappears. -> can this be a function to dislay the questions?
  a. Iterate through the questions and get the text to show up -> use .textContent?
    -> how can i keep a track of the questions index? 
  b. Display the choices using .textContent ->choices is an array so maybe another for loop? use .textContent to display again. 
3. set a timer -> set it to count down from , e.g. 100 - maybe use count--;
  a. impelement a penalty of 10 seconds for each wrong answer - how can I do this? maybe some sort of decrementing option?
  b. use an if statement maybe to decrement the time if the choice doesn't match the answer
  c. use an if statement for when the time hits 0 to end the game










*/

//getting all the id's in the HTML and storing them in variables
var timer = document.getElementById('time');
var timeLeft = 75;
var timerInterval;
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
startButton.addEventListener('click', startQuiz);

var questionsArray = document.getElementById('questions');
var questionNumber = 0;
var questionTitle = document.getElementById('question-title');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var choicesArray = document.getElementById('choices');
var end = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var feedback = document.getElementById('feedback');

//so i want the #start button and #start-screen content to dissapear once the #start button is clicked - how do i do this? the search states use display: none -> this suggests css? how can i target the css property? maybe with the class? maybe a function to get the quiz started and the content disappears?

function startQuiz() {
  //remove the start button and start-screen text
  startButton.classList.add('hide');
  startScreen.classList.add('hide');
  questionsArray.classList.remove('hide');
  //display the timer at 75 seconds-> use setInterval method
  timerInterval = setInterval(function() { 
    timeLeft --;
    timer.textContent = timeLeft  
    if(timeLeft === 0) {
      clearInterval(timerInterval)
    }
  }, 1000)
  
  showQuestions(questionNumber);
}

//how can i use the below to make the first question appear? Another function? 


//retrieve the questions from the questions array in the questions.js
function showQuestions() { 
  
  questionTitle.textContent = questions[questionNumber].question;
  option1.textContent = questions[questionNumber].choices[0];
  option2.textContent = questions[questionNumber].choices[1];
  option3.textContent = questions[questionNumber].choices[2];
  option4.textContent = questions[questionNumber].choices[3];
}

/* 1.add an eventlistener for the question. When user selects an option
  a. if right answer selected-> display correct!
  b. else if wrong answer selected-> display incorrect!

2. move to next question -> repeat a and b above - maybe a for loop?



*/

choicesArray.addEventListener('click', function(e){
  var selectedOption = e.target;
  console.log(selectedOption);

  if(selectedOption === questions[questionNumber].correctAnswer) {
    feedback.textContent = 'Correct!';
  } else {
    feedback.textContent = 'Incorrect!';
    timeLeft -= 10;
  
  }
})