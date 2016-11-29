function namespace(ns) {
	//名前空間をどっと区切りで分割
	var names = ns.split('.'),
	 parent = window,
	 i = 0,
	 len;
	//for文で上位から名前空間を登録していく
	for (i = 0, len = names.length; i < len; i = i + 1) {
		console.log(names[i]);
		parent[names[i]] = parent[names[i]] || {};
		parent = parent[names[i]];
	}
	console.log(parent);	
	return parent;
}

var my = namespace('jp.co.yoshimura.jsstudy');
my.Person = function () {};
var p = new my.Person();
console.log(p instanceof jp.co.yoshimura.jsstudy.Person);