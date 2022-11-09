'use scrict'

let startBtnEl = document.getElementById('startBtn');
let communicationBoxEl = document.getElementById('communicationBox')

let numberInputEl = document.getElementById('numberInput')
let guessBtnEl = document.getElementById('guessBtn')
let yourScoreEl = document.getElementById('yourScore')
let highestScoreEl = document.getElementById('highestScore');

// globalVariables

let computerGuess = 0;
let yourScore = 50;
let HighScore = 0;

// function

function start() {
    startBtnEl.classList.add('none');
    communicationBoxEl.innerText = 'I Have a number berween 1 to 50. Enter your guess bellow !!'
    guessBtnEl.classList.add('show')
    numberInputEl.classList.add('show');
    computerGuess = (Math.round(Math.random() * 49)) + 1;
    yourScoreEl.innerText = yourScore;
}

function compareWithGuess() {
    let numberInputVl = numberInputEl.value;
    numberInputEl.value = null;
    if (numberInputVl>0 && numberInputVl < 51) {
        if (numberInputVl < computerGuess) {
            communicationBoxEl.innerText = 'My number is greater then your guess';
            yourScore -= 1;
            yourScoreEl.innerText = yourScore;
        }
        else if (numberInputVl > computerGuess) {
            communicationBoxEl.innerText = 'My number is lesser then your guess';
            yourScore -= 1;
            yourScoreEl.innerText = yourScore;
        }
        else {
            communicationBoxEl.innerText = `My number is ${computerGuess} you find it`
            if (HighScore < yourScore) {
                HighScore = yourScore;
                highestScoreEl.innerText = HighScore;
            }
            guessBtnEl.classList.remove('show')
            numberInputEl.classList.remove('show');
            startBtnEl.classList.remove('none');
            yourScore = 0;
        }
    } else {
        alert('Enter a valid Number between 1 to 50 to play')
    }
}