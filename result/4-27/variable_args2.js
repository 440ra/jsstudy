function printf(format) {
	'use strict';
	var i = 0,
	    len = 0,
	    pattern = 0;
	for (i = 0, len = arguments.length; i < len; i = i + 1) {
		pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
		format = format.replace(pattern, arguments[i]);
	}
	console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '山田', '鈴木');