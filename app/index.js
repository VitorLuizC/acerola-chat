const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const config = require('./config/server.js');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './view'));

app.get('/', (req, res) => res.render('main'));

server.listen(config.port, config.log);
