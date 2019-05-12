var minRange = document.querySelector('.min-range-input');
var maxRange = document.querySelector('.max-range-input');

var lowestNumber = document.querySelector('.lowest-number');
var highestNumber = document.querySelector('.highest-number');

var updateButton = document.querySelector('.update-btn');

var nameOne = document.querySelector('.challenger-1-name');
var nameTwo = document.querySelector('.challenger-2-name');

var currentGuessNameOne = document.querySelector('.name-1');
var currentGuessNameTwo = document.querySelector('.name-2');

var submitGuess = document.querySelector('.submit-guess');

var guess1 = document.querySelector('.challenger-1-guess');
var guess2 = document.querySelector('.challenger-2-guess');

var play1Score = document.querySelector('.play-1-guess');
var play2Score = document.querySelector('.play-2-guess');

var resetButton = document.querySelector('.reset-game');
var clearButton = document.querySelector('.clear-game');
var form = document.getElementById('playerForm');


updateButton.addEventListener('click', generateRange);
clearButton.addEventListener('click', clearsAll);
submitGuess.addEventListener('click', submitAction);

function generateRange(event){
    // event.preventDefault();
 lowestNumber.innerText = minRange.value;
 highestNumber.innerText = maxRange.value;
 // console.log(minRange.value);
 var minNum = parseInt(minRange.value);
 var maxNum = parseInt(maxRange.value);
 console.log(typeof(minNum));
 generateNum(minNum, maxNum);
}


function updateScore() {
       play1Score.innerText = guess1.value;
       play2Score.innerText = guess2.value;
   }
function submitAction(e) {
       e.preventDefault();
       updateScore();
       updateNames();

       console.log('Testing');
}

function updateNames (event){

currentGuessNameOne.innerText = nameOne.value;
currentGuessNameTwo.innerText = nameTwo.value;

}

function resetGame(){
	lowestNumber.innerText = 1;
	highestNumber.innerText = 100;
	minRange.value = '';
	maxRange.value = '';
	play1Score.innerText = 0;
	play2Score.innerText = 0;
	currentGuessNameOne.innerText = 'Challenger 1 Name';
	currentGuessNameTwo.innerText = 'Challenger 2 Name';
	nameOne.value = '';
	nameTwo.value = '';
	guess1.value = '';
	guess2.value = ''; 
	generateNum();
}

resetButton.addEventListener('click', resetGame);


function generateNum(min = 1, max = 100) {
	console.log(Math.floor(Math.random() * max) + min);
	// return Math.floor(Math.random() * max) + min;
}
function clearsAll () {
    // e.preventDefault();
    console.log("clearsAll");
    minRange.value="";
    maxRange.value="";
    nameOne.value="";
    nameTwo.value="";
    guessOne.value="";
    guessTwo.value="";

}

