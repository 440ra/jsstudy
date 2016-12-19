document.addEventListener('DOMContentLoaded', function () {
	
	var setRadioValue = function (name, value) {
		var elems = document.getElementsByName(name);
		var i = 0;
		var len = 0;
		
		for (i, len = elems.length; i < len; i = i + 1) {
			var elem = elems.item(i);
			if (elem.value === value) {
				elem.checked = true;
				break;
			}
		}
	};

	setRadioValue('food', '塩ラーメン');
}, false);