function letterCapitalize(str) { 
	str = str.split(' ');
  	return str.map(function(word){
    	return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(' ');
}