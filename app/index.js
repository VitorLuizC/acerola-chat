const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const config = require('./config/');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './view'));
app.use('/resource', express.static(path.join(__dirname, './resource')));
app.get('/', (req, res) => res.render('main', config.view));

// Socket
io.on('connection', (user) => console.log('User was connected!'));

server.listen(config.server.port, config.server.log);
