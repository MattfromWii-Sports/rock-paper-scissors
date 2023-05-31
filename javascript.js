//Variables And Elements In Main
let typeValue;
let playerTypeName;
let computerValue;
let computerTypeName;
let result;
let score;
let calculateWinner;
let currentPChoice;

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', round));
function round() {
    currentPChoice = this;
    currentCChoice = randomComputer();
    playerTypeValue = currentPChoice.dataset.value; /*For round calculations*/
    playerTypeName = currentPChoice.dataset.type; /*For player text */
    computerTypeValue = currentCChoice.dataset.valueCpu; /*For round calculations*/
    computerTypeName = currentCChoice.dataset.typeCpu; /*For player text */
    console.log(playerTypeValue);
    console.log(computerTypeValue); 
    calculateWinner = parseInt(playerTypeValue) - parseInt(computerTypeValue);
    currentPChoice.classList.add('highlight');
    playerChoices.forEach(btn => btn.removeEventListener('click', round));
    playerText();
    computerTextBox();
    roundResult();
}

//Calculations; Computer And Results
function randomComputer() {
    let randomN = Math.floor(Math.random() * 3);
    return document.querySelector(`[data-value-cpu="${randomN}"]`);
}

//text functions & Timeout
function playerText() {
    const playerChoiceText = document.querySelector('.player-choice.text');
    playerChoiceText.textContent = `You chose ${playerTypeName}`;
}
function computerTextBox() {
    setTimeout(function() {
    const computerChoiceText = document.querySelector('.computer-choice.text');
    currentCChoice.classList.add('highlight');
    computerChoiceText.textContent = `The Computer chose ${computerTypeName}`;
    }, 900)
}
function roundResult() {
    setTimeout(function() {
    const resultText = document.querySelector('.result.text');
    if (calculateWinner == 0) {
        resultText.textContent = 'Its A Tie';
    } else if (calculateWinner == 1 || calculateWinner == -2) {
        resultText.textContent = `${playerTypeName} beats ${computerTypeName}, You Win!`;
    } else {
        resultText.textContent = `${computerTypeName} beats ${playerTypeName}, You Lose!`;
    }
    }, 1800)
}

