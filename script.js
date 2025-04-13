function getComputerChoice () {
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

function getHumanChoice () {
    return prompt("Enter your choice");
}