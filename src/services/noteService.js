const prisma = require('../prisma');

async function createNote(data) {
  return prisma.note.create({ data });
}

async function getAllNotes() {
  return prisma.note.findMany({ include: { user: true } });
}

async function updateNote(id, data) {
    return prisma.note.update({
      where: { id: Number(id) },
      data,
    });
  }
  
  async function deleteNote(id) {
    return prisma.note.delete({
      where: { id: Number(id) },
    });
  }
  
  module.exports = { createNote, getAllNotes, updateNote, deleteNote };