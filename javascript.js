//Variables And Elements In Main
let typeValue;
let playerTypeName;
const computerChoiceText = document.querySelector('.computer-choice.text');
const resultText = document.querySelector('.result.text');
const roundText = document.querySelector('.tally.text');

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', main));
function main() {
    playerTypeValue = this.dataset.val; /*For round calculations*/
    console.log(playerTypeValue);
    playerTypeName = userChoice(); /*For player text */
    console.log(playerTypeName);
    this.classList.add('highlight');
    playerChoices.forEach(btn => btn.removeEventListener('click', main));
    setTimeout(playerChoiceF, 200);
}

//Player values, calculation and text
function userChoice() {
    if (playerTypeValue == 0) {
        return 'Rock';
    } else if (playerTypeValue == 1) {
        return 'Paper';
    } else if (playerTypeValue == 2) {
        return 'Scissor';
    } else {
        return 'Error';
    }
}

//Computer values, calculation

//text timeout functions
function playerChoiceF() {
    const playerChoiceText = document.querySelector('.player-choice.text');
    playerChoiceText.textContent = `You chose ${playerTypeName}`;
}