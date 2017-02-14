const http = require('http');
const express = require('express');
const socket = require('socket.io');
const config = require('./config/server.js');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.get('*', (request, response) => console.log('I\'ts working!'));

server.listen(config.port, config.log);
