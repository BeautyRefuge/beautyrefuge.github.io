const shell = require('shelljs');
const minify = require('html-minifier').minify;
const request = require('supertest');
const app = require('./app/server');

// create dist folder
shell.rm('-rf', 'dist');
shell.mkdir('dist');

// copy static assets
shell.exec('npm run less-css & npm run uglify-js');
shell.cp('-R', 'public/*', 'dist');

const routes = [
  '/',
  '/services',
  '/gallery',
  '/contact',
  '/book-appointment',
  '/404'
];

// create an array of promises
const requests = routes.map(route => {

  return request(app)
    .get(route)
    .expect(200)
    .then(res => {

      const html = minify(res.text, {
        collapseWhitespace: true,
        minifyJS: true
      });

      if (route === '/') {
        shell.ShellString(html).to(`dist/index.html`);
      }
      else if (route === '/404') {
        shell.ShellString(html).to(`dist/404.html`);
      }
      else {
        shell.mkdir(`dist${route}`);
        shell.ShellString(html).to(`dist/${route}/index.html`);
      }
    });
});

// stop the server after all promises complete
Promise.all(requests)
  .then(() => {
    app.close();
  });
