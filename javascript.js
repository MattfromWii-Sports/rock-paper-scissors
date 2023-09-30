/*let stat = 'inactive';
let playerPoints = 0;
let computerPoints = 0;

const dialog = document.querySelector('.dialog-box');
const gameWinner = document.getElementById('game-winner');
const resetBtn = document.getElementById('reset-game');



resetBtn.addEventListener('click', gameboard.resetAll);
*/
let playerChoice = undefined;
let computerChoice = undefined;
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
rockBtn.addEventListener('click', () => gameboard.round(0));
paperBtn.addEventListener('click', () => gameboard.round(1));
scissorBtn.addEventListener('click', () => gameboard.round(2));

const comparisonText = document.getElementById('comparison');
const resultText = document.getElementById('result');
const tally = document.getElementById('tally');
const boxes = document.querySelectorAll('.panel > .box');
//Make variables private, make modules work

//Round
const gameboard = (() => {
    let playerMessage, computerMessage;
    const choices = ['Rock', 'Paper', 'Scissors'];
    const round = (playerSelection) => {
        console.log(playerSelection);
        //if (playerSelection !== undefined) return;
        playerChoice = parseInt(playerSelection);
        const playerDiv = document.querySelector(`.left-column > div[data-number='${playerSelection}']`);
        computerChoice = randomComputer();
        const computerDiv = document.querySelector(`.right-column > div[data-number='${computerChoice}']`);
        transitionChoiceIn(playerDiv, computerDiv); //center everything, highlight choicess
        //insert check winner function
        console.log(playerDiv);
        console.log(computerDiv);
        playerMessage = 'dfskdjfksdjf';
        textTransition();
    
    }
    const randomComputer = () => {
        const randomN = [0, 1, 2];
        return randomN[Math.floor(Math.random() * randomN.length)];
    }
    const transitionChoiceIn = (player, computer) => {
        boxes.forEach(div => div.classList.add('center'));
        player.classList.add('highlight');
        computer.classList.add('highlight');

    }
    const textTransition = () => { 
        let statementString, statementDiv;
        const textType = (statement, textdiv) => {
            statementString = statement;
            statementDiv = textdiv;
            if (statementString !== '') {
            textdiv.textContent += statementString.charAt(0);
            statementString = statementString.substring(1);
            setTimeout(textType, 100, statementString, statementDiv);
            }
        }
        textType(playerMessage, comparisonText);
    }
    /*function round(playerSelection) {
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
    */
    return {round};
})();

