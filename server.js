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

server.get('/', (request, response) => {
  response.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}...`);
});
