function letterChanges(string) { 
	var vowelMatch = /[aeiou]/;
	var letterMatch = /[a-zA-Z]/;
	var currentCharCode = 0;
	string = string.toLowerCase().split('');

	return string.map(function(letter){
	  	if (letterMatch.test(letter)) {
	    	currentCharCode = letter.charCodeAt(0);
			currentCharCode++;
			if (currentCharCode === 123) {
				currentCharCode = 97;
			};
			letter = String.fromCharCode(currentCharCode);
	    }
	    if (vowelMatch.test(letter)) {
			letter = letter.toUpperCase();
		}
		return letter;
	}).join('');
}