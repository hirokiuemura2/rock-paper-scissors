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
                default:
                    return "please enter rock, paper, or scissors"
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
                default:
                    return "please enter rock, paper, or scissors"
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
                default:
                    return "please enter rock, paper, or scissors"
                    break;
            }
            break;
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