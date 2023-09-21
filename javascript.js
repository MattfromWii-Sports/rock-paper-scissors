let stat = 'inactive';
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
const dialog = document.querySelector('.dialog-box');
const gameWinner = document.getElementById('game-winner');
const resetBtn = document.getElementById('reset-game');

rockBtn.addEventListener('click', () => gameboard.round('Rock'));
paperBtn.addEventListener('click', () => gameboard.round('Paper'));
scissorBtn.addEventListener('click', () => gameboard.round('Scissor'));
resetBtn.addEventListener('click', resetAll);

//Add Event delegation for options, make variables private, make modules work

//Round
const gameboard = (() => {
    function round(playerSelection) {
        if (playerPoints === 5) {
            tally.textContent = '';
            gameWinner.textContent = 'You Won! :)'
            dialog.showModal();
        } else if (computerPoints === 5) {
            tally.textContent = '';
            gameWinner.textContent = 'The Computer Won! :('
            dialog.showModal();
        } else if (stat === 'inactive') {
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
            setTimeout(function() {stat = 'inactive'}, 5200);
        }
    }

    function randomComputer() {
        const randomN = ['Rock', 'Paper', 'Scissor'];
        return randomN[Math.floor(Math.random() * randomN.length)];
    }

    function findWinner(playerType, computerType) {
        if (playerType === computerType) {
            resultText.textContent = 'Its A Tie!';
        } else if (
        (playerType === 'Rock' && computerType === 'Scissor') || 
        (playerType === 'Paper' && computerType === 'Rock') || 
        (playerType === 'Scissor' && computerType === 'Paper')) {
            resultText.textContent = `${playerChoice} beats ${computerChoice}, You Win!`;
            playerPoints += 1;
        } else {
            resultText.textContent = `${computerChoice} beats ${playerChoice}, You Lose!`;
            computerPoints += 1;
        }
    }

    function resetAll() {
        playerPoints = 0;
        computerPoints = 0;
        dialog.close();
    }
})();



