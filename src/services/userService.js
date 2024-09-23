const prisma = require('../prisma');

async function createUser(data) {
  return prisma.user.create({ data });
}

async function getAllUsers() {
  return prisma.user.findMany({ include: { notes: true } });
}

module.exports = { createUser, getAllUsers };