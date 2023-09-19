function getComputerChoice(){
    let choice = Math.random();
    if(choice >= 0 && choice < 0.33)
        return "Rock";
        
    if(choice > 0.33 && choice < 0.66)
        return "Paper";

    if(choice > 0.66 && choice < 1)
        return "Scissors";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Paper" && computerSelection == "Scissors")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Lose! Paper beats Rock";
  }
   
  
  
  console.log(playRound(playerSelection, computerSelection));

