function factorial(n) {
	"use strict";
	if (n !== 0) {
		return n * factorial(n - 1);
	}
	return 1;
}

console.log(factorial(6));
