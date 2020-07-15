const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  return res.json(People.get());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  if (!req.body.Name) {
    res.status(400, 'Name is required');
  } else {
    People.enqueue(req.body.Name);
    res.status(201).end();
  }
});

module.exports = router;
