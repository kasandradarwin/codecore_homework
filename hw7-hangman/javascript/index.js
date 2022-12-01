// import random_words from './random_words.js'
// const random_words = require('./random_words.js')


const random_words = [
"HANGMAN",
];

// let random_words = [
//   "CURIOUS",
//   "QUAINT",
//   "MOTION",
//   "AGREEMENT",
//   "SCARCE",
//   "ABUNDANT",
//   "CREATOR",
//   "LUXURIOUS",
//   "PRESERVE",
//   "PROMISE",
//   ];

let currentWord = "";
let maxWrong = 6;
let incorrectGuesses = 0;
let guessed = [];
let activeBoard = null;

const winSound = new Audio("./sounds/win-sound.wav")
const loseSound = new Audio("./sounds/lose-sound.wav")

// This function will randomly select a word from a list of word in the random_words array-- which at the moment is just one word.
function randomWord() {
   currentWord = random_words[Math.floor(Math.random()*random_words.length)]

};

// this creates the keyboard, splitting the alphabet up and mapping through, setting the id to the letter , then rejoining stored in a function for easy reset. Reset function below re-activated the disable keys.
function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-dark m-2"
          id='${letter}'
          onClick="selectedLetter('${letter}')"
          onKeyPress="selectedLetter('${letter}')"
        >
          ${letter}
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }


// This function kicks in when the user selects a letter, checks to see if its in the word or not. Either way it 
//disables the letter so the user cannot make the same guess twice-- pushes to a "guessed" array.

//if letter is in the word, it calls the guessedword function and checks to see if the game is won

//if letter is not in the word, it updates the hangman picture, adds to the mistakes, and checks to 
//see if the game is lost (if the max wrong guesses was reached)

function selectedLetter(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (currentWord.includes(chosenLetter)){
        guessedWord(chosenLetter);
        checkWin();
    } else {
        document.getElementById('hangmanPic').src =
           './images/gallows' + (incorrectGuesses + 1) + '.jpg';
        incorrectGuesses++;
        updateIncorrectGuesses();
        checkLoss();
    
    }
}


// the two functions below are called in their respective "check loss" and "check win" functions below.
function congrats(){
  alert("You won!!");
  reset()
}

function betterLuckNextTime(){
  alert("Ah, too bad. Try again!");
  reset()
}


//checks to see if the guessed word and the current "random" word is the same
function checkWin() {
  if(activeBoard === currentWord){
    winSound.play()
    document.getElementById('keyboard').innerHTML = 'You won!!!';
    setTimeout(congrats, 100);
    }
}
// checks to see if the max number or wrong guesses have been reached
function checkLoss() {
    if (incorrectGuesses === maxWrong) {
        loseSound.play()
        document.getElementById('playingBoard').innerHTML = `The word was: ${currentWord}`;
        document.getElementById('keyboard').innerHTML = 'You Lost';
        setTimeout(betterLuckNextTime, 100); 
    }

}
// checking to see if the letter exists in the word, if not returns the underscore
//if yes-- prints the correct letter
function guessedWord(letter) {
   
    activeBoard = currentWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('playingBoard').innerHTML = activeBoard;
    console.log("letter" , letter)
    console.log("word status" , activeBoard)


}

// updated the incorrect guess count.
function updateIncorrectGuesses() {
    document.getElementById('incorrectGuesses').innerHTML = incorrectGuesses;
}

//resets the whole board
function reset() {

    incorrectGuesses = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/gallows0.jpg';

    randomWord();
    guessedWord();
    updateIncorrectGuesses();
    generateButtons();
}


//Initial setup
randomWord();
generateButtons();
guessedWord();

