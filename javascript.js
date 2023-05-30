//Variables And Elements In Main
let typeValue;
let playerTypeName;
let computerValue;
let computerTypeName;
const resultText = document.querySelector('.result.text');
const roundText = document.querySelector('.tally.text');

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', round));
function round() {
    const currentPChoice = this;
    playerTypeValue = currentPChoice.dataset.value; /*For round calculations*/
    playerTypeName = currentPChoice.dataset.type; /*For player text */
    console.log(playerTypeValue);
    console.log(playerTypeName);
    const currentCChoice = randomComputer();
    computerTypeValue = currentCChoice.dataset.valueCpu; /*For round calculations*/
    computerTypeName = currentCChoice.dataset.typeCpu; /*For player text */
    console.log(computerTypeValue);
    console.log(computerTypeName);
    currentPChoice.classList.add('highlight');
    playerChoices.forEach(btn => btn.removeEventListener('click', round));
    playerText();
    computerTextBox();
}

//Computer values
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
    randomComputer().classList.add('highlight');
    computerChoiceText.textContent = `The Computer chose ${computerTypeName}`;
    }, 900)
}
