const Router = require('koa-router');
const router = module.exports = new Router();

const meta = require('./meta');

router.get('/', async ctx => {
  await ctx.render('home', {
    title: meta.home.title,
    description: meta.home.description
  });
});

router.get('/services', async ctx => {
  await ctx.render('services', {
    title: meta.services.title,
    description: meta.services.description
  });
});

router.get('/gallery', async ctx => {
  await ctx.render('gallery', {
    title: meta.gallery.title,
    description: meta.gallery.description
  });
});

router.get('/contact', async ctx => {
  await ctx.render('contact', {
    title: meta.contact.title,
    description: meta.contact.description
  });
});

router.get('/book-appointment', async ctx => {
  await ctx.render('appointment', {
    title: meta.bookAppointment.title,
    description: meta.bookAppointment.description
  });
});
