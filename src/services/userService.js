const prisma = require('../prisma');
const bcrypt = require('bcrypt');
const { validateUserData } = require('../utils/userValidation');
const { createToken } = require('../auth/createJWT');

async function loginUser(email, password) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Email ou senha incorretos.');
  }

  const { token } = createToken(user)

  return { user: { id: user.id, name: user.name, email: user.email }, token };
}

async function createUser(data) {
  validateUserData(data);

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existingUser) {
    throw new Error('Email já está em uso.');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });
}

async function getAllUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

async function getUser(id) {
  return prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
    },
    where: { id: Number(id) },
  });
}

async function updateUser(id, data) {
  if (data.email && !isValidEmail(data.email)) {
    throw new Error('Formato de email inválido.');
  }
  if (data.password && !isValidPassword(data.password)) {
    throw new Error('A nova senha deve ter no mínimo 8 caracteres, incluindo um número e um caractere especial.');
  }

  return prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}

async function deleteUser(id) {
  return prisma.user.delete({
    where: { id: Number(id) },
  });
}

module.exports = { createUser, getAllUsers, updateUser, deleteUser, getUser, loginUser };