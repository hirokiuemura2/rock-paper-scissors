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
    console.log(playerChoice);
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
        
        // default:
        //     console.log("please enter rock, paper, or scissors");
        //     return playRound(prompt("What is your choice? (Rock, Paper, Scissors): "));
        //     break;
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let userChoice = prompt("What is your choice? (Rock, Paper, Scissors): ");
//         let result = playRound(userChoice);
//         console.log(result);
//         switch(result) {
//             case "computer wins":
//                 computerScore++;
//                 break;
//             case "player wins":
//                 playerScore++;
//                 break;
//         }
//     }
//     console.log("You won " + playerScore + " times. The computer won " + computerScore + " times.")
//     if (playerScore > computerScore) {
//         console.log("Congratulations! You won!");
//     }
//     else if (computerScore > playerScore) {
//         console.log("Sorry, you lost.");
//     }
//     else {
//         console.log("Tied!");
//     }
// }

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const buttons = document.querySelectorAll('button');

const results = document.createElement('div');
results.classList.add('results');
results.style.textAlign = "center";
results.style.fontSize = "35px";
results.style.margin = "20px";
results.textContent = "Choose Rock, Paper, or Scissors";
// results.setAttribute('style', 'font-size: 50px; text-align: center');
const container = document.querySelector('body');
container.appendChild(results);

let resetGame = () => {
    totalLosses = totalWins = 0;
    let buttons = document.querySelector('.buttons');
    buttons.addEventListener('click',() => {
        results.innerText="";
    }, {
        once:true, capture:true
    });
}
let update = function() {
    let scores = document.querySelectorAll('.count');
    scores[0].textContent = totalWins;
    scores[1].textContent = totalLosses;
}

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        let text = button.querySelector('div').textContent;
        let winner = playRound(text);
        results.textContent = winner;
        if (winner == "player wins") {
            totalWins++;
        } else if (winner == "computer wins") {
            totalLosses++;
        }
        update();
        if (totalWins == 5) {
            results.innerText = "Player Wins!";
            resetGame();
        }
        else if (totalLosses == 5) {
            results.innerText = "Computer Wins!";
            resetGame();
        }
    }, {capture: true})
});

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