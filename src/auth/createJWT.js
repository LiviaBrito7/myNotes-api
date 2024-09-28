const jwt = require('jsonwebtoken');

async function createToken(user) {
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
}

module.exports = { createToken };