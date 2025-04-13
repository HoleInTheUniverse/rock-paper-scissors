function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);

    if (choice <= 32) {
        return "rock";
    }
    else if ((choice > 32) && (choice <= 65)) {
        return "paper";
    }
    else if ((choice > 65) && (choice <= 98)) {
        return "scissors";
    }
    else {
        return getComputerChoice();
    }
}

function getHumanChoice() {
    return prompt("Enter your choice");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            return;
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
            return;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
            return;
        }
        else if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
            return;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
            return;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beat Paper");
            humanScore++;
            return;
        }
    }
    else {
        console.log("Please enter correct value");
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());