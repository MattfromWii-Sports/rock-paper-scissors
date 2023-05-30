//Variables In Main
let typeValue;

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', main));
function main() {
    playerTypeValue = this.dataset.val; /*For round calculations*/
    let playerTypeName = userChoice(); /*For player text */
    this.classList.add('highlight');
    playerChoices.forEach(btn => btn.removeEventListener('click', main));
    console.log(playerTypeValue);
    console.log(playerTypeName);
}

//Player values, calculation and text
function userChoice() {
    if (playerTypeValue == 0) {
        return 'rock';
    } else if (playerTypeValue == 1) {
        return 'paper';
    } else if (playerTypeValue == 2) {
        return 'scissor';
    } else {
        return 'error';
    }
}
