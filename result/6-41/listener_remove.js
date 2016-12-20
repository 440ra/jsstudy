document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('btn'),
		listner = function () {
			window.alert('こんにちは、世界');
		};
	
	btn.addEventListener('click', listner, false);
	
	btn.removeEventListener('click', listner, false);
});