//Player Choice event listener
const plC = document.querySelectorAll('.left-column .box');
plC.forEach(btn => btn.addEventListener('click', highlight));
function highlight() {
    playerC = this.id;
    console.log(playerC);
}