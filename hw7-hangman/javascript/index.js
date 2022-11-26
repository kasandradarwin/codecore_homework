const random_words = [
"MEDELLIN",
];

let currentWord = "";
let maxWrong = 6;
let incorrectGuesses = 0;
let guessed = [];
let activeBoard = null;

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
        >
          ${letter}
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }


// This function kicks in when the user selects a letter, checks to see if its in the word or not. Either way it 
//disables the letter so the user cannot make the same guess twice-- pushed to a "guessed" array.

//if letter is in the word, if the selected letter is in the word it called the "guessedword " and 
// checks to see if the game is won

//if letter is not in the word, it updates the hangman picture, adds to the mistakes, and checks to 
//see if that was the last allowed incorrect guess

// bug to fix: wrong guessing goes up to 7 (should only go up to 6), 
//and the gallows picture for 7 doesn't exist-- so it disappears. Doesn't seem to be triggering checkloss function
//if I remove the incorrectguesses +1, then its always one picture behind

// if chosen letter doesn't exist-- push the chosen letter to the guessed array, or return null
//get id of chosen letter/button, disables them once they are selected
//
function selectedLetter(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    
    console.log(chosenLetter)
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (currentWord.includes(chosenLetter)){
        guessedWord(chosenLetter);
        checkWin();
    } else {
        document.getElementById('hangmanPic').src = './images/gallows' + (incorrectGuesses + 1) + '.jpg';
        incorrectGuesses++;
        updateIncorrectGuesses();
        checkLoss();
    
    }
}

//checks to see if the guessed word and the current "random" word is the same
function checkWin() {
    if(activeBoard === currentWord){
        document.getElementById('keyboard').innerHTML = 'You won!';
        reset()
    }
}
// checks to see if the max number or wrong guesses have been reached
function checkLoss() {
    if (incorrectGuesses === maxWrong) {
        document.getElementById('playingBoard').innerHTML = `The word was: ${currentWord}`;
        document.getElementById('keyboard').innerHTML = 'You Lost';
    }

}
// checking to see if the letter exists in the word, if not returns the underscore
//if yes-- prints the correct letter
function guessedWord(letter) {
   
    activeBoard = currentWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('playingBoard').innerHTML = activeBoard;
    console.log("letter" , letter)
    console.log("word status" ,activeBoard)


}

// updated the incorrect guess count.
function updateIncorrectGuesses() {
    document.getElementById('incorrectGuesses').innerHTML = incorrectGuesses;
    // if (incorrectGuesses > 5){
    //     checkLoss()
    // }
}

//resets the whole board
function reset() {

    incorrectGuesses = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/gallows0.jpg';
    document.getElementById('incorrectGuesses').innerHTML = incorrectGuesses;

    randomWord();
    guessedWord();
    updateIncorrectGuesses();
    generateButtons();
}

// document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();

