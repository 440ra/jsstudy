function hoge() {
//	var args = Array.prototype.slice.call(arguments);
	let args = Array.from(arguments);
//	console.log(args.constructor.toString());
	
	console.log(args.join(('／')));
}

hoge('Angular', 'React', 'Backbone');