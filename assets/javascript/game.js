//initializing variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var computerGuess;

// using a function to give the computerGuess a random letter from our alphabet
var randomLetter = function () {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};

// using a function to grab the html that represents "guesses" and concatinating it with guesses the user has made so far
var guesssoFar = function () {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};
// same basic function as above, but this function is changing the html of the guesses that the user has left
var guessesLeft = function () {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var reset = function () {
    guessedLetters = [];
    left = 9;
    randomLetter();
    guessesLeft();
    guesssoFar();
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    guesssoFar();
    guessesLeft();
   
};