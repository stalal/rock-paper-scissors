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
  document.getElementsByClassName("roundResult")[0].textContent = resultOfRound;

}

// Rock beats scissors
// Scissors beats paper
// Paper beats rock 

function gameRound(playerChoice, computerChoice){
  if(playerChoice == computerChoice){
    return "The computer also chose " + computerChoice + ". It's a draw!"
  }

  else if (playerChoice == "Rock" && computerChoice == "Paper"){
    return "You lose, Paper beats Rock!"
  }
  
  else if (playerChoice == "Rock" && computerChoice == "Scissors"){
    return "You win, Rock beats Scissors!"
  }

  else if (playerChoice == "Paper" && computerChoice == "Rock"){
    return "You win, Paper beats Rock!"
  }
  
  else if (playerChoice == "Paper" && computerChoice == "Scissors"){
    return "You lose, Scissors beats Paper!"
  }
  
  else if (playerChoice == "Scissors" && computerChoice == "Rock"){
    return "You lose, Rock beats Scissors!"
  }
  
  else if (playerChoice == "Scissors" && computerChoice == "Paper"){
    return "You win, Scissors beats Paper!"
  }

}

function getComputerChoice(){
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random()*3)+1;
  return choices[randomIndex];
}

function getPlayerChoice(){
  return "Paper";
}