function ABCheck(str) { 
	for (var i = 0; i < str.length; i++){
    	if ((str[i] === 'a' && str.indexOf('b') === i + 4) || (str[i] === 'b' && str.indexOf('a') === i + 4)){
          return true;
        }
    }
  	return false;
}