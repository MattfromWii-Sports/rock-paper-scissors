//Variables And Elements In Main
let typeValue;
let playerTypeName;
let computerValue;
let computerTypeName;
let currentCChoice;
let currentPChoice;
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
    playerChoices.forEach(btn => btn.removeEventListener('click', round));
    currentPChoice = this; //Current Player div
    currentCChoice = randomComputer(); //Current Computer div
    playerTypeValue = currentPChoice.dataset.value; /*For round calculations*/
    playerTypeName = currentPChoice.dataset.type; /*For player text */ 
    computerTypeValue = currentCChoice.dataset.valueCpu; /*For round calculations*/
    computerTypeName = currentCChoice.dataset.typeCpu; /*For player text */ 
    textPCRT();
    resetAll();
}

//Calculations; Computer And Results
function randomComputer() {
    let randomN = Math.floor(Math.random() * 3);
    return document.querySelector(`[data-value-cpu="${randomN}"]`);
}

//text & highlight functions
function textPCRT() {
    playerChoiceText.textContent = `You chose ${playerTypeName}`;
    currentPChoice.classList.add('highlight');
    setTimeout(function() {
        currentCChoice.classList.add('highlight');
        computerChoiceText.textContent = `The Computer chose ${computerTypeName}`;
    }, 1400)
    setTimeout(function() {
        if (parseInt(playerTypeValue) == parseInt(computerTypeValue)) {
            resultText.textContent = 'Its A Tie!';
        } else if (parseInt(playerTypeValue) - parseInt(computerTypeValue) == 1 || parseInt(playerTypeValue) - parseInt(computerTypeValue) == -2) {
            resultText.textContent = `${playerTypeName} beats ${computerTypeName}, You Win!`;
            playerPoints += 1;
        } else {
            resultText.textContent = `${computerTypeName} beats ${playerTypeName}, You Lose!`;
            computerPoints += 1;
        }
    }, 2400)
    setTimeout(function() {  
        tally.textContent = `${playerPoints} -- ${computerPoints}`
    }, 3400)
}
function resetAll() {
    setTimeout(function() {
        currentPChoice.classList.remove('highlight');
        playerChoiceText.textContent = '';
        currentCChoice.classList.remove('highlight');
        computerChoiceText.textContent = '';
        resultText.textContent = '';
    }, 6400)
}
