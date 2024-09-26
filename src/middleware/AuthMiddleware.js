const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtém o token do cabeçalho

  if (!token) {
    return res.status(403).send({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token
    req.user = decoded; // Adiciona os dados do usuário à requisição
    next(); // Passa para o próximo middleware ou rota
  } catch (err) {
    return res.status(401).send({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
