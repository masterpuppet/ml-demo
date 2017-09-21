const express = require('express');
const checkQuery = require('express-validator/check/check-query');
const api = require('../../lib/api');
const router = express.Router();

const sign = response => Object.assign({}, response, { author: { name: 'Pablo', lastname: 'Carminatti' } });

router.get('/', checkQuery('search').exists(), (req, res, next) => {
  const search = req.sanitize('search').escape().trim();
  api.fetchItems(search)
    .then(response => sign(response))
    .then(items => res.json(items))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.sanitize('id').escape().trim();
  api.fetchItem(id)
    .then(response => sign(response))
    .then(item => res.json(item))
    .catch(err => next(err));
});

module.exports = router;
