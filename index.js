const  koa = require('koa');
const app = new koa();
require('./src/reducers/index');

const app = koa();

app.use(async ctx => {
	ctx.body = 'Testing KOA';
});

app.listen(3000);