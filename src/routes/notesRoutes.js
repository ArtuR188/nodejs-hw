import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.get('/notes', authenticate, getAllNotesSchema, getAllNotes);
router.get('/notes/:noteId', authenticate, noteIdSchema, getNoteById);
router.post('/notes', authenticate, createNoteSchema, createNote);
router.delete('/notes/:noteId', authenticate, noteIdSchema, deleteNote);
router.patch('/notes/:noteId', authenticate, updateNoteSchema, updateNote);

export default router;