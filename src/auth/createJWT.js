const jwt = require('jsonwebtoken');

async function createToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não definido.');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
}

module.exports = { createToken };