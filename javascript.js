//Computer Choice
function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3);
    if (randomN == 0) {
        computerSelection = 'Rock';
        return 0;
    } else if (randomN == 1){
        computerSelection = 'Paper';
        return 1;
    } else if (randomN == 2){
        computerSelection = 'Scissors';
        return 2;
    }
}

//User Choice
function getUserChoice() {
    let userPrompt = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (userPrompt == 'rock') {
        userSelection = 'Rock';
        return 0;
    } else if (userPrompt == 'paper') {
        userSelection = 'Paper';
        return 1;
    } else if (userPrompt == 'scissors' || userPrompt == 'scissor') {
        userSelection = 'Scissors';
        return 2;
    } else {
        alert ('Please type either rock, paper, or scissors');
        getUserChoice();
    }
}

//Round
function roundEval() {
    let computerNum = getComputerChoice();
    let userNum = getUserChoice();
    console.log(`You chose ${userSelection}!`)
    console.log(`The Computer chose ${computerSelection}!`);
    if (userNum - computerNum == 1 || userNum - computerNum == -2) {
        console.log('You Win!')
        return 1;
    } else if (userNum - computerNum == 0) {
        console.log('Its a Tie!')
        return 0;
    } else {
        console.log('You Lost!')
        return 2;
    }
}

//Round Score
function roundScore() {
    let round = roundEval();
    if (round == 1) {
        userScore += 1;
    } else if (round == 2) {
        computerScore +=1;
    } else {
        userScore += 1;
        computerScore += 1;
    }
    console.log(`${userScore} - ${computerScore}`);
}

//Game of 5
function game() {
    for (let i=0; i<5; i++) {
        roundScore();
    }
    if (userScore > computerScore) {
        console.log('You Won Against The Computer!');
    } else if (userScore < computerScore) {
        console.log('You Lost Against The Computer!');
    } else {
        console.log('Its A Tie, That Was Unlikely!');
    }
}
let userScore = 0;
let computerScore = 0;
game();