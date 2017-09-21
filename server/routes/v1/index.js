require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})
const items = require('./items');
const express = require('express')
const router = express.Router();

const universalLoader = require('../../universal');

router.get('/', universalLoader)

module.exports.index = router;
module.exports.items = items;
