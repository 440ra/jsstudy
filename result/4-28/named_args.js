function getTriangle(args) {
	'use strict';
	if (args.base === undefined) { args.base = 1; }
	if (args.height === undefined) { args.height = 1; }
	return args.base * args.height / 2;
}

console.log(getTriangle({height : 4, base : 10}));