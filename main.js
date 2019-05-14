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


resetButton.disabled = true;
clearButton.disabled = true;


updateButton.addEventListener('click', generateRange);
clearButton.addEventListener('click', clearsAll);
submitGuess.addEventListener('click', submitAction);
resetButton.addEventListener('click', resetGame);

minRange.addEventListener('keyup', function() {
  enablingButtons(minRange.value);
});
maxRange.addEventListener('keyup', function() {
  enablingButtons(maxRange.value);
});
nameOne.addEventListener('keyup', function() {
  enablingButtons(nameOne.value);
});
nameTwo.addEventListener('keyup', function() {
  enablingButtons(nameTwo.value);
});
guessOne.addEventListener('keyup', function() {
  enablingButtons(guessOne.value);
});
guessTwo.addEventListener('keyup', function() {
  enablingButtons(guessTwo.value);
});




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
  resetButton.disabled = true;
  clearButton.disabled = true;
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
    clearButton.disabled = true;

}

function enablingButtons(value) {
    //When there is typing, or there is text in any input field, the button will be enabled
    console.log(value);

    if (value !== "") {

      clearButton.disabled = false;
      resetButton.disabled = false;
    }
  }


  