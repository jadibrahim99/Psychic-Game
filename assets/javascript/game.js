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
var guessed = function () {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};
// same basic function as above, but this function is changing the html of the guesses that the user has left
var guessesLeft = function () {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};
// this variable is set equal to a function which resets the stats of the game i.e guessed letters, wins, losses etc.
var reset = function () {
    guessedLetters = [];
    left = 9;
    randomLetter();
    guessesLeft();
    guessed();
}
// everytime the user types a key one of their guesses left is subtracted by one
document.onkeyup = function (event) {
    var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    guessed();
    guessesLeft();

    
    // when the user guesses correctly the wins are tallied under the wins html
    if (left > 0) {
        if (userGuess == computerGuess) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            reset();
        }
        //when the user runs out of guesses the losses are tallied and the losses html is changed
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
        reset();
    }
};