var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('jason'));


app.get('/', (req, res) => {
	console.log(req.signedCookies);
	res.send('读取cookie');
});

var citys = [];
// 数组去重的方法
function findInArr(arr, data) {
	var _arrLength = arr.length;
	if (!_arrLength) return true;

	for (var i = 0; i < _arrLength; i++) {
		if (arr[i] == data) {
			return true;
		}
	}
	return false;
}
// 浏览的城市  /lvyou?city=北京 /lvyou?city=上海 /lvyou?city=天津
app.get('/lvyou', (req, res) => {
	var cityNew = req.query.city;

	if (cityNew) {
		if (!findInArr(citys, cityNew)) {
			citys.push(cityNew);
		}
	}

	console.log(citys);

	res.cookie('city', citys, {
		maxAge: 60000,
		signed: true
	});
	res.send('您浏览的城市已经保存');
});

app.listen(7000);