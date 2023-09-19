function getComputerChoice(){
    let choice = Math.random();
    if(choice >= 0 && choice < 0.33)
        return "Rock";
        
    if(choice > 0.33 && choice < 0.66)
        return "Paper";

    if(choice > 0.66 && choice < 1)
        return "Scissors";
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if(playerSelection == "Rock"){
        if(computerSelection == "Rock")
            return "Draw";
        if(computerSelection == "Paper")
            return "You Lose! Paper beats Rock";
        if(computerSelection == "Scissors")
            return "You Win! Rock beats Scissors";
    }

    if(playerSelection == "Paper"){
        if(computerSelection == "Rock")
            return "You Win! Paper beats Rock";
        if(computerSelection == "Paper")
            return "Draw";
        if(computerSelection == "Scissors")
            return "You Lose! Scissors beats Paper";
    }

    if(playerSelection == "Scissors"){
        if(computerSelection == "Scissors")
            return "Draw";
        if(computerSelection == "Paper")
            return "You Win! Scissors beats Paper";
        if(computerSelection == "Rock")
            return "You Lose! Rock beats Scissors";
    }
  }

  function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.match("You Win")){
            playerScore++;
        }
        else if(result.match("You Lose")){
            computerScore++;
        }
    }
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

  game();
   
  
  
  

