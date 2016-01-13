var userPoint = 0;
var aiPoint = 0;
// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var myArray = ['rock', 'paper', 'scissors'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand;
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
   if ((userValue === "rock" && aiValue === "paper") || (userValue === "paper" && aiValue === "scissors") || (userValue === "scissors" && aiValue === "rock")){
    aiPoint++;
    return "Ai";
   }
   else if ((userValue === "paper" && aiValue === "rock")|| (userValue === "scissors" && aiValue === "paper")|| (userValue === "rock" && aiValue === "scissors")){
     userPoint++;
     return "user";
   }
   else
    return "draw"
  
}

// This function sets the scoreboard with the correct points
function setScore() {
$('#userPoint').delay(50).text(userPoint);
$('#aiPoint').delay(50).text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);
    setScore();
    
    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again' );
    } else if ( 'draw' === winner) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
$( ".token" ).click(function(event) {
  evaluate(event);
});
});
