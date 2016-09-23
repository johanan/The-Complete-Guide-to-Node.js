const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('This is the relative root');
});

router.get('/bark', (req, res) => {
  res.send('BARK BARK!');
});

module.exports = router;
