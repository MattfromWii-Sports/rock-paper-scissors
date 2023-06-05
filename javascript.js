//Variables And Elements In Main
let stat = 'notActive';
let playerChoice;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const resultText = document.getElementById('result');
const tally = document.getElementById('tally');
const playerChoices = document.querySelectorAll('.left-column > .box');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

rockBtn.addEventListener('click', () => round('Rock'));
paperBtn.addEventListener('click', () => round('Paper'));
scissorBtn.addEventListener('click', () => round('Scissor'));

//Round
function round(playerSelection) {
    if (stat == 'notActive') {
        stat = 'active';
        playerChoice = playerSelection;
        computerChoice = randomComputer();
        document.querySelector(`div[data-type='${playerChoice}']`).classList.add('highlight');
        ('highlight');
        playerChoiceText.textContent = `You chose ${playerChoice}`;
        setTimeout(function() {
            document.querySelector(`div[data-type-cpu='${computerChoice}']`).classList.add('highlight');
            computerChoiceText.textContent = `The Computer chose ${computerChoice}`;
        }, 1500)
        setTimeout(function() {
            findWinner(playerChoice, computerChoice);
        }, 2500)
        setTimeout(function() {stat = 'notActive'}, 5000);
    }
}

function randomComputer() { //returns computer choice
    const randomN = ['Rock', 'Paper', 'Scissor'];
    return randomN[Math.floor(Math.random() * randomN.length)];
}

function findWinner(playerType, computerType) {
    if (playerType == computerType) {
        resultText.textContent = 'Its A Tie!';
    } else if (
    (playerType == 'Rock' && computerType == 'Scissor') || 
    (playerType == 'Paper' && computerType == 'Rock') || 
    (playerType == 'Scissor' && computerType == 'Paper')) {
        resultText.textContent = `${playerChoice} beats ${computerChoice}, You Win!`;
        playerPoints += 1;
    } else {
        resultText.textContent = `${computerChoice} beats ${playerChoice}, You Lose!`;
        computerPoints += 1;
    }
}
/*
function textPCRT() {
    setTimeout(function() {
        currentCChoice.classList.add('highlight');
        computerChoiceText.textContent = `The Computer chose ${currentCChoice.dataset.typeCpu}`;
    }, 1500)
    setTimeout(function() {
        if (parseInt(currentPChoice.dataset.value) == parseInt(currentCChoice.dataset.valueCpu)) {
            resultText.textContent = 'Its A Tie!';
        } else if (parseInt(currentPChoice.dataset.value) - parseInt(currentCChoice.dataset.valueCpu) == 1 || parseInt(currentPChoice.dataset.value) - parseInt(currentCChoice.dataset.valueCpu) == -2) {
            resultText.textContent = `${currentPChoice.dataset.type} beats ${currentCChoice.dataset.typeCpu}, You Win!`;
            playerPoints += 1;
        } else {
            resultText.textContent = `${currentCChoice.dataset.typeCpu} beats ${currentPChoice.dataset.type}, You Lose!`;
            computerPoints += 1;
        }
    }, 2800)
    setTimeout(function() {  
        tally.textContent = `${playerPoints} -- ${computerPoints}`
    }, 4000)
}

//text & highlight functions
function textPCRT() {
    playerChoiceText.textContent = `You chose ${currentPChoice.dataset.type}`;
    currentPChoice.classList.add('highlight');
    setTimeout(function() {
        currentCChoice.classList.add('highlight');
        computerChoiceText.textContent = `The Computer chose ${currentCChoice.dataset.typeCpu}`;
    }, 1500)
    setTimeout(function() {
        if (parseInt(currentPChoice.dataset.value) == parseInt(currentCChoice.dataset.valueCpu)) {
            resultText.textContent = 'Its A Tie!';
        } else if (parseInt(currentPChoice.dataset.value) - parseInt(currentCChoice.dataset.valueCpu) == 1 || parseInt(currentPChoice.dataset.value) - parseInt(currentCChoice.dataset.valueCpu) == -2) {
            resultText.textContent = `${currentPChoice.dataset.type} beats ${currentCChoice.dataset.typeCpu}, You Win!`;
            playerPoints += 1;
        } else {
            resultText.textContent = `${currentCChoice.dataset.typeCpu} beats ${currentPChoice.dataset.type}, You Lose!`;
            computerPoints += 1;
        }
    }, 2800)
    setTimeout(function() {  
        tally.textContent = `${playerPoints} -- ${computerPoints}`
    }, 4000)
}
function resetAll() {
    setTimeout(function() {
        currentPChoice.classList.remove('highlight');
        playerChoiceText.textContent = '';
        currentCChoice.classList.remove('highlight');
        computerChoiceText.textContent = '';
        resultText.textContent = '';
    }, 7500)
}*/
