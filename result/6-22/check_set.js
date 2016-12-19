document.addEventListener('DOMContentLoaded', function () {

	
	var setCheckValue = function (name, value) {
		var elems = document.getElementsByName(name);
		var i = 0;
		var len = 0;
		
		for (i, len = elems.length; i < len; i = i + 1) {
			var elem = elems.item(i);
			if (value.indexOf(elem.value) > -1) {
				elem.checked = true;
			}
		}
	};
	
	setCheckValue('food', ['塩ラーメン', 'ラーメン']);
	
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