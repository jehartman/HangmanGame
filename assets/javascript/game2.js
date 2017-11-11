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
var lettersUnpicked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentPassword;
var lettersGuessed = [];
var userGuess;
var pastMisses = [];
var missCount = 0;
var missLimit = 10;
var gameOver = false;
var gamesPlayed = -1;
var updatedPassword = [];


function newGame () {
	console.log("newGame ran");
	gamesPlayed++;
	gameOver = false;
	setPassword ();


	function setPassword () {
		console.log("setPassword ran");
		var currentPassword = passwordList[Math.floor(Math.random() * passwordList.length)];
		console.log(currentPassword);
		var passwordLength = currentPassword.length;
		console.log(passwordLength);
		for (i=0; i < passwordLength; i++) {
			var blanks = document.createElement("span");
			//var d = document.getElementById("div1");
			blanks.className = "blank";
			blanks.id = "blank" + i;
			var singleBlank = document.createTextNode("__ ");
			blanks.appendChild(singleBlank);
			var blanksContainer = document.getElementById("blanksContainer");
			blanksContainer.appendChild(blanks);
			}




	document.onkeyup = function (event) {
		userGuess = event.key.toLowerCase();
		updateLetters();
		for (i=0; i<lettersUnpicked.length; i++)
		if (userGuess === lettersUnpicked[i]) {
			console.log(userGuess);
			var userGuessIndex = lettersUnpicked.indexOf(userGuess);
			console.log(userGuessIndex);
			lettersUnpicked.splice(i, 1);
			}



		function checkPassword() {
			console.log("checkPassword ran");
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
							// this will check if the guess if correct and update the blanks and the trump blurb
				if (splitPassword.indexOf(userGuess) !== -1) {
					console.log(splitPassword.indexOf(userGuess));
					console.log(i);
					console.log(userGuess + " is in the password");
					splitPassword2.splice(i, 1, userGuess);
					console.log(splitPassword2);
					document.getElementById("blank" + i).innerHTML = splitPassword[i];
					}//end if
				else {

					splitPassword2.splice(i, 1, "__ ");
					}//end else
				// for (j=0; j<splitPassword2.length; j++) {
				// 	console.log(splitPassword2[j]);
				// 	if (splitPassword2[j] === userGuess) {
				// 		console.log("it's a match");

				// 	}
				// }


				
				}// end if
	

			if (splitPassword[i] !== userGuess) {
				splitPassword2.splice(i, 1);
				console.log(splitPassword2);
				splitPassword2.splice(i, 1, "__");
					}


			}//end of checkPassword

		checkPassword ();




		} //end of onkeyup

	} //end of setPassword

function joinArray (array) {
	joinedArray = array.join("  "); 
	var result = joinedArray;
	console.log(joinedArray);
} //end of joinarray


function updateLetters () {
	console.log(userGuess);
	console.log("updateLetters ran");
	console.log(lettersUnpicked);
	console.log(lettersUnpicked.indexOf(userGuess));
		if (lettersUnpicked.indexOf(userGuess) !== -1) {
			lettersGuessed.push(userGuess);
			joinArray (lettersGuessed);
			var joinedArray2 = document.getElementById("alreadyPicked");
			joinedArray2.textContent = joinedArray;
			joinArray(lettersUnpicked);
			var joinedArray2 = document.getElementById("notYetPicked");
		    joinedArray2.textContent = joinedArray;
			} //if end

	} //end of updateLetters

} //end of newgame

newGame();

