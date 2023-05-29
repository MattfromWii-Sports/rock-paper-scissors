//Player Choice event listener
const playerChoices = document.querySelectorAll('.left-column > .box');
playerChoices.forEach(btn => btn.addEventListener('click', main));
function main() {
    let typeValue = this.dataset.val
    if (typeValue == 0) {
        typeName = 'rock';
    } else if (typeValue == 1) {
        typeName = 'paper'
    } else {
        typeName = 'scissor'
    }
    console.log(typeName);
}
