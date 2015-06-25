function vowelCount(str) { 
	var str = str.split('');
	var vowelPatt = /[aeiou]/;
  	return str.filter(function(item){
    	return vowelPatt.test(item);
    }).length;      
}