const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./cars/carsRouter.js');

const server = express();

// middleware
server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

// endpoints
server.get('/', (req, res) => {
    res.status(200).json({ testing: 'this' });
});

module.exports = server;