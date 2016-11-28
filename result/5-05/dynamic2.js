var Menber = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
};
var men = new Menber('太郎', '山田');
men.getName = function () {
	return this.lastName + ' ' + this.firstName;
};
console.log(men.getName());

var men2 = new Menber('鈴木', '花子');
console.log(men2.getName());
