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
        console.log("You Lose!");
    }
    else if(playerScore > computerScore){
        console.log("You Win!")
    }
    else{
        console.log("Draw");
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
  const displayPlayerScore = document.querySelector(".player");
  const displayComputerScore = document.querySelector(".computer");

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


function playRound(e) {
    let computerChoice = getComputerChoice();
    
    const displayResult = document.querySelector(".result-text");
    displayResult.textContent = roundWinner(this.value, computerChoice);
    let result = roundWinner(this.value, computerChoice);
    addScore(result, computerChoice);
  }

  

  

  

  
   
  
  
  

