var storage = localStorage;
var i = 0;
var len = storage.length;
for(i, len; i < len; i++){
	var k = storage.key(i);
	var v = storage[k];
	console.log(k + ':' + v);
}