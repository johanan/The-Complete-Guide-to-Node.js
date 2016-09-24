const router = require('express').Router();

router.get('/:username', (req, res) => {
  res.render('users/profile', {username: req.params.username,
  title: `${req.params.username} profile`});
});

module.exports = router;
