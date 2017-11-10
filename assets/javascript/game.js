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

var passwordList = ["putin", "russia", "maga", "bigly", "phony", "crooked", "loser", "winning", "bad", "huge", "tremendous", "classy", "sad", "fake", "overrated"];
var lettersUnpicked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var currentPassword = "fish";
var lettersGuessed = [];
var userGuess;
var pastMisses = [];
var missCount = 0;
var missLimit = 10;
var gameOver = false;
var updatedPassword = [];
updateLetters();

function joinArray (array) {
	joinedArray = array.join("  ");
	var result = joinedArray;
}

function updateLetters () {
	lettersGuessed.push(userGuess);
	joinArray (lettersGuessed);
	var joinedArray2 = document.getElementById("alreadyPicked");
	joinedArray2.textContent = joinedArray;
	joinArray(lettersUnpicked);
	var joinedArray2 = document.getElementById("notYetPicked");
    joinedArray2.textContent = joinedArray;

}

function setPassword () {
	var currentPassword = passwordList[Math.floor(Math.random() * passwordList.length)];
	console.log(currentPassword);
	var passwordLength = currentPassword.length;
	console.log(passwordLength);
	for (i=0; i < passwordLength; i++) {
		var blanks = document.getElementById("blanks");
		blanks.innerHTML += "__ ";
		}
	}

setPassword();
//I need to take the blank creation part out of the part that fires when the key is pressed.  Blanks are only created at the start of each game
document.onkeyup = function (event) {
	userGuess = event.key;
	//need to convert userGuess to lower case
	console.log(event.key);
	console.log(userGuess);
	console.log()
	for (i=0; i<lettersUnpicked.length; i++)
	if (userGuess === lettersUnpicked[i]) {
		console.log("it ran" + userGuess);
		var userGuessIndex = lettersUnpicked.indexOf(userGuess);
		console.log(userGuessIndex);
		lettersUnpicked.splice(i, 1);
		updateLetters();
		}







//The update password function below works but I'm trying another method

	// function updatePassword () {
	// 		console.log("updatePassword ran");
	// 		for (i=0; i < currentPassword.length; i++) {
	// 			var character = currentPassword.charAt(i);
	// 			console.log("character is" + character);
	// 			console.log("user guess is" + userGuess);
	// 			if (character === userGuess) {
	// 				console.log("character equals user guess");
	// 				//replace a blank with the userGuess
	// 				}
	// 		}

	// 	}

	updatePassword();

	}


function updatePassword() {
	console.log("updatePassword ran");
	console.log(currentPassword);
	//put currentpassword into an array
	var splitPassword = currentPassword.split("");
	console.log(splitPassword);
	var splitPassword2 = splitPassword;
	//compare each letter
	for (i=0; i<currentPassword.length; i++) {
		if (splitPassword[i] !== userGuess) {
			splitPassword2.splice(i, 1);
			console.log(splitPassword2);
			splitPassword2.splice(i, 1, "__");
			console.log(splitPassword2);

			// console.log("match");
			// splitPassword2.splice(i, 1);
			// console.log(splitPassword2);
			// splitPassword2.splice(i, 0, userGuess);
			// console.log(splitPassword2);
		}
	// 	else {

	// 		splitPassword2.splice(i, 1);
	// 		console.log(splitPassword2);
	// 		splitPassword2.splice(i, 1, "__");
	// 		console.log(splitPassword2);

	// }

			//instead replace objects in array


//         var my_array = [1,3,4];
//         var start_index = 1;
//         var number_of_elements_to_remove = 0;
//         my_array.splice(start_index, number_of_elements_to_remove, 2);
//         console.log(my_array);
		}

		// else {

		// console.log("blank");
		// }
	}


		//compare each letter in array to userguess
		//for each letter append either __ or the letter to the span










// joinArray (lettersUnpicked);


// document.getElementById("newPassword").onclick = function() {choosePassword()};

// function () {

// }


// for each item in array, print either __ or value depending on if the value is a lettersUnpicked


//stringname.split("")