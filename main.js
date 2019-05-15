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

var card = document.querySelector('.right-section')

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
       // console.log('Testing');
       gamePlayOne();
       gamePlayTwo();
       // popUpCard();
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
    //When there is typing, or there is text in any input field, the button will be enabled
    // console.log(value);

    if (value !== "") {

      clearButton.disabled = false;
      resetButton.disabled = false;
    }
  }

function gamePlayOne() {
  // debugger;
    // console.log('gameplay')
    var parseGuessOne = parseInt(guessOne.value);
    if (parseGuessOne < randomNum){
      console.log(lowHighResultOne)
    lowHighResultOne.innerText = "That\'s too low";
  } else if (parseGuessOne > randomNum){
    lowHighResultOne.innerText = "That\'s too high"
  } else{
    lowHighResultOne.innerText = "BOOM!";
    console.log(currentGuessNameOne.innerText)
    popUpCard(currentGuessNameOne.innerText);
  }
}

function gamePlayTwo() {
  var parseGuessTwo = parseInt(guessTwo.value);
  if (parseGuessTwo < randomNum){
    lowHighResultTwo.innerText = "That\'s too low"
  } else if (parseGuessTwo > randomNum){
    lowHighResultTwo.innerText = "That\'s too high"
  } else{
    lowHighResultTwo.innerText = "BOOM!";
    console.log(currentGuessNameTwo.innerText);
    popUpCard(currentGuessNameTwo.innerText);
  }
}

function popUpCard(winner){
  card.insertAdjacentHTML('afterbegin', `<section class="winners">
        <p class="result-names"> ${nameOne.value}<span class="vs">VS</span>${nameTwo.value}</p>
        <section class="the-winner">
          <p class="winner-announces">${winner}</p>
          <p class="actual-winner">WINNER</p>
        </section>
        <section class="guess-and-time">
          <p><span class="number-of-guesses">47</span> GUESSES</p>
          <p><span class="time">1.35 MINUTES</span></p>
          <p>IMG</p>
        </section>
      </section>`)

}






  