let i = 0;
let member = {
	name: '山田太郎',
	birth: new Date(1980, 11, 17),
	['memo' + ++i]: '正規会員',
	['memo' + ++i]: '支部会長',
	['memo' + ++i]: '関東'
};
console.log(member);