class Area {
	static getTriangle (base, height){
		return base * height / 2;
	}
}

console.log(Area.getTriangle(10,5));
//エラー
let a = new Area();
console.log(a.getTriangle(10,5));