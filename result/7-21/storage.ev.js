window.addEventListener('storage', function (e) {
	console.log('追加されたキー：' + e.key);
	console.log('追加される前の値：' + e.oldValue);
	console.log('追加されたの値：' + e.newValue);
	console.log('発生元ページ：' + e.url);
}, false);