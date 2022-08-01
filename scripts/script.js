const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore')
const scoreScreen = document.querySelector('#scoreScreen')

console.log('Hello Player! Welcome to the final GAME!!!')

//define game variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerScore = 0;
let playerScore = 0;

//define game array
var gameArray = [rock, paper, scissors];

function playRound(playerSelection, computerSelection) {

    if (computerScore == 5) {
        console.log("You lose! so can't play anymore");
        scoreScreen.textContent = "YOU LOSE!!!"
    } else if (playerScore == 5) {
        console.log("You win! so can't play anymore");
        scoreScreen.textContent = "YOU WIN!!!"
    } else {
        //var playerSelection = prompt("To play select Rock, Paper or Scissors").toLowerCase();
        var randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
        var computerSelection = randomElement;

        console.log("The computer has chosen " + randomElement + " and you " + playerSelection + " so...");
        
        if (playerSelection === computerSelection) {
            console.log("You draw this round")
            console.log("Player Score: " + playerScore)
            console.log("Computer Score: " + computerScore)

            scoreScreen.textContent = "The computer has chosen " + randomElement + " and you " + playerSelection + " so..."

        } else if (
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper")
            ){
                playerScore++
                playerPoints.textContent = playerScore
                console.log("You win this round! " + playerSelection + " beats " + computerSelection)
                console.log("Player Score: " + playerScore)
                console.log("Computer Score: " + computerScore)

                scoreScreen.textContent = "The computer has chosen " + randomElement + " and you " + playerSelection + " so..."

        }else {
            computerScore++
            computerPoints.textContent = computerScore
            console.log("You lose this round! " + computerSelection + " beats " + playerSelection)
            console.log("Player Score: " + playerScore)
            console.log("Computer Score: " + computerScore)

            scoreScreen.textContent = "The computer has chosen " + randomElement + " and you " + playerSelection + " so..."

        }
    }
    }
    
/* function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     
     //playRound();
    
     if (computerScore > playerScore) {
        console.log("Sorry you lost the game")
     } else if (playerScore > computerScore) {
        console.log("Yeih! you win the game")
     }else {
        console.log("I guess you tied the game... Maybe you should try again")
     }
}

game(); */

var bttnRock = document.querySelector('#bttnRock').onclick = function() {
    playRound("rock", );
    //console.log("Rock")
}
var bttnPaper = document.querySelector('#bttnPaper').onclick = function() {
    playRound("paper", );
}
var bttnScissor = document.querySelector('#bttnScissors').onclick = function() {
    playRound("scissors", );
}
