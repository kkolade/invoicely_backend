import { Router } from 'express';
import { login, logout, signup } from '../controllers/authController.js';

import { validateSignup } from '../validators/authValidator.js';

const router = Router();

router.post('/signup', validateSignup, signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
