function longestWord(sen) { 
  sen = sen.split(/[^a-zA-Z0-9]/g);
  return sen.reduce(function(a, b){
  	return a.length >= b.length ? a : b;
  });
}