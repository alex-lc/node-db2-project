const express = require('express');

// connect to db using our config file
const db = require('../dbConfig.js');

const router = express.Router();

// endpoints

// get our list of cars
router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not retrieve the cars.' });
        })
});


// get a car by its id
router.get('/:id', (req, res) => {
    db('cars')
        .where({ id: req.params.id })
        .then(car => {
            if (car) {
                res.status(200).json(car);
            }
            else {
                res.status(404).json({ error: 'That car does not exist.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong on our end.' });
        })
})


// post to create a new car
router.post('/', (req, res) => {

    const newCar = req.body;

    db('cars')
        .insert(newCar, 'id')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(400).json({ error: 'That car could not be created.' });
        })
});

// put to edit a car
router.put('/:id', (req, res) => {

    const id = req.params.id;
    const changes = req.body;

    db('cars')
        .where({ id })
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(400).json({ error: 'That car could not be updated.' });
        })
});


// delete to delete a car
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    db('cars')
        .where({ id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(400).json({ error: 'Car could not be deleted.' });
        })
});

module.exports = router;