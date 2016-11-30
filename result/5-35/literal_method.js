let member = {
	name: '山田太郎',
	birth: new Date(1980, 11, 17),
	toString() {
		return this.name + '／誕生日：' + this.birth.toLocaleDateString();
	}
};

console.log(member.toString());