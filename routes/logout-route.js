var express = require('express');
var router = express.Router();

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});
module.exports = router;