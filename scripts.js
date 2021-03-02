// make computer store the words rock, paper, scissors

let textArray = [
    'rock',
    'paper',
    'scissors'
];

//console.log(textArray);

//have the computer randomly return rock paper or scissors that it stored

let randomArray = Math.floor(Math.random()*textArray.length);

let computerPlay = textArray[randomArray];

console.log(computerPlay);

//prompt user to input rock paper or scissors
//input can only be rock, paper, scissors
//input must be case insensitive

let playerSelection = prompt("Rock, Paper, Scissors");

console.log(playerSelection);

//Match user input to textArray
if(textArray.indexOf(playerSelection.toLowerCase()) >= 0){

} else {
    alert("Invalid Input - Please enter Rock, Paper, or Scissors")
}

function playRound(playerSelection, computerPlay) {
    let result;
    if (playerSelection === computerPlay) {
        result = "Its a Tie";
} else if (playerSelection < computerPlay); { 
    result = "You Win";
//} else if (playerSelection > computerPlay[1]) { //paper
//    result = "You Win"
//} else if (playerSelection < computerPlay[2]){ //scissors

   }   return result;
}

console.log(playRound(playerSelection, computerPlay));


// check if user input is equal to randomArray
/*if (textArray[randomArray] === playerSelection.toLowerCase()) {
    true;
    alert("Tie");
} else {
    false;
    alert("You Lose");
}
*/
