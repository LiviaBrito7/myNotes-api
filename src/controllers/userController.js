const { createUser, getAllUsers, updateUser, deleteUser, getUser, loginUser } = require('../services/userService');
const bcrypt = require('bcrypt');

async function createUserController(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await createUser({ name, email, password });
    res.status(201).json(user); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
}

async function loginUserController(req, res) {
  const { email, password } = req.body; 

  try {
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ user, token }); 
  } catch (error) {
    res.status(400).json({ message: error.message });
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

async function getUserController(req, res) {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    res.json(user);
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

module.exports = { createUserController, getAllUsersController, updateUserController, deleteUserController, getUserController, loginUserController};