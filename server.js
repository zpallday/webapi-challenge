const express = require('express');
const server = express();

const porjectsRoutes = require('./projects/projectRouter');
const actionRoutes = require('./actions/actionRouter')

server.use('/projects', porjectsRoutes)
server.use('/actions', actionRoutes)

module.exports = server;