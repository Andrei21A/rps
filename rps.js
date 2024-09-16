const choices = ["rock", "paper", "scrisors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (computerChoice == humanChoice) {
        resultText = "It's a tie! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
    } else if (computerChoice % 3 == (humanChoice + 1) % 3) {
        resultText = "Computer wins this round! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
        computerScore++;
    } else {
        resultText = "Human wins this round! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
        humanScore++;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("scores").innerText = "Human : " + humanScore + " | Computer : " + computerScore;
    if(humanScore == 5) document.getElementById("finalResult").innerText = "Human wins the game!";
    if(computerScore == 5)document.getElementById("finalResult").innerText = "Computer wins the game!";
}

function setupGame() {
    humanScore = 0;
    computerScore = 0;
    
    // Adding event listeners to the buttons to play a round with the respective choice
    document.getElementById("rock").addEventListener("click", () => playRound(0)); // Rock
    document.getElementById("paper").addEventListener("click", () => playRound(1)); // Paper
    document.getElementById("scrisors").addEventListener("click", () => playRound(2)); // Scissors
}

function playGame() {
    setupGame();
    document.getElementById("scores").innerText = "Human : 0 | Computer : 0";
    document.getElementById("result").innerText = "Game started! Choose rock, paper, or scissors.";
}

playGame();
