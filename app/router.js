const Router = require('koa-router');
const router = module.exports = new Router();

const meta = require('./meta');

router.get('/', async ctx => {
  await ctx.render('home', { title: meta.home.title });
});

router.get('/services', async ctx => {
  await ctx.render('services', { title: meta.services.title });
});

router.get('/gallery', async ctx => {
  await ctx.render('gallery', { title: meta.gallery.title });
});

router.get('/contact', async ctx => {
  await ctx.render('contact', { title: meta.contact.title });
});

router.get('/book-appointment', async ctx => {
  await ctx.render('appointment', { title: meta.bookAppointment.title });
});
