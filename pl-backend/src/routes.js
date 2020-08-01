const router = require('express').Router();
const results = require('./routes/results');
const clubs = require('./routes/clubs');

router.use('/clubs', clubs);
router.use('/results', results);

module.exports = router;
