document.addEventListener('DOMContentLoaded', function () {
	var data = {
		title: 'JAVAクイックリファレンス',
		price: 2680,
		handleEvent: function () {
			console.log(this.title + '/' + this.price + '円');
		}
	};
	
	document.getElementById('btn').addEventListener(
		'click', data, false);
	
}, false);