var count = 0;
var result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', function () {
	result.textContent = count + 1;
	history.pushState(count, null, 'C:/user/yoshimura/jsstudy/result/7-06/' + count);
	
});

window.addEventListener('popstate', function (e) {
	count = e.state;
	result.textContent = count;
});