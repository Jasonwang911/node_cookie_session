var express = require('express');
var cookieParser = require('cookie-parser');


var app = express();
// console.log(app);

app.use(cookieParser());

app.get('/', (req, res) => {
	// 获取cookie 
	console.log(req.cookies);
	res.send('你好nodejs');
});

// 设置cookie
app.get('/set', (req, res) => {
	// cookie的名字，cookie的值，cookie的配置
	res.cookie('username', 'cookie的值', {
		maxAge: 60000
	});
	res.send('设置了cookie').end();
});

app.listen('7000');