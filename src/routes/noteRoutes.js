const express = require('express');
const { createNoteController, getAllNotesController, deleteNoteController, getNoteController } = require('../controllers/noteController');
const router = express.Router();

router.post('/notes', createNoteController);
router.get('/notes', getAllNotesController);
router.get('/notes/:id', getNoteController);
router.delete('/notes/:id', deleteNoteController); 

module.exports = router;