var Animal = function () {};
var Hamster = function () {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));
console.log(Hamster.prototype.isPrototypeOf(a));
console.log(Animal.prototype.isPrototypeOf(a));
