// target the highscores id
var highScoresList = document.getElementById('highscores');

// getting high scores from local storage
var highScores = JSON.parse(localStorage.getItem('score')) || [];
highScoresList.textContent = ''

highScores.sort((a, b) => {
  return b.userScore - a.userScore
})
console.log(highScores)

//target the clear id
var clearHighScores = document.getElementById('clear');

// iterate through highscores list and make an li element for each new high score

for(var i = 0; i < highScores.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = `${highScores[i].user} - ${highScores[i].userScore}`;
  highScoresList.appendChild(listEl);
}
// clear highscores when button is clicked
clearHighScores.addEventListener('click', function(e){
  localStorage.removeItem('score');
  highScoresList.textContent = '';
  // console.log(clearHighScores)
})

// list the highscores in order => highest to lowest
  // use an if statement? 

  // function sortHighToLow() {
  //   var playerScores = highScores.sort((a,b)
    

  //   ))
  // }

// var playerScores = highScores
// playerScores.sort(function(a,b){
//   {return b-a}
 
// });
// console.log(playerScores)

// var sortedHighToLow = (score) => {
//   return score.sort((a, b) => {
//     return a.score-b.sccore
//   });
// }
// console.log(sortedHighToLow)

