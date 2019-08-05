var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => res.send('main.html'));

module.exports = router;