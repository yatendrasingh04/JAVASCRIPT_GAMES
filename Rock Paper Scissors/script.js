// declare variables

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

// when user clicks on any button, below event happens
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice; //// to display the user's choice
    generateComputerChoice(); // this function starts to work
    getResult(); // this function starts to work
}));

// computer will get generate
function generateComputerChoice(){
    // since index is 0, so it will be from 0 to 2, so we are adding +1
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }

    // to display the computer's choice
    computerChoiceDisplay.innerHTML = computerChoice;
}

// result function
function getResult(){
    if(computerChoice === userChoice){
        result = 'Its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lost!'
    }
    // to display the result
    resultDisplay.innerHTML = result;
}