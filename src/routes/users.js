const express = require('express');
const router = express.Router();

const { 
    index,
    newUser
} = require('../controllers/user');

router.get('/', index);
router.post('/', newUser);

module.exports = router;