//Variables And Elements In Main
let stat = 'notActive';
let playerChoice;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const resultText = document.getElementById('result');
const tally = document.getElementById('tally');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

rockBtn.addEventListener('click', () => round('Rock'));
paperBtn.addEventListener('click', () => round('Paper'));
scissorBtn.addEventListener('click', () => round('Scissor'));

//Round
function round(playerSelection) {
    if (stat == 'notActive') {
        stat = 'active';
        playerChoice = playerSelection;
        computerChoice = randomComputer();
        const playerDiv = document.querySelector(`div[data-type='${playerChoice}']`)
        const computerDiv = document.querySelector(`div[data-type-cpu='${computerChoice}']`)
        playerDiv.classList.add('highlight')
        playerChoiceText.textContent = `You chose ${playerChoice}`;
        setTimeout(function() {
            computerDiv.classList.add('highlight');
            computerChoiceText.textContent = `The Computer chose ${computerChoice}`;
        }, 1500)
        setTimeout(function() {
            findWinner(playerChoice, computerChoice);
        }, 2500)
        setTimeout(function() {  
            tally.textContent = `${playerPoints} -- ${computerPoints}`
        }, 3600)
        setTimeout(function() {
            playerDiv.classList.remove('highlight');
            computerDiv.classList.remove('highlight');
            playerChoiceText.textContent = '';
            computerChoiceText.textContent = '';
            resultText.textContent = '';
        }, 5000)
        setTimeout(function() {stat = 'notActive'}, 5200);
    }
}

function randomComputer() {
    const randomN = ['Rock', 'Paper', 'Scissor'];
    return randomN[Math.floor(Math.random() * randomN.length)];
}

function findWinner(playerType, computerType) {
    if (playerType == computerType) {
        resultText.textContent = 'Its A Tie!';
    } else if (
    (playerType == 'Rock' && computerType == 'Scissor') || 
    (playerType == 'Paper' && computerType == 'Rock') || 
    (playerType == 'Scissor' && computerType == 'Paper')) {
        resultText.textContent = `${playerChoice} beats ${computerChoice}, You Win!`;
        playerPoints += 1;
    } else {
        resultText.textContent = `${computerChoice} beats ${playerChoice}, You Lose!`;
        computerPoints += 1;
    }
}

function reset() {
    playerDiv.classList.remove('highlight'); 
    computerDiv.classList.remove('highlight');
    playerChoiceText.textContent = '';
    computerChoiceText.textContent = '';
    resultText.textContent = '';
}