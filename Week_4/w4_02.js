function sum(array){
	return array.reduce(function(a, b){
		return a + b;
	});
}

function multiply(array){
	return array.reduce(function(a, b){
		return a * b;
	});
}