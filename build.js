const shell = require('shelljs');
const request = require('supertest');
const app = require('./app/server');

// create dist folder
shell.rm('-rf', 'dist');
shell.mkdir('dist');

// copy static assets
shell.exec('npm run less-css & npm run uglify-js');
shell.cp('-R', 'public/*', 'dist');
shell.mv('public/images/favicon.ico', 'public');

const routes = [
  '/',
  '/services',
  '/gallery',
  '/contact',
  '/book-appointment'
];

// create an array of promises
const requests = routes.map(route => {

  return request(app)
    .get(route)
    .expect(200)
    .then(res => {
      if (route === '/') {
        shell.ShellString(res.text).to(`dist/index.html`);
      }
      else {
        shell.mkdir(`dist${route}`);
        shell.ShellString(res.text).to(`dist/${route}/index.html`);
      }
    });
});

// stop the server after all promises complete
Promise.all(requests)
  .then(() => {
    app.close();
  });
