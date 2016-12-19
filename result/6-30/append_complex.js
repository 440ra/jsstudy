document.addEventListener('DOMContentLoaded', function () {
	var books = [
		{ title: '独習PHP', price: 3200 },
		{ title: 'Javaポケットリファレンス', price: 2680},
		{ title: 'アプリを作ろう！ Android入門', price: 2000}
	];
	
	var list = document.getElementById('list');
	var i = 0;
	var len = 0;
	var b = '';
	var li = '';
	var text = '';
	for (i, len = books.length; i < len; i = i + 1) {
		b = books[i];
		li = document.createElement('li');
		text = document.createTextNode(b.title + ':' + b.price + '円');
		li.appendChild(text);
		list.appendChild(li);
	}
}, false);