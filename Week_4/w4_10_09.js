function timeConvert(minutes) {
  	var hours = 0;
	while (minutes >= 60){
    	hours++;
      	minutes -= 60;
    }
  	return hours + ':' + minutes;
}