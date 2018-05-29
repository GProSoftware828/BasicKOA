const  koa = require('koa');
const app = new koa();
require('./src/reducers/simpleForm');

app.use(async ctx => {
	ctx.body = 'Testing KOA';
});

app.listen(3000);