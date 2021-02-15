document.addEventListener('DOMContentLoaded',() => {

  // Card options

const cardArray = [
  {
    name: 'American breakfast',
    img:'images/breakfast.gif'
  },

  {
    name: 'American breakfast',
    img:'images/breakfast.gif'
  },

  {
    name: 'Burger',
    img:'images/burger.gif'
  },

  {
    name: 'Burger',
    img:'images/burger.gif'
  },

   {
    name: 'Fries',
    img:'images/fries.gif'
  },

  {
    name: 'Fries',
    img:'images/fries.gif'
  },

  {
    name: 'Ice-cream',
    img:'images/ice-cream.gif'
  },

  {
    name: 'Ice-cream',
    img:'images/ice-cream.gif'
  },

   {
    name: 'Pizza',
    img:'images/pizza.gif'
  },

  {
    name: 'Pizza',
    img:'images/pizza.gif'
  },

  {
    name: 'Slice',
    img:'images/slice.gif'
  },

    {
    name: 'Slice',
    img:'images/slice.gif'
  },

];


cardArray.sort(
  () => 0.5 - Math.random()
)
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenID = []
let cardsWon = []

// Board

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src','images/blanc.gif')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

// check

function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneID = cardsChosenID[0]
  const optionTwoID = cardsChosenID[1]
  if(cardsChosen[0] === cardsChosen[1]) {
    alert('You are good')
    cards [optionOneID].setAttribute('src', 'images/white.gif')
    cards [optionTwoID].setAttribute('src', 'images/white.gif')
    cardsWon.push(cardsChosen)

  }

  else {
    cards [optionOneID].setAttribute('src', 'images/blanc.gif')
    cards [optionTwoID].setAttribute('src', 'images/blanc.gif')
    alert('Keep trying, practice makes better')
  }

  cardsChosen = []
  cardsChosenID = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'You gained max score, you\'re smart'
  }

}

// Flip
function flipCard() {
  var cardID = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardID].name)
  cardsChosenID.push(cardID)
  this.setAttribute('src', cardArray[cardID].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


createBoard()

});