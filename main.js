var minRange 						= document.querySelector('.min-range-input');
var maxRange 						= document.querySelector('.max-range-input');
var lowestNumber 				= document.querySelector('.lowest-number');
var highestNumber 			= document.querySelector('.highest-number');
var updateButton 				= document.querySelector('.update-btn');
var nameOne 						= document.querySelector('.challenger-1-name');
var nameTwo 						= document.querySelector('.challenger-2-name');
var currentGuessNameOne = document.querySelector('.name-1');
var currentGuessNameTwo = document.querySelector('.name-2');
var submitGuess 				= document.querySelector('.submit-guess');
var guess1 							= document.querySelector('.challenger-1-guess');
var guess2 							= document.querySelector('.challenger-2-guess');
var play1Score 					= document.querySelector('.play-1-guess');
var play2Score 					= document.querySelector('.play-2-guess');

var clearButton = document.querySelector('.clear-game');

updateButton.addEventListener('click', showRange);
submitGuess.addEventListener('click', submitAction);
clearButton.addEventListener('click', clearsAll);


function showRange (event){
	// event.preventDefault();
  lowestNumber.innerText = minRange.value;
  highestNumber.innerText = maxRange.value;
}

function updateScore() {
        play1Score.innerText = guess1.value;
        play2Score.innerText = guess2.value;
    }

function submitAction(e) {
        e.preventDefault();
        updateScore();
        updateNames();
}

function updateNames (event){

currentGuessNameOne.innerText = nameOne.value;
currentGuessNameTwo.innerText = nameTwo.value;

}

function clearsAll () {
	// e.preventDefault();
	console.log("clearsAll");
minRange.value="";
maxRange.value="";

}

