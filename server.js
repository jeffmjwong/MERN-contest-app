import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import config from './config';
import apiRouter from './api';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (request, response) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      response.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info(`Server is running on port ${config.port}...`);
});
