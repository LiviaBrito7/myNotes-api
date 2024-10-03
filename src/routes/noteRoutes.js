const express = require('express');
const { createNoteController, getAllNotesController, deleteNoteController, getNoteController } = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/notes', authMiddleware, createNoteController);
router.get('/notes', authMiddleware, getAllNotesController);
router.get('/notes/:id', authMiddleware, getNoteController);
router.delete('/notes/:id', authMiddleware, deleteNoteController); 

module.exports = router;