const { join } = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const config = require('./config/');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app
  .set('view engine', 'pug')
  .set('views', join(__dirname, './view'))
  .use('/resource', express.static(join(__dirname, './resource')))
  .get('/', (req, res) => res.render('main', config.view));

io.on('connection', (user) => console.log('User was connected!'));

server.listen(config.server.port, config.server.log);
