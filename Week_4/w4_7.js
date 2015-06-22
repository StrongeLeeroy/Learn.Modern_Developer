function fahrenheinCelsius(degrees, unit) {
	if (unit === 'c' || unit === 'C') {
		return degrees * (9/5) + 32;
	} else if (unit === 'f' || unit === 'F') {
		return (degrees - 32) * (5/9);
	} else {
		return 'Invalid temperature unit.'
	}
}