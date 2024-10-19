const prisma = require('../prisma');
const { validateNoteData } = require('../utils/noteValidation');

async function createNote(data) {
  validateNoteData(data);
  return prisma.note.create({ data });
}

async function getAllNotes(id) {
  return await prisma.$queryRaw`select * from note where userId = ${id}`
}

async function getNote(id) {
  return prisma.note.findUnique({
    where: { id: Number(id) },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        }
      }
    }
  });
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

module.exports = { createNote, getAllNotes, getNote, updateNote, deleteNote };