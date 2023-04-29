//Computer Choice
function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3);
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

function roundEval() {
    getComputerChoice();
    getUserChoice();
    console.log(`You chose ${userSelection}!`)
    console.log(`The Computer chose ${computerSelection}!`);
    if (
    userSelection == 'Rock' && computerSelection == 'Scissors' || 
    userSelection == 'Paper' && computerSelection == 'Rock' || 
    userSelection == 'Scissors' && computerSelection == 'paper' ){
        console.log('You Win!')
        return 1;
    } else if (userSelection == computerSelection) {
        console.log('Its a Tie!')
        return 0;
    } else {
        console.log('You Lost!')
        return 2;
    }
    
}
roundEval();