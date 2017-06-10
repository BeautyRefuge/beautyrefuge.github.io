const Koa = require('koa');
const app = new Koa();

const path = require('path');
const logger = require('koa-logger');
const serve = require('koa-static');
const favicon = require('koa-favicon');
const hbs = require('koa-hbs');
const router = require('./router');

app.use(logger());

// static assets
app.use(serve(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')));

// handlebars template middleware
app.use(hbs.middleware({
  viewPath: `${__dirname}/views`,
  layoutsPath: `${__dirname}/views`,
  partialsPath: `${__dirname}/views/partials`,
  defaultLayout: 'layout',
  disableCache: true
}));

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app.listen(3111);
