class Member {
	//コンストラクター
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	//メソッド
	getName () {
		return this.lastName + this.firstName;
	}
}

class BusinessMember extends Member{
	
	constructor(firstName, lastName, clazz){
		super(firstName, lastName);
		this.clazz = clazz;
	}
	//オーバーライド
	getName () {
		return super.getName() + '／役職：' + this.clazz;
	}
	
	work() {
		return this.getName() + 'は働いています';
	}
}

let bm = new BusinessMember('太郎', '山田', '課長');
console.log(bm.firstName);
console.log(bm.lastName);
console.log(bm.getName());