const prisma = require('../prisma');
const { validateNoteData } = require('../middleware/noteValidation');

async function createNote(data) {
  validateNoteData(data);
  return prisma.note.create({ data });
}

async function getAllNotes() {
  return prisma.note.findMany({ 
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

async function deleteNote(id) {
  return prisma.note.delete({
    where: { id: Number(id) },
  });
}

module.exports = { createNote, getAllNotes, getNote, deleteNote };