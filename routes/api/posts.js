const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     Test route
// @acceess  Public
router.get('/', (req, res) => res.send('Posts rout'));

module.exports = router;