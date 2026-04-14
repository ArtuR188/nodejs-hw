import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
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

router.get('/notes', authenticate, celebrate({ [Segments.QUERY]: getAllNotesSchema }), getAllNotes);
router.get('/notes/:noteId', authenticate, celebrate({ [Segments.PARAMS]: Joi.object({ noteId: noteIdSchema }) }), getNoteById);
router.post('/notes', authenticate, celebrate({ [Segments.BODY]: createNoteSchema }), createNote);
router.delete('/notes/:noteId', authenticate, celebrate({ [Segments.PARAMS]: Joi.object({ noteId: noteIdSchema }) }), deleteNote);
router.patch('/notes/:noteId', authenticate, celebrate({ [Segments.PARAMS]: Joi.object({ noteId: noteIdSchema }), [Segments.BODY]: updateNoteSchema }), updateNote);

export default router;