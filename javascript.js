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
const tallyText = document.getElementById('tally');
const dialog = document.querySelector('.dialog-box');
const boxes = document.querySelectorAll('.panel > .box');

const gameWinner = document.getElementById('game-winner');
const resetBtn = document.getElementById('reset-game');
resetBtn.addEventListener('click', () => gameboard.resetAll());

//Round
const gameboard = (() => {
    let choicesVs, result, tally;
    let playerPoints = 0;
    let computerPoints = 0;
    const choices = ['Rock', 'Paper', 'Scissors'];
    const round = (playerSelection) => {
        if (playerChoice !== undefined) return;
        playerChoice = parseInt(playerSelection);
        const playerDiv = document.querySelector(`.left-column > div[data-number='${playerSelection}']`);
        computerChoice = randomComputer();
        const computerDiv = document.querySelector(`.right-column > div[data-number='${computerChoice}']`);
        compareChoices(playerChoice, computerChoice);
        textBoxTransition(playerDiv, computerDiv);  
    }

    const randomComputer = () => {
        const randomN = [0, 1, 2];
        return randomN[Math.floor(Math.random() * randomN.length)];
    }
    const compareChoices = (player, computer) => {
        let x = player - computer;
        switch (x) {
            case -2:
            case 1:
                choicesVs = `${choices[playerChoice]} beats ${choices[computerChoice]}`;
                result = 'You Win!';
                playerPoints += 1;
                break;
            case 2:
            case -1:
                choicesVs = `${choices[computerChoice]} beats ${choices[playerChoice]}`;
                result = 'You Lose!';
                computerPoints += 1;
                break;
            default:
                choicesVs = `You both picked ${choices[playerChoice]}`;
                result = 'Its a Tie!';
        }
        tally = `${playerPoints} - ${computerPoints}`
    }
    const textBoxTransition = (player, computer) => { 
        let statementString, statementDiv;
        const textTypeOut = (statement, textdiv) => { //adds text letter by letter
            statementString = statement;
            statementDiv = textdiv;
            if (statementString !== '') {
            textdiv.textContent += statementString.charAt(0);
            statementString = statementString.substring(1);
            setTimeout(textTypeOut, 100, statementString, statementDiv);
            }
        }
        const textTypeIn = (textdiv2) => { //removes text letter by letter
            statementDiv = textdiv2;
            if (textdiv2.textContent !== '') {
                textdiv2.textContent = textdiv2.textContent.slice(0, -1);
                setTimeout(textTypeIn, 90, statementDiv);
            }
        }
        boxes.forEach(div => div.classList.add('center'));
        player.classList.add('highlight');
        computer.classList.add('highlight');
        textTypeOut(choicesVs, comparisonText);
        setTimeout(textTypeOut, 2500, result, resultText);
        setTimeout(textTypeOut, 4000, tally, tallyText);
        setTimeout(textTypeIn, 5500, tallyText);
        setTimeout(textTypeIn, 5900, resultText);
        setTimeout(textTypeIn, 6200, comparisonText);
        setTimeout(function() {
            boxes.forEach(div => div.classList.remove('center'));
            player.classList.remove('highlight');
            computer.classList.remove('highlight');
        }, 6500);
        setTimeout(function() {
            playerChoice = undefined;
            computerChoice = undefined;
            if (playerPoints >= 3 || computerPoints >= 3) winnerTrue();
        }, 8200);
    }
    const winnerTrue = () => {
        if (playerPoints >= 3) { //change later
            gameWinner.textContent = 'You Won! :)'
            dialog.showModal();
        } else {
            gameWinner.textContent = 'You Lost! :('
            dialog.showModal();
        }
    }
    const resetAll = () => {
        playerPoints = 0;
        computerPoints = 0;
        dialog.close();
    }
    return {round, resetAll};
})();

