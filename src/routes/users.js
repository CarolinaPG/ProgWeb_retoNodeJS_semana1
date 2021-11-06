const express = require('express');
const router = express.Router();

const { 
    index,
    newUser,
    getUser,
    replaceUser,
    updateUser,
    deleteUser,
    getUserCars,
    newUserCar
} = require('../controllers/user');

router.get('/', index);
router.post('/', newUser);

router.get('/:userID', getUser);
router.put('/:userID', replaceUser);
router.patch('/:userID', updateUser);
router.delete('/:userID', deleteUser);

router.get('/:userID/cars', getUserCars);
router.post('/:userID/cars', newUserCar);

module.exports = router;