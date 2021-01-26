//route for adding and changing profile

//handle adding users

const express = require('express');
const router = express.Router();

//@route Get api/profile
//@desc Test route
//@access Public

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
