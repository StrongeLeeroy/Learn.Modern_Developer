function truncateString(string, chars){
	if (typeof string === String && chars > 0) {};
	return string.substr(0, chars);
}
console.log(truncateString('Robin Singh', 7));