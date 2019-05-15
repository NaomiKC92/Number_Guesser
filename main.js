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

var lowHighResultOne = document.querySelector('.play-1-high-low');
var lowHighResultTwo = document.querySelector('.play-2-high-low');

var minNums = 1;
var maxNums = 100;
var randomNum = 0;

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
 minNums = parseInt(minRange.value);
 maxNums = parseInt(maxRange.value);
 generateNum(minNums, maxNums);
  console.log('new generated number from new range' + randomNum)
}

// make sure that you can not update if both inputs are not there

function updateScore() {
       playOneScore.innerText = guessOne.value;
       playTwoScore.innerText = guessTwo.value;
}

function submitAction(e) {
       e.preventDefault();
       updateScore();
       updateNames();
       console.log('Testing');
       gamePlay();
       stayWithinMin();
       stayWithinMax();

}

function updateNames(event){

currentGuessNameOne.innerText = nameOne.value;
currentGuessNameTwo.innerText = nameTwo.value;

}

function resetGame(){
  // console.log(generateNum(min, max))
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
	generateNum(minNums, maxNums);
  console.log(randomNum)
}

function generateNum(min, max) {
	var newNum = Math.floor(Math.random() * max) + min ;
  randomNum = newNum
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
    console.log(value);

    if (value !== "") {

      clearButton.disabled = false;
      resetButton.disabled = false;
    }
  }

function gamePlay() {
    console.log('gameplay')
    var parseGuess = parseInt(guessOne.value);
    if (parseGuess < randomNum){
      console.log(lowHighResultOne)
    lowHighResultOne.innerHTML = "That\'s is too low";
  } else if (parseGuess > randomNum){
    lowHighResultOne.innerHTML = "That is too high"
  } else{
    lowHighResultOne.innerHTML = "BOOM!"
  }
}

function stayWithinMin() {
  if (guessOne.value < minNums || guessTwo.value < minNums) {
    submitButton.diabled = true;
    console.log('Number not in minimum range, please try again!')
}};


function stayWithinMax() {
if (guessOne.value > maxNums || guessTwo.value > maxNums) {
   console.log('Number not in maximum range, please try again!')
}};





  