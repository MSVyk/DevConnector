const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// @route    GET api/profile/me
// @desc     Get current user's profile
// @acceess  Private
router.get('/', auth, (req, res) => {
  
});

module.exports = router;