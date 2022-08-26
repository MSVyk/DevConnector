const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile/me
// @desc     Get current user's profile
// @acceess  Private
router.get('/', auth, (req, res) => {
  try {
    const profile = await
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

module.exports = router;