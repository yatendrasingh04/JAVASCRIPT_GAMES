// declare variables
const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
// variable to stre 9 boxes
const startCells = [
    "", "", "", "", "", "", "", "", ""
];

let go = "circle";
infoDisplay.textContent = "Circle goes fist";

// to create 9 boxes and add an element to it
function createBoard(){
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    });
}
createBoard();

// to perform circle and cross clickable operation
function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    // checks which should be displayed when user clicks
    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = "It is now " + go + "'s go.";
    e.target.removeEventListener("click", addGo);// displays any one when user clicks
    checkScore();
}

// to check who wins
function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    // for circle
    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild ?.classList.contains('circle'));

        if(circleWins){
            infoDisplay.textContent = "Circle Wins!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });

    // for square
    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild ?.classList.contains('cross'));

        if(crossWins){
            infoDisplay.textContent = "Cross Wins!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });
    
}
