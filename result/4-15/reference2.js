var value = [1, 2, 4, 8, 16];

function deleteElement(value) {
	"use strict";
	value.pop();
	return value;
}

console.log(deleteElement(value));
console.log(value);
