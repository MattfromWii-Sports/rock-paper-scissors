//Variables And Elements In Main
let currentCChoice;
let currentPChoice;
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

//1 Round
function round() {

}

/*
//text & highlight functions
function textPCRT() {
    playerChoiceText.textContent = `You chose ${currentPChoice}`;
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
//Calculations; Computer And Results
function randomComputer() {
    let randomN = Math.floor(Math.random() * 3);
    return document.querySelector(`[data-value-cpu="${randomN}"]`);
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
}
