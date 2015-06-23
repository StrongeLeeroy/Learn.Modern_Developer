function mostFrequent(array){
	var counterObj = {};
	var highest = {
		key: 0,
		count: 0
	};
	array.forEach(function(item){
		if (counterObj.hasOwnProperty(item)){
			counterObj[item]++;
		} else {
			counterObj[item] = 1;
		}
	});
	for (var key in counterObj){
		if (counterObj[key] >= highest.count) {
			highest.key = key;
			highest.count = counterObj[key];
		}
	}
	console.log('Most frequent item: ' + highest.key + ' (' + highest.count + ' times)');
}