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

module.exports = { createUserController, getAllUsersController };