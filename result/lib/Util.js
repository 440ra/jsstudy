const AUTHOR = 'YOSHIMURA, Masahiro';

export class Member {
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

export class Area {
	static getTriangle (base, height){
		return base * height / 2;
	}
}