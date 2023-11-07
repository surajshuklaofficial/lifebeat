import express from 'express';

import { signin, signup, verifyEmail } from '../controllers/auth.js';

const router = express.Router();

router
    .post('/signup', signup)
    .post('/signin', signin)
    .post('/verify-email', verifyEmail);

export default router;