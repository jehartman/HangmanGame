// var trumpWords
// var userGuess
// var lettersGuessed
// var alphabet
// var lettersLeft
// var newGame
// var gameOver
// var guessCount

// display full alphabet and instructions
// generate trumpism and display blanks and jailpic
// collect userGuess
// check against index
// if yes, display letter in each blank where appropriate
// 	add bar to cell. need to figure out how to add bars in varying intervals

// if no, remove from list of available letters
// 		add to list of guessed letters

// after each guess, check to see if game is over 
// 	if all letters correctly guessed, game is done
// 	if number of guesses exceeded, game is done

var wordList = ["putin", "russia", "maga", "bigly", "phony", "crooked", "loser", "winning", "bad", "huge", "tremendous", "classy", "sad", "fake", "overrated"];
var lettersUnpicked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var userGuess;
var pastMisses = [];
var missCount = 0;
var missLimit = 10;
var gameOver = false;



function updateLetters () {
	var lettersUnpicked2 = document.getElementById("notYetPicked");
        lettersUnpicked2.textContent = lettersUnpicked;
}

updateLetters ();


// document.getElementById("newPassword").onclick = function() {choosePassword()};

// function () {

// }