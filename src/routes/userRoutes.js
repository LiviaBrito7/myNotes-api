const express = require('express');
const { createUserController, getAllUsersController, updateUserController, deleteUserController } = require('../controllers/userController');
const router = express.Router();

router.post('/users', createUserController);
router.get('/users', getAllUsersController);
router.put('/users/id', updateUserController);  // Rota para atualizar o usuário
router.delete('/users/id', deleteUserController); // Rota para deletar o usuário

module.exports = router;