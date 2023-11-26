// target the highscores id
var highScoresList = document.getElementById('highscores');
// getting high scores from local storage
var highScores = JSON.parse(localStorage.getItem('score')) || [];
highScoresList.textContent = ''
//target the clear id
var clearHighScores = document.getElementById('clear');
// iterate through highscores list and make an li element for each new high score

for(var i = 0; i < highScores.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = highScores[i].user;
  highScoresList.appendChild(listEl);
}
// clear highscores when button is clicked
clearHighScores.addEventListener('click', function(e){
  localStorage.removeItem('score');
  highScoresList.textContent = '';
  // console.log(clearHighScores)
})