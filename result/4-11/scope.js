var scope = 'Global Variable';

function getValue() {
	'use strict';
	var scope = 'Local Variable';
	return scope;
}

console.log(getValue());
console.log(scope);