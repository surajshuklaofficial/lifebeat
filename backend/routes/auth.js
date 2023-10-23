import express from 'express';

import { signin, signup } from '../controllers/auth.js';

const router = express.Router();

router.get('/signup', signup)
    .get('/signin', signin);

export default router;