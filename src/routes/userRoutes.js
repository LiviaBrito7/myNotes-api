const express = require('express');
const { createUserController, getAllUsersController, updateUserController, deleteUserController, getUserController, loginUserController } = require('../controllers/userController');
const authMiddleware = require('../middleware/AuthMiddleware');
const router = express.Router();

router.post('/users', createUserController);
router.post('/login', loginUserController);
router.get('/users/me', authMiddleware, (req, res) => {
  res.json(req.user); 
});
router.get('/users', getAllUsersController);
router.get('/users/:id', getUserController);
router.put('/users/:id', updateUserController);  
router.delete('/users/:id', deleteUserController); 

module.exports = router;