const prisma = require('../prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });
}

async function loginUser(email, password) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Senha inválida.');
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return { user: { id: user.id, name: user.name, email: user.email }, token };
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
     where: { id: Number(id) } });
}

async function updateUser(id, data) {
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