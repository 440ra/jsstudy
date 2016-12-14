var s = document.getElementById('food');
var opts = s.childNodes;
var i = 0;
var len = 0;
for (i, len = opts.length; i < len; i = i + 1) {
	var opt = opts.item(i);
	if (opt.nodeType === 1) {
		console.log(opt.value);
	}
}