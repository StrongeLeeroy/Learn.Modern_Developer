function findLongestWord(array){
	return array.reduce(function(a, b){
		return a.length > b.length ? a : b;
	})
}