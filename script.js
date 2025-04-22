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

function playGame() {
    const choice = document.querySelector(".choice");
    const scoreField = document.querySelector("#score");
    const roundResult = document.querySelector("#round-result");

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();
        
        if (humanChoice === computerChoice) {
            roundResult.textContent = "It's a draw!";
            updateScore();
            return;
        }
    
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                roundResult.textContent = "You lose! Paper beats Rock.";
                computerScore++;
                updateScore();
                return;
            }
            else if (computerChoice === "scissors") {
                roundResult.textContent = "You win! Rock beats Scissors";
                humanScore++;
                updateScore();
                return;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                roundResult.textContent = "You lose! Scissors beat Paper.";
                computerScore++;
                updateScore();
                return;
            }
            else if (computerChoice === "rock") {
                roundResult.textContent = "You win! Paper beats Rock";
                humanScore++;
                updateScore();
                return;
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                roundResult.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
                updateScore();
                return;
            }
            else if (computerChoice === "paper") {
                roundResult.textContent = "You win! Scissors beat Paper";
                humanScore++;
                updateScore();
                return;
            }
        }
        else {
            roundResult.textContent = "Please enter correct value";
            return;
        }
    }

    function updateScore() {
        if (humanScore === 5) {
            endGame("player");
            return;
        }
        else if (computerScore === 5) {
            endGame("computer");
            return;
        }
        scoreField.textContent = `Current score: You - ${humanScore}, AI - ${computerScore}`;
    }

    function endGame(winner) {
        if (winner === "player") scoreField.textContent = `You win! Final score: You - ${humanScore}, AI - ${computerScore}. Choose again for a new game.`
        else scoreField.textContent = `You Lose! Final score: You - ${humanScore}, AI - ${computerScore}. Choose again for a new game.`

        humanScore = 0;
        computerScore = 0;
    }

    // Game loop start
    choice.addEventListener("click", (event) => {
        playRound(event.target.id);
    });
    updateScore();
    roundResult.textContent = "Choose Rock, Paper, or Scissors";
}

playGame();