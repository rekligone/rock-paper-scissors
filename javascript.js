function getComputerChoice(){
    randNum = Math.floor(Math.random()*10);
    if (randNum >=0 && randNum <=2){
     computerChoice = "Rock";
    }else if (randNum >=3 && randNum <=6){
     computerChoice = "Paper";
    }else{
     computerChoice = "Scissors"
    }
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
 }
 function playRound(playerChoice, computerSelection){
     computerSelection = getComputerChoice()
     playerChoice = prompt("Rock, Paper or Scissor =", "Rock")
     playerSelection = playerChoice.toLowerCase();
     if (playerSelection === "paper" && computerSelection === "rock"){
     alert("You won! Paper beat Rock")
     playerWin += 1
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
     alert("You Lose! Scissor beat Paper")
     computerWin +=1
    }else if (playerSelection == "rock" && computerSelection == "paper"){
     alert("You Lose! Rock beat Paper")
     computerWin +=1
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
     alert("You won! Rock beat Scissors")
     playerWin += 1
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
     alert("You Won! Scissor beat Paper")
     playerWin += 1
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
     alert("You Lose! Rock beat Scissors")
     computerWin +=1
    }else{
     alert("Draw!")
    }
    playCount += 1
    if (playCount >= 4){
     playCount = 0
     if (playerWin > computerWin){
         alert("Player Won!")
     }else if (playerWin < computerWin){
         alert("Computer Won!")
     }else {
         alert("Nobody Win!")
     }
    }
    console.log(playCount)
 }
 let playerWin = 0;
 let computerWin = 0;
 let playCount = 0;
 playRound()
 playRound()
 playRound()
 playRound()
 playRound()