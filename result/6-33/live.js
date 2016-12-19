document.addEventListener('DOMContentLoaded', function () {
	var li = document.getElementsByTagName('li'),
		ul = document.getElementById('list');
	
	console.log('変更前：' + li.length);
	
	ul.appendChild(document.createElement('li'));
	console.log('変更後：' + li.length);
}, false);