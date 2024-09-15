const choices = ["rock", "paper", "scrisors"]
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice(choice) {
    choice = parseInt(prompt("what would you chose? \n 1. rock \n 2.paper \n 3.scrisors")) - 1;
    if (choice < 0 || choice >= choices.length) {
        alert("Invalid choice. Please enter a number between 1 and 3.");
        return getHumanChoice();
    }
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if(computerChoice == humanChoice) {
        resultText = "It's a tie! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
        alert(resultText);
        playRound();
    }
    else if(computerChoice % 3 == humanChoice + 1) {
        resultText = "Computer wins this round! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
        computerScore++; 
    }
    else  {
        resultText = "Human wins this round! The computer chose " + choices[computerChoice] + " and the human chose " + choices[humanChoice] + ".";
        humanScore++;
    }
    document.getElementById("result").innerText = resultText;
    document.getElementById("scores").innerText = "Human : " + humanScore + "\n Computer : " + computerScore +"\n";
}


function playGame() {
    let rounds = 5;
    humanScore = 0;
    computerScore = 0;
    function roundLoop() {
        if (rounds > 0 && humanScore + computerScore < 5) {
            playRound();
            rounds--;
            setTimeout(roundLoop, 1000); 
        } else {
            let finalResult = humanScore > computerScore ? "The human wins the game!" : "The computer wins the game!";
            alert(finalResult);
            document.getElementById("finalResult").innerText = finalResult;
        }
    }

    roundLoop()
}