var Menber = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.getName = function () {
		return this.lastName + ' ' + this.firstName;
	}
};
var men = new Menber('太郎', '山田');
console.log(men.getName());