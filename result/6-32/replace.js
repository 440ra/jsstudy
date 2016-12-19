document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var list = document.getElementById('list'),
		pic = document.getElementById('pic'),
		del = document.getElementById('del');
	
//	console.log(list);

	
	list.addEventListener('click', function (e) {
		
		var isbn = e.target.getAttribute('data-isbn'),
			img = null;
		
		if (isbn) {
			img = document.createElement('img');
			img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
			img.alt = e.innerHTML;
			img.height = 150;
			img.width = 108;
			
			if (pic.getElementsByTagName('img').length > 0) {
				pic.replaceChild(img, pic.lastChild);
			} else {
				del.disabled = false;
				pic.appendChild(img);
			}
		}
		
	}, false);
	
	
	del.addEventListener('click', function () {
		pic.removeChild(pic.lastChild);
		del.disabled = true;
	}, false);
	
}, false);