// Rock beats scissors
// Scissors beats paper
// Paper beats rock 

game();
const buttons = document.querySelectorAll('input');

function game(){

  let playerScore = 0;
  let computerScore = 0;

  getPlayerChoice(function() {
    let computerChoice = getComputerChoice();
    let resultOfRound = gameRound(playerChoice, computerChoice);

    if(playerScore == 5){
      document.getElementsByClassName("endGameText")[0].textContent = "You win! Refresh to play again";
      disableButtons();
    }

    else if(computerScore == 5){
      document.getElementsByClassName("endGameText")[0].textContent = "You lost! Refresh to play again";
      disableButtons();
    }

    if(resultOfRound.includes("win")){
      playerScore++;
      document.getElementsByClassName("playerScore")[0].textContent = playerScore;
    }

    else if(resultOfRound.includes("lose")){
      computerScore++;
      document.getElementsByClassName("computerScore")[0].textContent = computerScore;
    }

    document.getElementsByClassName("roundResult")[0].textContent = resultOfRound;
  });
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
  let randomIndex = Math.floor(Math.random()*3);
  return choices[randomIndex];
}

function getPlayerChoice(callback){

  let Rock = document.getElementById("Rock");
  let Paper = document.getElementById("Paper");
  let Scissors = document.getElementById("Scissors");

  Rock.addEventListener("click", function(){
    playerChoice = "Rock";
    callback();
  });

  Paper.addEventListener("click", function(){
    playerChoice = "Paper";
    callback();
  });

  Scissors.addEventListener("click", function(){
    playerChoice = "Scissors";
    callback();
  });
}

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}