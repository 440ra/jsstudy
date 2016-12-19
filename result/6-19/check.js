document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('btn').addEventListener('click', function () {
		var result = [];
		var foods = document.getElementsByName('food');
		var i = 0;
		var len = 0;
		
		for (i, len = foods.length; i < len; i = i + 1) {
			var food = foods.item(i);
			if (food.checked) {
				result.push(food.value);
			}
		}
		window.alert(result.toString());
	}, false);
}, false);