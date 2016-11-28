var Member = function (firstName, lastName) {
    'use strict';
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function () {
    'use strict';
    return this.lastName + ' ' + this.firstName;
};

var men = new Member('太郎', '山田');
console.log(men.getName());