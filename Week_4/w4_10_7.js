function simpleSymbols(str) { 
	  str = str.split('');
    var result = true;
  	var symbolMatch = /[^\+=]/;
    var letterMatch = /[a-zA-Z]/;
  	for (var i = 0; i < str.length; i++){
    	if (letterMatch.test(str[i])){
          console.log(str[i] + ' is a letter.')
        	if (i == 0) {
              return false;
            } else if (str[i - 1] != '+' || str[i + 1] != '+') {
             	return false;
            }
        }
    }
    return result;
}