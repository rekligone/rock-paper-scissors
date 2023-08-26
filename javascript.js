function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3 + 1);
    if (randNum == 1){
     computerChoice = "Rock";
    }else if (randNum == 2){
     computerChoice = "Paper";
    }else{
     computerChoice = "Scissor"
    }
    computerChoice = computerChoice.toLowerCase();
    console.log(randNum)
    return computerChoice;
 }
 function playRound(playerChoice){
     const updatePlayerScore = document.querySelector('#playerScore')
     const updateComputerScore = document.querySelector('#computerScore')
     const roundWinner = document.querySelector('#roundWinner')
     const winner = document.querySelector('#winner')
     playerChoice = playerChoice.toLowerCase();
     computerChoice = getComputerChoice()
     winner.textContent = 'Winner: IDK ;)'
     if (playerChoice === "paper" && computerChoice === "rock"){
     roundWinner.textContent = "You won! Paper beat Rock"
     playerWin += 1
     updatePlayerScore.textContent = 'Player: ' + playerWin
    }else if (playerChoice == "paper" && computerChoice == "scissor"){
     roundWinner.textContent = "You Lose! Scissor beat Paper"
     computerWin += 1
     updateComputerScore.textContent = 'Computer: ' + computerWin
    }else if (playerChoice == "rock" && computerChoice == "paper"){
     roundWinner.textContent = "You Lose! Paper beat Rock"
     computerWin += 1
     updateComputerScore.textContent = 'Computer: ' + computerWin
    }else if (playerChoice == "rock" && computerChoice == "scissorç"){
     roundWinner.textContent = "You won! Rock beat Scissors"
     playerWin += 1
     updatePlayerScore.textContent = 'Player: ' + playerWin
    }else if (playerChoice == "scissor" && computerChoice == "paper"){
     roundWinner.textContent = "You Won! Scissor beat Paper"
     playerWin += 1
     updatePlayerScore.textContent = 'Player: ' + playerWin
    }else if (playerChoice == "scissor" && computerChoice == "rock"){
     roundWinner.textContent = "You Lose! Rock beat Scissors"
     computerWin += 1
     updateComputerScore.textContent = 'Computer: ' + computerWin
    }else{
     roundWinner.textContent = "Draw!"
    }

    if (playerWin == 5){
        winner.textContent = 'Winner: Player!!'
        playerWin = 0
        computerWin = 0
        updateComputerScore.textContent = 'Computer: ' + computerWin
        updatePlayerScore.textContent = 'Player: ' + playerWin
        roundWinner.textContent = ""
    }else if(computerWin == 5){
        winner.textContent = 'Winner: Computer :('
        playerWin = 0
        computerWin = 0
        updateComputerScore.textContent = 'Computer: ' + computerWin
        updatePlayerScore.textContent = 'Player: ' + playerWin
        roundWinner.textContent = ""
    }
}

let playerWin = 0;
let computerWin = 0;

const btnAll = document.querySelectorAll(".button");
btnAll.forEach(btn => btn.addEventListener("click", () =>{
    playerChoice = btn.id;
    playRound(playerChoice)
} ));

const container = document.querySelector('#container')

const playerScore = document.createElement('div');
playerScore.id = 'playerScore'
playerScore.classList.add('playerScore')
playerScore.textContent = 'Player: 0';

container.appendChild(playerScore);

const winner = document.createElement('div')
winner.id = 'winner'
winner.classList.add('winner')
winner.textContent = 'Winner: IDK ;)'

container.appendChild(winner)

const computerScore = document.createElement('div');
computerScore.id = 'computerScore'
computerScore.classList.add('computerScore')
computerScore.textContent = 'Computer: 0';

container.appendChild(computerScore);