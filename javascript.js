//Variables And Elements In Main
let typeValue;
let playerTypeName;
const computerChoiceText = document.querySelector('.computer-choice.text');
const resultText = document.querySelector('.result.text');
const roundText = document.querySelector('.tally.text');

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', round));
function round() {
    playerTypeValue = this.dataset.value; /*For round calculations*/
    console.log(playerTypeValue);
    playerTypeName = this.dataset.type; /*For player text */
    console.log(playerTypeName);
    this.classList.add('highlight');
    playerChoices.forEach(btn => btn.removeEventListener('click', round));
    setTimeout(playerChoiceF, 200);
}

//Computer values, calculation

//text timeout functions
function playerChoiceF() {
    const playerChoiceText = document.querySelector('.player-choice.text');
    playerChoiceText.textContent = `You chose ${playerTypeName}`;
}