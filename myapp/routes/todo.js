import express from 'express';
import { create } from '../controllers/todo.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post("/create",authMiddleware,create);

export default router;