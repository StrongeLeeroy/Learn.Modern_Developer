function letterChanges(string) { 
	var vowelMatch = /[aeiou]/;
	var letterMatch = /[a-zA-Z]/;
	var currentCharCode = 0;
	string = string.split('');

	return string.map(function(letter){
	  	if (letterMatch.test(letter)) {
	  		console.log(letter + ' is a letter.');
	    	currentCharCode = letter.charCodeAt(0);
			currentCharCode++;
			letter = String.fromCharCode(currentCharCode);
	    }
	    if (vowelMatch.test(letter)) {
			letter = letter.toUpperCase();
		}
		return letter;
	}).join('');
}