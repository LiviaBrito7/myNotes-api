const { loginUser } = require('./authService');

async function loginUserController(req, res) {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

module.exports = { loginUserController };