const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.get('/seminar/:slug', (req, res) => app.render(req, res, '/seminar', { slug: req.params.slug }));

    server.get('/course/:slug', (req, res) => app.render(req, res, '/course', { slug: req.params.slug }));

    server.get('/course/:slug/content/:id', (req, res) => app.render(req, res, '/course', { slug: req.params.slug, id: req.params.id }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
