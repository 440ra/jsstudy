document.addEventListener('DOMContentLoaded', function () {
	
	var getRadioValue = function (name) {
		var result = '';
		var elems = document.getElementsByName(name);
		var i = 0;
		var len = 0;
		
		for (i, len = elems.length; i < len; i = i + 1) {
			var elem = elems.item(i);
			if (elem.checked) {
				result = elem.value;
				break;
			}
		}
		return result;
	};
	
	document.getElementById('btn').addEventListener('click', function () {
		window.alert(getRadioValue('food'));
	}, false);
}, false);