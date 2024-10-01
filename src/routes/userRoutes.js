const express = require('express');
const {  createUserController, getAllUsersController, updateUserController, deleteUserController, getUserController, loginUserController } = require('../controllers/userController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/users', createUserController);
router.post('/login', loginUserController);
router.get('/users/me', authMiddleware, (req, res) => {
  res.json(req.user);
});
router.get('/users', authMiddleware, getAllUsersController);
router.get('/users/:id', authMiddleware, getUserController);
router.put('/users/:id', authMiddleware, updateUserController);
router.delete('/users/:id', authMiddleware, deleteUserController);

module.exports = router;
