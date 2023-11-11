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

var startScreen = document.getElementById('start-screen');
var buttonClick = document.getElementById('start');
buttonClick.addEventListener('click', function(){

  console.log('here')
})

var questions = document.getElementById('questions');
var questionTitle = document.getElementById('question-title');
var choices = document.getElementById('choices');
var end = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var feedback = document.getElementById('feedback');
