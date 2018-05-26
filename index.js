const  koa = require('koa');
const app = new koa();

app.use(function *(){
	this.body = 'Testing KOA';
});

app.listen(3000);