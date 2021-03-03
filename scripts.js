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
//Compare user input to computer
if(textArray.indexOf(playerSelection.toLowerCase()) >= 0){

} else {
    alert("Invalid Input - Please enter Rock, Paper, or Scissors")
}

function playRound(playerSelection, computerPlay) {
    let result;
    if (playerSelection === computerPlay) {
        result = "It's a Tie!"; 
    } else if ((playerSelection === 'rock' && computerPlay === 'scissors') || (playerSelection === 'paper' && computerPlay === 'rock') || (playerSelection === 'scissors' && computerPlay === 'paper')) {
        result = "You Win! " + playerSelection + " beats " + computerPlay;
    } else  {
        result = "You Lose! " + computerPlay + " beats " + playerSelection;

    }
    
   return result;
}

//console.log(playRound(playerSelection, computerPlay));

//play rock paper scissors 5 times in a row

function game(playRound) {

    playRound();
    
}
console.log(game(playRound));



//store the winner of each round
//display winner of each round
//display who the winner is after 5 rounds