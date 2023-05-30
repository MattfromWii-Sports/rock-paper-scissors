//Variables In Main
let typeValue;

//Player Choice event listener, Main Function
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', main));
function main() {
    playerTypeValue = this.dataset.val;
    let typeName = userChoice();
    console.log(typeValue);
    console.log(typeName);

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