// Rock beats scissors
// Scissors beats paper
// Paper beats rock 

// getComputerChoice returns a random choice by a computer
// select randomly between three numbers, then tie those to rock paper scissors
// return it (string)

// gameRound takes playerSelection and computerSelection and returns a string with the results of the round and a string "You Lose! Paper beats Rock"
// prompt to get input from user 
// pass userChoice and computerChoice to gameRound. 


// game function keeps going for 5 rounds until there's a winner
// use prompt() to get input from the user

game();

function game(){

  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  // use a loop and run it 5 times 
  let resultOfRound = gameRound(playerChoice, computerChoice);
  document.getElementsByClassName("para")[0].textContent = resultOfRound;

}

function gameRound(playerChoice, computerChoice){
  if(playerChoice == computerChoice){
    return "The computer also chose " + computerChoice + ". It's a draw!"
  }
}

function getComputerChoice(){
  return "Rock";
}

function getPlayerChoice(){
  return "Rock";
}