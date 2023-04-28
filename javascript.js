//Computer Choice
function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3);
    console.log(randomN);
    if (randomN == 0) {
        computerSelection = 'Rock';
    } else if (randomN == 1){
        computerSelection = 'Paper';
    } else if (randomN == 2){
        computerSelection = 'Scissors';
    }
    console.log(computerSelection);
}

//User Choice
function getUserChoice() {
    let userPrompt = prompt('Rock, Paper, or Scissors?').toLowerCase();
    console.log(userPrompt);
    if (userPrompt == 'rock') {
        userSelection = 'Rock';
    } else if (userPrompt == 'paper') {
        userSelection = 'Paper';
    } else if (userPrompt == 'scissors' || userPrompt == 'scissor') {
        userSelection = 'Scissors';
    } else {
        alert ('Please type either rock, paper, or scissors');
        getUserChoice();
    }
}
getComputerChoice();
getUserChoice();