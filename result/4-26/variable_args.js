function sum() {
	'use strict';
	var result = 0,
		i = 0,
		len = 0,
		tmp = 0;
	for (i = 0, len = arguments.length; i < len; i = i + 1) {
		tmp = arguments[i];
		if (typeof tmp !== 'number') {
			throw new Error('引数が数値ではありません：' + tmp);
		}
		result += tmp;
	}
	return result;
}

try {
	console.log(sum(1, 3, 5, 7, 9));
} catch (e) {
	window.alert(e.message);
}
