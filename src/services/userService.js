const prisma = require('../prisma');

async function createUser(data) {
  return prisma.user.create({ data });
}

async function getAllUsers() {
  return prisma.user.findMany({ include: { notes: true } });
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
  
  module.exports = { createUser, getAllUsers, updateUser, deleteUser };