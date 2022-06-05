const cardArray = [
    {
        cID: '0',
        img: 'images/0.gif',
    },
    {
        cID: '1',
        img: 'images/1.gif',
    },
    {
        cID: '2',
        img: 'images/2.gif',
    },
    {
        cID: '3',
        img: 'images/3.gif',
    },
    {
        cID: '4',
        img: 'images/4.gif',
    },
    {
        cID: '5',
        img: 'images/5.gif',
    },
    {
        cID: '0',
        img: 'images/0.gif',
    },
    {
        cID: '1',
        img: 'images/1.gif',
    },
    {
        cID: '2',
        img: 'images/2.gif',
    },
    {
        cID: '3',
        img: 'images/3.gif',
    },
    {
        cID: '4',
        img: 'images/4.gif',
    },
    {
        cID: '5',
        img: 'images/5.gif',
    }]
cardArray.sort(() => 0.5-Math.random())

const grid = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/close/0.gif')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        console.log(card)
        grid.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const c0 = cardsChosenIds[0]
    const c1 = cardsChosenIds[1]
    if (c0 == c1) {
        cards[c0].setAttribute('src', 'images/close/0.gif')
        cards[c1].setAttribute('src', 'images/close/0.gif')
        messageDisplay.innerHTML = '你點了同一隻啦啦'
    }
        
    if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.innerHTML ='找到啦~大啦啦'
        cards[c0].setAttribute('src', 'images/close/5.png')
        cards[c1].setAttribute('src', 'images/close/5.png')
        cards[c0].removeEventListener('click', flipCard)
        cards[c1].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[c0].setAttribute('src', 'images/close/0.gif')
        cards[c1].setAttribute('src', 'images/close/0.gif')
        messageDisplay.innerHTML ='不對啦~氁muMU'
    }
    resultDisplay.innerHTML = cardsWon.length + '/' + cardArray.length/2
    cardsChosen = []
    cardsChosenIds = []
    canChoise = true

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = '恭喜啦啦~'
        messageDisplay.innerHTML = ''
    }

}

let canChoise = true

function flipCard() {
    messageDisplay.innerHTML=''
    if (canChoise) {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].cID)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            canChoise = false;
            setTimeout(checkMatch, 500)
        }
    }
}
function f(x = 10, y = 20) {
    return x * y;
}
console.log(f(5));

