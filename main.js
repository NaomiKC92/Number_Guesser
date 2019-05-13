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

var guessOne = document.querySelector('.challenger-1-guess');
var guessTwo = document.querySelector('.challenger-2-guess');

var playOneScore = document.querySelector('.play-1-guess');
var playTwoScore = document.querySelector('.play-2-guess');

var resetButton = document.querySelector('.reset-game');
var clearButton = document.querySelector('.clear-game');
var form = document.getElementById('playerForm');


updateButton.addEventListener('click', generateRange);
clearButton.addEventListener('click', clearsAll);
submitGuess.addEventListener('click', submitAction);
resetButton.addEventListener('click', resetGame);

function generateRange() {
 lowestNumber.innerText = minRange.value;
 highestNumber.innerText = maxRange.value;
 var minNum = parseInt(minRange.value);
 var maxNum = parseInt(maxRange.value);
 generateNum(minNum, maxNum);
}

function updateScore() {
       playOneScore.innerText = guessOne.value;
       playTwoScore.innerText = guessTwo.value;
   }
function submitAction(e) {
       e.preventDefault();
       updateScore();
       updateNames();
       disableClear()
       console.log('Testing');
}

function updateNames(event){

currentGuessNameOne.innerText = nameOne.value;
currentGuessNameTwo.innerText = nameTwo.value;

}

function resetGame(){
  lowestNumber.innerText = 1;
	highestNumber.innerText = 100;
	minRange.value = '';
	maxRange.value = '';
	playOneScore.innerText = 0;
	playTwoScore.innerText = 0;
	currentGuessNameOne.innerText = 'Challenger 1 Name';
	currentGuessNameTwo.innerText = 'Challenger 2 Name';
	nameOne.value = '';
	nameTwo.value = '';
	guessOne.value = '';
	guessTwo.value = ''; 
	generateNum();
}


function generateNum(min = 1, max = 100) {
	return Math.floor(Math.random() * max) + min;
}

function clearsAll() {
    minRange.value="";
    maxRange.value="";
    nameOne.value="";
    nameTwo.value="";
    guessOne.value="";
    guessTwo.value="";

}

function disableClear() {
  var inputFields = [
  minRange.value,
  maxRange.value,
  nameOne.value,
  nameTwo.value,
  guessOne.value,
  guessTwo.value
 ]


 for (i = 0; i < inputFields.length; i++){
  if (inputFields[i] === '') {
    console.log(inputFields[i])
    clearButton.disable === true;
    // else ()
  } else {
    clearButton.disable === false;
  }

  }
 }

// if inputFields[i].length !==0 {
//   this.disabled = false;
// }
// else {
//   this.disabled = true;
// }

// }



// function disableClear() {
//   var inputFields = [
//   minRange.value,
//   maxRange.value,
//   nameOne.value,
//   nameTwo.value,
//   guess1.value,
//   guess2.value
//  ]
//  let count = 0;
//  for(let i = 0; i < inputFields.length; i++){
//   if (inputFields[i].length !== 0) {
//     count += 1;
//   }
//  }
//   if (count === 6) {
//     //turn "disabled attribute of 'button' to false;
//     // remove disabled css class.
//     console.log('enable reset');
//   }
// }







