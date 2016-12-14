var list = document.querySelectorAll('#list .external');
console.log(list);
for (var i =0, len= list.length; i < len; i++){
	console.log(list.item(i).href);
}