const express = require('express');
const { createUserController, getAllUsersController } = require('../controllers/userController');
const router = express.Router();

router.post('/users', createUserController);
router.get('/users', getAllUsersController);

module.exports = router;