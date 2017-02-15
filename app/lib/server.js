const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

/**
 * Folders absolute path.
 */
let viewFolder = path.join(__dirname, '../view');
let resourceFolder = path.join(__dirname, '../resource');

/**
 * Set Pug as default view engine renderer.
 */
app.set('view engine', 'pug');

/**
 * Set default view directory.
 */
app.set('views', viewFolder);

/**
 * Set static/public content folder.
 */
app.use('/resource', express.static(resourceFolder));

module.exports = { app, server, io };
