var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({
	secret: 'keybord',
	name: 'jasonId',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000
	},
	rolling: true
}))

app.get('/', (req, res) => {
	if (req.session.userinfo) {
		console.log(req.session);
		res.send('你好' + req.session.userinfo + ',欢迎回来');
	} else {
		res.send('请登录');
	}
});

app.get('/login', (req, res) => {
	req.session.userinfo = 'jason';
	res.send('登陆成功，生成session');
});

app.get('/loginOut', (req, res) => {
	req.session.destroy((err) => {
		if (err) throw err;

		res.send('退出登录成功');
	});
});

app.listen(7000);