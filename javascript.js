//Variables And Elements In Main
let typeValue;
let playerTypeName;
let computerValue;
let computerTypeName;
let result;
let score;
let calculateWinner;
let playerPoints = 0;
let computerPoints = 0;
const playerChoiceText = document.querySelector('.player-choice.text');
const resultText = document.querySelector('.result.text');
const computerChoiceText = document.querySelector('.computer-choice.text');
const tally = document.querySelector('.tally.text');

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', round));

//Full Game

//1 Round
function round() {
    let currentPChoice = this;
    currentCChoice = randomComputer();
    playerChoices.forEach(btn => btn.removeEventListener('click', round));
    playerTypeValue = currentPChoice.dataset.value; /*For round calculations*/
    playerTypeName = currentPChoice.dataset.type; /*For player text */
    currentPChoice.classList.add('highlight');
    playerText();
    computerTypeValue = currentCChoice.dataset.valueCpu; /*For round calculations*/
    computerTypeName = currentCChoice.dataset.typeCpu; /*For player text */
    computerTextBox();
    calculateWinner = parseInt(playerTypeValue) - parseInt(computerTypeValue);
    roundResult();
    scoreTally();
}

//Calculations; Computer And Results
function randomComputer() {
    let randomN = Math.floor(Math.random() * 3);
    return document.querySelector(`[data-value-cpu="${randomN}"]`);
}

//text functions & Timeout
function playerText() {
    playerChoiceText.textContent = `You chose ${playerTypeName}`;
}
function computerTextBox() {
    setTimeout(function() {
    currentCChoice.classList.add('highlight');
    computerChoiceText.textContent = `The Computer chose ${computerTypeName}`;
    }, 1400)
}
function roundResult() {
    setTimeout(function() {
    if (calculateWinner == 0) {
        resultText.textContent = 'Its A Tie!';
    } else if (calculateWinner == 1 || calculateWinner == -2) {
        resultText.textContent = `${playerTypeName} beats ${computerTypeName}, You Win!`;
        playerPoints += 1;
    } else {
        resultText.textContent = `${computerTypeName} beats ${playerTypeName}, You Lose!`;
        computerPoints += 1;
    }
    }, 2200)
}
function scoreTally() {
    setTimeout(function() {  
        tally.textContent = `${playerPoints} -- ${computerPoints}`
    }, 3000)
}

