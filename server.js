const express = require('express');
const server = express();

const porjectsRoutes = require('./projects/projectRouter');

server.use('/projects', porjectsRoutes)

module.exports = server;