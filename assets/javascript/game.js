var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};
    // Here we are updating the letters that you are still able to guess
function updateLetterToGuess() {
    this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};


function updateGuesses() {
    // Here we take the guesses the user has tried and then display it in the HTML
    document.querySelector('#guess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Here we reset the variables for a new game using a function
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuesses();
}
updateLetterToGuess();
updateGuessesLeft();