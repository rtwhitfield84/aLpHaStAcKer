var alphabet = ["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];



function stackLetters (alphabet) {
	var newABC = "";
	for (var i = 0; i < alphabet.length; i++){
		newABC += alphabet[i];
		if (i % 3 === 2) {
			newABC += " ";
		}
		console.log(newABC);
	}
}

stackLetters(alphabet);