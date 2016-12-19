window.addEventListener('DOMContentLoaded', function () {
	document.getElementById('file').addEventListener('change', function (e) {
		var inputs = document.getElementById('file').files;
		var i = 0;
		var len = 0;
		for (i, len = inputs.length; i < len; i = i + 1) {
			var input = inputs[i];
			console.log('ファイル名：' + input.name);
			console.log('種類：' + input.type);
			console.log('サイズ：' + input.size / 1024 + 'KB');
			console.log('最終更新日：' + input.lastModifiedDate);
		}
	}, true);
});