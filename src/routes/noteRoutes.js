const express = require('express');
const { createNoteController, getAllNotesController, deleteNoteController, getNoteController, updateNoteController } = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/notes', authMiddleware, createNoteController);
router.get('/notes', authMiddleware, getAllNotesController);
router.get('/notes/:id', authMiddleware, getNoteController);
router.put('/notes/:id', authMiddleware, updateNoteController);
router.delete('/notes/:id', authMiddleware, deleteNoteController); 

module.exports = router;