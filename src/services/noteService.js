const prisma = require('../prisma');

async function createNote(data) {
  return prisma.note.create({ data });
}

async function getAllNotes() {
  return prisma.note.findMany({ include: { user: true } });
}

module.exports = { createNote, getAllNotes };