const { createUser, getAllUsers } = require('../services/userService');

async function createUserController(req, res) {
  try {
    const { email, name } = req.body;
    const user = await createUser({ email, name });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUserController(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await updateUser(id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteUserController(req, res) {
    try {
      const { id } = req.params;
      await deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  module.exports = { createUserController, getAllUsersController, updateUserController, deleteUserController };