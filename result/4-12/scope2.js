scope = 'Global Variable';

function getValue() {
	'use strict';
	scope = 'Local Variable';
	return scope;
}

console.log(getValue());
console.log(scope);