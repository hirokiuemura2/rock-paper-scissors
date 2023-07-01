let totalWins = 0;
let totalLosses = 0;

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    switch (choiceNumber) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "tie";
                    break;
                case "paper":
                    return "computer wins";
                    break;
                case "scissors":
                    return "player wins";
                    break;
            }
            break;
        case "paper": 
            switch (computerChoice) {
                case "rock":
                    return "player wins";
                    break;
                case "paper":
                    return "tie";
                    break;
                case "scissors":
                    return "computer wins";
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    return "computer wins";
                    break;
                case "paper":
                    return "player wins";
                    break;
                case "scissors":
                    return "tie";
                    break;
            }
            break;
        
            default:
                console.log("please enter rock, paper, or scissors");
                return playRound(prompt("What is your choice? (Rock, Paper, Scissors): "));
                break;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("What is your choice? (Rock, Paper, Scissors): ");
        let result = playRound(userChoice);
        console.log(result);
        switch(result) {
            case "computer wins":
                computerScore++;
                break;
            case "player wins":
                playerScore++;
                break;
        }
    }
    console.log("You won " + playerScore + " times. The computer won " + computerScore + " times.")
    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
    }
    else if (computerScore > playerScore) {
        console.log("Sorry, you lost.");
    }
    else {
        console.log("Tied!");
    }
}


// let rocks = 0;
// let paper = 0;
// let scissors = 0;

// for (let i = 0; i < 10000; i++) {
//     switch (getComputerChoice()) {
//         case "Rock":
//             rocks++;
//             break;
//         case "Paper": 
//             paper++;
//             break;
//         case "Scissors":
//             scissors++;
//             break;
//     }
// }

// console.log("rock count: " + rocks);
// console.log("paper count: " + paper);
// console.log("scissors count: " + scissors);