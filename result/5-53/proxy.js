let data = { red: '赤色', yellow: '黄色'};
var proxy = new Proxy(data, {
	get(target, prop){
		return prop in target ? target[prop] : '?';
	}
});

proxy.red ='まっかっか'
console.log(proxy.red);
console.log(data.red);