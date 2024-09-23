const express = require('express');
const { createNoteController, getAllNotesController } = require('../controllers/noteController');
const router = express.Router();

router.post('/notes', createNoteController);
router.get('/notes', getAllNotesController);

module.exports = router;