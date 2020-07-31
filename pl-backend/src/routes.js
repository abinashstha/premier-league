const router = require('express').Router();
const results = require('./routes/results');
const clubs = require('./routes/clubs');

router.get('/', (req, res) => {
  
});

router.use('/results', results);
router.use('/clubs', clubs);

module.exports = router;
