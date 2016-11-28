function getTriangle(base, height) {
	'use strict';
	if (base === undefined) { base = 1; }
	if (height === undefined) { height = 1; }
	return base * height / 2;
}

console.log(getTriangle(5));