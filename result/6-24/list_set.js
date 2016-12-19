document.addEventListener('DOMContentLoaded', function () {

	
	var setSelectValue = function (name, value) {
		var opts = document.getElementById(name);
		var i = 0;
		var len = 0;
		
		for (i, len = opts.length; i < len; i = i + 1) {
			var opt = opts.item(i);
			if (value.indexOf(opt.value) > -1) {
				opt.selected = true;
			}
		}
	};
	
	setSelectValue('food', ['塩ラーメン', 'ラーメン']);
}, false);