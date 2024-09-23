const express = require('express');
const { createNoteController, getAllNotesController, updateNoteController, deleteNoteController } = require('../controllers/noteController');
const router = express.Router();

router.post('/notes', createNoteController);
router.get('/notes', getAllNotesController);
router.put('/notes/id', updateNoteController);  // Rota para atualizar a nota
router.delete('/notes/id', deleteNoteController); // Rota para deletar a nota

module.exports = router;