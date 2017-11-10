//I can't figure out how to update the blanks in my game, and I didn't get to the scorekeeping part, though I'm guessing that's easier.
//I'm sure this is not very dry or efficient code.

//I had a lot more psuedocode in here but it got axed as I moved stuff around.

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

var passwordList = ["putin", "russia", "maga", "bigly", "phony", "crooked", "loser", "winning", "bad", "huge", "tremendous", "classy", "sad", "fake", "overrated"];
var lettersUnpicked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var currentPassword;
var lettersGuessed = [];
var userGuess;
var pastMisses = [];
var missCount = 0;
var missLimit = 10;
var gameOver = false;
var gamesPlayed = 0;
var updatedPassword = [];


function newGame () {
	console.log("newGame ran");
	gameOver = false;
	setPassword ();


	function setPassword () {
		console.log("setPassword ran");
		var currentPassword = passwordList[Math.floor(Math.random() * passwordList.length)];
		console.log(currentPassword);
		var passwordLength = currentPassword.length;
		console.log(passwordLength);
		for (i=0; i < passwordLength; i++) {
			var blanks = document.getElementById("blanks");
			blanks.innerHTML += "__ ";	
			}






	document.onkeyup = function (event) {
		userGuess = event.key;
		//need to convert userGuess to lower case
		for (i=0; i<lettersUnpicked.length; i++)
		if (userGuess === lettersUnpicked[i]) {
			console.log(userGuess);
			var userGuessIndex = lettersUnpicked.indexOf(userGuess);
			console.log(userGuessIndex);
			lettersUnpicked.splice(i, 1);
			}
		updateLetters();


		function splitPassword() {
			console.log("splitPassword ran");
			console.log(currentPassword);
			//put currentpassword into an array
			var splitPassword = currentPassword.split("");
			console.log(splitPassword);
			var splitPassword2 = splitPassword;


			for (i=0; i < splitPassword.length; i++) {
				console.log(splitPassword.length);
				// var letter = splitPassword[i];
				console.log(userGuess);
				console.log(splitPassword.indexOf(userGuess));
				if (splitPassword.indexOf(userGuess) !== -1) {
					console.log(userGuess + " is in the password");
					console.log(lettersGuessed);



			}
					}
	

			if (splitPassword[i] !== userGuess) {
				splitPassword2.splice(i, 1);
				console.log(splitPassword2);
				splitPassword2.splice(i, 1, "__");
				console.log(splitPassword2);
				}


		}//end of splitpassword

	splitPassword ();

	




		} //end of onkeyup

	} //end of setPassword

function joinArray (array) {
	joinedArray = array.join("  ");
	var result = joinedArray;
	console.log(joinedArray);
}


function updateLetters () {
	console.log("updateLetters ran");
	lettersGuessed.push(userGuess);
	joinArray (lettersGuessed);
	var joinedArray2 = document.getElementById("alreadyPicked");
	joinedArray2.textContent = joinedArray;
	joinArray(lettersUnpicked);
	var joinedArray2 = document.getElementById("notYetPicked");
    joinedArray2.textContent = joinedArray;

} //end of updateLetters

} //end of newgame

newGame();

