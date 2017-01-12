document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('btn').addEventListener('click', function () {
		var result = document.getElementById('result'),
		    xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					result.textContent = xhr.responseText;
				} else {
					result.textContent = 'サーバーエラーが発生しました。';
					console.log(xhr.status);
				}
			} else {
				result.textContent = '通信中...';
					console.log('3');
			}
		};
		console.log('name='+ document.getElementById('name'));
		console.log('value='+ document.getElementById('name').value);
		xhr.open('GET', 'hello_ajax.php?name=' +
				encodeURIComponent(document.getElementById('name').value), true);
		xhr.send(null);
	}, false);
}, false);