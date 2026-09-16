import express from 'express';
import {hello, send} from '../controllers/controller.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get("/greet",auth,hello);

router.post("/send",auth,send);

export default router;