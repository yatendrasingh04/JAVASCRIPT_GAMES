// declare array to store images

const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    }
]

// to randomly shuffle the card
cardArray.sort( () => 0.5 - Math.random());

// to store it in grid
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

// to pass the chosen card by user
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// to create cards
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        
        const card = document.createElement('img'); // to store the card
        
        card.setAttribute('src' , 'images/blank.png');// setting the image in the card
        
        card.setAttribute('data-id', i);// giving id to each i i.e each card
        card.addEventListener('click',flipCard)// when user clicks the card, flip function works
        
        gridDisplay.appendChild(card);// adding all the cards until for loop gets break
    }
}

createBoard(); // call this function

// to check the match between selected 2 cards
function checkMatch(){
    const cards = document.querySelectorAll('img'); // selected card will be in cards
    // storing chosen card ids in separate variable called option id
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    // if user clicks on same card again
    if(optionOneId == optionTwoId){
        // it changes that card back to the default blank image and displays alert
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('You have clicked the same card!');
    }

    else if(cardsChosen[0] == cardsChosen[1]){ // if both cards are equal
        alert('You have found the match!');
        // the seleccted card is changed into white image
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        // when there is a match for that specific array's , the flip function even gets removed.i.e, even if it is clicked by user it does not do anything
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);// if it is a match then it moves to cardschosen
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('Sorry try again!');
    }
    resultDisplay.innerHTML = cardsWon.length;// to display in result
    // making both chosen cards and its id empty again
    cardsChosen = [];
    cardsChosenIds = [];

    // to display in result
    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.innerHTML = 'Congratulations you found them all!';
    }
}


// to flip the card when user clicks on it
function flipCard(){
    
    const cardId = this.getAttribute('data-id')// which card is being clicked that card must be displayed
    
    cardsChosen.push(cardArray[cardId].name);// when user clicks on some card, that card id's name gets inside cardschosen variable
    
    cardsChosenIds.push(cardId);// pushing the id to the chosen card by user
    
    this.setAttribute('src', cardArray[cardId].img);// to get the selected card image

    // comparing for match
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}