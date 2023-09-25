const playerSelection = document.querySelectorAll("button");

playerSelection.forEach(player => player.addEventListener("click", playRound));





function getComputerChoice(){
    let choice = Math.random();
    if(choice >= 0 && choice < 0.33)
        return "Rock";
        
    if(choice > 0.33 && choice < 0.66)
        return "Paper";

    if(choice > 0.66 && choice < 1)
        return "Scissors";
}

  function getWinner(playerScore, computerScore){
    if(computerScore > playerScore){
        return "You lost"
    }
    else if(playerScore > computerScore){
        return "You won"
    }
    else{
        return "Draw";
    }
  }

  function roundWinner(player, computer){
    if(player == "Rock"){
        if(computer == "Rock")
            return "Draw";
        if(computer == "Paper")
            return "You Lose! Paper beats Rock";
        if(computer == "Scissors")
            return "You Win! Rock beats Scissors";
    }

    if(player == "Paper"){
        if(computer == "Rock")
            return "You Win! Paper beats Rock";
        if(computer == "Paper")
            return "Draw";
        if(computer == "Scissors")
            return "You Lose! Scissors beats Paper";
    }

    if(player == "Scissors"){
        if(computer == "Scissors")
            return "Draw";
        if(computer == "Paper")
            return "You Win! Scissors beats Paper";
        if(computer == "Rock")
            return "You Lose! Rock beats Scissors";
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  const body = document.querySelector("body");
  const displayPlayerScore = document.querySelector(".player");
  const displayComputerScore = document.querySelector(".computer");
  const victory = document.querySelector(".result-text");
  function addScore(result, computerChoice){
    if(result.match("You Win")){
    playerScore++;
    displayPlayerScore.textContent = "Player: " + playerScore;
    }
    else if(result.match("You Lose")){
    computerScore++;
    displayComputerScore.textContent = "Computer: " + computerScore;
    }
  }

  function resetGame(){
    victory.textContent = getWinner(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
    displayComputerScore.textContent = "Computer: 0";
    displayPlayerScore.textContent = "Player: 0";
  }

function playRound(e) {
    if(victory)
        victory.textContent = '';
    let computerChoice = getComputerChoice();
    const displayResult = document.querySelector(".result-text");
    let result = roundWinner(this.value, computerChoice);
    displayResult.textContent = result;
    addScore(result, computerChoice);
    if(playerScore == 5 || computerScore == 5){
        resetGame();
    }
  }

  

  

  

  
   
  
  
  

