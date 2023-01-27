const cardArray = [
    {
        name: 'wawa',
        img: '../assets/wawa.jpg'
    },
    {
        name: 'churo',
        img: '../assets/churo.jpg'
    },
    {
        name: 'xylo',
        img: '../assets/xylo.jpg'
    },
    {
        name: 'teef',
        img: '../assets/teef.jpg'
    },
    {
        name: 'rory',
        img: '../assets/rory.jpg'
    },
    {
        name: 'carot',
        img: '../assets/carot.jpg'
    },
    // Repeat
    {
        name: 'wawa',
        img: '../assets/wawa.jpg'
    },
    {
        name: 'churo',
        img: '../assets/churo.jpg'
    },
    {
        name: 'xylo',
        img: '../assets/xylo.jpg'
    },
    {
        name: 'teef',
        img: '../assets/teef.jpg'
    },
    {
        name: 'rory',
        img: '../assets/rory.jpg'
    },
    {
        name: 'carot',
        img: '../assets/carot.jpg'
    },
]

// Shuffles array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', '../assets/carot.jpg')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
   let cardId = this.getAttribute('data-id')
}