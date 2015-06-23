function addDashes(numString){
	var result = [];
	numString = numString.split('');
	for (var i = 0; i < numString.length; i++) {
		result.push(numString[i]);
		if (numString[i] % 2 === 0 && numString[i + 1] % 2 === 0){
			result.push('-');
		}
	}
	return result.join('');
}