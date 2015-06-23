function changeCase(string){
	var upperMatch = /[A-Z]/;
	var lowerMatch = /[a-z]/;
	string = string.split('');
	var result = [];

	for (var i = 0; i < string.length; i++) {
		if (upperMatch.test(string[i])) {
			result.push(string[i].toLowerCase());
		} else if(lowerMatch.test(string[i])) {
			result.push(string[i].toUpperCase());
		} else {
			result.push(string[i]);
		}
	}

	return result.join('');
}