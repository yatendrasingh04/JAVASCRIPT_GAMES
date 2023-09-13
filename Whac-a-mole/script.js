// declare variables
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

// to make the moel move to each squares
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  });

  // it will randomly move around within given no.of squares
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole');

  // when user clicks
  hitPosition = randomSquare.id;
}

// to display score
squares.forEach(square => {
  square.addEventListener('mousedown', () => { // mousedown = clicking
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  })
})

// to move mole within some time interval
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole(); //to perform move function in mole

// to display timer 
function countDown() {
    currentTime--; // it keeps on decreasing
    timeLeft.textContent = currentTime;
    // when time gets over, everything gets cleared
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }

}
// time interval for timer
let countDownTimerId = setInterval(countDown, 1000);





