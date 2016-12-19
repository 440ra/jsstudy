document.addEventListener('DOMContentLoaded', function () {
	var second = document.getElementById('second'),
		li = document.getElementsByTagName('li'),
		i = 0,
		item = '',
		new_li = '',
		new_text = '',
		len = li.length;
	for (i; i < len; i = i + 1) {
//		console.log('i=' + i + ',len=' + len);
		item = li.item(i);
		new_li = document.createElement('li');
		new_text = document.createTextNode(item.textContent);
		new_li.appendChild(new_text);
		second.appendChild(new_li);
	}
}, false);