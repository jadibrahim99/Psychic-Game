//initializing variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var computerGuess;

// creating a function to give the computerGuess a letter 
var randomLetter = function () {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};

// using a function to grab the html that represents "guesses" and concatenating it with guesses the user has made so far
var guessed = function () {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};
// same basic function as above, but this function is changing the html of the guesses that the user has left
var guessesLeft = function () {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};
// this function resets the values back to their original values
var reset = function () {
    guessedLetters = [];
    left = 9;
    randomLetter();
    guessesLeft();
    guessed();
}
// the userGuess variable is set equal to the key pressed by the suer
document.onkeyup = function (event) {
    var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    guessed();
    guessesLeft();

    
    // when the user guesses correctly the wins are tallied in the "wins" element in the html using the .getElementById function
    if (left > 0) {
        if (userGuess == computerGuess) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            reset();
        }
        //when the user runs out of guesses the loss is tallied in the "losses" element in the html using the .getElementById function
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
        reset();
    }
};