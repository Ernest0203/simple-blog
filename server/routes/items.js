const express = require('express');
const router = express.Router();

const Items = require('../models/items.js');

router.get('/', (req, res) => {
  const query = { ...req.query };
  
  Items.find(query)
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.send('error: ' + err))
})

router.post('/', (req, res) => {
  const query = { ...req.body };
  Items.create(query)
    .then(item => res.json(item))
    .catch(err => res.send('error: ' + err))
})

router.put('/', (req, res) => {
  const { query, data } = req.body;
  Items.findOneAndUpdate({...query}, { $push: {comments: {...data}} }, { new: true })
    .then(item => (res.json(item)))
    .catch(err => res.send('error: ' + err))
})

module.exports = router;