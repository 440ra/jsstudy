function getTriangle({base = 1, height = 1}) {
	return base * height / 2;
}

console.log(getTriangle({height : 4, base : 10}));