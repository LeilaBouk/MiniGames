const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    compChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }

    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Won!'
    }

    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Won!'
    }

    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Won!'
    }

    else {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}